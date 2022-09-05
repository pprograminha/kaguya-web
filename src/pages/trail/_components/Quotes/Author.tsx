import { Link } from '@chakra-ui/react';
import Lordicon from '../../../../components/ReactLordicon';

export interface AuthorProps {
  authorName: string;
  referenceLink?: string;
}

export function Author({
  authorName,
  referenceLink
}: AuthorProps) {
  return (
    <>
      <Link
        href={referenceLink}
        fontSize={["sm", "md"]}
        fontWeight="bold"
        letterSpacing="wider"
        display="flex"
        alignItems="center"
        gap="1"
        _hover={{
          textDecoration:"none"
        }}
      >
        - {authorName}
        <Lordicon
          size={40}
          icon='share'
          trigger='loop'
          colors={{
            primary: "#9a9ea3",
            secondary: "#9a9ea3",
          }}
          delay={3000}
        />
      </Link>
    </>
  )
}