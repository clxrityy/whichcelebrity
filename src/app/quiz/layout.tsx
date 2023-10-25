import type { Metadata } from 'next';
import '@/styles/quiz.css';

export const metadata: Metadata = {
    title: "Which Celebrity Are You? | Quiz"
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