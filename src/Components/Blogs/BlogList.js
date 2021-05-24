import React,{useState,useEffect} from 'react';
import './blog.css';
import blogs from './blog_data';
import axios from 'axios';
import BlogItem from './BlogItem';
import ReactPaginate from "react-paginate";

function BlogList() {

   const [Allblogs, setblogs] = useState(blogs.slice(0,blogs.length));
   const [pageNumber,setpageNumber] = useState(0);


   const userPerPage = 10;
   const pageVisited = pageNumber * userPerPage;
   const displayUsers = Allblogs.slice(pageVisited,pageVisited + userPerPage);

   const pageCount = Math.ceil(Allblogs.length / userPerPage); 

   const changePage = ({selected}) =>{
      setpageNumber(selected);
   }

   console.log(displayUsers);
//    useEffect(() => {
//      async function fetchdata(){
//        const response = await axios.get(blogs);
//        console.log(response);
//      }

//      fetchdata();
//    }, [blogs])

    return (
        <div className='bloglist-container'>
             <div className="section">
                <div className="container">
                    <div className="row g-5">

                        {displayUsers.map(blog =>{
                            return <BlogItem key={blog.id} data={blog} />
                        })}
                        
                    </div>

                    <div className="pagination-container">
                        <ReactPaginate
                        previousLabel= {"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogList
