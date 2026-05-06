import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'; 


const myTheme = createTheme({
  palette: {
    primary: {
      main: '#2A4B7C', 
    },
    secondary: {
      main: '#ff4d4f', 
    },
    error: {
      main: '#da1929', 
    },
    background: {
      default: '#f9f7f6', 
    },
  },
  typography: {
    fontFamily: '"Kanit", "Roboto", "Helvetica", "Arial", sans-serif',
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)