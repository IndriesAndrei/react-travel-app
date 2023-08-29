/* eslint-disable react/prop-types */
import Item from "./Item";

function PackingLIst({items, onDeleteItem, onToggleItem}) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => 
                    <Item 
                        item={item} 
                        key={item.id} 
                        onDeleteItem={onDeleteItem} 
                        onToggleItem={onToggleItem} 
                    />
                )}
            </ul>
        </div>
    )
}

export default PackingLIst;