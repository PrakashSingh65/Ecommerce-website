import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoFilter, IoGrid, IoList } from "react-icons/io5";

const categories = [
  { name: 'All', count: 24 },
  { name: 'Electronics', count: 12 },
  { name: 'Clothing', count: 8 },
  { name: 'Accessories', count: 4 },
];

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: 'Accessories'
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    category: 'Accessories'
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    category: 'Stationery'
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    category: 'Stationery'
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    category: 'Clothing'
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in aspen white.",
    category: 'Clothing'
  },
  // Add more mock products as needed
];

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

          <div className="flex items-center">
             <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
                    <IoGrid className="h-5 w-5" />
                </button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
                    <IoList className="h-5 w-5" />
                </button>
             </div>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              <h3 className="sr-only">Categories</h3>
              <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                        type="button"
                        onClick={() => setSelectedCategory(category.name)}
                        className={`block px-2 py-3 w-full text-left ${selectedCategory === category.name ? 'text-indigo-600 font-bold' : 'text-gray-900 hover:text-indigo-500'}`}
                    >
                      {category.name} <span className="text-gray-500 font-normal">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="py-6">
                  <h3 className="-my-3 flow-root">
                      <span className="font-medium text-gray-900">Price</span>
                  </h3>
                   <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                            <input id="price-0" name="price[]" value="0-50" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                            <label htmlFor="price-0" className="ml-3 text-sm text-gray-600">$0 - $50</label>
                        </div>
                         <div className="flex items-center">
                            <input id="price-1" name="price[]" value="50-100" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                            <label htmlFor="price-1" className="ml-3 text-sm text-gray-600">$50 - $100</label>
                        </div>
                         <div className="flex items-center">
                            <input id="price-2" name="price[]" value="100+" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                            <label htmlFor="price-2" className="ml-3 text-sm text-gray-600">$100+</label>
                        </div>
                   </div>
              </div>
            </form>

            {/* Product Grid */}
            <div className="lg:col-span-3">
                 <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-x-6 gap-y-10`}>
                    {filteredProducts.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`} className="group relative">
                            {viewMode === 'grid' ? (
                                <>
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                    </div>
                                </>
                            ) : (
                                <div className="flex gap-6 items-center bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                                     <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                         <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </h3>
                                            <p className="ml-4">{product.price}</p>
                                        </div>
                                         <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                    </div>
                                </div>
                            )}
                        </Link>
                    ))}
                 </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Shop