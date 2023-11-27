import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  imgUrl,
  name,
  price,
  description,
  id
}) {
  const navigate = useNavigate();
  function handleClickBuy() {
    navigate(`/product/${id}`);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <Typography color="text.secondary" fontWeight={700}>{name}</Typography>
        <Typography color="text.secondary" fontWeight={700} sx={{ marginLeft: 'auto'}}>{`$${price}`}</Typography>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" sx={{backgroundColor: 'blue', color: "white"}} onClick={handleClickBuy}>BUY</Button>
      </CardActions>
    </Card>
  );
}