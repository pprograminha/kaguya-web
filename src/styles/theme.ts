import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {     
    pink: {       
      "900": "#a90f64",       
      "800": "#D1107A",       
      "700": "#C950C4",       
      "600": "#FF69F9",       
    },
    blackAlpha: {
      "900": "#0F0F11",
      "800": "#0D0E12",
      "700": "#181a21",
      "600": "#242731",
      "500": "#121419",
    },
    gray: {
      "300": "#9a9ea3"
    }
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'blackAlpha.900',
        color: 'gray.50',
        minWidth: '280px'
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      input: {
        color: 'gray.300',

        '&:-webkit-autofill': {
          boxShadow: '0 0 0 30px #242731 inset !important',
          '-webkit-text-fill-color': '#9a9ea3',
          borderRadius: '0',
          border: 'none',
          'caret-color': '#9a9ea3',
        },
        '&:active': {
          boxShadow: '0 0 0 30px #242731 inset !important',
        },
        '&:hover': {
          boxShadow: '0 0 0 30px #242731 inset !important',
        },
        '&:focus': {
          boxShadow: '0 0 0 30px #242731 inset !important',
        },
      },
      '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',

        '&::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '10px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'pink.700',
          borderRadius: '10px',
          transition: 'all 0.2s',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'pink.600'
        }
      }
    },
  },
});