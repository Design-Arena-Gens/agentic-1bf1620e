'use client'

import { Search, ShoppingBag, Menu, ChevronLeft, ChevronRight, Star, Shield, Truck, Award, HeadphonesIcon } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0)
  const [categoriesScroll, setCategoriesScroll] = useState(0)
  const [productsScroll, setProductsScroll] = useState(0)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  const categories = [
    { name: 'Nail Polish', color: 'bg-pastel-pink' },
    { name: 'Gel Manicure', color: 'bg-pastel-lavender' },
    { name: 'Nail Art', color: 'bg-pastel-mint' },
    { name: 'Tools & Accessories', color: 'bg-pastel-peach' },
    { name: 'Nail Care', color: 'bg-pastel-blue' },
    { name: 'Gift Sets', color: 'bg-pastel-rose' },
  ]

  const products = [
    { name: 'Rose Quartz Polish', price: '$24', image: 'bg-pastel-pink' },
    { name: 'Lavender Dreams Gel', price: '$32', image: 'bg-pastel-lavender' },
    { name: 'Mint Essence', price: '$24', image: 'bg-pastel-mint' },
    { name: 'Peach Glow', price: '$28', image: 'bg-pastel-peach' },
    { name: 'Sky Blue Shimmer', price: '$26', image: 'bg-pastel-blue' },
    { name: 'Rose Garden Set', price: '$45', image: 'bg-pastel-rose' },
    { name: 'Pearl Pink', price: '$24', image: 'bg-pastel-pink' },
    { name: 'Lilac Bliss', price: '$30', image: 'bg-pastel-lavender' },
  ]

  const reviews = [
    { name: 'Sarah M.', rating: 5, text: 'Absolutely love the quality! The colors are stunning and last for weeks.' },
    { name: 'Emma L.', rating: 5, text: 'Best nail products I\'ve ever used. The application is smooth and flawless.' },
    { name: 'Olivia K.', rating: 5, text: 'The packaging is beautiful and the products are amazing. Highly recommend!' },
    { name: 'Ava R.', rating: 5, text: 'Professional salon quality at home. Worth every penny!' },
  ]

  const blogs = [
    { title: 'Spring Nail Trends 2024', excerpt: 'Discover the hottest nail colors and designs for the upcoming season...', date: 'March 15, 2024' },
    { title: 'The Perfect Manicure Guide', excerpt: 'Step-by-step instructions for achieving a salon-quality manicure at home...', date: 'March 10, 2024' },
    { title: 'Nail Care Essentials', excerpt: 'Everything you need to know about maintaining healthy, beautiful nails...', date: 'March 5, 2024' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [reviews.length])

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoriesRef.current) {
      const scrollAmount = 200
      const newScroll = direction === 'left' ? categoriesScroll - scrollAmount : categoriesScroll + scrollAmount
      categoriesRef.current.scrollTo({ left: newScroll, behavior: 'smooth' })
      setCategoriesScroll(newScroll)
    }
  }

  const scrollProducts = (direction: 'left' | 'right') => {
    if (productsRef.current) {
      const scrollAmount = 300
      const newScroll = direction === 'left' ? productsScroll - scrollAmount : productsScroll + scrollAmount
      productsRef.current.scrollTo({ left: newScroll, behavior: 'smooth' })
      setProductsScroll(newScroll)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink/20 via-white to-pastel-lavender/20">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <button className="lg:hidden">
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Luxe Nails
              </h1>
              <div className="hidden lg:flex space-x-6">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-pink-400 transition">Shop</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-pink-400 transition">Collections</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-pink-400 transition">About</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2 w-64">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                />
              </div>
              <button className="relative">
                <ShoppingBag className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-pink-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Categories Carousel */}
      <section className="py-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <button
              onClick={() => scrollCategories('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div
              ref={categoriesRef}
              className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth px-10"
            >
              {categories.map((category, idx) => (
                <div
                  key={idx}
                  className={`${category.color} flex-shrink-0 rounded-2xl px-6 py-3 cursor-pointer hover:scale-105 transition-transform shadow-sm`}
                >
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{category.name}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollCategories('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Hero Media Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
            <div className="md:col-span-2 bg-gradient-to-br from-pastel-pink to-pastel-lavender rounded-3xl overflow-hidden shadow-lg relative group cursor-pointer">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-semibold mb-2">Spring Collection</h2>
                  <p className="text-lg">New Arrivals</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-pastel-mint to-pastel-blue rounded-3xl h-[calc(60%-8px)] shadow-lg relative group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-semibold">Gel Collection</h3>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pastel-peach to-pastel-rose rounded-3xl h-[calc(40%-8px)] shadow-lg relative group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold">Gift Sets</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Featured Products</h2>
            <a href="#" className="text-sm font-medium text-pink-400 hover:text-pink-500 transition">View All</a>
          </div>
          <div className="relative">
            <button
              onClick={() => scrollProducts('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div
              ref={productsRef}
              className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth px-10"
            >
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className={`${product.image} h-64 relative group-hover:scale-105 transition-transform`}>
                    <button className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
                      <ShoppingBag className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-pink-400 font-semibold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollProducts('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <Shield className="w-10 h-10 text-pink-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">Secure Payment</h3>
              <p className="text-xs text-gray-500">100% protected</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <Truck className="w-10 h-10 text-pink-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">Free Shipping</h3>
              <p className="text-xs text-gray-500">On orders over $50</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <Award className="w-10 h-10 text-pink-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">Premium Quality</h3>
              <p className="text-xs text-gray-500">Certified products</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <HeadphonesIcon className="w-10 h-10 text-pink-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">24/7 Support</h3>
              <p className="text-xs text-gray-500">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Auto Slide */}
      <section className="py-12 bg-gradient-to-r from-pastel-pink/30 to-pastel-lavender/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">What Our Customers Say</h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg relative min-h-[200px]">
            <div className="flex justify-center mb-4">
              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 text-center text-lg mb-4 italic">"{reviews[currentReview].text}"</p>
            <p className="text-gray-500 text-center font-medium">- {reviews[currentReview].name}</p>
            <div className="flex justify-center space-x-2 mt-6">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`w-2 h-2 rounded-full transition ${idx === currentReview ? 'bg-pink-400 w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Excerpts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">From Our Blog</h2>
            <a href="#" className="text-sm font-medium text-pink-400 hover:text-pink-500 transition">Read More</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group">
                <div className="bg-gradient-to-br from-pastel-mint to-pastel-blue h-48 group-hover:scale-105 transition-transform" />
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-2">{blog.date}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-400 transition">{blog.title}</h3>
                  <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Luxe Nails
              </h3>
              <p className="text-gray-400 text-sm">
                Premium nail care products for the modern woman. Quality you can trust.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition">Nail Polish</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Gel Manicure</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Nail Art</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Press</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: hello@luxenails.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Beauty Lane</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Luxe Nails. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
