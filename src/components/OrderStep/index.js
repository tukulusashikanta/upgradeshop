import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { productList } from '../ProductList/productlist';
import { useParams } from 'react-router-dom';
import ProductDetail from "../ProductDetail";
import OrderAddress from '../OrderAddress';
import OrderConfirm from '../OrderConfirm';


const steps = ['Items', 'Select Address', 'Confirm Order'];

export default function HorizontalLinearStepper({ children }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [address, setAddress] = React.useState({
    name: '',
    contact: '',
    street: '',
    city: '',
    state: '',
    landmark: '',
    zipcode: ''
  });
  const { productId } = useParams();
  const productDetail = productList.find(item => item.id.toString() === productId);

  if (!productDetail) return null;

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleAddAddress = (addedAddress) => {
    setAddress({...address, ...addedAddress})
  };

  const handleNextToConfirm = (addedAddress) => {
    handleAddAddress(addedAddress)
    handleNext();
  };

  return (
    <Box sx={{ width: '80%', m: 10 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && 
            <ProductDetail {...{...productDetail, handleOrder: handleNext }}/>
          }
          {activeStep === 1 && 
            <OrderAddress handleNext={handleNextToConfirm} />
          }
          {activeStep === 2 && 
            <OrderConfirm product={productDetail} address={address} handleNext={handleNextToConfirm} />
          }
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} disabled={activeStep === 0}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}