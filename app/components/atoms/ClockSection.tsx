import { useState, useEffect } from "react";
import { initTheme } from '@/lib/theme';

export const ClockSection = () => {
    const [time, setTime] = useState('');
    useEffect(() => {
        initTheme(true); // default dark
        const t = setInterval(() => {
        const d = new Date();
        let hours = d.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        if (hours === 0) hours = 12;
            const mins = String(d.getMinutes()).padStart(2, '0');
            const secs = String(d.getSeconds()).padStart(2, '0');
            setTime(`${String(hours).padStart(2, '0')}:${mins}:${secs} ${ampm}`);
        }, 1000);
        return () => clearInterval(t);
    }, []);
  return (
    <div className="clock flex justify-between items-center gap-2 rounded-full border border-gray-700 px-3 py-1 text-xsm font-normal min-w-[132px]">
        <div className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#914bf1] opacity-75"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-[#914bf1]"></span></div>
        {time}
    </div>
  )
}
