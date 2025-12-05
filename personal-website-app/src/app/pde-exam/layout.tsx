import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDE Exam Questions',
  description: 'Protected PDE Exam Practice Questions',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function PDEExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
