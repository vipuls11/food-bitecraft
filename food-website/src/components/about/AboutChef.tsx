'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Grid, Box, Typography, Stack, Chip } from '@mui/material';

export default function AboutChef() {
  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <Grid container spacing={6} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            <Chip 
              label="MEET OUR CHEF" 
              color="secondary" 
              variant="outlined" 
              sx={{ alignSelf: 'flex-start', fontWeight: 700 }} 
            />
            <Typography variant="h3" sx={{ fontSize: '2rem', fontWeight: 800 }}>
              Chef Marcus D’Angelo
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600 }}>
              Executive Chef & Founder
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Chef Marcus spent over 15 years working in Michelin-starred kitchens across Florence and New York before launching BiteCraft. His food philosophy centers on letting the natural flavors of high-quality ingredients shine without over-complicating the plate.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', pl: 2, borderLeft: '4px solid', borderColor: 'secondary.main', py: 0.5 }}>
              "Cooking is not just about technique; it is about honesty. When you use the fresh ingredients of local farmers who love their soil, the food tells the story of the land." — Chef Marcus
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box 
            sx={{ 
              position: 'relative', 
              borderRadius: 4, 
              overflow: 'hidden',
              height: 480,
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
              border: '6px solid white',
            }}
          >
            <Image 
              src="/images/chef.png" 
              alt="Chef Marcus"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
