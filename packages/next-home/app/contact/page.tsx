import Link from "next/link";
import MicroFrontend from "../../components/MicroFrontend";

export default function Contact() {
  return (
    <div>
      <MicroFrontend containerId="partial-header" />
      <p>This is the contact page.</p>
      <div>
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
}
