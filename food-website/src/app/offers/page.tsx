'use client';

import React from 'react';
import { Box } from '@mui/material';
import PageHeader from '@/components/common/PageHeader';
import OffersGrid from '@/components/offers/OffersGrid';

export default function OffersPage() {
  return (
    <Box sx={{ pb: 10, bgcolor: 'background.default' }}>
      <PageHeader 
        title="Special Deals & Offers" 
        subtitle="Get more flavor for less. Apply these promo codes at checkout or click below to claim your savings." 
        badgeText="PROMOTIONS" 
      />
      <OffersGrid />
    </Box>
  );
}
