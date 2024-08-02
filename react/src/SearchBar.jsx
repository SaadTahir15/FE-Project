import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ searchQuery, onSearchChange }) {
  const handleSearchChange = (event) => {
    const query = event.target.value;
    onSearchChange(query);
  };

  const handleSearchClick = () => {
    onSearchChange(searchQuery);
  };

  return (
    <TextField
      className="search-bar"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search..."
      variant="outlined"
      size="small"
      sx={{
        flexGrow: 1,
        backgroundColor: 'linear-gradient(90deg, rgba(221, 221, 221, 1) 42%, rgba(118, 136, 91, 1) 100%);',
        border: 'none',
        borderRadius: '5px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        '& .MuiOutlinedInput-root': {
          paddingRight: '0', // Adjust padding to make space for the button
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleSearchClick}
              sx={{
                color: 'black',
                '&:hover': {
                  backgroundColor: '#DDDDDD',
                },
                padding: '5px', // Ensure button is padded and visible
              }}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
