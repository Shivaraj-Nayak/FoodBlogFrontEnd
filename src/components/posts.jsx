
import { useState, useEffect } from "react";
import Banner from "./banner";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Posts = () => {

    let title = "All Posts"

    let [posts, setPosts] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get("http://localhost:4000/posts")
            let postData = response.data
            console.log(postData);
            setPosts(postData)
        }
        fetchData()
    }, [])



    return (
        <div className="main">

            <Navbar />
            <Banner data={title} />

            <h1 className="mt-4 mb-0  text-danger text-opacity-100 text-center">All Posts</h1>



            <div className="postss ">


                {posts.map((data) => (


                    <div className="main d-inline-block">

                        <div className="post align-items-center justify-content-center  ms-5 me-2 my-5">
                            <img src={data.image} width="350" height="350" alt="" />
                            <div className="d1">
                                <h2>{data.titlle}</h2>
                                <h4>-written by {data.author}</h4>

                                <Link to={`/posts/${data._id}`} className="btn btn-warning" id="bsk">Read More &#8674;</Link>

                            </div>
                        </div>


                    </div>


                ))}
            </div>


            <h5 className=" m-0 p-0 text-center text-danger">Number of posts : {posts.length}</h5>

<Footer/>
        </div>
    );
}

export default Posts;













