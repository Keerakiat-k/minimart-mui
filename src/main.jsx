import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'; 

// 🎨 กำหนดชุดสีของคุณตรงนี้
const myTheme = createTheme({
  palette: {
    primary: {
      main: '#2A4B7C', 
    },
    secondary: {
      main: '#F4A261', 
    },
    error: {
      main: '#E63946', // เพิ่มสี error ตรงนี้ได้เลย
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