import React from 'react';
import ProductTable from './ProductTable';

import SearchBar from './SearchBar';

export default class FilterableProductTable extends React.Component{
	constructor(props){
		super(props);
			
			this.state = {
				filterText:"",
				inStockOnly:false
			}
			this.handleFilterTextChange = (filterText)=>{
				this.setState({filterText});
			} 
            this.handleInStockOnlyChange = (inStockOnly)=>{
                  this.setState({inStockOnly});
			}
		}			
				
	render(){
		return(
		<div>
		 <SearchBar/>
		 <ProductTable/>
		</div>
		);
	}
}

