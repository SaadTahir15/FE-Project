import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './shop.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import items from './items';
import TopicBar from './topicBar';
import ItemPopup from './ItemPopup';

function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearchChange = (query) => {
    setSearchTerm(query);
  };

  const handleShowAll = () => {
    setSearchTerm('');
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="shop-container">
      <TopicBar 
        onShowAll={handleShowAll}
        searchQuery={searchTerm}
        onSearchChange={handleSearchChange}
        showWriteButton={false}
      />
      <div className="shop-main-content">
        <div className="shop-items">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="shop-item-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Card className="shop-custom-card" onClick={() => handleItemClick(item)}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '0' }}>
                      {item.description}
                    </Typography>
                    <Typography variant="h6" component="div">
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary">
              No items found.
            </Typography>
          )}
        </div>
      </div>

      {selectedItem && (
        <ItemPopup item={selectedItem} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default Shop;
