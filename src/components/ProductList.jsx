
import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function ProductList({ products }) {


  const [selectedProduct, setSelectedProduct] = useState(null);

  if (products.length === 0) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
        <SearchOffIcon sx={{ fontSize: 80, color: 'text.secondary' }} />
        <Typography variant="h5" sx={{ mt: 2, color: 'text.secondary' }}>ไม่พบสินค้า</Typography>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>


            <ProductCard
              product={item}
              onCardClick={() => setSelectedProduct(item)}
            />

          </Grid>
        ))}
      </Grid>


      <ProductModal
        product={selectedProduct}
        handleClose={() => setSelectedProduct(null)}
      />
    </>
  );
}