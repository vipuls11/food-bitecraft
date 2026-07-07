'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { Restaurant } from '@mui/icons-material';

export default function ContactMap() {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 800, mb: 4, textAlign: 'center' }}>
        Find Our Location
      </Typography>
      <Box
        sx={{
          height: 400,
          width: '100%',
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexDirection: 'column',
          gap: 2,
          boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
        }}
      >
        <Box 
          sx={{ 
            bgcolor: 'primary.main', 
            color: 'white', 
            p: 2, 
            borderRadius: '50%',
            display: 'flex', 
            alignItems: 'center',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': { boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.4)' },
              '70%': { boxShadow: '0 0 0 15px rgba(99, 102, 241, 0)' },
              '100%': { boxShadow: '0 0 0 0 rgba(99, 102, 241, 0)' }
            }
          }}
        >
          <Restaurant fontSize="large" />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '-0.02em', mb: 0.5 }}>
          BiteCraft Restaurant Map
        </Typography>
        <Typography variant="body2" sx={{ color: 'grey.400' }}>
          Mock Google Map Container - 123 Gourmet Blvd, New York, NY
        </Typography>
      </Box>
    </Box>
  );
}
