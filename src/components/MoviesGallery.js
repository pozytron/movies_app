import React from "react";
import {connect} from "react-redux";

const MovieThumb = ({Title})=>{
    return (
            <li>
                <h3>{Title}</h3>
            </li>
    )
}

const MoviesGallery = ({movies})=>{
    if(movies !=null){
        return (
            <section>
        <ul>
            {movies.map((movie,i)=><MovieThumb key={i} {...movie} />)}
        </ul>
    </section>)
    }else{
        return <h1>Trwa ładowanie filmów</h1>
    }
}

const mapState = ({movies}) =>({
    movies:movies.movies
})

export default connect(mapState)(MoviesGallery);
