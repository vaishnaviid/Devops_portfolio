'use client';
import React, { useEffect, useState } from 'react';
import { LogoSection } from '@/components/atoms/LogoSection';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { toggleTheme } from '@/lib/theme';
import { SocialIcons } from '@/components/atoms/SocialIcons';
import { ClockSection } from '../atoms/ClockSection';

export const Header  = () => {
const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });
const toggleCurrentTheme = () => {
    toggleTheme();
    const newTheme = localStorage.getItem('theme');
    setCurrentTheme(newTheme || 'dark');
}
// const themeIcon = localStorage.getItem('theme') ==='light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />;
    return (
        <header className="header bg-transparent">
            <div className="container flex justify-between items-center py-3">
                <div className="flex items-center gap-4">
                    <LogoSection />
                </div>
                <div className="flex items-center gap-4">
                    <ClockSection />
                    <button aria-label="toggle theme" onClick={() => toggleCurrentTheme()} className="p-2 rounded-full hover:bg-gray-800" title="Toggle theme">
                        {currentTheme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
                    </button>
                    <SocialIcons />
                </div>
            </div>
        </header>
    );
};