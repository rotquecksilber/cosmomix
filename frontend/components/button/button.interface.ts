import React from 'react';

export interface ButtonProps {
type: 'standard';
color: 'black' | 'primary' | 'soft' | 'white';
    uppercase?: boolean;
    children: React.ReactNode;
href: string;
className?: string;
}

