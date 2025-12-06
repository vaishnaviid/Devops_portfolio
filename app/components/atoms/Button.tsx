import React from 'react';
import clsx from 'classnames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
    return (
        <button {...props} className={clsx('rounded-md px-4 py-2 text-sm font-medium transition', className, {
        'bg-purple-600 text-white hover:bg-purple-500': variant === 'primary',
        'bg-transparent border border-gray-700 text-sm': variant === 'ghost',
        })}>{children}</button>
    );
};