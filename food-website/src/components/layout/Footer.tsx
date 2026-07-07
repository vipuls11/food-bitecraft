'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  alpha,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LocationOn,
  Phone,
  Email,
  AccessTime,
} from '@mui/icons-material';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'text.primary',
        color: 'white',
        pt: 8,
        pb: 4,
        borderTop: '1px solid',
        borderColor: alpha('#ffffff', 0.1),
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          
          {/* Logo and Slogan (size 3) */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={3}>
              <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.02em', color: 'white' }}>
                BITE<Box component="span" sx={{ color: 'secondary.main' }}>CRAFT</Box>
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6 }}>
                Crafting premium culinary delights from our kitchen straight to your home. We support organic ingredients and exceptional culinary design.
              </Typography>
              <Stack direction="row" spacing={1}>
                {[
                  { icon: <Facebook />, href: 'https://facebook.com' },
                  { icon: <Instagram />, href: 'https://instagram.com' },
                  { icon: <Twitter />, href: 'https://twitter.com' },
                  { icon: <YouTube />, href: 'https://youtube.com' }
                ].map((item, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'grey.400',
                      bgcolor: alpha('#ffffff', 0.05),
                      '&:hover': {
                        color: 'white',
                        bgcolor: 'primary.main',
                        transform: 'translateY(-2px)'
                      },
                      transition: 'all 0.2s'
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links (size 2) */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'white' }}
            >
              Navigation
            </Typography>
            <Stack spacing={1.5}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Our Menu', path: '/menu' },
                { label: 'Photo Gallery', path: '/gallery' },
                { label: 'Offers', path: '/offers' }
              ].map((link) => (
                <Typography
                  key={link.label}
                  variant="body2"
                  component={Link}
                  href={link.path}
                  sx={{
                    color: 'grey.400',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.light' },
                    transition: 'color 0.2s'
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Contact Details (size 2) */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'white' }}
            >
              Contact
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                <LocationOn sx={{ color: 'secondary.main', fontSize: 18, mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.4 }}>
                  123 Gourmet Blvd, NY
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Phone sx={{ color: 'secondary.main', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  (555) 123-4567
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Email sx={{ color: 'secondary.main', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: 'grey.400', fontSize: '0.8rem' }}>
                  hello@bitecraft.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Digital Menu QR (size 2) */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'white' }}
            >
              Digital Menu
            </Typography>
            <Stack spacing={1.5} sx={{ alignItems: 'flex-start' }}>
              <Box
                component="a"
                href="/menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-block',
                  p: 0.8,
                  bgcolor: 'white',
                  borderRadius: 2,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <img
                  src="/images/qr_code.png"
                  alt="Menu QR Code"
                  width={80}
                  height={80}
                  style={{ display: 'block', borderRadius: '4px' }}
                />
              </Box>
              <Typography variant="caption" sx={{ color: 'grey.500', lineHeight: 1.4 }}>
                Scan or click to view Menu PDF.
              </Typography>
            </Stack>
          </Grid>

          {/* Newsletter subscription (size 3) */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'white' }}
            >
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400', mb: 2, lineHeight: 1.5 }}>
              Subscribe to get gourmet recipe updates and offers.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Box
                component="input"
                type="email"
                placeholder="Enter email"
                sx={{
                  px: 1.5,
                  py: 1,
                  borderRadius: 2,
                  border: 'none',
                  flexGrow: 1,
                  bgcolor: alpha('#ffffff', 0.08),
                  color: 'white',
                  outline: 'none',
                  '&::placeholder': { color: 'grey.500' },
                  fontSize: '0.85rem'
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: 2,
                  fontWeight: 700,
                  px: 2,
                  boxShadow: 'none',
                  '&:hover': {
                    bgcolor: 'secondary.dark',
                    boxShadow: 'none',
                  }
                }}
              >
                Join
              </Button>
            </Stack>
          </Grid>
          
        </Grid>

        {/* Lower copyright section */}
        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: alpha('#ffffff', 0.06),
            pt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'grey.500',
            gap: 2
          }}
        >
          <Typography variant="caption">
            © {new Date().getFullYear()} BiteCraft Inc. All rights reserved. Built with Next.js and Material UI.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography
              variant="caption"
              component={Link}
              href="/privacy"
              sx={{
                color: 'grey.500',
                textDecoration: 'none',
                '&:hover': { color: 'white' }
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="caption"
              component={Link}
              href="/terms"
              sx={{
                color: 'grey.500',
                textDecoration: 'none',
                '&:hover': { color: 'white' }
              }}
            >
              Terms of Service
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
