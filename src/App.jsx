import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ยินดีต้อนรับสู่ MiniMart!
        </Typography>
        <Button variant="contained" color="primary">
          เริ่มช้อปปิ้ง
        </Button>
      </Box>
    </Container>
  );
}

export default App;