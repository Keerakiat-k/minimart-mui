import React, { useState } from 'react';
import { Box, Typography } from '@mui/material'; 
import SearchOffIcon from '@mui/icons-material/SearchOff';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function ProductList({ products, onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!products || products.length === 0) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
        <SearchOffIcon sx={{ fontSize: 80, color: 'text.secondary' }} />
        <Typography variant="h5" sx={{ mt: 2, color: 'text.secondary' }}>ไม่พบสินค้า</Typography>
      </Box>
    );
  }

  return (
    <>
      
      <Box 
        sx={{ 
          display: 'grid', 
        
          gridTemplateColumns: { 
            xs: 'repeat(1, 1fr)', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(4, 1fr)', 
          },
          gap: 3, 
          mt: 3, 
          px: 2 
        }}
      >
        {products.map((item) => (
          
         <ProductCard
          key={item.id}
          product={item}
          onCardClick={() => setSelectedProduct(item)}
          onAddToCart={onAddToCart} 
        />
        ))}
      </Box>

      <ProductModal
        product={selectedProduct}
        handleClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart} 
      />
    </>
  );
}