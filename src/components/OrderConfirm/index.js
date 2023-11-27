import { Box, Button, Typography } from "@mui/material";
import { fakeOrderProvider } from "../../services/order";

function OrderConfirm({product, address, handleNext }) {

  const handleOrder = async () => {
    try {
      await fakeOrderProvider.placeOrder({...product, ...address});
      alert('Order placed successfully');
      handleNext();
  } catch(e) {
      alert(`Error: ${e.message}`);
  }
  }
  return (
    <>
      <Box sx={{ display: 'flex', width: '60%', margin: 'auto', mt: 10 }}>
        <Box sx={{ width: '50%', mr: 2, borderRight: '1px solid', padding: 2}}>
          <Typography color="text.secondary" fontWeight={700}>{product.name}</Typography>
          <Typography variant="body2" color="text.secondary">{product.description}</Typography>
          <Typography variant="body2" color="text.secondary">Total Price: $100</Typography>
        </Box>
        <Box>
          <Typography color="text.secondary" fontWeight={700}>Address Details:</Typography>
          <Typography variant="body2" color="text.secondary">{address.name}</Typography>
          <Typography variant="body2" color="text.secondary">Contact Number: {address.contate}</Typography>
          <Typography variant="body2" color="text.secondary">{address.state}</Typography>
          <Typography variant="body2" color="text.secondary">{address.city}</Typography>
          <Typography variant="body2" color="text.secondary">{address.zipcode}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', width: '60%', margin: 'auto', mt: 10, justifyContent:'center' }}>
        <Button variant="contained"  size="small" sx={{ backgroundColor: 'blue', color: "white"}} onClick={handleOrder}>PLACE ORDER</Button>
      </Box>
    </>
  );
}

export default OrderConfirm;