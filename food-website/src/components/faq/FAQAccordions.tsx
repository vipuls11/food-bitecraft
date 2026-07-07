'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  alpha,
  useTheme,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Help as HelpIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { FAQS } from '@/constants/menuData';

export default function FAQAccordions() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Stack spacing={2}>
        {FAQS.map((faq) => {
          const panelId = `panel-${faq.id}`;
          const isCurrentExpanded = expanded === panelId;
          
          return (
            <Accordion
              key={faq.id}
              expanded={isCurrentExpanded}
              onChange={handleChange(panelId)}
              sx={{
                borderRadius: '12px !important',
                border: '1px solid',
                borderColor: isCurrentExpanded ? 'primary.main' : 'divider',
                boxShadow: 'none',
                '&::before': { display: 'none' }, // Remove default divider line
                overflow: 'hidden',
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: 'primary.main',
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: isCurrentExpanded ? 'primary.main' : 'text.secondary' }} />}
                aria-controls={`${panelId}-content`}
                id={`${panelId}-header`}
                sx={{
                  px: 3,
                  py: 1,
                  bgcolor: isCurrentExpanded ? alpha(theme.palette.primary.main, 0.03) : 'white',
                }}
              >
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <HelpIcon sx={{ color: isCurrentExpanded ? 'primary.main' : 'text.secondary', fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 750, color: 'text.primary' }}>
                    {faq.question}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, py: 3, bgcolor: 'white' }}>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, pl: 4.5 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Stack>

      {/* Contact CTA card */}
      <Box
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 4,
          bgcolor: 'white',
          border: '1px solid',
          borderColor: 'divider',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Still have questions?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Our customer service desk is open daily from 9:00 AM to 10:00 PM. We will get back to you immediately.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/contact"
            sx={{ borderRadius: 2.5, fontWeight: 700, px: 3 }}
          >
            Contact Support
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<PhoneIcon />}
            href="tel:+15551234567"
            sx={{ borderRadius: 2.5, fontWeight: 700, px: 3 }}
          >
            Call (555) 123-4567
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
