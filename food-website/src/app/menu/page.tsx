'use client';

import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import { MENU_ITEMS } from '@/constants/menuData';
import PageHeader from '@/components/common/PageHeader';
import MenuControls from '@/components/menu/MenuControls';
import MenuCatalog from '@/components/menu/MenuCatalog';

const CATEGORIES = ['All', 'Starters', 'Main Course', 'Pizza', 'Burgers', 'Desserts', 'Drinks'];

export default function MenuPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyVeg, setOnlyVeg] = useState(false);

  // Filtering logic
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedTab === 0 || item.category === CATEGORIES[selectedTab];
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = !onlyVeg || item.isVeg;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  const handleReset = () => {
    setSearchQuery('');
    setOnlyVeg(false);
    setSelectedTab(0);
  };

  return (
    <Box sx={{ pb: 10, bgcolor: 'background.default' }}>
      <PageHeader 
        title="The BiteCraft Menu" 
        subtitle="Fresh, delicious dishes crafted daily by our expert chefs. Use the filters below to find your perfect meal." 
        badgeText="OUR CRAFT" 
      />
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <MenuControls 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          onlyVeg={onlyVeg}
          setOnlyVeg={setOnlyVeg}
          categories={CATEGORIES}
        />
        <MenuCatalog 
          filteredItems={filteredItems}
          onReset={handleReset}
        />
      </Container>
    </Box>
  );
}
