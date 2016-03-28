var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
import ShoppingCart from './components/shoppingCart';
import {connect} from 'react-redux';
import store from './store';
import AddToCart from './actions/addToCart';

var hello = React.createClass({
	render: function(){
		return <ShoppingCart {...this.props} />
	}
});

var mapDispatchToProps = function(dispatch) {
	return {
		addToCart(product) {dispatch(AddToCart(product))}
	};
}

var mapStateToProps = function(state) {
	const products = state['products'];
	return { products: products };
};

var Hello = connect(mapStateToProps, mapDispatchToProps)(hello);
ReactDOM.render(<Provider store={store()}><Hello /></Provider>, document.getElementById('react'));
