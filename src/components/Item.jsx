/* eslint-disable react/prop-types */
function Item({item}) {
    return (
        <li>
            <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
                {item.quantity} {item.description}
            </span>
            <button style={{color: 'red', fontSize: '30px'}}>&times;</button>
        </li>
    )
}

export default Item;