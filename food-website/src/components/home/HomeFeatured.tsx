'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Grid, Box, Typography, Button, Stack, Chip } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { MENU_ITEMS } from '@/constants/menuData';
import FoodCard from '@/components/common/FoodCard';

export default function HomeFeatured() {
  const featuredDishes = MENU_ITEMS.filter((item) => item.isBestSeller).slice(0, 3);

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 6 }}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Chip label="OUR BESTSELLERS" color="secondary" sx={{ fontWeight: 700, mb: 1.5 }} />
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, mb: 1 }}>
                Taste Our Featured Dishes
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                A selected showcase of our guests absolute favorites.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="/menu"
              endIcon={<ArrowForward />}
              sx={{ borderRadius: 2.5, fontWeight: 700, borderWidth: 1.5, '&:hover': { borderWidth: 1.5 } }}
            >
              View Full Menu
            </Button>
          </Stack>
        </Stack>

        <Grid container spacing={4}>
          {featuredDishes.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <FoodCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
