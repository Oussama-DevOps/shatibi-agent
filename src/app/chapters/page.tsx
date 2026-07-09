import Link from "next/link";

const chapters = [
  {
    title: "خطبة الكتاب",
    slug: "khutbat-al-kitab",
  },
{
    title: "باب الاستعاذة",
    slug: "istiadha",
  },
  {
    title: "باب البسملة",
    slug: "basmala",
  },
{
    title: "سورة أم القرآن (الفاتحة)",
    slug: "al-fatiha",
  },
  {
    title: "باب الإدغام الكبير",
    slug: "idgham-kabir",
  },
{
    title: "باب إدغام الحرفين المتقاربين في كلمة وفي كلمتين",
    slug: "idgham-harfain",
  },
  {
    title: "باب هاء الكناية",
    slug: "haa-kinaya",
  },
  {
    title: "باب المد و القصر",
    slug: "mad-w-qasr",
  },
  {
    title: "باب الهمزتين من كلمة",
    slug: "hamzatain-kalima",
  },
  {
    title: "باب الهمزتين من كلمتين",
    slug: "hamzatain-kalimatain",
  },      
];

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