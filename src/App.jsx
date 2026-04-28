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
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredProducts = products.filter(product => {

    const matchCategory = selectedCategory === 'all' || product.category.id === selectedCategory;


    const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());


    return matchCategory && matchSearch;
  });

  return (
    <Box sx={{ minHeight: '100vh', pb: 5 }}>
      <CssBaseline />
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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