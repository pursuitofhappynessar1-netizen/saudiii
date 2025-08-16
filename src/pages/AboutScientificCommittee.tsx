import { useEffect, useState } from "react";

export default function ScientificCommittee() {
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("ScientificCommittee") // اسم الجدول بتاعك
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setContent(data || []);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">اللجنة العلمية</h1>
      {content.length === 0 ? (
        <p>لا يوجد محتوى حاليًا.</p>
      ) : (
        content.map((item, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <h2 className="font-semibold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
}