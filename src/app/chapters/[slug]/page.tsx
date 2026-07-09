const chapterNames: Record<string, string> = {
  "khutbat-al-kitab": "خطبة الكتاب",
  istiadha: "باب الاستعاذة",
  basmala: "باب البسملة",
  "al-fatiha": "سورة أم القرآن (الفاتحة)",
  "idgham-kabir": "باب الإدغام الكبير",
  "idgham-harfain":
    "باب إدغام الحرفين المتقاربين في كلمة وفي كلمتين",
  "haa-kinaya": "باب هاء الكناية",
  "mad-w-qasr": "باب المد والقصر",
  "hamzatain-kalima": "باب الهمزتين من كلمة",
  "hamzatain-kalimatain": "باب الهمزتين من كلمتين",
};


export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const chapterName =
    chapterNames[slug] || "باب غير معروف";

  return (
    <main className="min-h-screen p-10 bg-green-50">
      <h1 className="text-4xl font-bold text-center mb-8">
        {chapterName}
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <p className="text-xl text-center">
          ستظهر أبيات هذا الباب هنا لاحقاً
        </p>
      </div>
    </main>
  );
}