import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/03-styles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '이동욱 이력서',
  description: '지금까지의 이력을 나타낸 이력서입니다.',
  keywords: 'Resume Page',
  publisher: '이동욱',
  creator: '이동욱',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
