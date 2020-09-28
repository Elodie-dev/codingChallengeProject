import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            movie:{},
            serie:{}
        }
    }

    componentDidMount = ()=>{
        fetch("https://api.themoviedb.org/3/movie/547016?api_key=1728100d62f109696eeb6b69c014d482&language=fr-FR")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            //   console.log(data);
              this.setState({movie : data});
        })
        fetch("https://api.themoviedb.org/3/tv/76479?api_key=1728100d62f109696eeb6b69c014d482&language=fr-FR")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            //   console.log(data);
              this.setState({serie : data});
        })
    }


    render = () => {
        return(
            <main className="home">
                <div className="card">
                    <Link to="/movies"><img src={`https://image.tmdb.org/t/p/w500${this.state.movie.backdrop_path}`} className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title">Movies Section</h5>
                            <p className="card-text"></p>
                            <button type="button">
                                <Link to="/movies">Go</Link>
                            </button>
                        </div>
                </div>
                <div className="card">
                <Link to="/series"><img src={`https://image.tmdb.org/t/p/w500${this.state.serie.backdrop_path}`} className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title">Series Section</h5>
                            <p className="card-text"></p>
                            <button type="button">
                                <Link to="/series">Go</Link>
                            </button>
                        </div>
                </div>
            </main>
        )
    }

}

export default Home;