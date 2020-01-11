import React from "react";

const MovieThumb = ({title})=>{
    return (
            <li>
                <h3>{title}</h3>
            </li>
    )
}

const MoviesGallery = ({movies})=>(
    <section>
        <ul>
            {movies.map((movie,i)=><MovieThumb key={i} {...movie} />)}
        </ul>
    </section>
)


export default MoviesGallery;
