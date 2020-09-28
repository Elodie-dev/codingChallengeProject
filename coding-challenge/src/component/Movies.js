import React from 'react';

class Movies extends React.Component{
    constructor(){
        super();
        this.state = {
            movies:[]
        }
    }

    componentDidMount = ()=>{
        this.setState({ isLoading: true })
        console.log("start call api")
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=1728100d62f109696eeb6b69c014d482&language=fr-FR&page=1")
            .then((response) => {
                if(response.status === 200){
                    console.log("SUCCESSS");
                    return response.json();     
                }else if(response.status === 404){
                    console.log("SOMETHING WENT WRONG")
                    this.setState({ requestFailed: true })
                }
            })
            .then((data) => {
                this.setState({ isLoading: false, movies : data.results})
                console.log("DATA STORED")
            })
            .catch((error) => {
                this.setState({ requestFailed: true })
            })
        console.log("end call api")
    }

    render = () => {
        let movie = this.state.movies.map((data, i) => (
            <div className="card" key={i} style={{width: "18rem"}}>
                <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <button className="btn btn-primary" onClick={() =>{this.props.history.push(`/movies/${data.id}`)}}>Voir le détail du film</button>
                    </div>
                </div>
        ));
        if(this.state.loading){
            return (<div className="loadingContainer">
            <h1 className="loadingrMessage">Loading... </h1>
        </div>)
        }
        else if(this.state.requestFailed){
            return( 
                <div className="errorContainer">
                    <h1 className="errorMessage">Opss.. Something went wrong :(</h1>
                </div>
            )
        }
        else{ return(
            <main className="container">
                {movie}
            </main>
        )}
        
    }

}

export default Movies;