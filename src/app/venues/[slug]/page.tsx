export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  let data = await fetch(`https://v2.api.noroff.dev/holidaze/venues/${slug}`);
  let venueData = await data.json();
  console.log(venueData);

  return (
    <div>
      My Post: {slug}
      <h1>{venueData.data.name}</h1>
    </div>
  );
}
