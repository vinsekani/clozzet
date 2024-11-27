
export default function Featuredlist({ name, price, img, cart, setCart }) {
  function handleAddToCart(e, product) {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      // Add to cart
      const cartItems = [...cart];
      cartItems.push(product);
      setCart(cartItems);

      //Change button text
      e.target.textContent = "Added to Cart";

      //Change button color
      e.target.style.background = "gray";
    }
  }
  return (
    <div className="flex flex-col  w-fit">
      {console.log(cart)}
      <div className="bg-[#F0EFEF]  p-4 w-[250px] h-[300px] relative">
        <img src={img} />

        <div className="absolute inset-2 flex items-end justify-center opacity-0 hover:opacity-100">
          <button
            onClick={(e) => handleAddToCart(e, { name, price, img })}
            className="bg-[#45C9A1] text-white px-[70px] py-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-justify mt-[10px]">
        <p>{name}</p>
        <p>Ksh.{price.toLocaleString() }</p>
      </div>
    </div>
  );
}
