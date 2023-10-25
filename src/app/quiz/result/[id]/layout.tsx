import type { Metadata } from 'next';
import '@/styles/results.css';

export const metadata: Metadata = {
    title: "Which Celebrity Are You? | Results"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
    }) {
    
    return (
        <div>
            {children}
        </div>
    );
}