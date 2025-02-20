import Link from "next/link";
import ResponsiveIframe from "../../components/ResponsiveIframe";


export default function Projects() {
    return (
    <div>

        <div style={{border: "1px solid blue", marginBottom: "32px"}}>
            <ResponsiveIframe src="/projects-legacy" />
        </div>
        <div>
            <Link href="/">Go Back</Link>
        </div>
    </div>
  );
}

