import ProductCard from "../ProductCard";
import './style.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { productList } from './productlist';
import { useFilter } from '../Filter';
import { useTab } from '../ProductTabs';

function getProductByTab(product, tab) {
  switch (tab) {
    case 'all':
      return product;
    case 'apparel':
      return [...product].filter(function(a) {
        return a.category === 'apparel';
      });
    case 'electronics':
      return [...product].filter(function(a, b) {
        return a.category === 'electronics';
      });
    case 'footwear':
      return [...product].filter(function(a, b) {
        return a.category === 'footwear';
      });
    case 'personal':
      return [...product].filter(function(a, b) {
        return a.category === 'personal';
      });
    default:
      return product;
  } 
}

function sortProduct(product, sort) {
  switch (sort) {
    case 'price_high':
      return [...product].sort(function(a, b) {
        return b.price - a.price;
      });
    case 'price_low':
      return [...product].sort(function(a, b) {
        return a.price - b.price;
      });
    case 'new':
      return [...product].sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    case 'default':
    default:
      return product;
  }
} 

function ProductList() {
  const { filter } = useFilter();
  const { tab } = useTab();

  const categoryProduct = getProductByTab(productList, tab);
  const sorttedProducts = sortProduct(categoryProduct, filter);

  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {sorttedProducts.map((item, index) => (
          <Grid item xs={2} sm={2} md={4} key={index}>
            <ProductCard {...item}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProductList;