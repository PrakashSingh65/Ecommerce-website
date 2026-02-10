import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoTrashOutline, IoAdd, IoRemove, IoArrowBack } from 'react-icons/io5';

const Cart = () => {
    // Mock Data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Basic Tee",
            href: '#',
            price: '$32.00',
            color: 'Sienna',
            inStock: true,
            size: 'Large',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in sienna.",
            quantity: 1,
        },
        {
            id: 2,
            name: "Basic Tee",
            href: '#',
            price: '$32.00',
            color: 'Black',
            inStock: false,
            leadTime: '3-4 weeks',
            size: 'Large',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            quantity: 2,
        },
        {
            id: 3,
            name: "Nomad Tumbler",
            href: '#',
            price: '$35.00',
            color: 'White',
            inStock: true,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
            imageAlt: 'Insulated bottle with white base and black snap lid.',
            quantity: 1,
        },
    ]);

    const handleQuantityChange = (id, delta) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
    const shipping = 5.00;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
                
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    
                    {/* Cart Items List */}
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>

                        {cartItems.length === 0 ? (
                             <div className="text-center py-20 bg-gray-50 rounded-lg">
                                <p className="text-xl text-gray-500 mb-6">Your cart is empty.</p>
                                <Link to="/" className="text-indigo-600 font-semibold hover:text-indigo-500 flex items-center justify-center gap-2">
                                    <IoArrowBack /> Start Shopping
                                </Link>
                            </div>
                        ) : (
                            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
                                {cartItems.map((product) => (
                                    <li key={product.id} className="flex py-6 sm:py-10">
                                        <div className="shrink-0">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm">
                                                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                                                                {product.name}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <div className="mt-1 flex text-sm">
                                                        <p className="text-gray-500">{product.color}</p>
                                                        {product.size ? (
                                                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.size}</p>
                                                        ) : null}
                                                    </div>
                                                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                                </div>

                                                <div className="mt-4 sm:mt-0 sm:pr-9">
                                                    
                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-2 mt-2">
                                                       <button onClick={() => handleQuantityChange(product.id, -1)} className="p-1 rounded-full hover:bg-gray-100 text-gray-500">
                                                            <IoRemove size={16}/>
                                                       </button>
                                                       <span className="text-gray-900 font-medium w-8 text-center">{product.quantity}</span>
                                                       <button onClick={() => handleQuantityChange(product.id, 1)} className="p-1 rounded-full hover:bg-gray-100 text-gray-500">
                                                            <IoAdd size={16}/>
                                                       </button>
                                                    </div>

                                                    <div className="absolute top-0 right-0">
                                                        <button type="button" onClick={() => handleRemove(product.id)} className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Remove</span>
                                                            <IoTrashOutline className="h-5 w-5" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                                                {product.inStock ? (
                                                    <span className="text-green-600 font-medium">In stock</span>
                                                ) : (
                                                    <span className="text-gray-500">Ships in {product.leadTime}</span>
                                                )}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>

                    {/* Order Summary */}
                    <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 shadow-sm border border-gray-100">
                        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                            Order summary
                        </h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-600">Subtotal</dt>
                                <dd className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Shipping estimate</span>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex text-sm text-gray-600">
                                    <span>Tax estimate</span>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="text-base font-medium text-gray-900">Order total</dt>
                                <dd className="text-base font-medium text-gray-900">${total.toFixed(2)}</dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <button
                                type="button"
                                className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 transition-all"
                            >
                                Checkout
                            </button>
                        </div>
                         
                         <div className="mt-6 text-center text-sm">
                             <p>
                                 or{' '}
                                 <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                     Continue Shopping
                                     <span aria-hidden="true"> &rarr;</span>
                                 </Link>
                             </p>
                         </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Cart;