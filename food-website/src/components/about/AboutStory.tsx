'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Grid, Box, Typography, Stack } from '@mui/material';

export default function AboutStory() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Grid container spacing={6} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box 
            sx={{ 
              position: 'relative', 
              borderRadius: 4, 
              overflow: 'hidden',
              height: 400,
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
            }}
          >
            <Image 
              src="/images/interior.png" 
              alt="BiteCraft dining room"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            <Typography variant="h3" sx={{ fontSize: '2rem', fontWeight: 800 }}>
              A Humble Passion for Excellence
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              BiteCraft began in 2018 as a small neighborhood project powered by a single wood-fired brick oven. Our goal was simple: to combine old-world Italian cooking techniques with modern culinary styles. We spent years testing local flour blends, crafting the ultimate slow-fermented pizza dough, and sourcing directly from small organic farms.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Today, BiteCraft stands as a premium destination for food enthusiasts. We still use that original wood-fired recipe, and we still buy our herbs and vegetables from the same local farmers, ensuring every single bite feels like home.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
