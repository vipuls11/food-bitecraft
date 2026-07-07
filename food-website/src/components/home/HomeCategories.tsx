'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Grid, Card, Box, Typography, Stack, alpha } from '@mui/material';

const CATEGORIES_DATA = [
  { name: 'Pizza', image: '/images/pizza.png', count: '4 Items' },
  { name: 'Burgers', image: '/images/burger.png', count: '3 Items' },
  { name: 'Starters', image: '/images/burger.png', count: '3 Items' },
];

export default function HomeCategories() {
  return (
    <Box sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 6, textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}>
            Browse Food Categories
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxW: 550 }}>
            Craving something specific? Explore our categories from starters to main courses.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {CATEGORIES_DATA.map((cat, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <Card
                component={Link}
                href="/menu"
                sx={{
                  position: 'relative',
                  height: 180,
                  borderRadius: 4,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  '&:hover img': { transform: 'scale(1.05)' },
                  '&:hover .overlay': { bgcolor: alpha('#0f172a', 0.5) },
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    bgcolor: alpha('#0f172a', 0.45),
                    transition: 'background-color 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    zIndex: 2
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>{cat.name}</Typography>
                  <Typography variant="caption" sx={{ letterSpacing: '0.1em', fontWeight: 650 }}>{cat.count}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
