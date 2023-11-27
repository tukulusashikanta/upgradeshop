import ProductTabs, { ProductTabContext } from '../ProductTabs';
import ProductList from '../ProductList';
import './style.css';
import FilterComponent, { FilterContext } from "../Filter";
import { useState } from 'react';

function HomePage() {
  const [filter, setFilter] = useState();
  const [tab, setTab] = useState('all');

  return (
    <ProductTabContext.Provider value={{ tab, setTab }}>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <div className='homepage-filter-container'>
          <ProductTabs />
        </div>
        <div className="homepage-list-container">
          <FilterComponent />
          <ProductList />
        </div>
      </FilterContext.Provider>
    </ProductTabContext.Provider>
  )
}

export default HomePage;