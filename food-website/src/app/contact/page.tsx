'use client';

import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import PageHeader from '@/components/common/PageHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

export default function ContactPage() {
  return (
    <Box sx={{ pb: 10, bgcolor: 'background.default' }}>
      <PageHeader 
        title="Contact BiteCraft" 
        subtitle="Have feedback, hosting a special event, or want to book a table? Send us a message or visit us in person." 
        badgeText="GET IN TOUCH" 
      />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <ContactInfo />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <ContactForm />
          </Grid>
        </Grid>
        <ContactMap />
      </Container>
    </Box>
  );
}
