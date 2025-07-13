import React, { useState } from 'react';
import { 
  PenTool, 
  BookOpen, 
  Upload, 
  Sparkles,
  User,
  Calendar,
  Tag,
  FileText,
  Star,
  TrendingUp,
  Eye,
  Heart,
  Menu,
  X,
  ChevronDown,
  Home,
  Settings,
  LogOut,
  Bell,
  BookMarked
} from 'lucide-react';

const WriterDashboard = () => {
  const [form, setForm] = useState({ title: '', summary: '', genre: '' });
  const [coverImage, setCoverImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFileChange = e => setCoverImage(e.target.files[0]);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Book created successfully!');
      setForm({ title: '', summary: '', genre: '' });
      setCoverImage(null);
      setIsSubmitting(false);
    }, 2000);
  };

  // Mock user data (adjusted for writer)
  const user = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Writer",
    avatar: "/api/placeholder/40/40",
    joinDate: "March 2023",
    booksPublished: 12,
    favoriteGenres: ["Fantasy", "Romance", "Mystery"]
  };

  // Mock data for writer stats
  const writerStats = {
    totalBooks: 12,
    totalViews: 15420,
    totalLikes: 892,
    avgRating: 4.6
  };

  const recentBooks = [
    {
      id: 1,
      title: "The Digital Renaissance",
      genre: "Technology",
      status: "Published",
      views: 2340,
      likes: 156,
      rating: 4.5,
      publishedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Whispers in the Wind",
      genre: "Romance",
      status: "Published",
      views: 1890,
      likes: 98,
      rating: 4.2,
      publishedDate: "2024-02-20"
    },
    {
      id: 3,
      title: "Code Warriors",
      genre: "Technology",
      status: "Draft",
      views: 0,
      likes: 0,
      rating: 0,
      publishedDate: null
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  const NavigationBar = () => (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">BookHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <Home className="w-5 h-5 mr-1" />
              Dashboard
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <PenTool className="w-5 h-5 mr-1" />
              My Books
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <BookMarked className="w-5 h-5 mr-1" />
              Drafts
            </a>
            
            {/* Notifications */}
            <button className="relative text-gray-700 hover:text-blue-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <span className="hidden md:block font-medium">{user.name}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full border border-gray-300"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1">
                        {user.role}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Member Since</p>
                      <p className="font-medium text-gray-900">{user.joinDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Books Published</p>
                      <p className="font-medium text-gray-900">{user.booksPublished}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-500 text-sm mb-2">Favorite Genres</p>
                    <div className="flex flex-wrap gap-1">
                      {user.favoriteGenres.map(genre => (
                        <span key={genre} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="py-1">
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md">
                <Home className="w-5 h-5 mr-2" />
                Dashboard
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md">
                <PenTool className="w-5 h-5 mr-2" />
                My Books
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md">
                <BookMarked className="w-5 h-5 mr-2" />
                Drafts
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <NavigationBar />
      
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Writer Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">
                Create and manage your literary masterpieces
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {writerStats.totalBooks} Books Created
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Books</p>
                <p className="text-2xl font-bold text-gray-900">{writerStats.totalBooks}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Eye className="w-8 h-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">{writerStats.totalViews.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Likes</p>
                <p className="text-2xl font-bold text-gray-900">{writerStats.totalLikes}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Star className="w-8 h-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">{writerStats.avgRating}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Create New Book Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <PenTool className="w-6 h-6 text-blue-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Create New Book</h2>
                </div>
              </div>
              
              <div onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Book Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Enter your book title..."
                      value={form.title}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-2">
                      Genre
                    </label>
                    <input
                      id="genre"
                      name="genre"
                      type="text"
                      placeholder="Fantasy, Romance, Mystery..."
                      value={form.genre}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">
                      Book Summary
                    </label>
                    <textarea
                      id="summary"
                      name="summary"
                      placeholder="Tell readers what your story is about..."
                      value={form.summary}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="cover" className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Image
                    </label>
                    <div className="relative">
                      <input
                        id="cover"
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                        required
                      />
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-blue-500 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          {coverImage ? coverImage.name : 'Click to upload cover image'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="button"
                    onClick={handleSubmit}
                    className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Creating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Create Book
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Books */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <BookOpen className="w-6 h-6 text-green-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Recent Books</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {recentBooks.map(book => (
                    <div key={book.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-gray-900 text-sm line-clamp-1">{book.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          book.status === 'Published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {book.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Tag className="w-3 h-3 mr-1" />
                        {book.genre}
                      </div>
                      
                      {book.status === 'Published' && (
                        <>
                          <div className="flex items-center mb-2">
                            {renderStars(book.rating)}
                            <span className="ml-2 text-xs text-gray-600">{book.rating}</span>
                          </div>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {book.views}
                            </span>
                            <span className="flex items-center">
                              <Heart className="w-3 h-3 mr-1" />
                              {book.likes}
                            </span>
                          </div>
                          
                          {book.publishedDate && (
                            <div className="flex items-center text-xs text-gray-500 mt-2">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(book.publishedDate).toLocaleDateString()}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All Books
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Writing Tips Section */}
        <div className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-purple-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Writing Tips</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-2">Engaging Titles</h3>
                <p className="text-sm text-blue-700">
                  Create titles that spark curiosity and give readers a hint of what's to come.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-medium text-green-900 mb-2">Compelling Summaries</h3>
                <p className="text-sm text-green-700">
                  Write summaries that hook readers without giving away too much of the plot.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-medium text-purple-900 mb-2">Eye-catching Covers</h3>
                <p className="text-sm text-purple-700">
                  Choose covers that represent your story's mood and appeal to your target audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterDashboard;