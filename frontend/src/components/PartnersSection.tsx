import React from "react";
import { Building2, Award, CheckCircle2 } from "lucide-react";

export const PartnersSection = () => {
  const partners = [
    { name: "مركز التدريب المهني", category: "اعتماد حرفي" },
    { name: "مؤسسة التقنية العالية", category: "شريك برمجيات" },
    { name: "أكاديمية التطوير الرقمي", category: "تدريب ميداني" },
    { name: "جمعية الحرفيين المعتمدة", category: "شهادات مهنية" },
  ];

  return (
    <section className="border-b border-slate-800 bg-slate-900/50 py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
          شراكات استراتيجية واعتمادات ميدانية
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-slate-700 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-slate-300 mb-3 border border-slate-700">
                <Building2 className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-200 text-sm">
                {partner.name}
              </h4>
              <span className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
