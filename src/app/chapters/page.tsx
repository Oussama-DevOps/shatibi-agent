import Link from "next/link";
import { chapters } from "@/data/shatibi";

export default function ChaptersPage() {
  return (
    <main className="min-h-screen p-10 bg-green-50">
      <h1 className="text-4xl font-bold text-center mb-8">
        اختر الباب
      </h1>

      <div className="max-w-xl mx-auto space-y-4">
        {chapters.map((chapter) => (
          <Link
            key={chapter.slug}
            href={`/chapters/${chapter.slug}`}
            className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {chapter.title}
          </Link>
        ))}
      </div>
    </main>
  );
}