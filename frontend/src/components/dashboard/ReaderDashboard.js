import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  BookOpen, 
  Eye, 
  Calendar,
  User,
  Tag,
  Heart,
  BookMarked,
  Clock,
  TrendingUp
} from 'lucide-react';

const ReaderDashboard = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState(new Set());
  const [readingList, setReadingList] = useState(new Set());

  // Sample book data
  useEffect(() => {
    const sampleBooks = [
      {
        id: 1,
        title: "The Digital Renaissance",
        author: "Sarah Chen",
        genre: "Technology",
        rating: 4.5,
        reviews: 234,
        description: "A comprehensive look at how technology is reshaping our world and what it means for the future.",
        coverImage: "/api/placeholder/200/300",
        publishedDate: "2024-01-15",
        readTime: "6 hours",
        tags: ["Technology", "Future", "Innovation"],
        trending: true
      },
      {
        id: 2,
        title: "Whispers in the Wind",
        author: "Michael Rodriguez",
        genre: "Romance",
        rating: 4.2,
        reviews: 456,
        description: "A heartwarming tale of love found in the most unexpected places.",
        coverImage: "/api/placeholder/200/300",
        publishedDate: "2024-02-20",
        readTime: "4 hours",
        tags: ["Romance", "Drama", "Contemporary"],
        trending: false
      },
      {
        id: 3,
        title: "The Last Algorithm",
        author: "Dr. Emily Watson",
        genre: "Sci-Fi",
        rating: 4.8,
        reviews: 789,
        description: "In a world where AI has evolved beyond human control, one programmer holds the key to humanity's future.",
        coverImage: "/api/placeholder/200/300",
        publishedDate: "2024-03-10",
        readTime: "8 hours",
        tags: ["Sci-Fi", "AI", "Thriller"],
        trending: true
      },
      {
        id: 4,
        title: "Garden of Memories",
        author: "Anna Thompson",
        genre: "Literary Fiction",
        rating: 4.0,
        reviews: 123,
        description: "A poignant exploration of family, loss, and the power of remembrance.",
        coverImage: "/api/placeholder/200/300",
        publishedDate: "2024-01-05",
        readTime: "5 hours",
        tags: ["Literary", "Family", "Drama"],
        trending: false
      },
      {
        id: 5,
        title: "Code Warriors",
        author: "James Liu",
        genre: "Technology",
        rating: 4.3,
        reviews: 567,
        description: "The untold story of the programmers who changed the world.",
        coverImage: "/api/placeholder/200/300",
        publishedDate: "2024-02-28",
        readTime: "7 hours",
        tags: ["Technology", "Biography", "History"],
        trending: false
      },
      {
        id: 6,
        title: "Midnight in Paris",
        author: "Isabella Martin",
        genre: "Romance",
        rating: 4.6,
        reviews: 890,
        description: "A magical night in the City of Light changes everything for two strangers.",
        coverImage: "/api/placeholder/200/300",
        publishedDate: "2024-03-15",
        readTime: "3 hours",
        tags: ["Romance", "Travel", "Contemporary"],
        trending: true
      }
    ];
    setBooks(sampleBooks);
    setFilteredBooks(sampleBooks);
  }, []);

  // Filter and search functionality
  useEffect(() => {
    let filtered = books;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by genre
    if (selectedGenre !== 'all') {
      filtered = filtered.filter(book => book.genre === selectedGenre);
    }

    // Sort books
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    setFilteredBooks(filtered);
  }, [books, searchTerm, selectedGenre, sortBy]);

  const handleFavorite = (bookId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(bookId)) {
        newFavorites.delete(bookId);
      } else {
        newFavorites.add(bookId);
      }
      return newFavorites;
    });
  };

  const handleReadingList = (bookId) => {
    setReadingList(prev => {
      const newReadingList = new Set(prev);
      if (newReadingList.has(bookId)) {
        newReadingList.delete(bookId);
      } else {
        newReadingList.add(bookId);
      }
      return newReadingList;
    });
  };

  const genres = ['all', ...new Set(books.map(book => book.genre))];

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

  const BookCard = ({ book }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-48 object-cover"
        />
        {book.trending && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            Trending
          </div>
        )}
        <div className="absolute top-2 right-2 flex space-x-2">
          <button
            onClick={() => handleFavorite(book.id)}
            className={`p-2 rounded-full ${favorites.has(book.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'} shadow-md hover:shadow-lg transition-all`}
          >
            <Heart className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleReadingList(book.id)}
            className={`p-2 rounded-full ${readingList.has(book.id) ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'} shadow-md hover:shadow-lg transition-all`}
          >
            <BookMarked className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{book.title}</h3>
        <p className="text-gray-600 mb-2 flex items-center">
          <User className="w-4 h-4 mr-1" />
          {book.author}
        </p>
        
        <div className="flex items-center mb-2">
          {renderStars(book.rating)}
          <span className="ml-2 text-sm text-gray-600">
            {book.rating} ({book.reviews} reviews)
          </span>
        </div>
        
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">{book.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(book.publishedDate).toLocaleDateString()}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {book.readTime}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {book.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
          <BookOpen className="w-4 h-4 mr-2" />
          Read Now
        </button>
      </div>
    </div>
  );

  const BookListItem = ({ book }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex">
      <img 
        src={book.coverImage} 
        alt={book.title}
        className="w-20 h-28 object-cover rounded mr-4"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{book.title}</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => handleFavorite(book.id)}
              className={`p-1 rounded ${favorites.has(book.id) ? 'text-red-500' : 'text-gray-400'}`}
            >
              <Heart className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleReadingList(book.id)}
              className={`p-1 rounded ${readingList.has(book.id) ? 'text-blue-500' : 'text-gray-400'}`}
            >
              <BookMarked className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <p className="text-gray-600 mb-2 flex items-center">
          <User className="w-4 h-4 mr-1" />
          {book.author}
        </p>
        
        <div className="flex items-center mb-2">
          {renderStars(book.rating)}
          <span className="ml-2 text-sm text-gray-600">
            {book.rating} ({book.reviews} reviews)
          </span>
          {book.trending && (
            <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              Trending
            </span>
          )}
        </div>
        
        <p className="text-gray-700 text-sm mb-2">{book.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(book.publishedDate).toLocaleDateString()}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {book.readTime}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {book.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            Read Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Reader Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">
                Discover and explore amazing books from talented writers
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {filteredBooks.length} Books Available
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search books, authors, or descriptions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>
                      {genre === 'all' ? 'All Genres' : genre}
                    </option>
                  ))}
                </select>
              </div>

              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="rating">Highest Rated</option>
                <option value="popular">Most Popular</option>
                <option value="title">Title A-Z</option>
              </select>

              <div className="flex border border-gray-300 rounded-md">
                <button
                  className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => setViewMode('grid')}
                >
                  Grid
                </button>
                <button
                  className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => setViewMode('list')}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Books</p>
                <p className="text-2xl font-bold text-gray-900">{books.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Favorites</p>
                <p className="text-2xl font-bold text-gray-900">{favorites.size}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <BookMarked className="w-8 h-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Reading List</p>
                <p className="text-2xl font-bold text-gray-900">{readingList.size}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Trending</p>
                <p className="text-2xl font-bold text-gray-900">{books.filter(b => b.trending).length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Books Display */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No books found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
            {filteredBooks.map(book => (
              viewMode === 'grid' ? 
                <BookCard key={book.id} book={book} /> : 
                <BookListItem key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReaderDashboard;