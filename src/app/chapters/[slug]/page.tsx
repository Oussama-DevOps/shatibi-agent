"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import { chapters } from "@/data/shatibi";
import { hideWords } from "@/lib/hideWords";

export default function ChapterPage() {
  
  const [versesCount, setVersesCount] = useState(1);
  const [hideLevel, setHideLevel] = useState(0);
  const params = useParams();
  const [sessionStarted, setSessionStarted] = useState(false);

  const slug = params.slug as string;

  const chapter = chapters.find(
    (c) => c.slug === slug
  );

  if (!chapter) {
    return <h1>الباب غير موجود</h1>;
  }

  const visibleVerses = chapter.verses.slice(0, versesCount);

  return (
    <main className="min-h-screen p-10 bg-green-50">
      <h1 className="text-4xl font-bold text-center mb-8">
        {chapter.title}
      </h1>

      <div className="flex gap-2 mb-8">
        {!sessionStarted && (
          <button
            onClick={() => setSessionStarted(true)}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            ابدأ جلسة الحفظ
          </button>
        )}

        <button
          onClick={() =>
            setHideLevel(Math.max(0, hideLevel - 1))
          }
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
      
        <span className="px-4 py-2">
          نسبة الإخفاء: {hideLevel * 20}%
        </span>
      
        <button
          onClick={() =>
            setHideLevel(Math.min(5, hideLevel + 1))
          }
          className="bg-green-700 text-white px-4 py-2 rounded"
        >
          +
        </button>
      </div>

      <div className="mb-8">
        <label className="ml-2">
          عدد الأبيات للحفظ:
        </label>
            
        <select
          value={versesCount}
          onChange={(e) =>
            setVersesCount(Number(e.target.value))
          }
          className="border rounded p-2"
        >
          {Array.from(
            { length: chapter.verses.length },
            (_, i) => i + 1
          ).map((number) => (
            <option
              key={number}
              value={number}
            >
              {number}
            </option>
          ))}
        </select>
      </div>

      {sessionStarted && (
      <div className="max-w-3xl mx-auto space-y-4">
        {visibleVerses.map((verse, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow"
          >
            <p className="text-xl text-center leading-loose">
              {
                hideLevel === 0
                  ? verse
                  : hideWords(verse, hideLevel * 0.2)
              }
            </p>
          </div>
        ))}
      </div>
      )}
    </main>
  );
}