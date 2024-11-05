import Link from "next/link";
import ClientSearch from "./components/search";

export default async function Page() {
  const data = await fetch("https://v2.api.noroff.dev/holidaze/venues");
  const posts = await data.json();

  return (
    <>
      <h1>Posts</h1>
      <Link href="/">Back to home</Link>
      <ClientSearch posts={posts.data} />
    </>
  );
}
