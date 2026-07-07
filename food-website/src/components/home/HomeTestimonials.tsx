'use client';

import React from 'react';
import { Container, Grid, Box, Typography, Stack, Chip } from '@mui/material';
import { TESTIMONIALS } from '@/constants/menuData';
import TestimonialCard from '@/components/common/TestimonialCard';

export default function HomeTestimonials() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 8, textAlign: 'center', alignItems: 'center' }}>
          <Chip label="REVIEWS" color="primary" sx={{ fontWeight: 700 }} />
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}>
            What Our Guests Say
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxW: 550 }}>
            Hear directly from our regular diners about their food experiences.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {TESTIMONIALS.map((test) => (
            <Grid size={{ xs: 12, md: 4 }} key={test.id}>
              <TestimonialCard testimonial={test} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
