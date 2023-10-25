import { Roboto, Roboto_Mono, Roboto_Slab, Roboto_Flex } from 'next/font/google'

export const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] });

export const robotoMono = Roboto_Mono({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

export const robotoFlex = Roboto_Flex({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})