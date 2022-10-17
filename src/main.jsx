import { ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './Style/style.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#A30000',
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    color: 'white'
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
