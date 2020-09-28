import React from 'react';

class Series extends React.Component{
    constructor(){
        super();
        this.state = {
            series:[]
        }
    }

    componentDidMount = ()=>{
        this.setState({ isLoading: true })
        console.log("start call api")
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=1728100d62f109696eeb6b69c014d482&language=fr-FR&page=1")
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
                this.setState({ isLoading: false, series: data.results})
                console.log("DATA STORED")
            })
            .catch((error) => {
                this.setState({ requestFailed: true })
            })
        console.log("end call api")
    }

    render = () => {
        let serie = this.state.series.map((data, i) => (
            <div className="card" key={i} style={{width: "18rem"}}>
                <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text"></p>
                        <button className="btn btn-primary" onClick={() =>{this.props.history.push(`/series/${data.id}`)}}>Détails de la series</button>
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
                {serie}
            </main>
        )}
    }

}

export default Series;