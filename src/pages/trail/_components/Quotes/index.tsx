import { Flex } from '@chakra-ui/react';

import Lordicon from '../../../../components/ReactLordicon';

import { Author } from './Author';
import { Description } from './Description';

export function Quotes() {
  return (
    <>
      <Flex
        alignItems="flex-end"
        mx={["4", "6"]}
        mb="8"
        gap="4"
      >
        <Lordicon 
          size={70} 
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
          <Description description={"Ser é ser percebido."} />
          <Author
            referenceLink={"https://pt.wikipedia.org/wiki/George_Berkeley"}
            authorName={"George Berkley"}
          />
        </Flex>
      </Flex>
    </>
  );
}