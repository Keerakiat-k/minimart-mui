import React from 'react';
import { Card, Box, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function ProductCard({ product, onCardClick, onAddToCart }) {
  const fallbackImage = 'https://placehold.co/400x400/EAEAEA/777777?text=No+Image';
  const imageUrl = product.images && product.images.length > 0 ? product.images[0] : fallbackImage;
  const mockRating = (3 + (product.id % 21) * 0.1).toFixed(1);
  return (
    <Card
      onClick={onCardClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        borderRadius: '12px',
        p: 2,
        cursor: 'pointer',
        transition: '0.3s',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }
      }}
    >

      <Box sx={{
        width: '100%',
        aspectRatio: '1 / 1',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        overflow: 'hidden',
        mb: 2
      }}>
        <img
          src={imageUrl}
          alt={product.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = fallbackImage;
            e.target.onerror = null;
          }}
        />
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>


        <Typography variant="h6" sx={{
          fontWeight: 'bold',
          fontSize: '1rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          mb: 1
        }}>
          {product.title}
        </Typography>


        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <StarIcon sx={{ color: '#FFD700', fontSize: '1.2rem', mr: 0.5 }} />
          <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
            {mockRating}
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
          ฿{product.price}
        </Typography>

        <Button 
          variant="contained" 
          color="error" 
          startIcon={<ShoppingBasketIcon />}
          onClick={(e) => {
            e.stopPropagation(); 
            onAddToCart(product); 
          }}
          sx={{ borderRadius: '20px', px: 2, textTransform: 'none', fontSize: '0.85rem' }}
        >
          เพิ่ม
        </Button>
      </Box>
    </Card>
  );
}