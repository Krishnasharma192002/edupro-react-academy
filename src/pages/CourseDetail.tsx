
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { addToCart } from '../store/slices/cartSlice';
import { Star, Clock, Users, PlayCircle, CheckCircle, Calendar, Award, Globe } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const course = useSelector((state: RootState) => 
    state.courses.courses.find(c => c.id === id)
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(course));
    toast({
      title: "Added to Cart",
      description: `${course.title} has been added to your cart.`,
    });
  };

  const handleEnrollNow = () => {
    // Simulate immediate enrollment
    toast({
      title: "Enrolled Successfully!",
      description: `You've been enrolled in ${course.title}. Start learning now!`,
    });
  };

  const courseFeatures = [
    { icon: Clock, text: `${course.duration} of content` },
    { icon: PlayCircle, text: course.isLive ? 'Live sessions included' : 'Self-paced learning' },
    { icon: Globe, text: 'Lifetime access' },
    { icon: Award, text: 'Certificate of completion' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.category}
                </span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.level}
                </span>
                {course.isLive && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Live
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {course.title}
              </h1>
              
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-blue-200">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-200" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-200" />
                  <span>By {course.instructor}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold">${course.price}</span>
                  {course.originalPrice && (
                    <span className="text-xl text-blue-300 line-through">
                      ${course.originalPrice}
                    </span>
                  )}
                </div>
                {course.originalPrice && (
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    Preview
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button
                    onClick={handleEnrollNow}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors"
                  >
                    Enroll Now
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-6 rounded-lg text-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="mt-6 text-center text-sm text-blue-200">
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Learn */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.syllabus.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>
              <div className="space-y-4">
                {course.syllabus.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <PlayCircle className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-gray-900">
                          {index + 1}. {section}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {Math.floor(Math.random() * 60) + 10} min
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Instructor</h2>
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.instructor}</h3>
                  <p className="text-gray-600 mb-4">
                    {course.category} Expert with over 10 years of industry experience. 
                    Has taught thousands of students and helped them advance their careers.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>4.9 instructor rating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>15,000+ students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <PlayCircle className="h-4 w-4" />
                      <span>12 courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Course Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This course includes:</h3>
              <div className="space-y-3">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Session Info */}
            {course.isLive && course.liveSessionDate && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Live Session</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      {new Date(course.liveSessionDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">
                      {new Date(course.liveSessionDate).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Share */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this course</h3>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Facebook
                </button>
                <button className="flex-1 bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors text-sm">
                  Twitter
                </button>
                <button className="flex-1 bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
