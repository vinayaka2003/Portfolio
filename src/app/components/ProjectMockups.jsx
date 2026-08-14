"use client";

import React from "react";

export const HabeeCraftMock = () => (
  <div className="w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col h-[200px] sm:h-[240px] select-none">
    <div className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-850 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="ml-2 bg-white dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-100 dark:border-zinc-800/80 truncate w-36">habeecraft.com</span>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between bg-zinc-50/20 dark:bg-zinc-900/10">
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Habee Craft</span>
          <span className="text-[8px] bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-400 px-1.5 py-0.5 rounded-full border border-zinc-200/50 dark:border-zinc-700/50">Handmade</span>
        </div>
        <p className="text-[12px] sm:text-[13px] font-semibold text-zinc-800 dark:text-zinc-100 leading-tight">Handmade Wonders, Crafted Just for You.</p>
        <p className="text-[9px] text-zinc-400 dark:text-zinc-500 mt-1">Explore custom gifts, cards &amp; bouquets.</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3">
        <div className="bg-white dark:bg-zinc-800/50 p-2 rounded border border-zinc-200/50 dark:border-zinc-700/30 flex flex-col justify-between">
          <span className="text-[8px] font-medium text-zinc-700 dark:text-zinc-300">Floral Bouquet</span>
          <span className="text-[9px] font-bold text-zinc-900 dark:text-white mt-1.5">$18.00</span>
        </div>
        <div className="bg-white dark:bg-zinc-800/50 p-2 rounded border border-zinc-200/50 dark:border-zinc-700/30 flex flex-col justify-between">
          <span className="text-[8px] font-medium text-zinc-700 dark:text-zinc-300">Ceramic Mug</span>
          <span className="text-[9px] font-bold text-zinc-900 dark:text-white mt-1.5">$7.00</span>
        </div>
      </div>
    </div>
  </div>
);

export const RoadAssistMock = () => (
  <div className="w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col h-[200px] sm:h-[240px] select-none">
    <div className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-850 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="ml-2 bg-white dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-100 dark:border-zinc-800/80 truncate w-36">roadassist.app</span>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between relative bg-zinc-50/20 dark:bg-zinc-900/10">
      <div className="absolute inset-0 bg-[radial-gradient(#ddd_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:12px_12px] opacity-35" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">RoadAssist</span>
          <span className="text-[8px] text-zinc-450 dark:text-zinc-500 font-mono">Live Dispatch</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/90 dark:bg-zinc-850/90 border border-zinc-200 dark:border-zinc-700/50 p-1.5 rounded-lg">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-450 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-650 dark:bg-zinc-400"></span>
          </span>
          <span className="text-[8px] sm:text-[9px] font-mono text-zinc-600 dark:text-zinc-350">Dispatch active - 1.2 miles away</span>
        </div>
      </div>
      <div className="relative z-10 h-14 w-full bg-white dark:bg-zinc-850/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 overflow-hidden flex items-center justify-center mt-2 shadow-inner">
        <div className="absolute w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 blur-[1px] left-1/3 top-1/2 animate-pulse"></div>
        <div className="absolute w-2 h-2 rounded-full bg-zinc-800 dark:bg-zinc-200 right-1/4 top-1/3"></div>
        <svg className="w-full h-full opacity-20 dark:opacity-30" viewBox="0 0 100 40" preserveAspectRatio="none">
          <path d="M 10 30 Q 50 10 90 20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3" />
        </svg>
      </div>
    </div>
  </div>
);

export const GymMock = () => (
  <div className="w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col h-[200px] sm:h-[240px] select-none">
    <div className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-850 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="ml-2 bg-white dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-100 dark:border-zinc-800 truncate w-36">goldstonefitness.com</span>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between bg-zinc-50/20 dark:bg-zinc-900/10">
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[9px] font-black tracking-widest text-zinc-500 dark:text-zinc-400">GOLDSTONE</span>
          <span className="text-[8px] bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-200/50 dark:border-zinc-700/50 font-bold">Fitness</span>
        </div>
        <p className="text-[12px] sm:text-[13px] font-bold tracking-tight text-zinc-800 dark:text-white leading-tight uppercase">Crush Your Limits Today.</p>
        <p className="text-[9px] text-zinc-400 mt-1">Premium coaching, memberships &amp; support.</p>
      </div>
      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="flex gap-2 text-[9px] font-mono text-zinc-400 dark:text-zinc-500">
          <span>Classes</span>
          <span>·</span>
          <span>Trainers</span>
        </div>
        <span className="inline-flex items-center gap-0.5 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-[8px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          Enquire
        </span>
      </div>
    </div>
  </div>
);

export const ResumeMock = () => (
  <div className="w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col h-[200px] sm:h-[240px] select-none">
    <div className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-850 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="ml-2 bg-white dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-100 dark:border-zinc-800 truncate w-36">resume-analyzer.ai</span>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between bg-zinc-50/20 dark:bg-zinc-900/10">
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-400">Resume Analyzer</span>
          <span className="text-[8px] bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-400 px-1.5 py-0.5 rounded-full font-bold">AI</span>
        </div>
        <div className="flex gap-3 items-center mt-2">
          <div className="relative w-10 h-10 rounded-full border-4 border-zinc-100 dark:border-zinc-800 flex items-center justify-center border-t-zinc-600 dark:border-t-zinc-450 shrink-0">
            <span className="text-[9px] font-mono font-bold text-zinc-700 dark:text-zinc-200">89%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300">ATS Match Score</span>
            <span className="text-[8px] text-zinc-400 dark:text-zinc-500">Profile matches targeted position</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        <span className="text-[8px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50 px-1.5 py-0.5 rounded">✓ Python</span>
        <span className="text-[8px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50 px-1.5 py-0.5 rounded">✓ Next.js</span>
        <span className="text-[8px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-450 border border-zinc-200/50 dark:border-zinc-700/50 px-1.5 py-0.5 rounded">✗ SQL</span>
      </div>
    </div>
  </div>
);

export const WorldAtlasMock = () => (
  <div className="w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col h-[200px] sm:h-[240px] select-none">
    <div className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-850 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="ml-2 bg-white dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-100 dark:border-zinc-800/80 truncate w-36">worldatlas.dev</span>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between bg-zinc-50/20 dark:bg-zinc-900/10">
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] font-mono font-bold text-zinc-505 dark:text-zinc-405">World Atlas</span>
          <span className="text-[8px] bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-400 px-1.5 py-0.5 rounded-full font-bold">Interactive</span>
        </div>
        <div className="mt-1 bg-white dark:bg-zinc-800 p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700/50 text-[9px] text-zinc-400 dark:text-zinc-550 flex items-center gap-1.5">
          <span>🔍</span>
          <span>Search countries...</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mt-3">
        <div className="bg-white dark:bg-zinc-800/40 p-1.5 rounded border border-zinc-200/50 dark:border-zinc-700/30 flex flex-col items-center">
          <span className="text-[14px]">🇨🇦</span>
          <span className="text-[8px] font-mono font-bold text-zinc-600 dark:text-zinc-400 mt-1">Canada</span>
        </div>
        <div className="bg-white dark:bg-zinc-800/40 p-1.5 rounded border border-zinc-200/50 dark:border-zinc-700/30 flex flex-col items-center">
          <span className="text-[14px]">🇯🇵</span>
          <span className="text-[8px] font-mono font-bold text-zinc-600 dark:text-zinc-400 mt-1">Japan</span>
        </div>
        <div className="bg-white dark:bg-zinc-800/40 p-1.5 rounded border border-zinc-200/50 dark:border-zinc-700/30 flex flex-col items-center">
          <span className="text-[14px]">🇮🇳</span>
          <span className="text-[8px] font-mono font-bold text-zinc-600 dark:text-zinc-400 mt-1">India</span>
        </div>
      </div>
    </div>
  </div>
);

export const DigitalStoreMock = () => (
  <div className="w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col h-[200px] sm:h-[240px] select-none">
    <div className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-850 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="ml-2 bg-white dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-100 dark:border-zinc-800/80 truncate w-36">digitalstore.dev</span>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between bg-zinc-50/20 dark:bg-zinc-900/10">
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-400">Storefront</span>
          <span className="text-[8px] bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-450 px-1.5 py-0.5 rounded-full font-bold">Payments</span>
        </div>
        <p className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-100 leading-tight">Digital downloads storefront</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3">
        <div className="bg-white dark:bg-zinc-800/40 p-2 rounded border border-zinc-200/50 dark:border-zinc-700/20 flex flex-col justify-between">
          <span className="text-[8px] font-medium text-zinc-700 dark:text-zinc-305 leading-tight">Next.js eBook</span>
          <span className="text-[9px] font-mono font-bold text-zinc-800 dark:text-zinc-100 mt-1.5">$19.00</span>
        </div>
        <div className="bg-white dark:bg-zinc-800/40 p-2 rounded border border-zinc-200/50 dark:border-zinc-700/20 flex flex-col justify-between">
          <span className="text-[8px] font-medium text-zinc-700 dark:text-zinc-305 leading-tight">React Course</span>
          <span className="text-[9px] font-mono font-bold text-zinc-800 dark:text-zinc-100 mt-1.5">$49.00</span>
        </div>
      </div>
    </div>
  </div>
);

export const WeatherMock = () => (
  <div className="w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col h-[200px] sm:h-[240px] select-none">
    <div className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-850 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="ml-2 bg-white dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-100 dark:border-zinc-800/80 truncate w-36">weatherapp.net</span>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between bg-zinc-50/20 dark:bg-zinc-900/10">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-400">Weather Cast</span>
          <h4 className="text-[20px] font-mono font-black text-zinc-850 dark:text-white leading-none mt-1">72°F</h4>
          <span className="text-[8px] text-zinc-400 dark:text-zinc-550 block mt-0.5">Sunny · New York</span>
        </div>
        <span className="text-[20px]">☀️</span>
      </div>
      <div className="flex justify-between mt-3 gap-1 pt-2 border-t border-zinc-150 dark:border-zinc-800/60 text-[8px] text-zinc-450 dark:text-zinc-500">
        <div className="flex flex-col items-center">
          <span>Mon</span>
          <span className="font-mono font-bold text-zinc-700 dark:text-zinc-300">75°</span>
        </div>
        <div className="flex flex-col items-center">
          <span>Tue</span>
          <span className="font-mono font-bold text-zinc-700 dark:text-zinc-300">70°</span>
        </div>
        <div className="flex flex-col items-center">
          <span>Wed</span>
          <span className="font-mono font-bold text-zinc-700 dark:text-zinc-300">68°</span>
        </div>
        <div className="flex flex-col items-center">
          <span>Thu</span>
          <span className="font-mono font-bold text-zinc-700 dark:text-zinc-300">72°</span>
        </div>
      </div>
    </div>
  </div>
);

export const DataAnalysisMock = () => (
  <div className="w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col h-[200px] sm:h-[240px] select-none">
    <div className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-850 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
      <span className="ml-2 bg-white dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-100 dark:border-zinc-800/80 truncate w-36">uidai-analysis.py</span>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between bg-zinc-50/20 dark:bg-zinc-900/10 font-mono text-[8px]">
      <div className="flex justify-between items-center mb-1 border-b border-zinc-200 dark:border-zinc-800 pb-1">
        <span className="text-zinc-800 dark:text-zinc-250 font-bold text-[9px]">Pandas Analysis</span>
        <span className="text-zinc-450 dark:text-zinc-500">300K+ records</span>
      </div>
      <div className="space-y-1 my-1.5 text-zinc-600 dark:text-zinc-450">
        <div><span className="text-zinc-400">df</span> = pd.read_csv(<span className="text-zinc-500 dark:text-zinc-300">&quot;uidai_data.csv&quot;</span>)</div>
        <div><span className="text-zinc-400">clean_df</span> = df.dropna().drop_duplicates()</div>
        <div>print(clean_df.describe())</div>
      </div>
      <div className="bg-white dark:bg-zinc-850/60 border border-zinc-200 dark:border-zinc-800 p-2 rounded-lg mt-2 flex flex-col justify-between h-14 shadow-inner">
        <span className="text-zinc-450 text-[7px] uppercase font-mono">Row Metrics:</span>
        <div className="flex justify-between items-end h-8 gap-1.5 px-1 mt-1">
          <div className="bg-zinc-400 dark:bg-zinc-650 w-full h-[30%] rounded-t"></div>
          <div className="bg-zinc-450 dark:bg-zinc-600 w-full h-[65%] rounded-t"></div>
          <div className="bg-zinc-500 dark:bg-zinc-500 w-full h-[85%] rounded-t"></div>
          <div className="bg-zinc-600 dark:bg-zinc-400 w-full h-[40%] rounded-t"></div>
        </div>
      </div>
    </div>
  </div>
);

export const ProjectMockupSelector = ({ title }) => {
  const t = title.toLowerCase();
  if (t.includes("habee craft")) return <HabeeCraftMock />;
  if (t.includes("roadassist") || t.includes("road assist")) return <RoadAssistMock />;
  if (t.includes("gym") || t.includes("goldstone")) return <GymMock />;
  if (t.includes("resume")) return <ResumeMock />;
  if (t.includes("world atlas")) return <WorldAtlasMock />;
  if (t.includes("digital store")) return <DigitalStoreMock />;
  if (t.includes("weather")) return <WeatherMock />;
  if (t.includes("uidai") || t.includes("data analysis")) return <DataAnalysisMock />;
  return <HabeeCraftMock />;
};
