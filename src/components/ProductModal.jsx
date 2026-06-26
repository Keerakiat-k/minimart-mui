import React from 'react';
import { 
    Dialog, 
    DialogContent, 
    Button, 
    Typography, 
    Box, 
    IconButton, 
    Zoom, 
    Chip,
    Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// 🟢 เพิ่ม Transition ให้ Modal เด้งขึ้นมาแบบนุ่มนวล
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

export default function ProductModal({ product, handleClose, onAddToCart }) {
    if (!product) return null;

    const fallbackImage = 'https://placehold.co/400x400/EAEAEA/777777?text=No+Image';
    const imageUrl = product.images && product.images.length > 0 ? product.images[0] : fallbackImage;

    return (
        <Dialog 
            open={Boolean(product)} 
            onClose={handleClose} 
            maxWidth="md" 
            fullWidth
            TransitionComponent={Transition} // เรียกใช้แอนิเมชัน
            PaperProps={{
                sx: { 
                    borderRadius: 4, // ขอบหน้าต่างโค้งมนขึ้น
                    overflow: 'hidden',
                    boxShadow: '0 24px 48px rgba(0,0,0,0.2)'
                }
            }}
        >
            {/* 🟢 ปุ่มปิดแบบลอย (Floating Close Button) */}
            <IconButton 
                onClick={handleClose}
                sx={{ 
                    position: 'absolute', 
                    top: 12, 
                    right: 12, 
                    zIndex: 10,
                    bgcolor: 'rgba(255,255,255,0.8)', // พื้นหลังสีขาวโปร่งแสง
                    backdropFilter: 'blur(4px)',
                    '&:hover': { bgcolor: 'error.light', color: 'white', transform: 'rotate(90deg)' },
                    transition: 'all 0.3s ease'
                }}
            >
                <CloseIcon />
            </IconButton>

            {/* ลบ padding เดิมออก เพื่อให้จัด Layout ได้อิสระ */}
            <DialogContent sx={{ p: 0, display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>

                {/* 📦 โซนรูปภาพ (ด้านซ้าย) */}
                <Box 
                    sx={{ 
                        width: { xs: '100%', sm: '50%' }, 
                        bgcolor: '#f8f9fa', // สีพื้นหลังอ่อนๆ ให้รูปดูเด่น
                        p: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden' // สำคัญสำหรับเอฟเฟกต์ซูมรูป
                    }}
                >
                    <Box
                        component="img"
                        src={imageUrl}
                        alt={product.title}
                        sx={{ 
                            width: '100%', 
                            maxWidth: 350,
                            borderRadius: 2, 
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease-in-out', // 🟢 เอฟเฟกต์ซูมเวลา Hover
                            '&:hover': {
                                transform: 'scale(1.08)' 
                            }
                        }}
                        onError={(e) => {
                            e.target.src = fallbackImage;
                            e.target.onerror = null;
                        }}
                    />
                </Box>

                {/* 📝 โซนรายละเอียดสินค้า (ด้านขวา) */}
                <Box 
                    sx={{ 
                        width: { xs: '100%', sm: '50%' }, 
                        p: { xs: 4, sm: 5 }, 
                        display: 'flex', 
                        flexDirection: 'column' 
                    }}
                >
                    {/* ป้าย Tag เล็กๆ */}
                    <Box sx={{ mb: 2 }}>
                        <Chip 
                            icon={<CheckCircleIcon />} 
                            label="พร้อมจัดส่ง" 
                            color="success" 
                            size="small" 
                            variant="outlined"
                        />
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: '800', color: '#1a1a1a', mb: 1 }}>
                        {product.title}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                        {product.description}
                    </Typography>

                    <Divider sx={{ mb: 3 }} />

                    {/* จัดราคาและปุ่มให้อยู่ติดกันด้านล่างสุด */}
                    <Box sx={{ mt: 'auto' }}>
                        <Typography variant="h3" color="error" sx={{ fontWeight: 'bold', mb: 3 }}>
                            ฿{product.price}
                        </Typography>

                        <Button
                            variant="contained"
                            color="error"
                            fullWidth
                            startIcon={<ShoppingBasketIcon />}
                            onClick={(e) => {
                                e.stopPropagation();
                                onAddToCart(product);
                                handleClose();
                            }}
                            sx={{ 
                                borderRadius: '30px', 
                                py: 1.5, 
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                boxShadow: '0 8px 16px rgba(211, 47, 47, 0.25)', // เงาปุ่มสีแดง
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    transform: 'translateY(-3px)', // 🟢 เอฟเฟกต์ปุ่มลอยขึ้นเวลาชี้
                                    boxShadow: '0 12px 20px rgba(211, 47, 47, 0.4)',
                                }
                            }}
                        >
                            เพิ่มลงตะกร้า
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
}