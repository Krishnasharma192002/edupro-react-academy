
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CourseCard from '../components/CourseCard';
import { Play, Star, Users, Award, CheckCircle } from 'lucide-react';

const Index = () => {
  const courses = useSelector((state: RootState) => state.courses.courses);
  const featuredCourses = courses.slice(0, 4);

  const stats = [
    { icon: Users, label: 'Students', value: '50,000+' },
    { icon: Award, label: 'Courses', value: '1,200+' },
    { icon: Star, label: 'Rating', value: '4.9/5' },
    { icon: CheckCircle, label: 'Success Rate', value: '98%' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Jessica Chen',
      role: 'Frontend Developer',
      content: 'EduPro transformed my career! The React course was comprehensive and practical.',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jessica',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Digital Marketer',
      content: 'The marketing courses here are top-notch. I doubled my salary after completing them.',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Data Scientist',
      content: 'Amazing instructors and hands-on projects. The Python course was exactly what I needed.',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Learn Skills That
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {' '}Transform
                </span>
                <br />
                Your Career
              </h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Join over 50,000 students learning from industry experts. Master in-demand skills with our 
                comprehensive online courses and live sessions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 text-center"
                >
                  Browse Courses
                </Link>
                <Link
                  to="/register"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 text-center"
                >
                  Start Learning
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Play className="h-16 w-16 text-white" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Preview Our Courses</h3>
                  <p className="text-blue-200">See how our interactive learning platform works</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular courses taught by industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EduPro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the best online learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of real-world experience in their fields.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Live & Recorded Sessions</h3>
              <p className="text-gray-600">
                Access both live interactive sessions and recorded content that you can watch anytime.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certificates</h3>
              <p className="text-gray-600">
                Earn industry-recognized certificates upon successful completion of your courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from thousands of students who have transformed their careers with EduPro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join thousands of students who are already advancing their careers with our courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Free
            </Link>
            <Link
              to="/courses"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
