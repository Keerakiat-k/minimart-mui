import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {products.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
          <ProductCard product={item} />
        </Grid>
      ))}
    </Grid>
  );
}