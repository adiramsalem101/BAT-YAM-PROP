"use client";

import React, { useState, useMemo } from 'react';

// פורמט מספרים לעברית - מוגדר ברמת המודול, נגיש לכל הפונקציות
const formatNumber = (num) =>
  num.toLocaleString('he-IL', { maximumFractionDigits: 0 });

export default function InvestmentProposal() {
  const [monthlyAmount, setMonthlyAmount] = useState(30000);
  const [years, setYears] = useState(8);
  const [riskPremium, setRiskPremium] = useState(20);

  const calculations = useMemo(() => {
    const months = years * 12;
    const totalInvestment = monthlyAmount * months;
    const propertyValue = 10500000;

    const adjustedInvestment = totalInvestment * (1 + riskPremium / 100);
    const ownershipPctRaw = (adjustedInvestment / propertyValue) * 100;
    const ownershipPct = Math.min(ownershipPctRaw, 50);

    const conservative = 10500000;
    const baseScenario = 13500000;
    const upsideScenario = 25000000;
    const moonshotScenario = 50000000;

    return {
      totalInvestment,
      ownershipPct,
      capped: ownershipPctRaw > 50,
      conservativeShare: (ownershipPct / 100) * conservative,
      baseShare: (ownershipPct / 100) * baseScenario,
      upsideShare: (ownershipPct / 100) * upsideScenario,
      moonshotShare: (ownershipPct / 100) * moonshotScenario,
    };
  }, [monthlyAmount, years, riskPremium]);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-stone-50 text-stone-900"
      style={{ fontFamily: "'Heebo', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;700;900&family=Heebo:wght@300;400;500;600;700&display=swap'); .display-font { font-family: 'Frank Ruhl Libre', serif; letter-spacing: -0.02em; } .tabular { font-variant-numeric: tabular-nums; } .range-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 6px; background: #44403c; border-radius: 3px; outline: none; direction: ltr; } .range-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 28px; height: 28px; background: #b45309; cursor: pointer; border-radius: 50%; border: 3px solid #fef3c7; box-shadow: 0 4px 12px rgba(0,0,0,0.4); transition: transform 0.1s ease; } .range-slider::-moz-range-thumb { width: 28px; height: 28px; background: #b45309; cursor: pointer; border-radius: 50%; border: 3px solid #fef3c7; box-shadow: 0 4px 12px rgba(0,0,0,0.4); transition: transform 0.1s ease; } .range-slider::-moz-range-track { background: #44403c; height: 6px; border-radius: 3px; } @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } .fade-up { animation: fadeUp 0.8s ease-out forwards; opacity: 0; } .delay-1 { animation-delay: 0.1s; } .delay-2 { animation-delay: 0.2s; } .delay-3 { animation-delay: 0.4s; } .delay-4 { animation-delay: 0.6s; } .hero-bg { background: linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%); }`}</style>
      <section className="hero-bg text-stone-50 py-16 md:py-24 px-6 md:px-8 relative"><div className="max-w-6xl mx-auto relative"><div className="text-xs uppercase tracking-[0.4em] text-amber-200 mb-6 md:mb-8 fade-up delay-1">הזדמנות השקעה · מסמך פרטי</div><h1 className="display-font text-6xl md:text-9xl font-black leading-[0.85] mb-6 fade-up delay-2">ניסנבאום<br /><span className="text-amber-300">29</span></h1><h2 className="display-font text-xl md:text-3xl text-stone-200 mb-12 md:mb-16 max-w-3xl leading-snug fade-up delay-3">נכס מסחרי בלב רובע העסקים המתחדש של בת ים —<br />על ציר הרכבת הקלה, צמוד למגדל הבת ימון.</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-10 border-t border-stone-700 fade-up delay-4"><Stat label="שטח רשום" value="862" suffix='מ"ר' /><Stat label="שטח בנוי בפועל" value="1,182" suffix='מ"ר' /><Stat label="שווי שמאי" value="10.5" suffix="מ׳ ₪" /><Stat label="תקופה להמרה" value="10" suffix="שנים" /></div></div></section>
      <Section number="01" eyebrow="המבנה" title="שותפות בנדל״ן."><div className="space-y-6 text-lg md:text-xl leading-relaxed"><p>אנחנו רוכשים נכס מסחרי של 862 מ"ר ברחוב ניסנבאום 29 בבת ים, באמצעות <strong className="font-bold border-b-2 border-amber-700">מבנה משולב של חכירה ארוכת טווח והלוואה לבעל הנכס</strong>, המומר לבעלות מלאה לאחר 10 שנים.</p><p className="text-stone-700">החברה שלנו תשפץ את הנכס ותפעיל בו עסק למגורי עובדים זרים — עד שיגיע מועד ההריסה (במסגרת פינוי-בינוי או שינוי ייעוד) או למשך 10 שנים, <strong>המאוחר מבין השניים</strong>.</p></div></Section>
      <footer className="bg-stone-900 text-stone-300 py-12 md:py-16 px-6 md:px-8"><div className="max-w-6xl mx-auto"><div className="grid md:grid-cols-2 gap-8 md:gap-10 items-end"><div><div className="display-font text-3xl md:text-4xl font-black text-stone-50 mb-3">AM Hostels</div></div><div className="md:text-left"><div className="text-amber-200 font-bold text-xl md:text-2xl display-font">אדיר אמסלם</div></div></div></div></footer>
    </div>
  );
}

function Stat({ label, value, suffix }) { return <div><div className="text-xs text-stone-400 uppercase tracking-wider mb-2">{label}</div><div className="text-2xl md:text-4xl font-bold tabular display-font">{value} <span className="text-sm md:text-base font-normal text-stone-500">{suffix}</span></div></div>; }
function Section({ number, eyebrow, title, children }) { return <section className="py-16 md:py-20 px-6 md:px-8 border-b border-stone-300"><div className="max-w-6xl mx-auto"><div className="grid md:grid-cols-12 gap-10 md:gap-12"><div className="md:col-span-4"><div className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-4">{number} · {eyebrow}</div><h3 className="display-font text-4xl md:text-5xl font-black leading-none">{title}</h3></div><div className="md:col-span-8">{children}</div></div></div></section>; }
