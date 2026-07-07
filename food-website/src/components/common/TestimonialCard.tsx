'use client';

import React from 'react';
import { Card, CardContent, Stack, Box, Typography } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import { TestimonialItem } from '@/constants/menuData';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        p: 3, 
        border: '1px solid', 
        borderColor: 'divider', 
        boxShadow: 'none',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
        }
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Stack spacing={2.5}>
          {/* Rating stars */}
          <Stack direction="row" spacing={0.5} sx={{ color: '#fbbf24', alignItems: 'center' }}>
            {Array.from({ length: testimonial.rating }).map((_, idx) => (
              <StarIcon key={idx} fontSize="small" />
            ))}
          </Stack>
          
          {/* Review text */}
          <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
            "{testimonial.text}"
          </Typography>
          
          {/* User Profile */}
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ 
              alignItems: 'center', 
              pt: 2, 
              borderTop: '1px solid', 
              borderColor: 'divider' 
            }}
          >
            <Box 
              sx={{ 
                fontSize: '1.75rem', 
                bgcolor: 'grey.100', 
                p: 1, 
                borderRadius: '50%', 
                width: 44, 
                height: 44, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              {testimonial.image}
            </Box>
            <Stack>
              <Typography variant="subtitle2" sx={{ fontWeight: 750 }}>
                {testimonial.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {testimonial.role}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
