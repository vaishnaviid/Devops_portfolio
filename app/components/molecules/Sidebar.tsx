import React from 'react';
import Link from 'next/link';
import { navLinks as items } from '@/config/NavLinks';

export const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar bg-transparent">
            <nav className="mt-6">
                {items.map((it) => (
                    <Link key={it.href} href={it.href} className="flex items-center gap-2 text-sm px-2 py-3 rounded-md hover:bg-gray-800">
                        <it.icon />
                        <span>{it.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};