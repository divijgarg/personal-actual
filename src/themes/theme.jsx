import { extendTheme } from '@chakra-ui/react';
import '@fontsource/viga';
import '@fontsource/righteous';
import '@fontsource/roboto-mono';
import '@fontsource/inter';
import '@fontsource/inter/400.css'; // Weight 400
import '@fontsource/inter/700.css'; // Weight 700
import '@fontsource/inter/400-italic.css'; // Weight 400 Italic
import '@fontsource/inter/700-italic.css'; // Weight 700 Italic

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'normal',
      },
      'b, strong': {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
      },
      'em, i': {
        fontFamily: 'Inter, sans-serif',
        fontStyle: 'italic',
      },
    },
  },
});

export default theme;
