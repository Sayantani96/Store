import React from 'react'
import { useFilterContext } from '../../Context/FilterContext';
import GridView from '../ProductViews/GridView';
import ListView from '../ProductViews/ListView';

const ProductList = () => {
const { filteredProducts,gridView}=useFilterContext();

  if(gridView===true){
    return <GridView products={filteredProducts}/>
  }
  if(gridView===false){
    return <ListView products={filteredProducts}/>
  }
}

export default ProductList