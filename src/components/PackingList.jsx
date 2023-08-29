/* eslint-disable react/prop-types */
import Item from "./Item";

const initialItems = [
    {id: 1, description: 'Passports', quantity: 2, packed: false},
    {id: 2, description: 'Socks', quantity: 12, packed: true},
    {id: 3, description: 'Charger', quantity: 1, packed: false},
  ]

function PackingLIst({items}) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => <Item item={item} key={item.id} />)}
            </ul>
        </div>
    )
}

export default PackingLIst;