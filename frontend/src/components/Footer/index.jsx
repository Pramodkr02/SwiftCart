import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline, MdLocalPhone, MdLocationOn } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      {/* Features Strip */}
      <div className="features-strip border-b border-gray-200 py-8">
        <div className="container mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-5">
                <div className="flex items-center gap-3 group">
                    <TbTruckDelivery className="text-[40px] text-[#ff5252] transition-transform duration-300 group-hover:-translate-y-1" />
                    <div className="info">
                        <h4 className="font-bold text-[14px] uppercase text-gray-800">Free Shipping</h4>
                        <p className="text-[12px] text-gray-500 m-0 p-0 !mt-0 !mb-0">For all orders over $100</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 group">
                    <RiDiscountPercentLine className="text-[40px] text-[#ff5252] transition-transform duration-300 group-hover:-translate-y-1" />
                    <div className="info">
                        <h4 className="font-bold text-[14px] uppercase text-gray-800">Daily Surprise Offers</h4>
                        <p className="text-[12px] text-gray-500 m-0 p-0 !mt-0 !mb-0">Save up to 25% off</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 group">
                    <BiSupport className="text-[40px] text-[#ff5252] transition-transform duration-300 group-hover:-translate-y-1" />
                    <div className="info">
                        <h4 className="font-bold text-[14px] uppercase text-gray-800">Support 24/7</h4>
                        <p className="text-[12px] text-gray-500 m-0 p-0 !mt-0 !mb-0">Shop with an expert</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 group">
                    <CiBadgeDollar className="text-[40px] text-[#ff5252] transition-transform duration-300 group-hover:-translate-y-1" />
                    <div className="info">
                        <h4 className="font-bold text-[14px] uppercase text-gray-800">Affordable Prices</h4>
                        <p className="text-[12px] text-gray-500 m-0 p-0 !mt-0 !mb-0">Get Factory Direct Price</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                    <MdOutlineMailOutline className="text-[40px] text-[#ff5252] transition-transform duration-300 group-hover:-translate-y-1" />
                    <div className="info">
                        <h4 className="font-bold text-[14px] uppercase text-gray-800">Secure Payments</h4>
                        <p className="text-[12px] text-gray-500 m-0 p-0 !mt-0 !mb-0">100% Protected Payment</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Contact Info */}
            <div className="col">
              <h3 className="text-[18px] font-bold mb-5 text-[#ff5252]">Contact Us</h3>
              <p className="text-[13px] text-gray-600 mb-4 leading-6">
                SwiftCart - Your creative online store. <br />
                Premium e-commerce solutions for everyone.
              </p>
              
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start gap-3 text-[13px]">
                   <MdLocationOn className="text-[18px] mt-0.5 text-[#ff5252] shrink-0" />
                   <span>7895 Dr New Life Blvd, <br /> Blue Ridge, USA</span>
                </li>
                <li className="flex items-center gap-3 text-[13px]">
                   <MdOutlineMailOutline className="text-[18px] text-[#ff5252] shrink-0" />
                   <a href="mailto:support@swiftcart.com" className="hover:text-[#ff5252] transition">support@swiftcart.com</a>
                </li>
                <li className="flex items-center gap-3 text-[13px]">
                   <MdLocalPhone className="text-[18px] text-[#ff5252] shrink-0" />
                   <a href="tel:+10023456789" className="hover:text-[#ff5252] transition">+1 00 234 567 89</a>
                </li>
              </ul>
              
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ff5252] text-white hover:bg-black transition-all duration-300">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ff5252] text-white hover:bg-black transition-all duration-300">
                  <FaTwitter size={14} />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ff5252] text-white hover:bg-black transition-all duration-300">
                  <FaInstagram size={14} />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ff5252] text-white hover:bg-black transition-all duration-300">
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>

            {/* Column 2: Information */}
            <div className="col">
              <h3 className="text-[18px] font-bold mb-5 text-[#ff5252]">Information</h3>
              <ul className="space-y-2">
                <li><Link to="/about-us" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">About Us</Link></li>
                <li><Link to="/delivery-information" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Delivery Information</Link></li>
                <li><Link to="/privacy-policy" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Terms & Conditions</Link></li>
                <li><Link to="/contact-us" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Contact Us</Link></li>
                <li><Link to="/support-center" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Support Center</Link></li>
              </ul>
            </div>

            {/* Column 3: Corporate */}
            <div className="col">
              <h3 className="text-[18px] font-bold mb-5 text-[#ff5252]">Corporate</h3>
              <ul className="space-y-2">
                <li><Link to="/become-vendor" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Become a Vendor</Link></li>
                <li><Link to="/affiliate-program" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Affiliate Program</Link></li>
                <li><Link to="/farm-business" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Farm Business</Link></li>
                <li><Link to="/careers" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Careers</Link></li>
                <li><Link to="/our-suppliers" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Our Suppliers</Link></li>
                <li><Link to="/accessibility" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition hover:pl-1 duration-300 block">Accessibility</Link></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="col">
              <h3 className="text-[18px] font-bold mb-5 text-[#ff5252]">Subscribe</h3>
              <p className="text-[13px] text-gray-600 mb-5 leading-6">
                Subscribe to our newsletter and get <span className="text-[#ff5252] font-semibold">10% discount</span> on your first purchase.
              </p>
              
              <div className="relative mb-5">
                 <MdOutlineMailOutline className="absolute top-3 left-3 text-gray-400 text-[18px]" />
                 <input 
                   type="email" 
                   placeholder="Your Email Address" 
                   className="w-full bg-gray-100 h-[45px] pl-10 pr-4 rounded-md text-[13px] border border-gray-200 focus:outline-none focus:border-[#ff5252] transition"
                 />
                 <button className="absolute top-0 right-0 h-[45px] bg-[#ff5252] text-white px-5 rounded-r-md text-[13px] font-semibold hover:bg-black transition-all duration-300">
                   Subscribe
                 </button>
              </div>

               <p className="text-[13px] text-gray-500 mb-2">Secure Payment Gateways</p>
               <div className="flex gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 object-contain opacity-70 hover:opacity-100 transition" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 object-contain opacity-70 hover:opacity-100 transition" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-6 object-contain opacity-70 hover:opacity-100 transition" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="h-6 object-contain opacity-70 hover:opacity-100 transition" />
               </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Bottom Copyright */}
      <div className="bg-gray-100 py-4 border-t border-gray-200">
         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3">
             <p className="text-[13px] text-gray-600 m-0 !mt-0 !mb-0">
               © 2024 <span className="text-[#ff5252] font-semibold">SwiftCart</span>. All rights reserved.
             </p>
             <div className="flex gap-5">
                 <Link to="/privacy" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition">Privacy Agreement</Link>
                 <Link to="/terms" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition">Terms of Service</Link>
                 <Link to="/faq" className="text-[13px] text-gray-600 hover:text-[#ff5252] transition">FAQ</Link>
             </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
