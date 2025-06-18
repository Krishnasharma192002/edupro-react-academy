
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  image: string;
  isLive: boolean;
  tags: string[];
  syllabus: string[];
  liveSessionDate?: string;
}

interface CourseState {
  courses: Course[];
  filteredCourses: Course[];
  categories: string[];
  filters: {
    category: string;
    priceRange: [number, number];
    rating: number;
    level: string;
  };
}

const initialState: CourseState = {
  courses: [
    {
      id: '1',
      title: 'Complete React.js Masterclass',
      description: 'Learn React from scratch with hands-on projects and real-world examples.',
      instructor: 'John Doe',
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.8,
      students: 12540,
      duration: '42 hours',
      level: 'Intermediate',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      isLive: false,
      tags: ['React', 'JavaScript', 'Frontend'],
      syllabus: ['Introduction to React', 'Components & Props', 'State Management', 'Hooks', 'Project Building'],
    },
    {
      id: '2',
      title: 'Digital Marketing Bootcamp',
      description: 'Master digital marketing strategies and grow your business online.',
      instructor: 'Sarah Johnson',
      price: 129.99,
      rating: 4.9,
      students: 8970,
      duration: '35 hours',
      level: 'Beginner',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      isLive: true,
      tags: ['SEO', 'Social Media', 'Content Marketing'],
      syllabus: ['SEO Fundamentals', 'Social Media Strategy', 'Content Creation', 'Analytics'],
      liveSessionDate: '2024-07-15T10:00:00Z',
    },
    {
      id: '3',
      title: 'Data Science with Python',
      description: 'Learn data analysis, visualization, and machine learning with Python.',
      instructor: 'Mike Chen',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      students: 15620,
      duration: '58 hours',
      level: 'Advanced',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      isLive: false,
      tags: ['Python', 'Machine Learning', 'Data Analysis'],
      syllabus: ['Python Basics', 'Data Manipulation', 'Visualization', 'ML Algorithms'],
    },
    {
      id: '4',
      title: 'UI/UX Design Fundamentals',
      description: 'Create beautiful and user-friendly interfaces with modern design principles.',
      instructor: 'Emily Rodriguez',
      price: 99.99,
      rating: 4.6,
      students: 7830,
      duration: '28 hours',
      level: 'Beginner',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop',
      isLive: true,
      tags: ['UI Design', 'UX Research', 'Figma'],
      syllabus: ['Design Principles', 'User Research', 'Wireframing', 'Prototyping'],
      liveSessionDate: '2024-07-20T14:00:00Z',
    },
  ],
  filteredCourses: [],
  categories: ['All', 'Programming', 'Marketing', 'Data Science', 'Design', 'Business'],
  filters: {
    category: 'All',
    priceRange: [0, 200],
    rating: 0,
    level: 'All',
  },
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredCourses = state.courses.filter(course => {
        const categoryMatch = state.filters.category === 'All' || course.category === state.filters.category;
        const priceMatch = course.price >= state.filters.priceRange[0] && course.price <= state.filters.priceRange[1];
        const ratingMatch = course.rating >= state.filters.rating;
        const levelMatch = state.filters.level === 'All' || course.level === state.filters.level;
        return categoryMatch && priceMatch && ratingMatch && levelMatch;
      });
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredCourses = state.courses;
    },
  },
});

export const { setFilters, resetFilters } = courseSlice.actions;
export default courseSlice.reducer;
