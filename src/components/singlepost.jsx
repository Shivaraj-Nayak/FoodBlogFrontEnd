import { useEffect, useState } from "react"
import Navbar from "./navbar"
import axios from "axios"
import { Link, useParams} from "react-router-dom"
import Footer from "./footer"

const Singlepost = () => {

    let [content, setcontent] = useState([])

    let params = useParams()

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/posts/${params.id}`)
            let postData = response.data
            setcontent(postData)
        }
        fetchData()
    }, [])

    return (

        <div className="Readmore">
            <Navbar />
            <div className="d1   bg-dark bg-opacity-25 mx-5 mt-4 d-flex justify-content-center">

                <div className="img my-4 mx-4">
                    <img height={"420px"} width={"400px"} src={content.image} alt="" />
                </div>
                <div className="lines">
                    <h1>{content.titlle}</h1>
                    <h4>-written by {content.author}</h4>
                    <h5>{content.summary}</h5>
                    <iframe src={content.location} className="my-3" width="400" height="250"></iframe>
                </div>

            </div>

<div className=" text-center">
<Link to='/posts' className="btn  btn-dark btn-lg rounded-1 my-4">&lt; Go back to Posts</Link>

</div>

            <Footer/>
        </div>
    );
}

export default Singlepost;