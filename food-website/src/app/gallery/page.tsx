'use client';

import React from 'react';
import { Box } from '@mui/material';
import PageHeader from '@/components/common/PageHeader';
import GalleryView from '@/components/gallery/GalleryView';

export default function GalleryPage() {
  return (
    <Box sx={{ pb: 10, bgcolor: 'background.default' }}>
      <PageHeader 
        title="BiteCraft Photo Gallery" 
        subtitle="Take a look behind the scenes: our crafted dishes, modern dining room, and professional kitchen." 
        badgeText="VISUAL FEAST" 
      />
      <GalleryView />
    </Box>
  );
}
