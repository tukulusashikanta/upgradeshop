import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './style.css';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

export default function ProductDetail({imgUrl, name, description, price, handleOrder}) {
  const [quantity, setQuantity] = React.useState(0);

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className='product-detail-container'>
      <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            height="220"
            image={imgUrl}
            alt="Paella dish"
          />
          <Box>
            <CardActions disableSpacing>
              <Typography color="text.secondary" fontWeight={700}>{name}</Typography>
            </CardActions>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography color="text.secondary" fontWeight={700} sx={{ marginLeft: 'auto', marginTop: 2 }}>{`$${price}`}</Typography>
              <FormControl fullWidth sx={{ marginTop: 2 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Enter Quantity *</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  label="Enter Quantity"
                  type='number'
                  value={quantity}
                  onChange={handleChangeQuantity}
                />
              </FormControl>
            </CardContent>
            <CardActions>
              <Button variant="contained"  size="small" disabled={quantity <= 0} sx={{ backgroundColor: 'blue', color: "white"}} onClick={handleOrder}>PLACE ORDER</Button>
            </CardActions>
          </Box>
      </Card>
    </div>
  );
}