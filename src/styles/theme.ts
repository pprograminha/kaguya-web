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
      },
    },
  },
});