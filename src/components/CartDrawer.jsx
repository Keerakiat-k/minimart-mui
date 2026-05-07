import React from 'react';
import { Drawer, Box, Typography, IconButton, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

export default function CartDrawer({ isOpen, onClose, cart, onRemoveItem, onCheckout }) {
  
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ width: { xs: '100vw', sm: 350 }, p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
        
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            🛒 ตะกร้าสินค้า
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 2 }} />

        
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          {cart.length === 0 ? (
            <Typography sx={{ color: 'text.secondary', textAlign: 'center', mt: 5 }}>
              ยังไม่มีสินค้าในตะกร้า
            </Typography>
          ) : (
            cart.map((item) => (
              <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img 
                  src={item.images[0]} 
                  alt={item.title} 
                  style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: '4px', marginRight: '10px' }} 
                  onError={(e) => { e.target.src = 'https://placehold.co/50x50?text=No+Image'; }}
                />
                
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold', display: '-webkit-box', WebkitLineClamp: 1, overflow: 'hidden', WebkitBoxOrient: 'vertical' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
                    ฿{item.price} x {item.qty} ชิ้น
                  </Typography>
                </Box>

                <IconButton color="error" onClick={() => onRemoveItem(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))
          )}
        </Box>

        {cart.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">ยอดรวม:</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
                ฿{totalPrice.toFixed(2)}
              </Typography>
            </Box>
            
            
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ py: 1.5, borderRadius: '8px' }}
              onClick={() => {
                Swal.fire({
                  title: 'สั่งซื้อสำเร็จ! 🎉',
                  text: 'ขอบคุณที่อุดหนุน MiniMart ครับ',
                  icon: 'success',
                  confirmButtonText: 'ช้อปปิ้งต่อ',
                  confirmButtonColor: '#1e3a8a',
                  backdrop: `rgba(0,0,0,0.5)`,
                  
                  
                  didOpen: () => {
                    const container = document.querySelector('.swal2-container');
                    if (container) {
                      container.style.zIndex = '9999';
                    }
                  }

                }).then((result) => {
                  if (result.isConfirmed) {
                    onCheckout();
                    onClose();    
                  }
                });
              }}
            >
              ดำเนินการชำระเงิน
            </Button>
          </Box>
        )}
        
      </Box>
    </Drawer>
  );
}