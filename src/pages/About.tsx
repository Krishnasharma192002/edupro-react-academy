
import React from 'react';
import { Users, Award, Globe, TrendingUp, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Students Worldwide', value: '50,000+' },
    { icon: Award, label: 'Expert Instructors', value: '500+' },
    { icon: Globe, label: 'Countries Reached', value: '100+' },
    { icon: TrendingUp, label: 'Course Completion Rate', value: '94%' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah-johnson',
      bio: 'Former tech executive with 15+ years in education technology.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Content',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael-chen',
      bio: 'Curriculum designer with expertise in adult learning methodologies.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Technology',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily-rodriguez',
      bio: 'Full-stack developer passionate about creating seamless learning experiences.',
    },
    {
      name: 'David Thompson',
      role: 'Head of Marketing',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david-thompson',
      bio: 'Growth marketing specialist with a focus on educational technology.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from course content to student support.',
    },
    {
      icon: Heart,
      title: 'Accessibility',
      description: 'Quality education should be accessible to everyone, regardless of location or background.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to provide the most effective learning experiences.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Lives Through
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              {' '}Education
            </span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            EduPro is on a mission to make quality education accessible to everyone, everywhere. 
            We believe that learning should be engaging, practical, and transformative.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2020, EduPro began with a simple yet powerful vision: to democratize 
                  access to high-quality education. Our founders, a team of educators and technologists, 
                  recognized the need for a platform that could bridge the gap between traditional 
                  learning and modern career demands.
                </p>
                <p>
                  What started as a small initiative has grown into a global platform serving over 
                  50,000 students across 100+ countries. We've partnered with industry experts, 
                  top universities, and leading companies to create courses that are not just 
                  informative, but transformative.
                </p>
                <p>
                  Today, EduPro continues to evolve, always staying true to our core mission: 
                  making learning accessible, engaging, and career-focused for everyone.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To empower individuals worldwide with the skills and knowledge they need to 
                  succeed in their careers and personal growth journey through innovative, 
                  accessible, and high-quality online education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gray-50">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind EduPro's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
            Join thousands of students who are already transforming their careers with EduPro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/courses"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Browse Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
