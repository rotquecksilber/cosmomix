import React from 'react';

export interface HtagProps {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    color: 'black' | 'white' | 'gradient' | 'primary' | 'production';
    uppercase?: boolean;
    children: React.ReactNode;
    className?: string;
}
