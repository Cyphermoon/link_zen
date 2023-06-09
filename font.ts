import {  Urbanist, DM_Sans, Roboto, Poppins, Nunito } from 'next/font/google';
 
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500"]
});
 
export const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-urbanist"
});

export const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-dmSans",
  weight: ["400", "500", "700"]
});

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-roboto",
  weight: ["400", "500", "700"]
});

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito"
})