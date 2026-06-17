import React, { useState, useMemo } from 'react';
import { Star, ShoppingCart, Filter, X, Check } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Project = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'Mobile Phones',
      price: 999,
      originalPrice: 1199,
      discount: 17,
      rating: 4.8,
      reviews: 2483,
      image: '📱',
      specs: { ram: '8GB', storage: '256GB', battery: '3274mAh', camera: '48MP' },
      badge: 'Best Seller',
      stock: true
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      category: 'Mobile Phones',
      price: 899,
      originalPrice: 999,
      discount: 10,
      rating: 4.6,
      reviews: 1856,
      image: '📱',
      specs: { ram: '12GB', storage: '256GB', battery: '4000mAh', camera: '50MP' },
      badge: 'New Arrival',
      stock: true
    },
    {
      id: 3,
      name: 'MacBook Pro 16"',
      category: 'Laptops',
      price: 2499,
      originalPrice: 2999,
      discount: 17,
      rating: 4.9,
      reviews: 982,
      image: '💻',
      specs: { ram: '16GB', storage: '512GB', processor: 'M3 Max', display: '16"' },
      badge: 'Premium',
      stock: true
    },
    {
      id: 4,
      name: 'Dell XPS 13',
      category: 'Laptops',
      price: 1299,
      originalPrice: 1499,
      discount: 13,
      rating: 4.7,
      reviews: 645,
      image: '💻',
      specs: { ram: '16GB', storage: '512GB', processor: 'i7', display: '13"' },
      badge: 'Flash Sale',
      stock: true
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5',
      category: 'Accessories',
      price: 399,
      originalPrice: 499,
      discount: 20,
      rating: 4.8,
      reviews: 5423,
      image: '🎧',
      specs: { type: 'Headphones', noise: 'Active', battery: '40hrs', color: 'Black' },
      badge: 'Limited Time',
      stock: true
    },
    {
      id: 6,
      name: 'iPad Air 11"',
      category: 'Mobile Phones',
      price: 799,
      originalPrice: 899,
      discount: 11,
      rating: 4.5,
      reviews: 1243,
      image: '📱',
      specs: { ram: '8GB', storage: '256GB', battery: '7040mAh', display: '11"' },
      badge: null,
      stock: true
    },
    {
      id: 7,
      name: 'Lenovo ThinkPad',
      category: 'Laptops',
      price: 1099,
      originalPrice: 1299,
      discount: 15,
      rating: 4.4,
      reviews: 523,
      image: '💻',
      specs: { ram: '16GB', storage: '512GB', processor: 'i5', display: '14"' },
      badge: 'Best Value',
      stock: true
    },
    {
      id: 8,
      name: 'Apple AirPods Max',
      category: 'Accessories',
      price: 549,
      originalPrice: 649,
      discount: 15,
      rating: 4.6,
      reviews: 2104,
      image: '🎧',
      specs: { type: 'Headphones', noise: 'Active', battery: '20hrs', color: 'Silver' },
      badge: null,
      stock: true
    }
  ];

  // State management
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [compareProducts, setCompareProducts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });
  }, [priceRange, selectedCategory]);

  // Categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Star rating component
  const StarRating = ({ rating, reviews }) => (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">{rating}</span>
      <span className="text-xs text-gray-500">({reviews.toLocaleString()})</span>
    </div>
  );

  // Product card component
  const ProductCard = ({ product }) => {
    const isComparing = compareProducts.some(p => p.id === product.id);

    return (
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition transform hover:translate-y-[-4px]">
        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-6 text-center min-h-[180px] flex items-center justify-center">
          <div className="text-6xl">{product.image}</div>
          {product.badge && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              {product.badge}
            </div>
          )}
          {product.discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded font-bold text-sm">
              -{product.discount}%
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-xs text-gray-500 mb-3">{product.category}</p>

          <StarRating rating={product.rating} reviews={product.reviews} />

          <div className="mt-4 mb-4">
            <div className="flex gap-2 items-baseline">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              <span className="text-sm line-through text-gray-500">${product.originalPrice}</span>
            </div>
          </div>

          <div className="flex gap-2 mb-3">
            <button
              onClick={() => {
                if (isComparing) {
                  setCompareProducts(compareProducts.filter(p => p.id !== product.id));
                } else {
                  if (compareProducts.length < 2) {
                    setCompareProducts([...compareProducts, product]);
                  }
                }
              }}
              className={`flex-1 py-2 px-3 rounded text-sm font-semibold transition ${
                isComparing
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isComparing ? '✓ Selected' : 'Compare'}
            </button>
            <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-3 rounded text-sm font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
              <ShoppingCart size={16} /> Add
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚡ Premium Electronics Marketplace
          </div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            TechHub Store
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Your one-stop destination for mobile phones, laptops & accessories
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
              Explore Products
            </button>
            <button className="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/20 transition">
              View Collections
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Panel */}
      {compareProducts.length > 0 && (
        <div className="bg-white border-b sticky top-0 z-40 shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-900">
                Comparing {compareProducts.length} product(s)
              </span>
              {compareProducts.length === 2 && (
                <button
                  onClick={() => setShowComparison(true)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded font-semibold hover:shadow-lg transition"
                >
                  View Comparison
                </button>
              )}
            </div>
            <button
              onClick={() => setCompareProducts([])}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block md:col-span-1`}>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded transition ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Math.max(0, parseInt(e.target.value) || 0), priceRange[1]])}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Math.min(3000, parseInt(e.target.value) || 3000)])}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                      placeholder="Max"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="text-sm text-gray-600">
                    ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Quick Price Categories */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Quick Filters</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Under $500', range: [0, 500] },
                    { label: '$500-$1000', range: [500, 1000] },
                    { label: '$1000+', range: [1000, 3000] }
                  ].map(({ label, range }) => (
                    <button
                      key={label}
                      onClick={() => setPriceRange(range)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded transition"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {/* Header with Filter Toggle */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                </h2>
                <p className="text-gray-600">{filteredProducts.length} products found</p>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg"
              >
                <Filter size={20} />
              </button>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-500 text-lg">No products found in this price range</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comparison Modal */}
      {showComparison && compareProducts.length === 2 && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b flex items-center justify-between p-6">
              <h3 className="text-2xl font-bold text-gray-900">Product Comparison</h3>
              <button
                onClick={() => setShowComparison(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <table className="w-full">
                <tbody>
                  {/* Product Names */}
                  <tr className="border-b">
                    <td className="font-semibold text-gray-900 py-4 pr-6">Product</td>
                    {compareProducts.map(product => (
                      <td key={product.id} className="text-center py-4">
                        <div className="text-4xl mb-2">{product.image}</div>
                        <p className="font-bold text-gray-900">{product.name}</p>
                      </td>
                    ))}
                  </tr>

                  {/* Prices */}
                  <tr className="border-b bg-gray-50">
                    <td className="font-semibold text-gray-900 py-4 pr-6">Price</td>
                    {compareProducts.map(product => (
                      <td key={product.id} className="text-center py-4">
                        <div className="text-2xl font-bold text-purple-600">${product.price}</div>
                        <p className="text-sm line-through text-gray-500">${product.originalPrice}</p>
                      </td>
                    ))}
                  </tr>

                  {/* Ratings */}
                  <tr className="border-b">
                    <td className="font-semibold text-gray-900 py-4 pr-6">Rating</td>
                    {compareProducts.map(product => (
                      <td key={product.id} className="text-center py-4">
                        <StarRating rating={product.rating} reviews={product.reviews} />
                      </td>
                    ))}
                  </tr>

                  {/* Specs */}
                  {compareProducts[0].specs && Object.entries(compareProducts[0].specs).map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <td className="font-semibold text-gray-900 py-4 pr-6 capitalize">{key}</td>
                      {compareProducts.map(product => (
                        <td key={product.id} className="text-center py-4 text-gray-700">
                          {product.specs[key] || '-'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t p-6 flex gap-4">
              <button
                onClick={() => setShowComparison(false)}
                className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Close
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                <ShoppingCart size={20} /> Add Both to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">About TechHub</h4>
            <p className="text-gray-400 text-sm">Premium electronics marketplace with trusted sellers.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Mobile Phones</a></li>
              <li><a href="#" className="hover:text-white">Laptops</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechHub Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Project;