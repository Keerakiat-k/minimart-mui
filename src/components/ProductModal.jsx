import React from 'react';
import { Dialog, DialogContent, DialogActions, Button, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function ProductModal({ product, handleClose, onAddToCart }) {
    if (!product) return null;

    const fallbackImage = 'https://placehold.co/400x400/EAEAEA/777777?text=No+Image';
    const imageUrl = product.images && product.images.length > 0 ? product.images[0] : fallbackImage;

    return (
        <Dialog open={Boolean(product)} onClose={handleClose} maxWidth="md" fullWidth>
            <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <DialogContent sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, pt: 5 }}>

                <Box
                    component="img"
                    src={imageUrl}
                    alt={product.title}
                    sx={{ width: { xs: '100%', sm: '50%' }, borderRadius: 2, objectFit: 'cover' }}
                    onError={(e) => {
                        e.target.src = fallbackImage;
                        e.target.onerror = null;
                    }}
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {product.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {product.description}
                    </Typography>

                    
                    <Typography variant="h4" color="error" sx={{ fontWeight: 'bold', mt: 'auto', mb: 1 }}>
                        ฿{product.price}
                    </Typography>
                </Box>
            </DialogContent>

            <DialogActions sx={{ px: 3, pb: 3 }}>
                <Button
                    variant="contained"
                    color="error"
                    startIcon={<ShoppingBasketIcon />}
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product); 
                        handleClose(); 
                    }}
                    sx={{ borderRadius: '20px', px: 3, py: 1, textTransform: 'none', fontSize: '1rem' }}
                >
                    เพิ่มลงตะกร้า
                </Button>
            </DialogActions>
        </Dialog>
    );
}