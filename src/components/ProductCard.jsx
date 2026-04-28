import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, CardActionArea } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductCard({ product, onCardClick }) {
  

  const fallbackImage = 'https://placehold.co/400x400/EAEAEA/777777?text=No+Image';
  const imageUrl = product.images && product.images.length > 0 ? product.images[0] : fallbackImage;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
      
      <CardActionArea onClick={onCardClick} sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={product.title}
          sx={{ objectFit: 'cover' }}
          
          onError={(e) => {
            e.target.src = fallbackImage; 
            e.target.onerror = null; 
          }}
        />
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: '1.2em', height: '2.4em', overflow: 'hidden' }}>
            {product.title}
          </Typography>
          <Typography variant="h6" color="secondary" sx={{ mt: 1, fontWeight: 'bold' }}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button variant="contained" color="secondary" fullWidth startIcon={<ShoppingCartIcon />}>
          หยิบใส่ตะกร้า
        </Button>
      </CardActions>
      
    </Card>
  );
}