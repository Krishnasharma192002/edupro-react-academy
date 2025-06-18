
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { Course } from '../store/slices/courseSlice';
import { Star, Clock, Users, ShoppingCart } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(course));
    toast({
      title: "Added to Cart",
      description: `${course.title} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <Link to={`/course/${course.id}`} className="block">
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {course.isLive && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Live
            </div>
          )}
          {course.originalPrice && (
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
              {course.category}
            </span>
            <span className="text-xs text-gray-500">{course.level}</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {course.description}
          </p>

          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                ${course.price}
              </span>
              {course.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ${course.originalPrice}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
