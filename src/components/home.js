import React from "react";

const Home=()=> {
    return(
        <>
        <div className="header">
            <nav> 
                <ul> 
                    <li><a href=""> Trending Now!! </a>  </li>
                    {/* <li><a href=""> </a>  </li>
                    <li><a href=""> </a>  </li>
                    <li><a href=""> </a>  </li>
                    <li><a href=""> </a>  </li> */}
                </ul>
            </nav>
            <form>
                <div className="search-btn"> 
                    <input type="text" placeholder="Titles,genres,Names"
                    className="inputText">
                        </input>
                        <button> </button>
                            {/* add icon here */}
                </div>
                {/* the website already has the search btn */}
            </form>
             </div>
        </>
    )
}

export default Home;