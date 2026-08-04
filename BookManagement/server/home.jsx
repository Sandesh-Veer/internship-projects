import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Search,
  Bookmark,
  Users,
  ArrowRight,
} from "lucide-react";
import { baseBookURL } from "../axiosInstance";



const Home = () => {
 
  const [booklist,setBookList]=useState([])
 
  const getBookList=async()=>{
    try{
   const {data}=await baseBookURL.get("getbook");
   setBookList(data?.Booklist)
   console.log(data.Booklist);
   }catch(err){
      console.log(err.Message);
     
    }
  }
  //reload
  useEffect(()=>{
     getBookList()
     console.log(booklist);
     
  },[])
   

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
            <BookOpen size={28} />
            BookHub
          </h1>

          <div className="hidden md:flex gap-8 font-medium">
            <a href="#" className="hover:text-indigo-600">
              Home
            </a>
            <a href="#" className="hover:text-indigo-600">
              Books
            </a>
            <a href="#" className="hover:text-indigo-600">
              Categories
            </a>
            <a href="#" className="hover:text-indigo-600">
              Contact
            </a>
          </div>

          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
            Login
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            Organize Your
            <span className="text-indigo-600"> Books</span> Like Never Before
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Manage your personal library, track borrowed books, discover new
            collections, and keep your reading journey organized.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-700">
              Explore Books
              <ArrowRight size={18} />
            </button>

            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800"
            alt="Books"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Stats */}

      <section className="bg-indigo-600 text-white py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">

          <div>
            <h2 className="text-4xl font-bold">10K+</h2>
            <p>Books</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">2K+</h2>
            <p>Readers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p>Authors</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">120+</h2>
            <p>Categories</p>
          </div>

        </div>
      </section>

      {/* Featured Books */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Books
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {booklist.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-xl shadow hover:shadow-xl duration-300 overflow-hidden"
            >
             

              <div className="p-5">
                <h3 className="text-xl font-bold">{book.bookName}</h3>

                <p className="text-gray-500">{book.bookAuthor}</p>
                <p className="text-gray-500">{book.bookPrice}</p>

                <button className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Features */}

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center p-8 rounded-xl shadow">
              <Search className="mx-auto text-indigo-600" size={45} />
              <h3 className="font-bold text-xl mt-5">Easy Search</h3>
              <p className="text-gray-500 mt-2">
                Find any book instantly using advanced search.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl shadow">
              <Bookmark className="mx-auto text-indigo-600" size={45} />
              <h3 className="font-bold text-xl mt-5">
                Bookmark Favorites
              </h3>
              <p className="text-gray-500 mt-2">
                Save books to your personal reading list.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl shadow">
              <Users className="mx-auto text-indigo-600" size={45} />
              <h3 className="font-bold text-xl mt-5">
                Community
              </h3>
              <p className="text-gray-500 mt-2">
                Share reviews and discover recommendations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">

          <h2 className="text-xl font-bold text-white">
            📚 BookHub
          </h2>

          <p>
            © 2026 BookHub. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
};

