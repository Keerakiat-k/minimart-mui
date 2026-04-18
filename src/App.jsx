import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; 
import { Box} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { getAllProducts } from './services/api';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (

    <Box sx={{ minHeight: '100vh', pb: 5 }}>
    
      <CssBaseline />
      <Navbar />


    </Box>
  );
}

export default App;