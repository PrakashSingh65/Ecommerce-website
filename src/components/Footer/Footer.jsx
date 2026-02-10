import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoPaperPlaneOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">
                Your<span className='text-green-500'>Shop</span>
            </Link>
            <p className="mt-4 max-w-sm text-gray-400">
              Your one-stop shop for premium products. We bring quality and style right to your doorstep.
            </p>
            <div className="mt-6 flex gap-4">
               <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <IoLogoFacebook className="h-6 w-6" />
               </a>
               <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <IoLogoTwitter className="h-6 w-6" />
               </a>
               <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <IoLogoInstagram className="h-6 w-6" />
               </a>
               <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <IoLogoLinkedin className="h-6 w-6" />
               </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div>
              <p className="font-medium text-white">Shop</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/shop" className="text-gray-400 hover:text-green-500 transition-colors">All Products</Link></li>
                <li><Link to="/shop" className="text-gray-400 hover:text-green-500 transition-colors">New Arrivals</Link></li>
                <li><Link to="/shop" className="text-gray-400 hover:text-green-500 transition-colors">Featured</Link></li>
                <li><Link to="/shop" className="text-gray-400 hover:text-green-500 transition-colors">Deals</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Company</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-green-500 transition-colors">Contact</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Newsletter</p>
              <p className="mt-4 text-sm text-gray-400">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
               <form className="mt-4 flex gap-2">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 placeholder:text-gray-500"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                  >
                    <IoPaperPlaneOutline className="text-lg"/>
                  </button>
                </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} YourShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
