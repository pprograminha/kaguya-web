import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {  
    black: "#0d0e12",
    white: "#f9f9f9",
    pink: {       
      "900": "#a90f6478", 
      "800": "#a90f64",  
      "700": "#D1107A",       
      "600": "#C950C4",       
      "500": "#FF69F9",       
    },
    blackAlpha: {
      "900": "#0F0F11",
      "800": "#121419",
      "700": "#181a21",
      "600": "#242731",
      "500": "#111216"
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
        bg: 'black',
        color: 'gray.50',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      input: {
        color: 'gray.300',

        '&:-webkit-autofill': {
          boxShadow: '0 0 0 30px #242731 inset !important',
          WebkitTextFillColor: '#9a9ea3',
          borderRadius: '0',
          border: 'none',
          caretColor: '#9a9ea3',
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
          background: 'pink.600',
          borderRadius: '10px',
          transition: 'all 0.2s',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'pink.500'
        }
      }
    },
  },
});