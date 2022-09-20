import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { useMemo } from 'react';

import Lordicon from '../../../../components/ReactLordicon';

import { Author } from './Author';
import { Description } from './Description';



export function Quotes() {
  const isWideVersion = useBreakpointValue({ 
    base: false,
    "lg": true
  });
 
  const quotes = [
    {
      quote: 'Na casa de um rico não há lugar para se cuspir, a não ser em sua cara.',
      philosopher: 'Diógenes de Sínope',
      wikipedia: 'https://pt.wikipedia.org/wiki/Di%C3%B3genes_de_Sinope'
    },
    {
      quote: 'Não se pode pisar duas vezes no mesmo rio.',
      philosopher: 'Heráclito',
      wikipedia: 'https://pt.wikipedia.org/wiki/Heráclito'
    },
    {
      quote: 'O homem só pode ser homem mediante a educação.',
      philosopher: 'Immanuel Kant',
      wikipedia: 'https://pt.wikipedia.org/wiki/Immanuel_Kant'
    },
    {
      quote: 'Ser é ser percebido.',
      philosopher: 'George Berkley',
      wikipedia: 'https://pt.wikipedia.org/wiki/George_Berkeley'
    },
    {
      quote: 'A vida não é um problema a ser resolvido, mas uma realidade a ser experimentada.',
      philosopher: 'Soren Kierkegaard',
      wikipedia: 'https://pt.wikipedia.org/wiki/Søren_Kierkegaard'
    },
    {
      quote: 'É necessário que, ao menos uma vez na vida, você duvide, tanto quanto possível, de todas as coisas.',
      philosopher: 'René Descartes',
      wikipedia: 'https://pt.wikipedia.org/wiki/René_Descartes'
    },
    {
      quote: 'Conhece-te a ti mesmo e conhecerás o universo e os deuses.',
      philosopher: 'Sócrates',
      wikipedia: 'https://pt.wikipedia.org/wiki/Sócrates'
    },
    {
      quote: 'Existe apenas um bem, o saber, e apenas um mal, a ignorância.',
      philosopher: 'Sócrates',
      wikipedia: 'https://pt.wikipedia.org/wiki/Sócrates'
    },
  ];

  const generatedQuote = useMemo(() => {
    const min = 0;
    const max = quotes.length - 1;
    
    const quoteIndex = 7 || Math.floor(min + (Math.random() * (max - min)));

    const quote = quotes[quoteIndex]
    
    return quote
  }, [quotes])

  return (
    <>
      <Flex
        alignItems="flex-end"
        mx={["4"]}
        mb="8"
        gap="4"
      >
        <Lordicon 
          size={isWideVersion ? 70 : 48} 
          icon='book' 
          colors={{
            primary: '#a90f64',
            secondary: '#fff'
          }} 
          trigger='loop' 
          delay={3000} 
        />
        <Flex
          flexDirection="column"
          mt="8"
        >
          <Description description={generatedQuote.quote} />
          <Author
            referenceLink={generatedQuote.wikipedia}
            authorName={generatedQuote.philosopher}
            isWideVersion={isWideVersion}
          />
        </Flex>
      </Flex>
    </>
  );
}
