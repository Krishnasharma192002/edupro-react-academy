
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Upload, Users, DollarSign, Calendar, Plus, Edit, Trash2, Eye } from 'lucide-react';

const TeacherDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    {
      id: 1,
      title: 'Complete React.js Masterclass',
      students: 1250,
      revenue: 4500,
      status: 'Published',
      rating: 4.8,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      students: 890,
      revenue: 2200,
      status: 'Published',
      rating: 4.9,
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop',
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      students: 0,
      revenue: 0,
      status: 'Draft',
      rating: 0,
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop',
    },
  ];

  const upcomingLiveSessions = [
    {
      id: 1,
      title: 'React Hooks Deep Dive',
      date: '2024-07-15',
      time: '10:00 AM',
      attendees: 45,
    },
    {
      id: 2,
      title: 'JavaScript Q&A Session',
      date: '2024-07-18',
      time: '3:00 PM',
      attendees: 32,
    },
  ];

  const stats = [
    { title: 'Total Students', value: '2,140', icon: Users, color: 'bg-blue-500' },
    { title: 'Total Revenue', value: '$6,700', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Courses Published', value: '2', icon: Upload, color: 'bg-purple-500' },
    { title: 'Avg. Rating', value: '4.85', icon: Eye, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Teacher Dashboard
          </h1>
          <p className="text-gray-600">Welcome back, {user?.name}!</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className={`${stat.color} text-white p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['overview', 'courses', 'students', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Quick Actions */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-3">
                      <Plus className="h-5 w-5" />
                      <span>Create New Course</span>
                    </button>
                    <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-3">
                      <Calendar className="h-5 w-5" />
                      <span>Schedule Live Session</span>
                    </button>
                    <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-3">
                      <Upload className="h-5 w-5" />
                      <span>Upload Content</span>
                    </button>
                  </div>
                </div>

                {/* Upcoming Live Sessions */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Live Sessions</h2>
                  <div className="space-y-4">
                    {upcomingLiveSessions.map((session) => (
                      <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900">{session.title}</h3>
                            <p className="text-sm text-gray-600">
                              {session.date} at {session.time} • {session.attendees} registered
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-700">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">My Courses</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Create Course</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <div key={course.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            course.status === 'Published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {course.status}
                          </span>
                          {course.rating > 0 && (
                            <span className="text-sm text-gray-600">★ {course.rating}</span>
                          )}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 space-x-4">
                          <span>{course.students} students</span>
                          <span>${course.revenue}</span>
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Edit
                          </button>
                          <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Students Tab */}
            {activeTab === 'students' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Student Management</h2>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Student Analytics Coming Soon</h3>
                  <p className="text-gray-600">
                    Detailed student performance and engagement analytics will be available here.
                  </p>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Analytics & Insights</h2>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard Coming Soon</h3>
                  <p className="text-gray-600">
                    Comprehensive analytics including revenue, student engagement, and course performance.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
