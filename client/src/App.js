import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import PostPage from "./components/PostPage";

import "./App.css";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Micro Blog
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts/new">
              Create a Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts">
              Post Feed
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <div className={PostsListPage?'PostsListPage':''}>
          <Routes>
            <Route path="/posts" element={<PostsListPage />} />
            <Route path="/posts/new" element={<PostFormPage />} />
            <Route path="/posts/:id" element={<ShowPostPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
