import { useEffect, useRef, useState } from "react";

interface GhlFormEmbedProps {
  /** The form ID from the widget URL, e.g. C8nHmdMX1y6Jm1l78IUm */
  formId: string;
  /** Append ?notrack=true to the widget URL */
  notrack?: boolean;
  className?: string;
  title?: string;
}

/**
 * Embeds a native form widget inside an iframe.
 *
 * Using an iframe directly instead of injecting a <script> tag:
 * 1. Guarantees the form HTML loads and renders reliably in all preview/production contexts.
 * 2. Isolates the form's styles and scripts so they don't conflict with parent page scripts.
 * 3. Keeps native form submission, validation, and confirmation functioning.
 * 4. Listens to resize messages sent by the widget (iframeResizer) to automatically adjust height.
 */
const GhlFormEmbed = ({
  formId,
  notrack = false,
  className = "",
  title = "Consultation Form",
}: GhlFormEmbedProps) => {
  // Set default height to 960px so all fields and the submit button fit immediately without waiting for message events
  const [iframeHeight, setIframeHeight] = useState<number>(960);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const src = `https://api.leadconnectorhq.com/widget/form/${formId}${
    notrack ? "?notrack=true" : ""
  }`;

  useEffect(() => {
    // Inject the official form embed resizer script if not present
    const existingScript = document.querySelector(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]',
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Listen for resize messages posted by the widget
    const handleMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === "string") {
          if (
            event.data.includes("[iFrameSizer]") ||
            event.data.includes(formId)
          ) {
            const matches = event.data.match(/:(\d+):/g);
            if (matches && matches.length > 0) {
              const last = parseInt(
                matches[matches.length - 1].replace(/:/g, ""),
                10,
              );
              if (last && last > 300 && last < 3500) {
                setIframeHeight(Math.max(last, 850));
              }
            }
          }
        } else if (typeof event.data === "object" && event.data !== null) {
          const height =
            (event.data as { height?: number; frameHeight?: number }).height ||
            (event.data as { height?: number; frameHeight?: number })
              .frameHeight;
          if (
            height &&
            typeof height === "number" &&
            height > 300 &&
            height < 3500
          ) {
            setIframeHeight(Math.max(height, 850));
          }
        }
      } catch {
        // Ignore parsing errors
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [formId]);

  return (
    <div className={`w-full ${className}`}>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-form-name={title}
        data-form-id={formId}
        style={{
          width: "100%",
          minHeight: "880px",
          height: `${iframeHeight}px`,
          border: "none",
          transition: "height 0.2s ease-in-out",
        }}
        scrolling="auto"
      />
    </div>
  );
};

export default GhlFormEmbed;
