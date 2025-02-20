import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <p>This is our homepage</p>
      <div>
        <a href="/blog">Blog (Multi Zone)</a>
        <Link href="/projects">Projects (Responsiv Iframe)</Link><br /><br />
        <Link href="/about">About us (Webcomponent with SSR)</Link><br /><br />
        <Link href="/contact">Contact (Partial Micro Frontend)</Link>
      </div>
    </div>
  );
}
