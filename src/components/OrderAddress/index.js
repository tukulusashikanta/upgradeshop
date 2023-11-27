import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { fakeOrderProvider } from '../../services/order';
import { Typography } from '@mui/material';

export default function FormPropsTextFields({ handleNext }) {
  const [formValues, setFormValues] = React.useState({
    name: '',
    contact: '',
    street: '',
    city: '',
    state: '',
    landmark: '',
    zipcode: ''
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [e.target.name]: value
    });
  };

  const handleAddAddress = async () => {
    try {
        await fakeOrderProvider.createAddress(formValues);
        handleNext(formValues);
    } catch(e) {
        alert(`Error: ${e.message}`);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        width: '30%',
        margin: 'auto'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography color="text.secondary" fontWeight={700} sx={{ ml: 1 }}>Shipping Address</Typography>
        <TextField
          required
          id="outlined-required"
          fullWidth
          value={formValues.name}
          name='name'
          label="Name"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          fullWidth
          name='contact'
          value={formValues.contact}
          onChange={handleChange}
          label="Contact Number"
        />
        <TextField
          required
          id="outlined-required"
          fullWidth
          onChange={handleChange}
          name='street'
          value={formValues.street}
          label="Street"
        />
        <TextField
          required
          id="outlined-required"
          onChange={handleChange}
          fullWidth
          name='city'
          value={formValues.city}
          label="City"
        />
        <TextField
          required
          id="outlined-required"
          onChange={handleChange}
          fullWidth
          name='state'
          value={formValues.state}
          label="State"
        />
        <TextField
          required
          id="outlined-required"
          onChange={handleChange}
          fullWidth
          name='landmark'
          value={formValues.landmark}
          label="Landmark"
        />
        <TextField
          required
          id="outlined-required"
          onChange={handleChange}
          fullWidth
          name='zipcode'
          value={formValues.zipcode}
          label="Zip Code"
        />
        <Button variant="contained"  size="small" sx={{ backgroundColor: 'blue', color: "white", ml: 1}} onClick={handleAddAddress}>Save Address</Button>
      </div>
    </Box>
  );
}