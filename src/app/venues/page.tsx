import Link from "next/link";

export default async function Page() {
  let data = await fetch("https://v2.api.noroff.dev/holidaze/venues");
  let posts = await data.json();

  return (
    <>
      <h1>Posts</h1>
      <Link href="/">Back to home</Link>
      {posts.data.map((item) => (
        <Link href={`/venues/${item.id}`} key={item.id} className="block m-3">
          {item.name}
        </Link>
      ))}
    </>
  );
}
