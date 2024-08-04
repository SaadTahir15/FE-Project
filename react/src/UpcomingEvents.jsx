// src/components/UpcomingEvents.js
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { upcomingEventsData } from './upcomingEvents';
import './upcomingEvents.css'

const UpcomingEvents = () => {
  return (
    <motion.div
      className="upcoming-events"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
    >
      <h2>Upcoming Events</h2>
      {upcomingEventsData.map((event) => (
        <Card key={event.id} className="event-card">
          <CardContent>
            <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
              {event.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
};

export default UpcomingEvents;
