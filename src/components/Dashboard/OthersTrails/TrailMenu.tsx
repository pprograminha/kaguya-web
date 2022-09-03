import { 
  Menu, 
  MenuButton, 
  MenuItem, 
  MenuList, 
} from '@chakra-ui/react';
import Lordicon from '../../ReactLordicon';

export function TrailMenu() {
  return (
    <>
      <Menu placement='bottom-end'>
        <MenuButton
          aria-label='Options'
        >
          ...
        </MenuButton>
        <MenuList
          bg="blackAlpha.700"
          border="none"
        >
         <MenuItem
            px="4"
            bg="none"
            _hover={{
              bg:"none"
            }}
            _active={{
              bg:"none"
            }}
            icon={<Lordicon icon='addCard' trigger='hover' size={28} />}
          >
            Adicionar a minhas trilhas
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}