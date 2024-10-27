import {createContext, useState, useCallback} from 'react';
import axios from 'axios';

const BlogContext = createContext();

function BlogProvider({ children }) {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = useCallback( async()=>{
        const response = await axios.get('http://localhost:3001/blogs');
        setBlogs(response.data);
    }, []);
    
    //todo: need to implement it in a better way
    const createBlog = async (blog) => {
        const response = await axios.post('http://localhost:3001/blogs',blog);
        setBlogs([...blogs,response.data]);
    };
    
    const deleteBlogById = async (id) =>{
        await axios.delete(`http://localhost:3001/blogs/${id}`);
        setBlogs(blogs.filter((blog)=>blog.id!==id));
    };
    
    const editBlogById = async (id, blog)=>{
        const response = await axios.put(`http://localhost:3001/blogs/${id}`,{
          blog,
        });
    
        const updatedBlogs = blogs.map((blog)=>{
            if(blog.id===id){
                return {...blog, ...response.data};
            }
            return blog;
            });
    
        setBlogs(updatedBlogs);
    };

    const valueToShare = {
        blogs,
        fetchBlogs,
        createBlog,
        deleteBlogById,
        editBlogById,
    };

    return (
        <BlogContext.Provider value={valueToShare}>
            {children}
        </BlogContext.Provider>
    );
}

export {BlogProvider};
export default BlogContext;