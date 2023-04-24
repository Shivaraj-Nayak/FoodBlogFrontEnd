import axios from "axios";
import "../styles/about.css"
import Banner from "./banner";
import Footer from "./footer";
import Navbar from "./navbar";
import { useEffect, useState } from "react";

const About = () => {


    let title = "aboutPage"


    let [posts, setPosts] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get("http://localhost:4000/signup")
            const data = await res.data
            setPosts(data)
        }
        fetchData()
    }, [])



    return (


        <div className="about">
            <Navbar />

            <Banner data={title} />

            <div className="d1 d-flex">


                <img className="ms-5" height="680px" width="550px" src="https://preview.colorlib.com/theme/stories/images/about.jpg.webp" alt="" />

                <div className="content">
                    <h1 className="mt-3 ms-5 mb-3">About Stories</h1>
                    <h5 className="ms-5 mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h5>



                    <div className="blocks ms-4">


                        <div className="c1">
                            <h1>10</h1>
                            <h5>years of Experienced</h5>
                        </div>


                        <div className="c1">
                            <h1>200</h1>
                            <h5>Foods</h5>
                        </div>

                        <div className="c1">
                            <h1>300</h1>
                            <h5>LifeStyle</h5>
                        </div>


                        <div className="c1">
                            <h1>{posts.length}</h1>
                            <h5>Happy Coustomers</h5>
                        </div>

                    </div>


                </div>



            </div>

            <Footer />

        </div>

    );
}

export default About;