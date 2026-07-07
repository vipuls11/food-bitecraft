'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Alert,
  Box,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [submitted]);
  return (
    <Card sx={{ p: 4, boxShadow: '0 8px 30px rgba(0,0,0,0.02)', border: '1px solid', borderColor: 'divider', borderRadius: 4 }}>
      <CardContent sx={{ p: 0 }}>
        <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 800, mb: 3 }}>
          Send a Message
        </Typography>

        {submitted && (
          <Alert
            severity="success"
            onClose={() => setSubmitted(false)}
            sx={{ borderRadius: 3, mb: 3, fontWeight: 600 }}
          >
            Thank you! Your message has been received. Our kitchen team will contact you shortly.
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Subject (Optional)"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Your Message"
                required
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: 2.5,
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
