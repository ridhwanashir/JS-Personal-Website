import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MLE Exam Questions',
  description: 'Protected MLE Exam Practice Questions',
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

export default function MLEExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
