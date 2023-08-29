/* eslint-disable react/prop-types */
import Item from "./Item";

function PackingLIst({items, onDeleteItem}) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />)}
            </ul>
        </div>
    )
}

export default PackingLIst;