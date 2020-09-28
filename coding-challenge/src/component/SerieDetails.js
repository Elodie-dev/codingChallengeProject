import React from 'react';
import Moment from 'moment';

class SerieDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            serie:{},
            seasons:[]
        }
    }

    componentDidMount = ()=>{
        this.setState({ isLoading: true })
        console.log("start call api")
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=1728100d62f109696eeb6b69c014d482&language=fr-FR`)
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
                this.setState({ isLoading: false, serie : data, seasons: data.seasons})
                console.log("DATA STORED")
            })
            .catch((error) => {
                this.setState({ requestFailed: true })
            })
        console.log("end call api")
    }

    render = () => {
        let season = this.state.seasons.map((data,i) => {return (<p key={i} className="card-text">{data.name} : <br/>
         - Date de sortie: {Moment(data.air_date).format('DD/MM/YYYY')}, nombres d'épisodes: {data.episode_count}</p>)});

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
                <main className="card mb-3">
                    <img src={`https://image.tmdb.org/t/p/w500${this.state.serie.poster_path}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.serie.title}</h5>
                        <p className="card-text">Résumé : <br/>
                        {this.state.serie.overview}</p>
                            {season}
                        <p className="card-text"><small className="text-muted">Date de sortie : {Moment(this.state.serie.first_air_date).format('DD/MM/YYYY')}</small></p>
                    </div>
                </main>
        )}

    }

}

export default SerieDetails;