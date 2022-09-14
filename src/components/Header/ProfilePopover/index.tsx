import { 
  Popover, 
  PopoverBody, 
  PopoverContent, 
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';

import { ItemLink } from './ItemLink';
import { DividerLine } from '../../DividerLine';
import { ConfirmSignOutModal } from './ConfirmSignOutModal';
import { ButtonItem } from './ButtonItem';

export interface ProfilePopover {
  children?: React.ReactNode;
  isWideVersion?: boolean;
}

export function ProfilePopover({
  children,
  isWideVersion
}: ProfilePopover) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Popover
        placement='bottom-end'
      >
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
            alignItems="flex-start"
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

            <ButtonItem
              onClick={onOpen}
            >
              <FiLogOut size={18} />
              Sair da conta
            </ButtonItem>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <ConfirmSignOutModal
        modal={{
          isOpen,
          onClose
        }}
      />
    </>
  );
}