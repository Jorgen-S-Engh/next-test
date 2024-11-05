import Image from "next/image";
import Venues from "./venues/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My app</h1>

      <Link href="/venues">To Venues</Link>
    </div>
  );
}
