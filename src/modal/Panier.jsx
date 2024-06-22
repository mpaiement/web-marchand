import { CartActions, selecttotalPrice, selectTotalQuantity } from "@/redux/slice/cartSlice";
import { Badges, BodyOne, Title } from "@/screens/articles/components/CustomComponents";
import { useState } from "react";
import { IoCartOutline, IoCloseOutline, IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import QRCodeModal from '../modal/QrCode'; // Import the QRCodeModal component

export const ModelCart = () => {
    const totalQuantity = useSelector(selectTotalQuantity);
    const cartItems = useSelector((state) => state.cart.itemList);
    const amount = useSelector(selecttotalPrice);

    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [qrCode, setQrCode] = useState("");

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
        }, 300);
    };

    const openPaymentModal = async () => {
        try {
            const response = await axios.get(`http://192.168.1.43:3000/qrcode/TIijZuSg2YfXvx2pwuLTWA1kjeQ2/${amount}`);

            setQrCode(response.data.qrCode);
            setIsPaymentModalOpen(true);

            closeModel();
        } catch (error) {
            console.error('Failed to generate QR code.', error);
        }
    };

    const closePaymentModal = () => {
        setIsPaymentModalOpen(false);
    };

    return (
        <>
            <button className="relative z-20" onClick={openModel}>
                <IoCartOutline size={23} />
                <div className="absolute -top-2 -right-1.5">
                    <Badges color="bg-primary-green">{totalQuantity}</Badges>
                </div>
            </button>

            {isOpen && (
                <>
                    <div className="cartoverlay" onClick={closeModel}></div>
                    <div className={`cartmodel p-16 text-primary ${isClosing ? "closing" : ""}`}>
                        <div className="flex justify-between gap-5">
                            <button className="flex items-center gap-2 font-medium text-primary">
                                Shopping Cart
                                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                                    {totalQuantity}
                                </span>
                            </button>
                        </div>
                        <div className="line-container">
                            <div className="line active"></div>
                        </div>
                        <div className="cart-items-container overflow-y-auto max-h-80">
                            {cartItems.map(item => (
                                <CartProduct
                                    key={item.id}
                                    id={item.id}
                                    cover={item.cover}
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            ))}
                        </div>
                        <div className="total flex items-center justify-between mt-10">
                            <Title level={6}>SubTotal:</Title>
                            <Title level={6}>{amount.toFixed(2)} DA</Title>
                        </div>
                        <div className="checkout">
                            <button className="primary-btn w-full" onClick={openPaymentModal}>
                                Tap to PAY
                            </button>
                        </div>
                    </div>
                </>
            )}

            {isPaymentModalOpen && (
                <QRCodeModal qrCode={qrCode} closePaymentModal={closePaymentModal} />
            )}
        </>
    );
};

export const CartProduct = ({ id, cover, title, price, quantity }) => {
    console.log("🚀 ~ CartProduct ~ id, cover, title, price, quantity :", id, cover, title, price, quantity)

    const dispatch = useDispatch();

    const removeCartItems = () => {
        dispatch(CartActions.removeFromAllCart(id));
    };

    return (
        <div className="mt-5 border-b-2 border-gray-200 pb-1">
            <div className="flex items-center gap-5">
                <div className="images w-20 h-20">
                    {cover?.slice(0, 1).map((images, i) => (
                        <img src={images?.image} alt="" key={i} className="w-full h-full object-cover" />
                    ))}
                </div>
                <div className="details w-1/2">
                    <BodyOne>{title}</BodyOne>
                    <p className="text-primary-green">{quantity} x {price?.toFixed(2)} DA</p>
                </div>
                <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary" onClick={removeCartItems}>
                    <IoCloseOutline size={25} />
                </button>
            </div>
        </div>
    );
};
