/* eslint-disable react/prop-types */
function Stats({items}) {
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            {}
            👜 You have {numItems} on your list and you already packed {numPacked}({percentage}%)
        </footer>
    )
}

export default Stats;