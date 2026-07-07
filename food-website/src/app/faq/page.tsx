'use client';

import React from 'react';
import { Box } from '@mui/material';
import PageHeader from '@/components/common/PageHeader';
import FAQAccordions from '@/components/faq/FAQAccordions';

export default function FAQPage() {
  return (
    <Box sx={{ pb: 10, bgcolor: 'background.default' }}>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Got questions? We have answers. If you can’t find what you’re looking for, feel free to reach out." 
        badgeText="HELP & FAQ" 
      />
      <FAQAccordions />
    </Box>
  );
}
