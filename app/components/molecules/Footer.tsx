import React from 'react';
import { BiHeart } from 'react-icons/bi';


export const Footer: React.FC = () => (
    <footer className="footer"><p className='text-lg text-center'>@copy; {new Date().getFullYear()} — Built with ❤️ using Next.js + TypeScript + Tailwind.</p></footer>
);