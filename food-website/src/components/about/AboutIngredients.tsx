'use client';

import React from 'react';
import { Container, Grid, Box, Typography, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

export default function AboutIngredients() {
  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <Box 
        sx={{ 
          p: { xs: 4, md: 6 }, 
          borderRadius: 4, 
          bgcolor: 'white', 
          border: '1px solid', 
          borderColor: 'divider',
          textAlign: 'center'
        }}
      >
        <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 800, mb: 2 }}>
          Why Dine With Us?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxW: 600, mx: 'auto', mb: 5 }}>
          We adhere to rigorous quality checkpoints to deliver the cleanest and healthiest dining experience.
        </Typography>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {[
            '100% Organic Vegetables',
            'Non-GMO & Sourced Locally',
            'Fermented Dough (Aids Digestion)',
            'Antibiotic-Free Halal Meats',
            'Hygienic Open-Kitchen Concept',
            'Sustainable Eco-Friendly Packaging'
          ].map((check, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: { xs: 'flex-start', sm: 'center' }, px: 2 }}>
                <CheckCircle sx={{ color: 'secondary.main' }} />
                <Typography variant="body1" sx={{ fontWeight: 600 }}>{check}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
