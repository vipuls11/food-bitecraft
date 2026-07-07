'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Container,
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Card,
  Chip,
  alpha,
} from '@mui/material';

const GALLERY_CATEGORIES = ['All', 'Food', 'Dining Space', 'Kitchen & Chefs', 'Events'];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Gourmet Double Cheeseburger',
    category: 'Food',
    image: '/images/burger.png',
    size: { xs: 12, sm: 6, md: 4 }
  },
  {
    id: 2,
    title: 'Fresh Pepperoni Pizza',
    category: 'Food',
    image: '/images/pizza.png',
    size: { xs: 12, sm: 6, md: 4 }
  },
  {
    id: 3,
    title: 'Cozy Dining Hall',
    category: 'Dining Space',
    image: '/images/interior.png',
    size: { xs: 12, sm: 6, md: 8 }
  },
  {
    id: 4,
    title: 'Chef Marcus in the Kitchen',
    category: 'Kitchen & Chefs',
    image: '/images/chef.png',
    size: { xs: 12, sm: 6, md: 4 }
  },
  {
    id: 5,
    title: 'Premium Hand-Tossed Pizza Making',
    category: 'Kitchen & Chefs',
    image: '/images/pizza.png',
    size: { xs: 12, sm: 6, md: 4 }
  },
  {
    id: 6,
    title: 'Weekend Tasting Event',
    category: 'Events',
    image: '/images/interior.png',
    size: { xs: 12, sm: 6, md: 4 }
  },
  {
    id: 7,
    title: 'Signature Burger Prep',
    category: 'Food',
    image: '/images/burger.png',
    size: { xs: 12, sm: 6, md: 4 }
  }
];

export default function GalleryView() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const filteredItems = selectedTab === 0
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === GALLERY_CATEGORIES[selectedTab]);

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      
      {/* Categories Tab Selector */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 5, display: 'flex', justifyContent: 'center' }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          sx={{
            '& .MuiTab-root': {
              fontWeight: 650,
              fontSize: '0.95rem',
              minWidth: 100,
              py: 2,
            }
          }}
        >
          {GALLERY_CATEGORIES.map((cat, idx) => (
            <Tab key={idx} label={cat} />
          ))}
        </Tabs>
      </Box>

      {/* Gallery Grid */}
      <Grid container spacing={3}>
        {filteredItems.map((item) => (
          <Grid key={item.id} size={item.size}>
            <Card
              sx={{
                position: 'relative',
                height: 300,
                borderRadius: 4,
                overflow: 'hidden',
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                '&:hover .overlay': {
                  opacity: 1,
                },
                '&:hover img': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease-in-out',
                }}
              />

              {/* Hover Text Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  bgcolor: alpha('#0f172a', 0.6),
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: 3,
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  color: 'white',
                  zIndex: 2,
                }}
              >
                <Chip 
                  label={item.category} 
                  size="small" 
                  color="secondary" 
                  sx={{ alignSelf: 'flex-start', mb: 1, fontWeight: 700, borderRadius: 1 }} 
                />
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {item.title}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
