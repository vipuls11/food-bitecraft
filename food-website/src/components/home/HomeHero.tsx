'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Grid, Box, Typography, Button, Chip, Stack } from '@mui/material';
import { ArrowForward, EventAvailable } from '@mui/icons-material';

export default function HomeHero() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, overflow: 'hidden', position: 'relative' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>

          {/* Hero Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Chip
                label="🔥 20% Off Your First Order"
                color="secondary"
                variant="outlined"
                sx={{
                  alignSelf: 'flex-start',
                  fontWeight: 700,
                  borderRadius: 1.5,
                  borderWidth: 1.5,
                  px: 1
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  lineHeight: 1.1,
                }}
              >
                Savor the Art of <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>Gourmet Crafting</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.125rem', maxW: '90%' }}>
                Hand-crafted burgers, artisanal pizzas, and refreshing farm-fresh salads made with locally sourced organic ingredients. Delivered hot to your doorstep.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href="/menu"
                  endIcon={<ArrowForward />}
                  sx={{
                    px: 4,
                    py: 1.8,
                    borderRadius: 3,
                    fontSize: '1rem',
                    boxShadow: '0 6px 20px rgba(99, 102, 241, 0.3)'
                  }}
                >
                  View Menu
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={Link}
                  href="/contact"
                  startIcon={<EventAvailable />}
                  sx={{
                    px: 4,
                    py: 1.8,
                    borderRadius: 3,
                    fontSize: '1rem',
                    borderWidth: 1.5,
                    '&:hover': { borderWidth: 1.5 }
                  }}
                >
                  Book Table
                </Button>
              </Stack>

              {/* Micro Stats */}
              <Grid container spacing={3} sx={{ pt: 4 }}>
                <Grid size={{ xs: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>50+</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>Gourmet Dishes</Typography>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>12k+</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>Happy Clients</Typography>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>15 Min</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>Avg Delivery Time</Typography>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          {/* Hero Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
                  zIndex: -1,
                  top: '-10%',
                  left: '10%',
                }
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: '8px solid white',
                  width: { xs: '100%', sm: 450 },
                  height: { xs: 350, sm: 450 },
                  transition: 'transform 0.4s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02) rotate(1deg)'
                  }
                }}
              >
                <Image
                  src="/images/burger.png"
                  alt="Premium Gourmet Burger"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
