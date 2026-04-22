import React, { useState, useEffect } from 'react';
import { Container, Box, CircularProgress, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar'; 
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList'; // 🟢 Import ตัวใหม่มา
import { getAllProducts } from './services/api';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category.id === selectedCategory);

  return (
    <Box sx={{ minHeight: '100vh', pb: 5 }}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        
        <FilterBar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress /> 
          </Box>
        ) : (
          <ProductList products={filteredProducts} />
        )}

      </Container>
    </Box>
  );
}

export default App;