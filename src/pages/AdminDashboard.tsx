
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Users, DollarSign, BookOpen, TrendingUp, Check, X, Eye, Shield } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Users', value: '12,540', icon: Users, color: 'bg-blue-500', change: '+12%' },
    { title: 'Total Revenue', value: '$89,240', icon: DollarSign, color: 'bg-green-500', change: '+8%' },
    { title: 'Active Courses', value: '340', icon: BookOpen, color: 'bg-purple-500', change: '+15%' },
    { title: 'Growth Rate', value: '23%', icon: TrendingUp, color: 'bg-orange-500', change: '+5%' },
  ];

  const pendingTeachers = [
    {
      id: 1,
      name: 'Dr. Emily Chen',
      email: 'emily.chen@email.com',
      expertise: 'Data Science',
      experience: '8 years',
      courses: 3,
      status: 'pending',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      email: 'michael.r@email.com',
      expertise: 'Web Development',
      experience: '5 years',
      courses: 2,
      status: 'pending',
    },
    {
      id: 3,
      name: 'Sarah Thompson',
      email: 'sarah.t@email.com',
      expertise: 'Digital Marketing',
      experience: '6 years',
      courses: 4,
      status: 'pending',
    },
  ];

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@email.com', role: 'Student', joined: '2024-07-10' },
    { id: 2, name: 'Jane Smith', email: 'jane@email.com', role: 'Student', joined: '2024-07-09' },
    { id: 3, name: 'Mike Johnson', email: 'mike@email.com', role: 'Teacher', joined: '2024-07-08' },
    { id: 4, name: 'Lisa Brown', email: 'lisa@email.com', role: 'Student', joined: '2024-07-07' },
  ];

  const handleTeacherApproval = (teacherId: number, action: 'approve' | 'reject') => {
    console.log(`${action} teacher with ID: ${teacherId}`);
    // Here you would make API call to approve/reject teacher
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Welcome back, {user?.name}! Here's what's happening on EduPro.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${stat.color} text-white p-3 rounded-lg`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium">{stat.change}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['overview', 'teachers', 'users', 'courses', 'payments'].map((tab) => (
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
                {/* Pending Teacher Approvals */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Pending Teacher Approvals ({pendingTeachers.length})
                  </h2>
                  <div className="space-y-4">
                    {pendingTeachers.map((teacher) => (
                      <div key={teacher.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                              <span className="text-gray-600 font-medium">
                                {teacher.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{teacher.name}</h3>
                              <p className="text-sm text-gray-600">{teacher.email}</p>
                              <p className="text-sm text-gray-500">
                                {teacher.expertise} • {teacher.experience} • {teacher.courses} courses ready
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleTeacherApproval(teacher.id, 'approve')}
                              className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1"
                            >
                              <Check className="h-4 w-4" />
                              <span>Approve</span>
                            </button>
                            <button
                              onClick={() => handleTeacherApproval(teacher.id, 'reject')}
                              className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-1"
                            >
                              <X className="h-4 w-4" />
                              <span>Reject</span>
                            </button>
                            <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors">
                              <Eye className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Active Students</h3>
                    <p className="text-3xl font-bold text-blue-600">8,420</p>
                    <p className="text-sm text-blue-700">+15% from last month</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Active Teachers</h3>
                    <p className="text-3xl font-bold text-green-600">320</p>
                    <p className="text-sm text-green-700">+8% from last month</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">Course Completion</h3>
                    <p className="text-3xl font-bold text-purple-600">78%</p>
                    <p className="text-sm text-purple-700">+12% from last month</p>
                  </div>
                </div>
              </div>
            )}

            {/* Teachers Tab */}
            {activeTab === 'teachers' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Teacher Management</h2>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Invite Teacher
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      Export Data
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Teacher Management System</h3>
                  <p className="text-gray-600">
                    Detailed teacher profiles, approval workflows, and performance analytics.
                  </p>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      Filter
                    </button>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Joined
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 font-medium text-sm">
                                  {user.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              user.role === 'Teacher' 
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.joined}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Course Management</h2>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Course Management System</h3>
                  <p className="text-gray-600">
                    Comprehensive course approval, content moderation, and quality assurance tools.
                  </p>
                </div>
              </div>
            )}

            {/* Payments Tab */}
            {activeTab === 'payments' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Analytics</h2>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Dashboard</h3>
                  <p className="text-gray-600">
                    Revenue analytics, transaction history, and financial reporting tools.
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

export default AdminDashboard;
