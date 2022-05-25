import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },

  colors: {
    primary: '#00ADB5',
    secondary: '#706EBC',
    highlight: '#BEEF7E',
    warning: '#F9F871',
    grey: {
      light: '#222831',
      dark: '#393E46',
    },
    text: '#EEEEEE',
  },
  fonts: {
    body: '\'Source Code Pro\', monospace',
    heading: '\'Lato\', sans-serif',
  },

  components: {
    Heading: {
      baseStyle: {
        color: 'text',
      },
    },
    Text: {
      baseStyle: {
        color: 'text',
      },
    },
  },

});

export default customTheme;
// fontWeights: {
//   hairline: 100,
//     thin: 200,
//     light: 300,
//     normal: 400,
//     medium: 500,
//     semibold: 600,
//     bold: 700,
//     extrabold: 800,
//     black: 900,
// },
