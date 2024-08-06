import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button, Card, CardContent, Typography, IconButton } from '@mui/material';
import { Email, Phone, Instagram, Twitter, Facebook } from '@mui/icons-material';
import './contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contacts-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      <motion.div
        className="contacts-form"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {submitted ? (
          <motion.div
            className="thank-you-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Thank You!
            </Typography>
            <Typography variant="body1">
              Your message has been sent successfully. We will get back to you soon.
            </Typography>
          </motion.div>
        ) : (
          <Card className="form-card">
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: '#ddd' } }}
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ style: { color: '#ddd' } }}
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  InputLabelProps={{ style: { color: '#ddd' } }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="submit-button"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </motion.div>

      <div className="contact-info">
        <Typography variant="h6" className="contact-heading">Contact Information</Typography>
        <div className="contact-details">
          <IconButton aria-label="email" color="primary">
            <Email />
          </IconButton>
          <Typography variant="body1">email@example.com</Typography>
        </div>
        <div className="contact-details">
          <IconButton aria-label="phone" color="primary">
            <Phone />
          </IconButton>
          <Typography variant="body1">+123 456 7890</Typography>
        </div>
        <div className="social-media">
          <IconButton aria-label="instagram" color="primary">
            <Instagram />
          </IconButton>
          <IconButton aria-label="twitter" color="primary">
            <Twitter />
          </IconButton>
          <IconButton aria-label="facebook" color="primary">
            <Facebook />
          </IconButton>
        </div>
      </div>

      <footer className="footer">
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Football Pulse PK. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default Contacts;
