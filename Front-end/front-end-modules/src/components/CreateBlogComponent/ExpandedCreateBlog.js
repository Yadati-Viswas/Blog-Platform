import { IoMdPhotos } from "react-icons/io";
import { RiVideoUploadLine } from "react-icons/ri";
import { TbFileUpload } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon
import { useState } from 'react';

const ExpandedCreatePost = ({ onClose, onSubmit }) => {
    const [postText, setPostText] = useState({
        "userId": 7,
        "title": "",
        "content": "",
        "upvotes": 0,
        "downvotes": 0,
        "comments": [],
        "shares": 0,
        "timeStamp": ""
      });
    const profileImage = "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg";
    const firstName = `<first name>`;

    const setPostTextWithTitle = (title) => {
        setPostText({...postText, title:title});
    }

    const setPostTextWithBody = (body) => {
        setPostText({...postText, content:body});
    }

    const handlePost = () => {
        if (postText.content.trim() !== "" && postText.title.trim() !== "") {
            onSubmit({...postText, timeStamp:new Date().toISOString()});
            console.log("Post created:", postText);
            setPostText(""); // Clear the text after posting
        } else {
            alert("Please write something before posting.");
        }
    };

    return (
        <div className="relative flex flex-col items-center bg-gray-300 rounded-md border-2 border-gray-400 py-2 px-2 my-4 hover:shadow-lg w-full">
            {/* Header section */}
            <div className="flex space-x-2 w-full">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col items-center w-full">
                    <textarea
                        value={postText.title}
                        onChange={(e) => setPostTextWithTitle(e.target.value)}
                        className="bg-gray-100 border-dotted border-1 border-gray-900 rounded-lg px-4 py-2 mb-2 w-full font-bold text-black rows-1 resize-none"
                        placeholder={`Title`}
                        rows={1} // Increased height for expanded editor
                    />
                    <textarea
                        value={postText.content}
                        onChange={(e) => setPostTextWithBody(e.target.value)}
                        className="bg-gray-100 border-dotted border-1 border-gray-900 rounded-lg px-4 py-2 w-full font-bold text-black"
                        placeholder={`Body`}
                        rows={5} // Increased height for expanded editor
                    />
                </div>
                {/* Close Button */}
                <button 
                    className="absolute top-2 right-2 p-2 text-gray-500 hover:text-black"
                    onClick={onClose} // Callback to close the component
                >
                    <AiOutlineClose size={20} />
                </button>
            </div>

            {/* Divider */}
            <hr className="w-full h-0.5 my-2 bg-gray-400 border-0 rounded" />

            {/* Media and file options */}
            <div className="flex justify-center w-full space-x-2 mb-2">
                <ActionButton>Photo <IoMdPhotos className="inline" /></ActionButton>
                <ActionButton>Video <RiVideoUploadLine className="inline" /></ActionButton>
                <ActionButton>File <TbFileUpload className="inline" /></ActionButton>
                <ActionButton>Format</ActionButton> {/* Placeholder for formatting options */}
                <ActionButton>Tag</ActionButton> {/* Placeholder for adding tags */}
                <ActionButton>Location</ActionButton> {/* Placeholder for location feature */}
            </div>

            {/* Post button */}
            <div className="flex justify-end w-full">
                <button
                    onClick={handlePost}
                    className="flex items-center px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-bold"
                >
                    Post <FiSend className="ml-2 inline" />
                </button>
            </div>
        </div>
    );
}

function ActionButton({ children }) {
    return (
        <div className="rounded-md font-bold px-2 py-1 bg-gray-100 border-gray-100 border hover:bg-white hover:border hover:border-gray-900 hover:shadow-xl">
            {children}
        </div>
    );
}

export default ExpandedCreatePost;
