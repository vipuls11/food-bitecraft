'use client';

import React from 'react';
import Link from 'next/link';
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  alpha,
  useTheme,
} from '@mui/material';
import {
  RestaurantMenu,
  Home as HomeIcon,
  Help as HelpIcon,
} from '@mui/icons-material';

export default function NotFound() {
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '75vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        {/* Playful Restaurant Indicator */}
        <Box
          sx={{
            p: 3,
            borderRadius: '50%',
            bgcolor: alpha(theme.palette.secondary.main, 0.08),
            color: 'secondary.main',
            mb: 4,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 24px ${alpha(theme.palette.secondary.main, 0.15)}`,
          }}
        >
          <RestaurantMenu sx={{ fontSize: 64 }} />
        </Box>

        {/* Error Code */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '6rem', sm: '8rem' },
            fontWeight: 900,
            lineHeight: 1,
            color: 'primary.main',
            letterSpacing: '-0.05em',
            mb: 1,
          }}
        >
          404
        </Typography>

        {/* Headline */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '1.75rem', sm: '2.5rem' },
            fontWeight: 800,
            mb: 2,
            color: 'text.primary',
          }}
        >
          Wandered Off the Menu?
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxW: 500,
            mx: 'auto',
            mb: 5,
            fontSize: '1.1rem',
            lineHeight: 1.6,
          }}
        >
          We couldn’t find the page you were looking for. It might have been devoured by our guests, or the recipe has changed.
        </Typography>

        {/* CTA Buttons */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'center', width: '100%' }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/"
            startIcon={<HomeIcon />}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2.5,
              fontWeight: 750,
              fontSize: '0.95rem',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.25)',
            }}
          >
            Go Back Home
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            href="/menu"
            startIcon={<RestaurantMenu />}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2.5,
              fontWeight: 750,
              fontSize: '0.95rem',
              borderWidth: 1.5,
              '&:hover': { borderWidth: 1.5 },
            }}
          >
            Browse Our Menu
          </Button>
        </Stack>

        {/* Tiny footer support link */}
        <Box sx={{ mt: 8, pt: 3, borderTop: '1px solid', borderColor: 'divider', width: '100%', maxW: 300, mx: 'auto' }}>
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', alignItems: 'center', color: 'text.secondary' }}>
            <HelpIcon fontSize="small" />
            <Typography variant="caption" component={Link} href="/faq" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}>
              Need help? Check our FAQ
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
