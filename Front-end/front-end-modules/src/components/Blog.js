import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import BlogHeader from "./BlogHeader";
import BlogTitle from "./BlogTitle";
import BlogContent from "./BlogContent";
import BlogFooter from "./BlogFooter";
import CommentSection from "./CommentSection";

function Blog({ data }) {
    const [user, setUser] = useState({});
    const [blog, setBlog] = useState(data);
    const [expandCommentSection, setExpandCommentSection] = useState(false);

    const fetchUser = useCallback(async (id)=> {
        try {
            const response = await axios.get(`http://localhost:3001/users/${id}`);
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }, []);

    const upvote = async (blogId)=> {
        try {
            const response = await axios.put(`http://localhost:3001/blogs/${blogId}`, {
                ...blog, 
                upvotes: blog.upvotes + 1
            });
            setBlog(response.data);
        } catch (error) {
            console.error("Error upvoting blog:", error);
        }
    };

    const downvote = async (blogId)=> {
        try {
            const response = await axios.put(`http://localhost:3001/blogs/${blogId}`, {
                ...blog, 
                downvotes: blog.downvotes + 1
            });
            setBlog(response.data);
        } catch (error) {
            console.error("Error downvoting blog:", error);
        }
    };

    const share = async (blogId)=> {
        try {
            const response = await axios.put(`http://localhost:3001/blogs/${blogId}`, {
                ...blog, 
                shares: blog.shares + 1
            });
            setBlog(response.data);
        } catch (error) {
            console.error("Error sharing blog:", error);
        }
    };

    const fetchComments = async (id)=> {
        try {
            const response = await axios.get(`http://localhost:3001/comments?blogId=${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching user:", error);
            return null;
        }
    };

    const addComment = async (comment) => {
        try {
            const response = await axios.post(`http://localhost:3001/comments`, {
                ...comment,
                blogId: blog.id,
            });
            return response.data;
        } catch (error) {
            console.error("Error adding comment:", error);
            return null;
        }
    };

    console.log(fetchComments);

    useEffect(()=>{
        fetchUser(blog.userId);
      }, [fetchUser, blog.userId]);

    // Check if `blog` is defined before rendering
    if (!blog || !blog.id) {
        return <div>Loading...</div>; // or handle it in a better way
    }

    return (
        <div className="bg-gray-100 rounded-md border-2 border-gray-300 py-1 px-2 my-4 hover:bg-gray-200 shadow-lg">
            <BlogHeader user={user} />
            <BlogTitle title={blog.title} />
            <BlogContent content={blog.content} />
            <BlogFooter 
                id={blog.id}
                upvotes={blog.upvotes} handleUpvote={upvote}
                downvotes={blog.downvotes} handleDownvote={downvote}
                shares={blog.shares} handleShare={share}
                timeStamp={blog.timeStamp}
                toggleCommentSection = {() => {setExpandCommentSection(!expandCommentSection)}}
            />
            {expandCommentSection && (<CommentSection id={blog.id} fetchComments={fetchComments} addComment={addComment}/>)}
        </div>
    );
}

export default Blog;
