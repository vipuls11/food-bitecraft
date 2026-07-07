'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  alpha,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Restaurant,
  ShoppingBag,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useCart } from '@/context/CartContext';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Offers', path: '/offers' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();
  const { cartCount, addToCart } = useCart();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: 'blur(12px)',
        boxShadow: `0 1px 0 0 ${alpha(theme.palette.divider, 0.1)}`,
        color: 'text.primary',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 75 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  p: 1,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)',
                }}
              >
                <Restaurant fontSize="small" />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'primary.main',
                  fontSize: '1.25rem',
                }}
              >
                BITE<Box component="span" sx={{ color: 'secondary.main' }}>CRAFT</Box>
              </Typography>
            </Stack>
          </Link>

          {/* Desktop Navigation links */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.path}
                  sx={{
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'primary.main' : 'text.secondary',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: alpha(theme.palette.primary.main, 0.04),
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>

          {/* Right actions */}
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
            {/* <IconButton
              color="inherit"
              aria-label="shopping bag"
              sx={{
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.1) },
              }}
            >
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingBag />
              </Badge>
            </IconButton> */}

            {/* CTA Order Button on Desktop */}
            {/* <Button
              variant="contained"
              color="primary"
              onClick={addToCart}
              sx={{
                borderRadius: 2.5,
                px: 3,
                py: 1,
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                display: { xs: 'none', sm: 'inline-flex' },
              }}
            >
              Order Now
            </Button> */}

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, pt: 8 },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', px: 2 }}>
          {/* <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>
            BITE<Box component="span" sx={{ color: 'secondary.main' }}>CRAFT</Box>
          </Typography> */}
          <List>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    component={Link}
                    href={item.path}
                    selected={isActive}
                    sx={{
                      borderRadius: 2,
                      '&.Mui-selected': {
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: alpha(theme.palette.primary.main, 0.12),
                        },
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: {
                          sx: { fontWeight: isActive ? 700 : 500 }
                        }
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          {/* <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={addToCart}
            sx={{
              mt: 4,
              py: 1.5,
              borderRadius: 2.5,
              fontWeight: 700,
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
            }}
          >
            Order Now
          </Button> */}
        </Box>
      </Drawer>
    </AppBar>
  );
}
