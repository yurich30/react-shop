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
		productsInCart: {
			1:5,
			2:3,
		}
	}

	addProductToCart = (productId, count) => {
		this.setState((prevState) =>({
				productsInCart:{
					...prevState.productsInCart,
					[productId]:(prevState.productsInCart[productId] || 0) + count
				}
		}))
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
