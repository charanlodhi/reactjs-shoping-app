import Collections from "../Components/Collections";
import {connect} from "react-redux"
import {addToCart, removeToCart} from "../Services/Actions/Actions";
const mapStateToProps = state =>({
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Collections)

//export default Collections;