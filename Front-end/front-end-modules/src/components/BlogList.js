import { useContext, useEffect } from 'react';
import Blog from './Blog';
import BlogContext from '../context/BlogContext';


function BlogList() {
    const {blogs, fetchBlogs} = useContext(BlogContext);

    useEffect(()=>{
      fetchBlogs();
    }, [fetchBlogs]);

    const renderBlogs = blogs.map((blog) => {
        return <Blog key={blog.id} data={blog} />;
    });
    return (
        <div>
            {renderBlogs}
        </div>
    );
}

export default BlogList;