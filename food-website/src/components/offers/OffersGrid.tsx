'use client';

import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  alpha,
  useTheme,
} from '@mui/material';
import {
  LocalOffer as OfferIcon,
  ContentCopy as CopyIcon,
  Check as CheckIcon,
} from '@mui/icons-material';
import { SPECIAL_OFFERS } from '@/constants/menuData';
import { useCart } from '@/context/CartContext';

export default function OffersGrid() {
  const theme = useTheme();
  const { addToCart } = useCart();
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyCode = (id: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Grid container spacing={4}>
        {SPECIAL_OFFERS.map((offer) => {
          const isCopied = copiedId === offer.id;
          
          return (
            <Grid size={{ xs: 12, md: 6 }} key={offer.id}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  border: '2px dashed',
                  borderColor: 'primary.light',
                  boxShadow: 'none',
                  bgcolor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    width: 24,
                    height: 24,
                    bgcolor: 'background.default',
                    borderRadius: '50%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 3,
                  },
                  '&::before': { left: -13 },
                  '&::after': { right: -13 },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Stack spacing={3}>
                    
                    {/* Badge and Discount tag */}
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip 
                        label={offer.badge} 
                        color="secondary" 
                        sx={{ fontWeight: 700, borderRadius: 1.5 }} 
                      />
                      <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', color: 'primary.main' }}>
                        <OfferIcon fontSize="small" />
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>COUPON</Typography>
                      </Stack>
                    </Stack>

                    {/* Offer Info */}
                    <Stack spacing={1}>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '1.75rem' }}>
                        {offer.discount}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '1.2rem' }}>
                        {offer.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, pt: 1 }}>
                        {offer.description}
                      </Typography>
                    </Stack>

                    {/* Coupon Code Box */}
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.04),
                        border: '1px solid',
                        borderColor: alpha(theme.palette.primary.main, 0.15),
                        borderRadius: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontFamily: 'monospace', fontWeight: 800, color: 'primary.main', letterSpacing: '0.1em' }}>
                        {offer.code}
                      </Typography>
                      <Button
                        size="small"
                        color={isCopied ? 'success' : 'primary'}
                        startIcon={isCopied ? <CheckIcon /> : <CopyIcon />}
                        onClick={() => handleCopyCode(offer.id, offer.code)}
                        sx={{ 
                          fontWeight: 700, 
                          textTransform: 'none',
                          bgcolor: isCopied ? alpha(theme.palette.success.main, 0.08) : 'transparent',
                          '&:hover': {
                            bgcolor: isCopied ? alpha(theme.palette.success.main, 0.12) : alpha(theme.palette.primary.main, 0.08)
                          }
                        }}
                      >
                        {isCopied ? 'Copied!' : 'Copy Code'}
                      </Button>
                    </Box>
                  </Stack>

                  {/* Footer Button */}
                  <Box sx={{ pt: 4, display: 'flex', gap: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={addToCart}
                      sx={{
                        py: 1.5,
                        borderRadius: 2.5,
                        fontWeight: 700,
                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                      }}
                    >
                      Claim Offer & Order
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
