import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <p>This is our homepage</p>
      <div>
        <Link href="/blog">Blog (Multi Zone)</Link><br /><br />
        <Link href="/projects">Projects (Responsiv Iframe)</Link><br /><br />
        <Link href="/about">About us (Webcomponent with SSR)</Link><br /><br />
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
