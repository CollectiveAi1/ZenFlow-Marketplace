
import React from 'react';

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="m12 3-1.9 3.8-3.8 1.9 3.8 1.9L12 15l1.9-3.8 3.8-1.9-3.8-1.9L12 3z"/>
        <path d="M5 21v-3.8L1.2 15.3l3.8-1.9V9.7l1.9-3.8 1.9 3.8v3.8l3.8 1.9-3.8 1.9V21l-1.9 3.8L5 21z"/>
        <path d="M19 21v-3.8l3.8-1.9-3.8-1.9V9.7l-1.9-3.8-1.9 3.8v3.8l-3.8 1.9 3.8 1.9V21l1.9 3.8L19 21z"/>
    </svg>
);

export default SparklesIcon;
