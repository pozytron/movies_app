import React from "react";
import {connect} from "react-redux";
import {fetchMovies} from "../redux/actions";

class Search extends React.Component{
    state = {
        searchText: "Alien"
    }
    hanldeChange = (e) =>{
        this.setState({
            searchText: e.target.value
        })
    }
    handleSearch = ()=>{
        this.props.search(this.state.searchText)
    }
    render(){
        return (
            <>
                <input type="text" onChange={this.hanldeChange} value={this.state.searchText}/>
                <button onClick={this.handleSearch}>Szukaj</button>
            </>
        )
    }
}



const mapDispatch = (dispatch) =>({
    search:(text)=>dispatch(fetchMovies(text))
})

export default connect(null,mapDispatch)(Search);
