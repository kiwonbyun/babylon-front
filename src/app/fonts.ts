import { Poppins, Noto_Sans_KR, Noto_Color_Emoji } from 'next/font/google';

export const fontNotoSansKR = Noto_Sans_KR({ subsets: [] });

export const fontEmoji = Noto_Color_Emoji({
  weight: ['400'],
  subsets: ['emoji'],
});

export const fontPoppinsEN = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});
