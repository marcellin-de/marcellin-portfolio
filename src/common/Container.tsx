import React from 'react';

export default function Container({
    children,
    className,
    animate = false,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
}) {
    return (
        <div
            className={`${animate ? 'animate-fade-in-blur' : ''} container mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}