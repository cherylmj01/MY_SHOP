import React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CategoryItem from '../category-item/category-item.component';

export default function Directory({ categories }) {

    
  return (
    <Container sx={{minHeight:'100vh', display:'flex', flexDirection:'column', padding: 3}} >
      <Box sx={{ flexGrow: 1, padding:2 }}>
        <Grid container spacing={3} justifyContent="center">
        {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </Grid>
      </Box>
    </Container>
  )
}
