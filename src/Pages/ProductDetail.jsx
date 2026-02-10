import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoStar, IoCart, IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";

const ProductDetail = () => {
    const { id } = useParams();
    
    // Mock Product Data (In a real app, fetch based on ID)
    const product = {
        id: id,
        name: "Premium Wireless Headphones",
        price: "$199.00",
        rating: 4.8,
        reviews: 124,
        description: "Experience high-fidelity audio with our premium wireless headphones. Designed for comfort and superior sound quality, these headphones feature active noise cancellation, 30-hour battery life, and a sleek, modern design.",
        colors: [
            { name: 'Black', class: 'bg-black', selectedClass: 'ring-gray-900' },
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Blue', class: 'bg-blue-600', selectedClass: 'ring-blue-600' },
        ],
        sizes: [
            { name: 'One Size', inStock: true },
        ],
        images: [
            {
                src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
                alt: "Headphones side view"
            },
            {
                src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
                alt: "Headphones front view"
            },
            {
                src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop",
                alt: "Headphones lifestyle"
            },
             {
                src: "https://images.unsplash.com/photo-1524678606372-571d75dc1655?q=80&w=1000&auto=format&fit=crop",
                alt: "Headphones minimalist"
            },
        ]
    };

    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (delta) => {
        setQuantity(Math.max(1, quantity + delta));
    };

    return (
        <div className="bg-white">
            <div className="pt-6 pb-16 sm:pb-24">
                
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">Home</Link>
                        </li>
                         <li>
                             <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-300">
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                             </svg>
                        </li>
                        <li>
                             <Link to="/shop" className="text-sm font-medium text-gray-500 hover:text-gray-900">Audio</Link>
                        </li>
                        <li>
                            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-300">
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                             </svg>
                        </li>
                        <li className="text-sm">
                            <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                        
                        {/* Image Gallery */}
                        <div className="flex flex-col gap-4">
                             <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 relative group">
                                <img
                                    src={product.images[selectedImage].src}
                                    alt={product.images[selectedImage].alt}
                                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                             </div>
                             <div className="grid grid-cols-4 gap-4">
                                {product.images.map((img, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative flex h-20 sm:h-24 cursor-pointer items-center justify-center rounded-md bg-gray-50 text-sm font-medium uppercase text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 ${selectedImage === index ? 'ring-2 ring-indigo-500 ring-offset-2' : 'ring-1 ring-gray-200'}`}
                                    >
                                        <span className="sr-only">{img.alt}</span>
                                        <span className="absolute inset-0 overflow-hidden rounded-md">
                                            <img src={img.src} alt={img.alt} className="h-full w-full object-cover object-center" />
                                        </span>
                                        <span className={`pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 ${selectedImage === index ? 'ring-indigo-500' : ''}`} aria-hidden="true" />
                                    </button>
                                ))}
                             </div>
                        </div>

                        {/* Product Info */}
                        <div className="mt-14 sm:mt-16 lg:mt-0">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
                            
                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-3">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center text-yellow-500">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <IoStar key={rating} className={`h-5 w-5 flex-shrink-0 ${product.rating > rating ? 'text-yellow-400' : 'text-gray-300'}` } />
                                        ))}
                                    </div>
                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                    <span className="ml-3 text-sm font-medium text-gray-600 hover:text-indigo-500">{product.reviews} reviews</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>
                                <div className="space-y-6 text-base text-gray-700 leading-relaxed">
                                    <p>{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                {/* Colors */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Color</h3>
                                    <div className="mt-2 flex items-center space-x-3">
                                        {product.colors.map((color) => (
                                            <button
                                                key={color.name}
                                                onClick={() => setSelectedColor(color)}
                                                className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-2 ${selectedColor.name === color.name ? color.selectedClass : 'ring-transparent'}`}
                                            >
                                                <span id={`color-choice-${color.name}-label`} className="sr-only">
                                                    {color.name}
                                                </span>
                                                <span
                                                    aria-hidden="true"
                                                    className={`h-8 w-8 rounded-full border border-black border-opacity-10 ${color.class}`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                 {/* Quantity */}
                                 <div className="mt-8">
                                    <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                                    <div className="flex items-center mt-2 border border-gray-300 rounded-md w-max">
                                         <button onClick={() => handleQuantityChange(-1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                                         <span className="px-3 py-1 text-gray-900 font-medium w-10 text-center">{quantity}</span>
                                         <button onClick={() => handleQuantityChange(1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                                    </div>
                                 </div>

                                <div className="mt-10 flex gap-4">
                                    <button
                                        type="button"
                                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full transition-all shadow-md hover:shadow-lg"
                                    >
                                        <IoCart className="mr-2 text-xl"/>
                                        Add to cart
                                    </button>

                                    <button
                                        type="button"
                                        className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-all border border-gray-200"
                                    >
                                        <IoHeartOutline className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                        <span className="sr-only">Add to favorites</span>
                                    </button>
                                </div>
                                <div className="mt-6 text-center">
                                    <a href="#" className="group inline-flex text-base font-medium">
                                        <IoShareSocialOutline className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                        <span className="text-gray-500 hover:text-gray-700">Share this product</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail