const chapters = [
  "باب الاستعاذة",
  "باب البسملة",
  "باب الإدغام الكبير",
  "باب هاء الكناية",
];

export default function ChaptersPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        اختر الباب
      </h1>

      <div className="max-w-xl mx-auto space-y-4">
        {chapters.map((chapter) => (
          <button
            key={chapter}
            className="w-full bg-green-700 text-white p-4 rounded-lg"
          >
            {chapter}
          </button>
        ))}
      </div>
    </main>
  );
}