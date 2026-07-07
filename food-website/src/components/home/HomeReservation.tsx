'use client';

import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  Button,
  TextField,
  MenuItem as MuiMenuItem,
  Alert,
  Chip,
  Stack,
} from '@mui/material';

export default function HomeReservation() {
  const [name, setName] = useState('');
  const [people, setPeople] = useState('2');
  const [date, setDate] = useState('');
  const [reserved, setReserved] = useState(false);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && date) {
      setReserved(true);
      setName('');
      setDate('');
    }
  };
  useEffect(() => {
    if (reserved) {
      const timer = setTimeout(() => {
        setReserved(false);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [reserved]);
  return (
    <Box sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Card
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            border: '1px solid',
            borderColor: 'divider',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
          }}
        >
          <Grid container spacing={5} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <Chip label="SECURE A TABLE" color="secondary" sx={{ alignSelf: 'flex-start', fontWeight: 700 }} />
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}>
                  Book a Reservation
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Planning a weekend lunch or hosting a family dinner? Skip the waiting line by reserving your table online in just 30 seconds.
                </Typography>
                {reserved && (
                  <Alert severity="success" onClose={() => setReserved(false)} sx={{ borderRadius: 2, fontWeight: 600 }}>
                    Table request sent! Check your email for confirmation code.
                  </Alert>
                )}
              </Stack>
            </Grid>

            {/* Reservation Mini Form */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box component="form" onSubmit={handleReserve}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      select
                      label="Guests"
                      value={people}
                      onChange={(e) => setPeople(e.target.value)}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    >
                      {['1', '2', '4', '6', '8+'].map((opt) => (
                        <MuiMenuItem key={opt} value={opt}>{opt} People</MuiMenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      type="datetime-local"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      slotProps={{ inputLabel: { shrink: true } }}
                      label="Preferred Date & Time"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ py: 1.5, borderRadius: 2.5, fontWeight: 700 }}
                    >
                      Book Table Now
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
