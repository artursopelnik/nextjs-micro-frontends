'use client'

import { useEffect, useRef, useState, useCallback } from "react";

const ResponsiveIframe = ({ src }: { src: string }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [height, setHeight] = useState("0px");

    const resizeIframe = useCallback(() => {
        if (!iframeRef.current) return;

        try {
            const iframe = iframeRef.current;
            const newHeight = iframe.contentWindow?.document.body.scrollHeight;

            console.log(newHeight)

            if (newHeight) {
                setHeight(`${newHeight}px`);
            }
        } catch (error) {
            console.warn("Cross-origin restriction prevents resizing:", error);
        }
    }, []);

    useEffect(() => {
        const iframeRefCurrent = iframeRef.current
        if (iframeRefCurrent) {
            iframeRefCurrent.src = src
            iframeRefCurrent.addEventListener('load', resizeIframe)
        }
        window.addEventListener("resize", resizeIframe)

        return () => {
            window.removeEventListener("resize", resizeIframe);
            if (iframeRefCurrent) {
                iframeRefCurrent.removeEventListener('load', resizeIframe)
            }
        }
    }, [resizeIframe]);

    return (
        <iframe
            ref={iframeRef}
            style={{ width: "100%", height, border: "none" }}
        />
    );
};

export default ResponsiveIframe