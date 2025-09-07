import { Fira_Code, Inter as InterFont, Quantico as QuanticoFont } from "next/font/google";

export const FiraCode = Fira_Code(
    {
        subsets: ['latin'],
        variable: '--font-fira-code',
        display: 'swap'
})

export const Inter = InterFont({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['200', '300', "400", '500', '600', '700'],
    display: 'swap'
})

export const Quantico = QuanticoFont({
    weight: ['400', '700'],
    variable: '--font-quantico',
    display: 'swap',
    subsets: ['latin']
})