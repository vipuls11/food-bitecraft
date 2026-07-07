'use client';

import React from 'react';
import { Box } from '@mui/material';
import HomeHero from '@/components/home/HomeHero';
import HomeCategories from '@/components/home/HomeCategories';
import HomeFeatured from '@/components/home/HomeFeatured';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeReservation from '@/components/home/HomeReservation';
import HomeTestimonials from '@/components/home/HomeTestimonials';

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <HomeHero />
      <HomeCategories />
      <HomeFeatured />
      <HomeFeatures />
      <HomeReservation />
      <HomeTestimonials />
    </Box>
  );
}
