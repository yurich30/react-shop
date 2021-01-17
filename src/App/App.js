import React, { Component } from "react"
import '../common/style/reset.css'
import '../common/style/base.css'
import {omit} from 'lodash'



import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import productsData from './Main/Products/productsData'

class App extends Component {
	state = {
		productsInCart: {
			1:5,
			2:3
		}
	}

	addProductToCart = (productId, count) => {
		this.setState((prevState) => ({
				productsInCart:{
					...prevState.productsInCart,
					[productId]:(prevState.productsInCart[productId] || 0) + count
				}
		}))
	}

	removeProductFromCart = (productId) => {
		this.setState((prevState) => ({
			productsInCart:omit(prevState.productsInCart,productId)
		}))
	}

	changeProductQuantity = (productId,quantity) => {
		this.setState((prevState) => ({
					productsInCart:{
						...prevState.productsInCart,
						[productId]:quantity
					}
				}))
	}

	render(){
		return (
			<div>
				<Header
					productsInCart = {this.state.productsInCart}
				/>
				<Main
					productsData = {productsData}
					addProductToCart = {this.addProductToCart}
					productsInCart = {this.state.productsInCart}
					removeProductFromCart = {this.removeProductFromCart}
					changeProductQuantity = {this.changeProductQuantity}
				/>
				<Footer/>
			</div>
		)
	}
}

export default App;
