'use client';

import React from 'react';
import {
  Grid,
  Card,
  TextField,
  Tabs,
  Tab,
  FormControlLabel,
  Switch,
  Typography,
  InputAdornment,
  Box,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

interface MenuControlsProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedTab: number;
  setSelectedTab: (val: number) => void;
  onlyVeg: boolean;
  setOnlyVeg: (val: boolean) => void;
  categories: string[];
}

export default function MenuControls({
  searchQuery,
  setSearchQuery,
  selectedTab,
  setSelectedTab,
  onlyVeg,
  setOnlyVeg,
  categories,
}: MenuControlsProps) {
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      {/* Search and Veg Toggle Controls */}
      <Card sx={{ p: 2.5, mb: 5, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid', borderColor: 'divider' }}>
        <Grid container spacing={3} sx={{ alignItems: 'center' }}>
          
          {/* Search Input */}
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search for pizzas, burgers, pastas, desserts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: 3, bgcolor: 'background.default' }
                }
              }}
            />
          </Grid>

          {/* Veg Switch */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
            <FormControlLabel
              control={
                <Switch
                  checked={onlyVeg}
                  onChange={(e) => setOnlyVeg(e.target.checked)}
                  color="success"
                />
              }
              label={
                <Typography variant="body2" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  🌱 Vegetarian Items Only
                </Typography>
              }
            />
          </Grid>

        </Grid>
      </Card>

      {/* Categories Tabs Scrollable */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 5 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          sx={{
            '& .MuiTab-root': {
              fontWeight: 600,
              fontSize: '0.95rem',
              minWidth: 100,
              py: 2,
            }
          }}
        >
          {categories.map((cat, idx) => (
            <Tab key={idx} label={cat} />
          ))}
        </Tabs>
      </Box>
    </>
  );
}
