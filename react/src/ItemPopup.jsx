import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardMedia, Typography, Button, IconButton, TextField } from '@mui/material';
import { Close, Add, Remove } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemPopup.css';

const ItemPopup = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    toast.success('Item added to cart!', {
      position: "top-right", // Changed position to top-right for better visibility
      autoClose: 2000,
      hideProgressBar: false, // Show progress bar for better user feedback
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: {
        backgroundColor: '#4CAF50', // Green background for visibility
        color: '#fff',
        fontSize: '16px',
        fontWeight: 'bold'
      },
      progressStyle: {
        backgroundColor: '#388E3C'
      }
    });
    setTimeout(() => {
      onClose();
    }, 2000); // Close the popup after 2 seconds
  };

  return (
    <>
      <motion.div
        className="item-popup"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ 
          type: 'tween', 
          ease: 'easeOut', 
          duration: 0.5 
        }}
      >
        <div className="popup-header">
          <Typography variant="h6">Item Details</Typography>
          <IconButton onClick={onClose} color="error">
            <Close />
          </IconButton>
        </div>
        <Card className="item-popup-card">
          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
          />
          <CardContent>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="body2">{item.description}</Typography>
            <Typography variant="h6">${item.price}</Typography>
            <div className="quantity-controls">
              <IconButton onClick={handleDecrease}>
                <Remove />
              </IconButton>
              <TextField
                value={quantity}
                inputProps={{ min: 1, style: { textAlign: 'center' } }}
                type="number"
                variant="outlined"
                size="small"
                disabled
              />
              <IconButton onClick={handleIncrease}>
                <Add />
              </IconButton>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="add-to-cart-button"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default ItemPopup;
