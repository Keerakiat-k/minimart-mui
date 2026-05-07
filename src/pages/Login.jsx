import React from 'react';
import { Container, Box, Typography, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate(); 

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}>
          เข้าสู่ระบบ
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
          ยินดีต้อนรับกลับสู่ MiniMart
        </Typography>

        <Box component="form">
          <TextField fullWidth label="อีเมล" variant="outlined" margin="normal" required />
          <TextField fullWidth label="รหัสผ่าน" type="password" variant="outlined" margin="normal" required />
          
          <Button 
            fullWidth 
            variant="contained" 
            color="primary" 
            sx={{ mt: 3, mb: 2, py: 1.5, fontSize: '1.1rem', borderRadius: 2 }}
            onClick={() => navigate('/')} 
          >
            เข้าสู่ระบบ
          </Button>

          <Typography textAlign="center">
            ยังไม่มีบัญชีใช่ไหม?{' '}
            <Button color="secondary" onClick={() => navigate('/signup')} sx={{ fontWeight: 'bold' }}>
              สมัครสมาชิกที่นี่
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}