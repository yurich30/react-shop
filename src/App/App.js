import React, { Component } from "react"
import '../common/style/reset.css'
import '../common/style/base.css'



import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
	state = {
		productsInCart: {
			1:5,
			2:3,
			4:5,
		}
		// cartData:{
		// 	count:0,
		// 	price:0,
		// }
	}

	addProductToCart = (count, price) => {
		this.setState((prevState) => ({
			cartData: {
				count:prevState.cartData.count + count,
				price:prevState.cartData.price + (price*count),
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
					addProductToCart = {this.addProductToCart}
				/>
				<Footer/>
			</div>
		)
	}
}

export default App;
