import PropTypes from 'prop-types';

function ShoppingListItem({item,quantity,completed}){
    const styles = {color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : "none",}
    return <li style={styles}>{item} - {quantity}</li>
    /*<li key={i.id}
        style={{
            color: i.completed ? "grey" : "red",
            textDecoration: i.completed ? "line-through" : "none",
            }}>{i.item} - {i.quantity}</li>*/
}

ShoppingListItem.propTypes = {
    item: PropTypes.string,
    quantity: PropTypes.number,
    completed : PropTypes.bool,
}
export default ShoppingListItem;