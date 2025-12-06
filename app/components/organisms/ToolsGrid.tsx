"use client";

import { ProfileData as data } from "@/config/content";

export function ToolsGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data.skills.map((tool, idx) => {
        const Icon = tool.icon;

        return (
          <div key={idx} className="flex items-center gap-2 px-4 py-3 border border-gray-800 rounded-xl hover:bg-gray-800 transition relative">
            <Icon className="text-lg fill-site-primary" />
            <p className="text-[12px] opacity-90">{tool.name}</p>
            {/* <span className="absolute left-0 right-0 top-0 bottom-0 inline-flex h-full w-full hover:animate-ping rounded-xl hover:bg-[#914bf1] opacity-75"></span> */}
          </div>
        );
      })}
    </div>
  );
}
