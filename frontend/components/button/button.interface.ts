import React from 'react';

export interface ButtonProps {
type: 'standard' | 'small';
color: 'black' | 'primary' | 'soft' | 'white';
    uppercase?: boolean;
    children: React.ReactNode;
href?: string;
className?: string;
}

