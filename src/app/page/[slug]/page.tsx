import PageDetails from "@/components/PageDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex-1">
      <PageDetails id={slug} />
    </div>
  );
}
