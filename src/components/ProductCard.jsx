import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductCard({ product }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
      <CardMedia
        component="img"
        height="200"
        image={product.images[0]}
        alt={product.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: '1.2em', height: '2.4em', overflow: 'hidden' }}>
          {product.title}
        </Typography>
        <Typography variant="h6" color="secondary" sx={{ mt: 1, fontWeight: 'bold' }}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button variant="contained" color="secondary" fullWidth startIcon={<ShoppingCartIcon />}>
          หยิบใส่ตะกร้า
        </Button>
      </CardActions>
    </Card>
  );
}