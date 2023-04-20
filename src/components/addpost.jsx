import "../styles/addpost.css"

const Addpost = () => {

    let submittt = () => {
        alert("submitted")
    }
    return (
        <div className="addpost">


            <div className="forms d-flex">



                <div className="image">
                    <img className="ms-5" height="680px" width="550px" src="https://preview.colorlib.com/theme/stories/images/about.jpg.webp" alt="" />

                </div>



                <div id="form" className="form w-25 m-5">

                    <h1 className="mb-2">ADD POST</h1>

                    <form action="">

                        <label for="exampleFormControlInput1" class="form-label">Author</label>
                        <div id="s1" class="mb-3">
                            <input type="email" class="ps-3 my-1 w-100 " id="exampleFormControlInput1234" placeholder="Author" />
                        </div>


                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <div id="s1" class="mb-3">
                            <input type="email" class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Title of the Post" />
                        </div>




                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <div id="s1" class="mb-3">
                            <textarea class="ps-3 my-1 w-100 " id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>


                        <label for="exampleFormControlInput1" class="form-label">Image</label>
                        <div id="s1" class="mb-3">
                            <input type="email" class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Image of the post" />
                        </div>

                        <label for="exampleFormControlInput1" class="form-label">Location</label>
                        <div id="s1" class="mb-3">
                            <input type="email" class="ps-3 my-1 w-100 " id="exampleFormControlInput1" placeholder="Location of the post" />
                        </div>

                        <div className="button">
                            <button onClick={submittt} type="submit" className="btn  btn-warning bg-warning m-1">Submit Post</button>
                        </div>
                    </form>


                </div>


            </div>


        </div>
    );
}

export default Addpost;