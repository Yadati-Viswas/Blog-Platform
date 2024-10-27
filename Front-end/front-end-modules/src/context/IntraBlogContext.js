import axios from "axios";
import { createContext, useCallback, useState } from "react";

const IntraBlogContext = createContext();
function IntraBlogProvider () {
    const [user, setUser] = useState({});
    const [blog, setBlog] = useState({});

    const fetchUser = useCallback(async (id)=> {
        const response = await axios.get(`https://localhost:3001/users/${id}`);
        setUser(response.data);
    });

    const upvote = async (blogId)=> {
        const response = await axios.put(`https://localhost:3001/blogs/${blogId}`, 
            {
                ...blog, 
                upvotes : blog.upvotes+1
            }
        );

        setBlog(response.data);
    };

    const downvote = async (blogId)=> {
        const response = await axios.put(`https://localhost:3001/blogs/${blogId}`, 
            {
                ...blog, 
                downvotes : blog.downvotes+1
            }
        );

        setBlog(response.data);
    };

    const share = async (blogId)=> {
        const response = await axios.put(`https://localhost:3001/blogs/${blogId}`, 
            {
                ...blog, 
                shares : blog.shares+1
            }
        );

        setBlog(response.data);
    };

}

export default IntraBlogContext;
export {IntraBlogProvider};