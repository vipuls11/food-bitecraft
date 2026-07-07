'use client';

import React from 'react';
import { Box, Typography, Stack, alpha, useTheme } from '@mui/material';
import { LocationOn, Phone, Email, AccessTime } from '@mui/icons-material';

export default function ContactInfo() {
  const theme = useTheme();

  return (
    <Stack spacing={4}>
      <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 800 }}>
        Restaurant Information
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
        We love hearing from our guests. Whether you want to enquire about catering, have food allergies, or just want to tell us about your experience, please drop us a line.
      </Typography>

      <Stack spacing={3}>
        {[
          {
            icon: <LocationOn sx={{ color: 'primary.main', fontSize: 24 }} />,
            title: 'Our Location',
            desc: '123 Gourmet Blvd, Food District, NY 10001'
          },
          {
            icon: <Phone sx={{ color: 'primary.main', fontSize: 24 }} />,
            title: 'Call Us Directly',
            desc: '(555) 123-4567'
          },
          {
            icon: <Email sx={{ color: 'primary.main', fontSize: 24 }} />,
            title: 'Email Address',
            desc: 'hello@bitecraft.com'
          },
          {
            icon: <AccessTime sx={{ color: 'primary.main', fontSize: 24 }} />,
            title: 'Opening Hours',
            desc: 'Mon - Sat: 11 AM - 10 PM | Sun: 12 PM - 9 PM'
          }
        ].map((item, index) => (
          <Stack key={index} direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
            <Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.05), display: 'flex', alignItems: 'center' }}>
              {item.icon}
            </Box>
            <Stack spacing={0.5}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
