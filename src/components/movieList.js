import React from "react";

// const MovieList = ({ movies, onSelectMovie }) => {
//   return (
//     {
//       movies.map((movie) => (
//           <div className="col-md-3" key={movie.imdbID}>

// <div class="group">
//   <div class="card-box">
//     <div id="Hegel" class="card">
//       <div class="content">
//         <p class="some">
         
//           A film – also called a movie, motion picture, moving picture, picture,
//           photoplay or (slang) flick – is a work of visual art that simulates
//           experiences and otherwise communicates ideas, stories, perceptions,
//           feelings, beauty, or atmosphere through the use of moving images.
//         </p>
//       </div>
//       <div class="thumb">
//         <img id="movie-image" src="" alt="Movie Image" />
//       </div>
//       <div class="detial">
//         <div class="title">
//           <p id="movie-name" class="name">Movie Name</p>
//           <div class="action">
            
//             <svg class="mode hide" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//               <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
//             </svg>
           
//           </div>
//         </div>
//         <div class="level">
     
//           <svg class="bi bi-star-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
//             <path id="movie-rating" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//           </svg>
//           <svg class="bi bi-star-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
//             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//           </svg>
//           <svg class="bi bi-star-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
//             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//           </svg>
//           <svg class="bi bi-star-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
//             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//           </svg>
//           <svg class="bi bi-star" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
//             <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
//           </svg>
//         </div>

//         <div class="infomation">
//           <p id="release-date" class="propertion">2024.1.11</p>
//           <p id="movie-type" class="propertion">xxx</p>
//           <p class="propertion">type</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// ))}


//     <div className="row">
//       {movies.map((movie) => (
//         <div className="col-md-3" key={movie.imdbID}>
//           <div className="card">

// <div class="card">
// <img
//               src={movie.Poster}
//               alt={movie.Title}
//               className="card-img-top"
//             />
//   <div class="card__content">
//     <p class="card__title"><h5 className="card-title">{movie.Title}</h5>
//     </p><p class="card__description"> <p className="card-text">{movie.Year}</p> Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
//   </div>
// </div>

           
//             <div className="card-body">
              
             
//               <button
//                 className="btn btn-primary"
//                 onClick={() => onSelectMovie(movie.imdbID)} // Handle movie selection
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


// const MovieList = ({ movies, onSelectMovie }) => {
//   return (
//     // <div className="row">
//     //   {movies.map((movie) => (
//     //     <div className="col-md-3" key={movie.imdbID}>
//     //       <div className="group">
//     //         <div className="card-box">
//     //           <div id="Hegel" className="card">
//     //             <div className="content">
//     //             <div className="card-body">
              
             
//     //                         <button
//     //                          className="btn btn-primary"
//     //                          onClick={() => onSelectMovie(movie.imdbID)} // Handle movie selection
//     //                         >
//     //                        View Details
//     //                         </button>
//     //                       </div>
  
//     //             </div>
//     //             <div className="thumb">
//     //               <img
//     //                 id="movie-image"
//     //                 src={movie.Poster}  // Assuming the image URL is in the "Poster" field
//     //                 alt={movie.Title}   // Using the movie title as alt text
//     //               />
//     //             </div>
//     //             <div className="detial">
//     //               <div className="title">
//     //                 <p id="movie-name" className="name">{movie.Title}</p> {/* Movie name */}
//     //                 <div className="action">
//     //                   <svg className="mode hide" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//     //                     <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
//     //                   </svg>
//     //                 </div>
//     //               </div>
//     //               <div className="level">
//     //                 <svg className="bi bi-star-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
//     //                   <path id="movie-rating" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//     //                 </svg>
//     //                 <svg className="bi bi-star-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
//     //                   <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//     //                 </svg>
//     //                 <svg className="bi bi-star-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
//     //                   <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//     //                 </svg>
//     //                 <svg className="bi bi-star-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
//     //                   <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
//     //                 </svg>
//     //                 <svg className="bi bi-star" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
//     //                   <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
//     //                 </svg>
//     //               </div>

//     //               <div className="infomation">
//     //                 <p id="release-date" className="propertion">{movie.Year}</p> {/* Movie Year */}
//     //                 <p id="movie-type" className="propertion">{movie.Type}</p> {/* Movie Type */}
//     //                 <p className="propertion">type</p>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   ))}
//     // </div>
//   );
// };
const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-3" key={movie.imdbID}>
          <div className="group">
            <div className="card-box">
              <div id="Hegel" className="b">
                {/* The image container */}
                <div className="thumb">
                
            <img src={movie.Poster} alt="Movie Title" />
           
          
                </div>

                {/* The content to show on hover */}
                <div className="content">
               
              <button
                 className="btn btn-primary"               onClick={() => onSelectMovie(movie.imdbID)} // Handle movie selection
            >
                 View Details
             </button>
                </div>
                
                {/* Movie details to show on hover */}
                <div className="detial">
                  <div className="title">
                    <p id="movie-name" className="name">{movie.Title}</p> {/* Movie name */}
                    <div className="action">
                      <svg className="mode hide" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="level">
                    {/* Placeholder for the star rating */}
                    <svg className="bi bi-star-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  </div>

                  <div className="infomation">
                    <p id="release-date" className="propertion">{movie.Released}</p> {/* Release Date */}
                    <p id="movie-type" className="propertion">{movie.Genre}</p> {/* Movie Genre */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default MovieList;
