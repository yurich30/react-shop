import React, { Component } from "react"
import '../common/style/reset.css'
import '../common/style/base.css'
import {has,update} from 'lodash'



import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import productsData from './Main/Products/productsData'

class App extends Component {
	state = {
		productsInCart: {}
	}

	addProductToCart = (productId, productCount) => {
		if (has(this.state.productsInCart, `[${productId}]`)) {
			const tempCart =	update(this.state.productsInCart, `[${productId}]`, function(count){
				return count + productCount
			});
			this.setState({tempCart})
		} else {
			const tempCart = this.state.productsInCart[productId] = productCount
			this.setState({
				...this.state.productsInCart, ...tempCart
			})
		}
	}

	render(){
		return (
			<div>
				<Header
					// cartData = {this.state.cartData}
					productsInCart = {this.state.productsInCart}
				/>
				<Main
					productsData = {productsData}
					addProductToCart = {this.addProductToCart}
				/>
				<Footer/>
			</div>
		)
	}
}

export default App;
