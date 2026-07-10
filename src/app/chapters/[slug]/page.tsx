"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import { chapters } from "@/data/shatibi";
import { hideWords } from "@/lib/hideWords";

export default function ChapterPage() {
  const [hidden, setHidden] = useState(false);

  const params = useParams();

  const slug = params.slug as string;

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

      <button
        onClick={() => setHidden(!hidden)}
        className="bg-green-700 text-white px-4 py-2 rounded-lg mb-8"
      >
        {hidden ? "إظهار الكلمات" : "إخفاء الكلمات"}
      </button>

      <div className="max-w-3xl mx-auto space-y-4">
        {chapter.verses.map((verse, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow"
          >
            <p className="text-xl text-center leading-loose">
              {hidden ? hideWords(verse, 0.3) : verse}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}