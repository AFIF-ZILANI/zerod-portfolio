import { Inter } from 'next/font/google'
import { Aclonica } from "next/font/google";

export const aclonica = Aclonica({
    subsets: ["latin"],
    weight: "400", // Aclonica only has 400
    variable: "--font-aclonica",
});

export const inter = Inter({ subsets: ['latin'] })