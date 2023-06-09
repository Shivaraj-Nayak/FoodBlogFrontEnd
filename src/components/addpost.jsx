import { useState } from "react";
import "../styles/addpost.css"
import Banner from "./banner";
import Footer from "./footer";
import Navbar from "./navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addpost = () => {

    let [titlle, settitlle] = useState("")
    let [author, setauthor] = useState("")
    let [summary, setsummary] = useState("")
    let [image, setimage] = useState("")
    let [location, setlocation] = useState("")


    let navigate = useNavigate()

    let title = "Add Post"


    let addpost = (e) => {
        e.preventDefault()
        let data = { titlle, summary, image, author, location }

        if (titlle == "" && summary == "" && location == "") {
            alert('please fill all the fields')
        } else {
            axios.post('http://localhost:4000/addpost', data)
                .then((res) => {
                    alert(res.data.message) //message from backend 
                    navigate('/posts') //navigate to posts page
                }).catch((err) => {
                    alert(err.data.message)
                })
        }
    }
    return (
        <div className="addpost">

            <Navbar />
            <Banner data={title} />
            <div className="forms d-flex  align-content-between  justify-content-center">



                <div className="image">
                    <img className="" height="680px" width="500px" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                </div>



                <div id="form" className="form w-25 m-5">

                    <h1 id="orange" className="pb-2 mb-4">ADD POST</h1>

                    <form action="" onSubmit={addpost}>

                        <label for="exampleFormControlInput1" class="form-label">Author</label>
                        <div id="s1" class="mb-3">
                            <input type="text" name="author" value={author} onChange={(e) => setauthor(e.target.value)} class="ps-3 my-1 w-100 " id="exampleFormControlInput1234" placeholder="Author" />
                        </div>


                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <div id="s1" class="mb-3">
                            <input type="text" name="titlle" value={titlle} onChange={(e) => settitlle(e.target.value)} class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Title of the Post" />
                        </div>




                        <label for="exampleFormControlTextarea1" class="">Summary</label>
                        <div id="s1" class="mb-3">
                            <textarea type="text" name="summary" value={summary} onChange={(e) => setsummary(e.target.value)} class="ps-3 my-1 w-100 " id="exampleFormControlTextarea1" rows="3" ></textarea>
                        </div>


                        <label for="exampleFormControlInput1" class="form-label">Image</label>
                        <div id="s1" class="mb-3">
                            <input type="text" name="image" value={image} onChange={(e) => setimage(e.target.value)} class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Image of the post" />
                        </div>

                        <label for="exampleFormControlInput1" class="form-label">Location</label>
                        <div id="s1" class="mb-3">
                            <input type="text" name="location" value={location} onChange={(e) => setlocation(e.target.value)} class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Location of the post" />
                        </div>

                        <div className="button">
                            <button type="submit" className="btn  btn-warning bg-warning m-1">Submit Post</button>
                        </div>
                    </form>


                </div>


            </div>
            <Footer />

        </div>
    );
}

export default Addpost;