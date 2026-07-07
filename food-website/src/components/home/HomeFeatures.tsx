'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Grid, Box, Typography, Button, Stack, Chip, Card, CardContent } from '@mui/material';
import { ArrowForward, Restaurant, LocalShipping, ThumbUp } from '@mui/icons-material';

export default function HomeFeatures() {
  return (
    <>
      {/* Mini About Us Section */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="lg">
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
                <Chip label="ABOUT US" color="primary" sx={{ alignSelf: 'flex-start', fontWeight: 700 }} />
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}>
                  Dine With Integrity
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  BiteCraft was founded on the idea that fast and casual food should not sacrifice quality. We prioritize organic vegetables, grass-fed meat cuts, and traditional wood-fired cooking. Our space is cozy, inviting, and built for building memories.
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    href="/about"
                    endIcon={<ArrowForward />}
                    sx={{ borderRadius: 2.5, px: 3, py: 1.2, fontWeight: 700 }}
                  >
                    Read Our Story
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ mb: 8, textAlign: 'center', alignItems: 'center' }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}>
              Why Choose BiteCraft?
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxW: 600 }}>
              We set the gold standard in premium food delivery, from select local farms straight to your culinary experience.
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {[
              {
                icon: <Restaurant sx={{ fontSize: 32, color: '#6366f1' }} />,
                title: 'Hygienic Kitchen',
                desc: 'We enforce strict sanitation regulations and maintain an open-view kitchen so you can see your food made live.'
              },
              {
                icon: <LocalShipping sx={{ fontSize: 32, color: '#f59e0b' }} />,
                title: 'Express Delivery',
                desc: 'Our logistics network ensures your food arrives piping hot and packed in temperature-controlled bags.'
              },
              {
                icon: <ThumbUp sx={{ fontSize: 32, color: '#10b981' }} />,
                title: 'Farm to Table',
                desc: 'We support local farms, sourcing only premium organic vegetables, free-range meat, and rich herbs.'
              }
            ].map((feat, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Card
                  sx={{
                    height: '100%',
                    p: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'white',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 10px 20px rgba(99, 102, 241, 0.05)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2.5, display: 'inline-flex', p: 1.5, borderRadius: 3, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
                      {feat.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                      {feat.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feat.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
