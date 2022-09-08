import { Flex } from '@chakra-ui/react';
import { InfoAboutLessonVideo } from './InfoAboutLessonVideo';

export function LessonVideo() {
  return (
    <>
      <Flex 
        width= "max(240px, min(850px, 50vw))"
        height= "max(calc(240px * 0.5625), min(calc(850px * 0.5625), calc(50vw * 0.5625)))"
    
        mx={["4", "6"]}
        flexDirection="column"
      >
        <iframe
          width="100%"
          height="100%"
          title='naruto'
          src='https://www.youtube.com/embed/0409yssD3vk'
          frameBorder="0"
          allowFullScreen
        />
        <InfoAboutLessonVideo />
      </Flex>
    </>
  )
}