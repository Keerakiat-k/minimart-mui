import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import MoreIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Avatar from '@mui/material/Avatar'; // 🟢 เพิ่ม Avatar เข้ามา

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  border: '1px solid rgba(255, 255, 255, 0.4)', 
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  transition: 'all 0.3s ease',
  
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    border: `1px solid ${theme.palette.secondary.main}`, 
    boxShadow: `0 0 8px ${alpha(theme.palette.secondary.main, 0.5)}`,
  },
  
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

export default function Navbar({ searchQuery, setSearchQuery, cartCount, onCartClick }) {
  const navigate = useNavigate(); 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // เปลี่ยนเป็น bottom เพื่อให้ไม่ทับปุ่มเดิม
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.12))', // 🟢 เงาแบบฟุ้งๆ นุ่มนวล
          mt: 1.5,
          width: 280, // เพิ่มความกว้างให้ดูไม่อึดอัด
          borderRadius: 3, // ขอบเมนูโค้งมน
          
          // 🟢 ลูกศรชี้ขึ้นที่มุมขวาบน
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },

          // 🟢 แต่งลูกเล่นให้ตัวเลือกต่างๆ เวลาเอาเมาส์ชี้
          '& .MuiMenuItem-root': {
            borderRadius: 2,
            mx: 1, // เว้นขอบซ้ายขวาให้เป็นเม็ดยา
            mb: 0.5,
            padding: '10px 16px',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.08)', // สีฟ้าอ่อนๆ
              transform: 'translateX(5px)', // ขยับขวานิดนึงเวลานำเมาส์ไปวาง
            }
          }
        },
      }}
    >
      {/* 🟢 เพิ่มส่วนหัวโปรไฟล์ (Profile Header) */}
      <Box sx={{ px: 3, py: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar sx={{ width: 48, height: 48, bgcolor: '#1976d2' }}>
          <PersonIcon fontSize="medium" />
        </Avatar>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: 1.2, color: '#333' }}>
            ยินดีต้อนรับ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            เข้าสู่ระบบเพื่อสั่งซื้อเลย
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 1, borderColor: 'rgba(0,0,0,0.06)' }} />
      
      <MenuItem onClick={() => { handleMenuClose(); navigate('/login'); }}>
        <ListItemIcon>
          <PersonIcon fontSize="small" sx={{ color: '#1976d2' }} />
        </ListItemIcon>
        เข้าสู่ระบบ / สมัครสมาชิก
      </MenuItem>
      
      <MenuItem onClick={() => { handleMenuClose(); navigate('/'); }}>
        <ListItemIcon>
          <ReceiptLongIcon fontSize="small" sx={{ color: '#757575' }} />
        </ListItemIcon>
        ประวัติการสั่งซื้อ
      </MenuItem>

      <MenuItem onClick={() => { handleMenuClose(); navigate('/add-product'); }}>
        <ListItemIcon>
          <AddBoxIcon fontSize="small" sx={{ color: '#2e7d32' }} />
        </ListItemIcon>
        เพิ่มสินค้า (Admin)
      </MenuItem>
      
      <Divider sx={{ my: 1, borderColor: 'rgba(0,0,0,0.06)' }} />
      
      <MenuItem 
        onClick={() => { handleMenuClose(); navigate('/'); }} 
        sx={{ 
          color: 'error.main',
          '&:hover': { backgroundColor: 'rgba(211, 47, 47, 0.08) !important' } // สีแดงอ่อนตอนโฮเวอร์ปุ่มออกระบบ
        }}
      >
        <ListItemIcon>
          <LogoutIcon fontSize="small" color="error" />
        </ListItemIcon>
        ออกจากระบบ
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        sx: { borderRadius: 3, mt: 1.5, filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.12))' }
      }}
    >
      <MenuItem onClick={() => { handleMobileMenuClose(); onCartClick(); }}>
        <IconButton size="large" aria-label="show cart items" color="inherit">
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon /> 
          </Badge>
        </IconButton>
        <p>ตะกร้าสินค้า</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>บัญชีของฉัน</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 1100 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => navigate('/')} 
          >
            MiniMart
          </Typography>

          <Box sx={{ flexGrow: 1 }} /> 

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="ค้นหาสินค้า…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton color="inherit" onClick={onCartClick}> 
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}