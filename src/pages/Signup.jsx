import React from 'react';
import { Container, Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}>
          สร้างบัญชีใหม่
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
          มาร่วมเป็นส่วนหนึ่งของ MiniMart
        </Typography>

        <Box component="form">
          <TextField fullWidth label="ชื่อ - นามสกุล" variant="outlined" margin="normal" required />
          <TextField fullWidth label="อีเมล" type="email" variant="outlined" margin="normal" required />
          <TextField fullWidth label="รหัสผ่าน" type="password" variant="outlined" margin="normal" required />
          <TextField fullWidth label="ยืนยันรหัสผ่าน" type="password" variant="outlined" margin="normal" required />
          
          <Button 
            fullWidth 
            variant="contained" 
            color="secondary" 
            sx={{ mt: 3, mb: 2, py: 1.5, fontSize: '1.1rem', borderRadius: 2 }}
            onClick={() => navigate('/login')}
          >
            สมัครสมาชิก
          </Button>

          <Typography textAlign="center">
            มีบัญชีอยู่แล้ว?{' '}
            <Button color="primary" onClick={() => navigate('/login')} sx={{ fontWeight: 'bold' }}>
              เข้าสู่ระบบที่นี่
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}