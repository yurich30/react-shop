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
		},
		likeProductState : {
			1: true,
			2: false
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

	addLike = (productId) => {
		this.setState((prevState) => ({
			likeProductState:{
				...prevState.likeProductState,
				[productId] : true
			}
		}))
    }

    removeLike = (productId) => {
        this.setState((prevState) => ({
			likeProductState:{
				...prevState.likeProductState,
				[productId] : false
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
					likeProductState = {this.state.likeProductState}
					removeProductFromCart = {this.removeProductFromCart}
					changeProductQuantity = {this.changeProductQuantity}
					addLike = {this.addLike}
					removeLike = {this.removeLike}
				/>
				<Footer/>
			</div>
		)
	}
}

export default App;
