import { chapters } from "@/data/shatibi";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const chapter = chapters.find(
    (c) => c.slug === slug
  );

  if (!chapter) {
    return <h1>الباب غير موجود</h1>;
  }

  return (
    <main className="min-h-screen p-10 bg-green-50">
      <h1 className="text-4xl font-bold text-center mb-8">
        {chapter.title}
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {chapter.verses.map((verse, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow"
          >
            <p className="text-xl text-center leading-loose">
              {verse}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}