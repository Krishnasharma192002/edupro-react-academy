
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Clock, Play, BookOpen, Trophy, TrendingUp } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();

  const enrolledCourses = [
    {
      id: 1,
      title: 'Complete React.js Masterclass',
      progress: 65,
      totalLessons: 42,
      completedLessons: 27,
      nextLesson: 'Advanced Hooks',
      instructor: 'John Doe',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      title: 'Digital Marketing Bootcamp',
      progress: 30,
      totalLessons: 28,
      completedLessons: 8,
      nextLesson: 'SEO Fundamentals',
      instructor: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
    },
  ];

  const upcomingLiveSessions = [
    {
      id: 1,
      title: 'React State Management Q&A',
      instructor: 'John Doe',
      date: '2024-07-15',
      time: '10:00 AM',
      duration: '1 hour',
    },
    {
      id: 2,
      title: 'Digital Marketing Trends 2024',
      instructor: 'Sarah Johnson',
      date: '2024-07-20',
      time: '2:00 PM',
      duration: '45 minutes',
    },
  ];

  const achievements = [
    { title: 'First Course Completed', icon: Trophy, color: 'text-yellow-500' },
    { title: 'Perfect Attendance', icon: Calendar, color: 'text-green-500' },
    { title: 'Quick Learner', icon: TrendingUp, color: 'text-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Enrolled Courses</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                <Trophy className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                <Clock className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Hours Learned</p>
                <p className="text-2xl font-bold text-gray-900">127</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg. Progress</p>
                <p className="text-2xl font-bold text-gray-900">78%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Continue Learning</h2>
              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          <span>Next: {course.nextLesson}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 mb-2">
                          {course.progress}%
                        </div>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                        <Play className="h-4 w-4" />
                        <span>Continue</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Live Sessions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Live Sessions</h2>
              <div className="space-y-4">
                {upcomingLiveSessions.map((session) => (
                  <div key={session.id} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium text-gray-900">{session.title}</h3>
                    <p className="text-sm text-gray-600">by {session.instructor}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{session.date} at {session.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{session.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                    <span className="text-gray-700">{achievement.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Browse New Courses
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  View Certificates
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
