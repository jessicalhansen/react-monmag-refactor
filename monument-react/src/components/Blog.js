import React from 'react';
import Header from './Header';
import Article from './Article';
import Sidebar from './Sidebar';

import BlogCSS from './Blog.css';


const Blog = () => {
    return (
        <div>
            <Header />
            <div className="wrap grid-wrapper">
                <Article />
                <Sidebar />
            </div>
            
        </div>
    )
};

export default Blog;
