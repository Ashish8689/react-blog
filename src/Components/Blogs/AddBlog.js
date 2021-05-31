import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { setAddBlog } from '../../features/blogsSlice';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

function AddBlog() {

    const [blogtitle, setblogtitle] = useState('');
    const [blogdescription, setblogdescription] = useState('');
    const [blogcategory, setblogcategory] = useState('');
    const [blogcategory2, setblogcategory2] = useState('');
    const [blogauthor, setblogauthor] = useState('');
    const [blogpersonimage, setblogpersonimage] = useState(null);
    const [blogimage, setblogimage] = useState(null);

    const [error, seterror] = useState(false);
    const [error2, seterror2] = useState(false);


    const history = useHistory();




    // ********************  Image Handler start  **********************

    const handleImageChange = (e) =>{
        const selected = e.target.files[0];
        const Allowed_types = ["image/png","image/jpeg","image/jpg"];
        if(selected && Allowed_types.includes(selected.type)){
            let reader = new FileReader();
            reader.onloadend = () =>{
                setblogimage(reader.result);
                seterror(false);
            }
            reader.readAsDataURL(selected);
        }
        else{
            seterror(true);
        }
    }



    const handleImageChange2 = (e) =>{
        const selected = e.target.files[0];
        const Allowed_types = ["image/png","image/jpeg","image/jpg"];
        if(selected && Allowed_types.includes(selected.type)){
            let reader = new FileReader();
            reader.onloadend = () =>{
                setblogpersonimage(reader.result);
                seterror2(false);
            }
            reader.readAsDataURL(selected);
        }
        else{
            seterror2(true);
        }
    }



    const dispatch = useDispatch();

    const formSubmit = (e) =>{
        e.preventDefault();
        dispatch(setAddBlog({
            id:uuidv4(),
            title: blogtitle,
            description:blogdescription,
            category:blogcategory,
            category2:blogcategory2,
            date: new Date().toLocaleDateString(),
            author:blogauthor,
            // "designation":"CEO and Founder",
            image:blogpersonimage,
            blog_image:blogimage
        }))

        history.push('/');
    }


    return (
        <div className="addblog">
            <h1>Enter Blog Details</h1>
            <form onSubmit={formSubmit}>
                 <label htmlFor="title">Blog Title</label>
                 <input type="text" name="title" onChange={(e)=> setblogtitle(e.target.value)} />

                 <label htmlFor="description">Blog Description</label>
                 <textarea name="description" onChange={(e)=> setblogdescription(e.target.value)}></textarea>

                 <div className="form-group row">
                     <div className="form-group col-lg-6 col-sm-12">
                         <label htmlFor="category">Category</label>
                         <input type="text" value={blogcategory} onChange={(e)=> setblogcategory(e.target.value)} />
                     </div>

                     <div className="form-group col-lg-6 col-sm-12">
                         <label htmlFor="category2">Category2</label>
                         <input type="text" value={blogcategory2} onChange={(e)=> setblogcategory2(e.target.value)} />
                     </div>
                 </div>

                 <div className="form-group row">
                     <div className="form-group col-lg-6 col-sm-12">
                         <label htmlFor="category">Author</label>
                         <input type="text" value={blogauthor} onChange={(e)=> setblogauthor(e.target.value)} />
                     </div>

                     <div className="form-group col-lg-6 col-sm-12">
                         <label htmlFor="category2">Author Image</label>
                         <input type="file" onChange={handleImageChange} />
                         {error&& <p className="error">File not supported</p> }
                     </div>
                 </div>

                 <label htmlFor="image">Blog Image</label>
                 <input type="file" onChange={handleImageChange2} />
                 {error2&& <p className="error">File not supported</p> }

                 <button>Submit</button>
            </form>
        </div>
    )
}

export default AddBlog
