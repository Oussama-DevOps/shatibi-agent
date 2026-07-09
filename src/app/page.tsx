import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-green-800 mb-6">
        المحفّظ الذكي للشاطبية
      </h1>

      <p className="text-xl text-gray-700 mb-8">
        احفظ الشاطبية بطريقة ذكية باستخدام التكرار والمراجعة المتباعدة.
      </p>
      
      <Link
        href="/chapters"
        className="bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        ابدأ الحفظ
      </Link>

    </main>
  );
}