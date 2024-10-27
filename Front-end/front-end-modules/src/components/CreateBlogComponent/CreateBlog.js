import { IoMdPhotos } from "react-icons/io";
import { RiVideoUploadLine } from "react-icons/ri";
import { TbTextCaption } from "react-icons/tb";
import ExpandedCreateBlog from "./ExpandedCreateBlog";
import { useState } from "react";
import BlogContext from "../../context/BlogContext";
import {useContext} from 'react';

const CreateBlog = () => {
    const {createBlog} = useContext(BlogContext);

    // Correctly destructure the state and setter
    const [isExpanded, setIsExpanded] = useState(false);

    const profileImage = "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg";
    const firstName = `<first name>`;

    const handleSubmit = (blog) => {
        createBlog(blog);
    }

    // Render logic based on state
    return (
        <>
            {isExpanded ? (
                // If expanded, show ExpandedCreateBlog and pass onClose to close it
                <ExpandedCreateBlog 
                    onClose={() => setIsExpanded(false)} 
                    onSubmit = {handleSubmit}
                />
            ) : (
                // Otherwise, show placeholder component
                <CreateBlogPlaceholder
                    profileImage={profileImage}
                    firstName={firstName}
                    onExpand={() => setIsExpanded(true)} // Pass function to expand on click
                />
            )}
        </>
    );
};

// Placeholder component, expands when clicked
function CreateBlogPlaceholder({ profileImage, firstName, onExpand }) {
    return (
        <div 
            className="flex flex-col items-center bg-gray-300 rounded-md border-2 border-gray-400 py-1 px-2 my-4 hover:shadow-lg"
            onClick={onExpand} // Handle click to expand
        >
            <div className="flex space-x-2">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="bg-gray-100 border-dotted border-1 border-gray-900 rounded-full px-4 py-3 w-full font-bold text-slate-400">
                    What's on your mind, {firstName}?
                </div>
            </div>
            {/* <hr className="px-1 my-2 w-full h-0.5 mx-auto my-4 bg-gray-400 border-0 rounded" />
            <div className="flex justify-center space-x-4 mb-1">
                <ActionButton>
                    Photo <IoMdPhotos className="inline" />
                </ActionButton>
                <ActionButton>
                    Video <RiVideoUploadLine className="inline" />
                </ActionButton>
                <ActionButton>
                    Text <TbTextCaption className="inline" />
                </ActionButton>
            </div> */}
        </div>
    );
}

// Reusable ActionButton component
function ActionButton({ children }) {
    return (
        <div className="rounded-md font-bold px-2 py-1 mx-2 bg-gray-100 border-gray-100 border hover:bg-white hover:border hover:border-gray-900 hover:shadow-xl">
            {children}
        </div>
    );
}

export default CreateBlog;
