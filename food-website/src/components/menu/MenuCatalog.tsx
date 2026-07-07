'use client';

import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import FoodCard from '@/components/common/FoodCard';
import { MenuItem } from '@/constants/menuData';

interface MenuCatalogProps {
  filteredItems: MenuItem[];
  onReset: () => void;
}

export default function MenuCatalog({ filteredItems, onReset }: MenuCatalogProps) {
  return (
    <>
      {filteredItems.length > 0 ? (
        <Grid container spacing={4}>
          {filteredItems.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <FoodCard item={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
            No menu items matched your search filters.
          </Typography>
          <Button variant="outlined" color="primary" onClick={onReset}>
            Reset Filters
          </Button>
        </Box>
      )}
    </>
  );
}
