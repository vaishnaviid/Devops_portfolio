'use client';

import { FaBriefcase, FaCalendar } from "react-icons/fa";

export type TimelineItem = {
  title: string;
  org: string;
  date: string;
  desc?: string;
  badge?: string;
};

type TimelineListProps = {
  items: TimelineItem[];
  icon?: React.ReactNode;  // optional override
  className?: string;
};

export function TimelineList({ items, icon, className = "" }: TimelineListProps) {
  return (
    <ul className={`reset relative border-l border-gray-700 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="relative pl-8 space-y-4 [&:not(:first-child)]:mt-8 group">
          {/* Dot */}
          <span className="absolute left-[-11px] top-1 w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 flex items-center justify-center">
            {/* custom icon OR default briefcase */}
              {icon ? (
                <span className="text-site-primary h-3 w-3">{icon}</span>
              ) : (
                <FaBriefcase className="w-3 h-3 text-blue-800 dark:text-blue-300" />
              )}
          </span>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="!text-xl !font- bold !m-0">{item.title} · {item.org}</h3>

              {item.badge && (
                <span className="ml-2 text-xs bg-site-primary/20 border border-site-primary text-site-primary px-2 py-1 rounded-md transition group-hover:bg-blue-800">{item.badge}</span>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm opacity-70">
              <FaCalendar className="h-4 w-4" />
              <span>{item.date}</span>
            </div>

            <p className="text-base opacity-90 leading-relaxed max-w-3xl">
              {item.desc}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}