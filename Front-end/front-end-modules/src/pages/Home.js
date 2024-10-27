import React from "react";
import { BlogProvider } from "../context/BlogContext";
import Navbar from "./Navbar";
import BlogList from '../components/BlogList';
import CreateBlog from "../components/CreateBlogComponent/CreateBlog";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="grid grid-cols-12 gap-4 p-4">
                    {/* Left Column */}
                    <div className="col-span-3 bg-gray-100 p-4">
                        <h2>Left Column</h2>
                        <p>Content for the left column (e.g., profile or navigation)</p>
                    </div>

                    {/* Middle Column */}
                    <div className="col-span-6 bg-white p-4">
                        <h2>Middle Column</h2>
                        <p>Content for the main feed or posts.</p>
                        <BlogProvider>
                            <CreateBlog />
                            <BlogList />
                        </BlogProvider>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-3 bg-gray-100 p-4">
                        <h2>Right Column</h2>
                        <p>Content for the right column (e.g., recommendations or ads)</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;