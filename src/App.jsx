import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Box, CircularProgress, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import { getAllProducts } from './services/api.js';
import CartDrawer from './components/CartDrawer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddProduct from './pages/AddProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');


  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('minimart_cart');

    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem('minimart_cart', JSON.stringify(cart));
  }, [cart]);


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


  const handleAddToCart = (product) => {
    setCart((prevCart) => {

      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {

        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {

        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };


  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };
  const handleCheckout = () => {
    setCart([]);
  };

  const totalCartItems = cart.reduce((total, item) => total + item.qty, 0);
  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === 'all' || product.category.id === selectedCategory;
    const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (

    <BrowserRouter>
      <Box sx={{ minHeight: '100vh', pb: 5 }}>
        <CssBaseline />


        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          cartCount={totalCartItems}
          onCartClick={() => setIsCartOpen(true)}
        />


        <Routes>


          <Route path="/" element={
            <Container maxWidth="lg" sx={{ mt: 3 }}>
              <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>
              ) : (
                <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
              )}
            </Container>
          } />


          <Route path="/login" element={<Login />} />


          <Route path="/signup" element={<Signup />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>


        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onRemoveItem={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />

      </Box>
    </BrowserRouter>
  );

}

export default App;