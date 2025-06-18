
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, clearCart } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, CreditCard, Lock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Cart = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
    toast({
      title: "Item Removed",
      description: "Course has been removed from your cart.",
    });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout Initiated",
      description: "Redirecting to payment gateway...",
    });
    // Here you would integrate with a payment gateway like Stripe or Razorpay
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any courses to your cart yet.
          </p>
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{items.length} course(s) in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
                  <button
                    onClick={handleClearCart}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">by {item.instructor}</p>
                        <p className="text-sm text-gray-500">{item.category} • {item.level}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm text-gray-500">Rating:</span>
                          <span className="text-sm font-medium">{item.rating}/5</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900 mb-2">
                          ${item.price}
                        </div>
                        {item.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            ${item.originalPrice}
                          </div>
                        )}
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="mt-2 text-red-600 hover:text-red-700 p-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-green-600">-$0.00</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mb-4"
              >
                <CreditCard className="h-5 w-5" />
                <span>Proceed to Checkout</span>
              </button>

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Lock className="h-4 w-4" />
                <span>Secure 256-bit SSL encryption</span>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Money-Back Guarantee</h3>
                <p className="text-sm text-gray-600">
                  Not satisfied? Get a full refund within 30 days of purchase.
                </p>
              </div>

              <div className="mt-4 text-center">
                <Link
                  to="/courses"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
