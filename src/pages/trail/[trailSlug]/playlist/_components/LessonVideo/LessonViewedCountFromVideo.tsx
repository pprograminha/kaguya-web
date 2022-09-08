import Lordicon from '@/components/ReactLordicon';
import { Text } from '@chakra-ui/react';

export function LessonViewedCountFromVideo() {
  return (
    <>
      <Text
        display="flex"
        gap="2"
        alignItems="center"

        color="white"
        fontSize={["sm", "md"]}
      >
        <Lordicon
          icon='clock'
          trigger='loop'
          size={20}
          colors={{
            primary: "#9a9ea3",
            secondary: "#9a9ea3"
          }}
        />
        8 visualizações
      </Text>
    </>
  )
}