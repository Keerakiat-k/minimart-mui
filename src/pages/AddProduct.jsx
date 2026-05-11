// src/pages/AddProduct.jsx
import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Paper, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddProduct() {
  const navigate = useNavigate();

  
  const [product, setProduct] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    imageUrl: ''
  });

  
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    
    console.log('ข้อมูลสินค้าที่จะบันทึก:', product);

    
    Swal.fire({
      title: 'เพิ่มสินค้าสำเร็จ!',
      text: `เพิ่มสินค้า "${product.title}" ลงในระบบแล้ว`,
      icon: 'success',
      confirmButtonText: 'กลับไปหน้าร้านค้า',
      confirmButtonColor: '#1e3a8a',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, borderBottom: '2px solid #eee', pb: 1 }}>
          📦 เพิ่มสินค้าใหม่
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
         
          <Box sx={{ display: 'flex', gap: 2, mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <TextField 
              fullWidth label="ชื่อสินค้า" name="title" required 
              value={product.title} onChange={handleChange} 
            />
            <TextField 
              fullWidth label="ราคา (บาท)" name="price" type="number" required 
              value={product.price} onChange={handleChange} sx={{ maxWidth: { sm: 200 } }}
            />
          </Box>

          
          <TextField
            select fullWidth label="หมวดหมู่สินค้า" name="category" required
            value={product.category} onChange={handleChange} sx={{ mb: 2 }}
          >
            <MenuItem value="clothing">เสื้อผ้า</MenuItem>
            <MenuItem value="electronics">อิเล็กทรอนิกส์</MenuItem>
            <MenuItem value="furniture">เฟอร์นิเจอร์</MenuItem>
            <MenuItem value="shoes">รองเท้า</MenuItem>
          </TextField>

          
          <TextField 
            fullWidth label="ลิงก์รูปภาพ (URL)" name="imageUrl" required
            placeholder="https://example.com/image.jpg"
            value={product.imageUrl} onChange={handleChange} sx={{ mb: 2 }}
          />

         
          <TextField 
            fullWidth label="รายละเอียดสินค้า" name="description" multiline rows={4} required
            value={product.description} onChange={handleChange} sx={{ mb: 3 }}
          />

          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/')}>
              ยกเลิก
            </Button>
            <Button type="submit" variant="contained" color="primary" sx={{ px: 4 }}>
              บันทึกสินค้า
            </Button>
          </Box>

        </Box>
      </Paper>
    </Container>
  );
}