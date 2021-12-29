import React from 'react'
import {Button,Menu,MenuList} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Box ,MenuItem} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const useStyle=makeStyles({
    drop:{
        minWidth: '100px', 
        // minWidth:'100px',
        // marginLeft: '50px', 
        marginTop: 20, 
        marginBottom: 20 
    }
})
const languages = ["Africa", "Monaco", "Australia", "Melanesia", "Fiji"];



function Drop() {
    const [languageAnchorEL, setLanguageAnchorEL] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (e) => 
  {
      setLanguageAnchorEL(e.currentTarget)
};
  const handleClose = () => {
      setLanguageAnchorEL(null);
  }
  const handleSelect = (index) => {
    setSelectedIndex(index);
    handleClose();
  };
    const classes=useStyle();
    return (
        <Box 
        className={classes.drop}>
         <Button style={{ borderRadius:15,minWidth: '150px'}}
         variant='outlined'
            onClick={handleOpen}
            color="inherit"
            endIcon={<KeyboardArrowDownIcon />}
          >
            {languages[selectedIndex] || "Select Language"}
          </Button>
          <Menu
            open={languageAnchorEL}
            anchorEl={languageAnchorEL}
            onClose={handleClose}
          >
            {languages.map((item, index) => (
              <MenuItem
                selected={selectedIndex === index}
                onClick={() => handleSelect(index)}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>   

          </Box>
    )
}

export default Drop;


