import { 
  Menu, 
  MenuButton, 
  MenuItem, 
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react';
import Lordicon from '../../../../components/ReactLordicon';

export function TrailMenu() {
  const [isLargerThan380] = useMediaQuery('(min-width: 380px)')
  return (
    <>
      <Menu placement='bottom-end' >
        <MenuButton
          aria-label='Options'
        >
          ...
        </MenuButton>
        <MenuList
          bg="blackAlpha.700"
          border="none"
          p={["2","4"]}
        >
         <MenuItem
            px="4"
            bg="none"
            fontSize={['xs', 'md']}
            borderRadius="md"
            transition="0.2s all"
            border="1px solid transparent"
            _first={{
              bg: "none"
            }}
            _hover={({
              
            })}
            _active={{
              bg:"none"
            }}
            icon={<Lordicon icon='addCard' trigger='hover' size={isLargerThan380 ? 23 : 18} />}
          >
            Adicionar a minhas trilhas
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}