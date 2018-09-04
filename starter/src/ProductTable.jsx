import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';

import ProductRow from './ProductRow';

const ProductTable =()=>{

return(
  <table>
   <thread>
      <tr>
      <th>Name</th>
	  <th>Price</th>
	  </tr>
	  <tbody>
	  
    </tbody>
	<ProductCategoryRow/>
	<ProductRow/>
  </thread>
</table>
);
}

export default ProductTable;