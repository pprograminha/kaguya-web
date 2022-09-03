import { 
  Menu, 
  MenuButton, 
  MenuItem, 
  MenuList, 
  // Popover, 
  // PopoverArrow, 
  // PopoverBody, 
  // PopoverCloseButton, 
  // PopoverContent, 
  // PopoverTrigger
} from '@chakra-ui/react';
import Lordicon from '../../ReactLordicon';

export function TrailMenu() {
  return (
    <>
      {/* <Popover>
        <PopoverTrigger>
          <Button
            bg="none"
            _hover={{
              bg:"none"
            }}
            _active={{
              bg:"none"
            }}
          >
            ...
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg="blackAlpha.700"
          border="none"
          p="4"
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Button
              gap="2"
              fontWeight="normal"
              bg="none"
              _hover={{
                bg:"none"
              }}
              _active={{
                bg:"none"
              }}
            >
              Adicionar a Minhas trilhas
              <Lordicon icon='addCard' trigger='hover' size={28} />
            </Button>
          </PopoverBody>
        </PopoverContent>

      </Popover> */}

      <Menu>
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