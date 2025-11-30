import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../app/cardSlice';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.products);
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 p-4 md:p-6 bg-gray-900 min-h-screen text-white">

            {/* Products List */}
            <div className="w-full md:w-7/12 border-2 border-pink-500 p-4 md:p-6 rounded-lg shadow-lg flex flex-col">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-300">🛍️ Shopping Cart</h2>

                <div id="product" className="flex-1 overflow-y-auto max-h-[75vh] space-y-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex justify-between items-center p-4 border rounded-lg hover:shadow-xl transition duration-300 bg-gray-800"
                        >
                            <div>
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-gray-300 font-medium">₹{product.price}</p>
                            </div>

                            <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-semibold transition duration-300"
                            >
                                Add
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart Section */}
            <div className="w-full md:w-5/12 border-2 border-pink-500 p-4 md:p-6 rounded-lg shadow-lg flex flex-col">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-green-300">🛒 Your Cart</h2>

                {cart.length === 0 ? (
                    <p className="text-gray-400 mt-4">Your cart is empty</p>
                ) : (
                    <>
                        <div id="cart" className="flex-1 overflow-y-auto max-h-[55vh] space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center p-3 border rounded-lg hover:shadow-md transition duration-300 bg-gray-800"
                                >
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <p className="text-gray-300 font-medium">₹{item.price}</p>
                                    </div>

                                    <button
                                        onClick={() => handleRemoveFromCart(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <hr className="my-4 border-gray-600" />
                        <h3 className="font-bold text-lg mb-4">Total: ₹{totalPrice}</h3>

                        <button
                            onClick={handleClearCart}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 font-semibold transition duration-300"
                        >
                            Clear Cart
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Products;
