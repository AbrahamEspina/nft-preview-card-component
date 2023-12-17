import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App.jsx';
import './assets/globals.css';

const theme = extendTheme({
  colors: {
    softBlue: "hsl(215, 51%, 70%)",
    cyan: "hsl(178, 100%, 50%)",
    mainBg: "hsl(217, 54%, 11%)",
    cardBg: "hsl(216, 50%, 16%)",
    line: "hsl(215, 32%, 27%)",
    white: "hsl(0, 0%, 100%)"
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
