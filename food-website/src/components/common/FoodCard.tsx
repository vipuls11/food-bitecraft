'use client';

import React from 'react';
import Image from 'next/image';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack,
  alpha,
  useTheme,
} from '@mui/material';
import {
  Star as StarIcon,
  ShoppingBag as ShoppingBagIcon,
  LocalPizza,
  Restaurant,
  EmojiFoodBeverage,
  Icecream,
  Fastfood,
  Spa,
} from '@mui/icons-material';
import { MenuItem } from '@/constants/menuData';
import { useCart } from '@/context/CartContext';

interface FoodCardProps {
  item: MenuItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  const theme = useTheme();
  const { addToCart } = useCart();
  const isPizza = item.category === 'Pizza';
  const hasCustomImage = item.image && (item.image === '/images/burger.png' || item.image === '/images/pizza.png');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Pizza': return <LocalPizza />;
      case 'Burgers': return <Fastfood />;
      case 'Starters': return <Restaurant />;
      case 'Main Course': return <Restaurant />;
      case 'Desserts': return <Icecream />;
      case 'Drinks': return <EmojiFoodBeverage />;
      default: return <LocalPizza />;
    }
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
          borderColor: 'primary.main',
        },
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      
      {/* Bestseller Badge */}
      {item.isBestSeller && (
        <Chip 
          label="🔥 Best Seller" 
          size="small" 
          color="secondary" 
          sx={{ 
            position: 'absolute', 
            top: 16, 
            right: 16, 
            zIndex: 10,
            fontWeight: 700 
          }} 
        />
      )}

      {/* Image Block */}
      <Box sx={{ position: 'relative', height: 200, width: '100%', bgcolor: 'grey.100' }}>
        {hasCustomImage ? (
          <Image 
            src={item.image} 
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          // Gradient Fallback Block
          <Box 
            sx={{ 
              height: '100%', 
              width: '100%', 
              background: isPizza 
                ? 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' 
                : 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexDirection: 'column',
              gap: 1
            }}
          >
            {getCategoryIcon(item.category)}
            <Typography variant="button" sx={{ fontWeight: 800, letterSpacing: '0.1em' }}>
              {item.category}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Content Block */}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 2 }}>
        <Stack spacing={1}>
          
          {/* Veg / Non-Veg and Rating */}
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Chip 
              label={item.isVeg ? '🌱 Veg' : '🥩 Non-Veg'} 
              size="small"
              color={item.isVeg ? 'success' : 'error'}
              variant="outlined"
              sx={{ fontWeight: 700, borderRadius: 1.5, height: 24, fontSize: '0.75rem' }} 
            />
            <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
              <StarIcon sx={{ color: '#fbbf24', fontSize: 16 }} />
              <Typography variant="body2" sx={{ fontWeight: 700 }}>{item.rating}</Typography>
            </Stack>
          </Stack>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 700, fontSize: '1.2rem', lineHeight: 1.3 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
            {item.description}
          </Typography>
        </Stack>
      </CardContent>

      {/* Actions Block */}
      <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
          ${item.price.toFixed(2)}
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          onClick={addToCart}
          startIcon={<ShoppingBagIcon />}
          sx={{ 
            borderRadius: 2, 
            px: 2.5,
            fontSize: '0.85rem',
            boxShadow: 'none',
            '&:hover': {
              bgcolor: 'primary.dark'
            }
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
