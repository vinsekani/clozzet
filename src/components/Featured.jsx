import Featuredlist from "./Featuredlist";

import leather from "/src/assets/leather-jacket.png";
import sweatshirts from "/src/assets/sweatshirts.png";
import pallazo from "/src/assets/pallazo.png"
import denim from "/src/assets/denim.png";

export default function Featured({cart,setCart}) {

 

  return (
    <>
      <div className="container mx-auto mt-20 mb-20">
        <div>
          <h2 className="text-center mb-[2em]">Featured Collection</h2>
        </div>

        <div className="flex lg:justify-between flex-wrap justify-between">
        <Featuredlist cart={cart} setCart={setCart} name="Brown Leather Jacket" img={leather} price={2200}/>
        <Featuredlist cart={cart} setCart={setCart} name="Round-neck Sweatshirts" img={sweatshirts} price={2200}/>
        <Featuredlist cart={cart} setCart={setCart} name="Pleated Pallazo Trousers" img={pallazo} price={2200}/>
        <Featuredlist cart={cart} setCart={setCart} name="M-22 Denim Jacket" img={denim} price={2200}/>
        </div>
      </div>
    </>
  );
}
