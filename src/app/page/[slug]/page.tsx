import PageDetails from "@/components/PageDetails";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return {
    title: `Page with id ${slug}`, // show page name when call api to get data
    description: "Page details",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex-1 flex items-center">
      <PageDetails id={slug} />
    </div>
  );
}
