'use client';

import React from 'react';
import { Box } from '@mui/material';
import PageHeader from '@/components/common/PageHeader';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import AboutChef from '@/components/about/AboutChef';
import AboutIngredients from '@/components/about/AboutIngredients';

export default function AboutPage() {
  return (
    <Box sx={{ pb: 10, bgcolor: 'background.default' }}>
      <PageHeader 
        title="About BiteCraft" 
        subtitle="Rooted in tradition, crafted with passion, and served with warmth. Discover our journey of culinary design." 
        badgeText="OUR STORY" 
      />
      <AboutStory />
      <AboutValues />
      <AboutChef />
      <AboutIngredients />
    </Box>
  );
}
