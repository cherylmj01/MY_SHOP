import { CardActionArea, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import React from 'react'

export default function CategoryItem({ category }) {

  const { imageUrl, title } = category;

  return (
    <Grid id="category-container" item xs={12} sm={6} md={4}>
    <Card sx={{ display:'flex', flexDirection: 'column', height:'100%'}}>
      <CardActionArea sx={{height: '100%'}}>
        <Box sx={{ flexGrow: 1, backgroundImage:`url(${imageUrl})`, backgroundSize: 'cover', height: 300, position:'relative', borderRadius: 1 }}>
          <Box sx={{ position:'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', display:'flex', alignItems:'center', justifyContent:'center',borderRadius: 1}}>
          <CardContent sx={{ textAlign:'center', color:'white'}}>
            <Typography variant='h5' gutterBottom>{title}</Typography>
            <Typography variant='button' display='block' sx={{backgroundColor: '#ff4081', padding: '8px 16px', borderRadius: 1}}>Shop Now</Typography>
          </CardContent>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
    </Grid>

  )
}
