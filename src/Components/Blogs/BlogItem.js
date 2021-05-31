import React from 'react'

function BlogItem({data:{id,title,category,category2,author,description,mini_description,image,blog_image,date,designation}}) {
    return (
        <div className="col-lg-4">
                        <div className="post-entry d-block small-post-entry-v">
                            <div className="thumbnail">
                                <a href="single.html">
                                <img src={blog_image && blog_image} alt="Image" className="img-fluid" />
                                </a>
                            </div>
                            <div className="content">
                                <div className="post-meta mb-1">
                                    <a href="#" className="category">{category}</a>, <a href="#" className="category">{category2}</a> &mdash;
                                    <span className="date">{date}</span>
                                </div>
                                <h2 className="heading mb-3">
                                    <a href="single.html">{title}</a>
                                </h2>
                                <p>{mini_description}</p>
                                <a href="#" className="post-author d-flex align-items-center">
                                    <div className="author-pic">
                                        <img src={image && image} alt="Image" />
                                    </div>
                                    <div className="text">
                                        <strong>{author}</strong>
                                        <span>{designation}</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                </div>
    )
}

export default BlogItem
