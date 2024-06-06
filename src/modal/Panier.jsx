import { selectTotalPrice, selectTotalQuantity } from "@/redux/slice/cartSlice"; 
import { Badges, BodyOne, Title } from "@/screens/articles/components/CustomComponents";
import { useState } from "react";
import { IoCartOutline, IoCloseOutline, IoHeartOutline,  } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export const ModelCart = () => {
    const totalQuantity = useSelector(selectTotalQuantity)
    console.log("🚀 ~ ModelCart ~ totalQuantity:", totalQuantity)
   const [isOpen, setIsOpen] = useState(false);
   const [isClosing, setIsClosing] = useState(false);
   const [activeTab, setActiveTab] = useState("cart");
    const cartItems = useSelector((state) => state.cart.itemList)
    console.log("🚀 ~ ModelCart ~ cartItems:", cartItems)
    const totalPrice = useSelector(selectTotalPrice)
    console.log("🚀 ~ ModelCart ~ totalPrice:", totalPrice)
const openModel = () => {
 setIsOpen(true);
    document.body.style.overflowX = "hidden";
    
};
    
const closeModel = () => {
    setIsClosing(true);
    document.body.style.overflowX = "auto";
    setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);

    },300);
};
const handleTabChange = (tab) => {
    setActiveTab(tab);
}
    return (
        <>

<button className="relative z-20" onClick={openModel}>
<IoHeartOutline size={23} />
<div className=" absolute -top-2 -right-1.5">
   <Badges color="bg-primary-green"> 0</Badges>
  
</div>
</button>

<button className="relative z-20" onClick={openModel}>

<IoCartOutline size={23} />
<div className=" absolute -top-2 -right-1.5">

   <Badges color="bg-primary-green"> {totalQuantity}  </Badges>

</div>
</button>

{isOpen && (
    <>

    <div className="cartoverlay" onClick={closeModel}></div>
    <div
    className={`cartmodel p-16 text-primary ${
        isClosing ? "closing" : ""
    } `}
    >
       <div className="flex justify-between gap-5">
        <button
         className={`flex items-center gap-2 font-medium ${
            activeTab === "cart" ? "text-primary" : ""
            }`} 
            onClick={() => handleTabChange("cart")}
            >
                Shopping Cart 
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white  grid place-content-center bg-primary">
                {totalQuantity}  
                </span>
            </button>

            <button
         className={`flex items-center gap-2 font-medium ${
            activeTab === "whishlist" ? "text-primary" : ""
            }`} 
            onClick={() => handleTabChange("wishlist")}
            >
                Wishlist  
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white  grid place-content-center bg-primary">
                    0
                </span>
            </button>

       </div>
       <div className="line-container ">
        <div 
        className={`line ${activeTab === "cart" ? "active" : ""}`}>

        </div>
        <div className={`line ${activeTab === "wishlist" ? "active" : ""}`}>

        </div>

       </div>
       {activeTab == "cart" ? 
        <>
{cartItems.map(item => (
    <CartProduct 
    key={item.id}
    id={item.id}
    cover={item.cover}
    name={item.name}
   
    price={item.price}   
    quantity={item.quantity}
    />

))}
 
<div className="total flex items-center justify-between mt-10 ">
    <Title level={6}>SubTotal: </Title>
    <Title level={6}>{totalPrice.toFixed(2)}DA </Title>
    
</div>
<div className="checkout">
    <button className="primary-btn w-full">View Cart</button>
</div>
</>
 : <>
   show product
        </>
       
       }
    </div>
     </>
)}
        </>
    )
}

export const CartProduct = ({ id, cover, name, price, quantity }) => {
    console.log("🚀 ~ CartProduct ~ quantity:", quantity)
    console.log("🚀 ~ CartProduct ~ price:", price)
    console.log("🚀 ~ CartProduct ~ name:", name)
    console.log("🚀 ~ CartProduct ~ id:", id)
    console.log("🚀 ~ CartProduct ~ cover:", cover)
    const dispatch = useDispatch();


   
    const removeCartItems = () => {

    };
    return (
    <>

  <div className="mt-5 border-b-2 border-gray-200 pb-5 ">
    <div className="flex items-center gap-5 ">
        <div className="images w-20 h-20">
            {cover?.slice(0, 1).map((images, i) => (
                <img src={images?.image} alt="" key={i}
                className="w-full h-full object-cover"/>
            ))}
        </div>
        <div className="deatils w-1/2 ">
            <BodyOne>{name}</BodyOne>
         
            <p className="text-primary-green">{quantity} x {price?.toFixed(2)}DA </p>

        </div>
        <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary">
            <IoCloseOutline size={25} />
        </button>
    </div>
  </div>

    </>
    )
}
