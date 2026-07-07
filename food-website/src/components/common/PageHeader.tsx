'use client';

import React from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badgeText: string;
}

export default function PageHeader({ title, subtitle, badgeText }: PageHeaderProps) {
  return (
    <Box 
      sx={{ 
        bgcolor: 'text.primary', 
        color: 'white', 
        py: 8, 
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      }}
    >
      <Container maxWidth="md">
        <Chip label={badgeText} color="secondary" sx={{ fontWeight: 700, mb: 2 }} />
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 800, 
            mb: 2, 
            fontSize: { xs: '2.25rem', md: '3.5rem' } 
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'grey.400', 
            fontWeight: 400, 
            maxW: 600, 
            mx: 'auto', 
            fontSize: '1.1rem' 
          }}
        >
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
}
