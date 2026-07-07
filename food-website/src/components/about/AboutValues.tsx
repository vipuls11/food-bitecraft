'use client';

import React from 'react';
import { Container, Grid, Box, Typography, Card, CardContent, alpha, useTheme } from '@mui/material';
import { WorkspacePremium, Spa, EmojiFoodBeverage, Handshake } from '@mui/icons-material';

export default function AboutValues() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <Typography variant="h3" sx={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', mb: 8 }}>
        Core Philosophy & Values
      </Typography>
      <Grid container spacing={4}>
        {[
          {
            icon: <WorkspacePremium sx={{ color: 'primary.main', fontSize: 32 }} />,
            title: 'Uncompromised Quality',
            desc: 'From choice cuts of meat to hand-picked basil leaves, we never compromise on the freshness or origin of our ingredients.'
          },
          {
            icon: <Spa sx={{ color: 'primary.main', fontSize: 32 }} />,
            title: 'Local Sustainability',
            desc: 'We support local farms and minimize food waste. Over 80% of our organic produce is sourced within a 100-mile radius.'
          },
          {
            icon: <EmojiFoodBeverage sx={{ color: 'primary.main', fontSize: 32 }} />,
            title: 'Artisanal Crafting',
            desc: 'We believe food is art. Our dough is fermented for 48 hours, and our slow-cooked sauces are simmered daily.'
          },
          {
            icon: <Handshake sx={{ color: 'primary.main', fontSize: 32 }} />,
            title: 'Community Warmth',
            desc: 'Every client is treated as a guest in our home. We strive to create memories, not just sell meals.'
          }
        ].map((value, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
            <Card 
              sx={{ 
                height: '100%', 
                boxShadow: 'none', 
                border: '1px solid', 
                borderColor: 'divider',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s'
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.06), mb: 2 }}>
                  {value.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {value.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
