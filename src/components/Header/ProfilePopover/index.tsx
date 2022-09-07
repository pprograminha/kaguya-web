import { 
  Popover, 
  PopoverBody, 
  PopoverContent, 
  PopoverTrigger,
} from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';

import { ItemLink } from './ItemLink';
import { DividerLine } from '../../DividerLine';

export interface ProfilePopover {
  children?: React.ReactNode;
  isWideVersion?: boolean;
}

export function ProfilePopover({
  children,
  isWideVersion
}: ProfilePopover) {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          {children}
        </PopoverTrigger>
        <PopoverContent
          bg="blackAlpha.700"
          border="none"
          maxW="max"
          mr={!isWideVersion ? "4": "0"}
        >
          <PopoverBody
            p="0"
            display="flex"
            flexDirection="column"
          >
            <ItemLink
              nextLink={{
                href: "/user/profile",
                passHref: true,
              }}
            >
              <AiOutlineUser size={18} />
              Meu Perfil
            </ItemLink>

            <DividerLine />

            <ItemLink 
              nextLink={{
                href: "/login",
                passHref: true,
              }}>
              <FiLogOut size={18} />
              Sair da conta
            </ItemLink>
          </PopoverBody>
        </PopoverContent>

      </Popover>
    </>
  );
}