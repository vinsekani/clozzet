

export default function CartItem({ name, size, price, img, cartCopy, setCartCopy }) {
    function handleCartItem(action, product) {
        if (action === "increment") {
            const copy = [...cartCopy];
            copy.push(product);
            setCartCopy(copy);
        }
    }

    return (
        <div className="p-6 space-x-60">
            {console.log(cartCopy)}

            <div className="flex items-center justify-between border-b border-[#F0EFEF] pb-4 mb-4">
                <div className="flex items-center space-x-4">
                    <img src={img} alt={name} className="w-[100px]" />
                    <div>
                        <h3 className="text-lg font-medium">{name}</h3>
                        <p className="text-gray-500 text-sm">{size}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-60">
                    <div className="flex items-center border border-[#928E8E] rounded">
                        <button className="px-2 py-1 text-[#928E8E]">-</button>
                        <span className="px-4 py-1">
                            {cartCopy && cartCopy.filter(item => item.name === name).length}
                        </span>
                        <button
                            onClick={() =>
                                handleCartItem("increment", { img, size, name, price })
                            }
                            className="px-2 py-1 text-[#928E8E]"
                        >
                            +
                        </button>
                    </div>
                    <p className="text-lg font-semibold">Ksh. {cartCopy && cartCopy.filter(item => item.name === name).reduce((acc,curr) => acc + curr.price,0).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}




