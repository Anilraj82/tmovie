import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import {Row, Input, Button} from 'react-materialize';
import { Link } from 'react-router-dom'


export class Movie extends Component {
    constructor(props) {
        super();
        this.state = {
            movies:[],
            title:''
        };
    }

    onTitleChange = (event) =>{
        this.setState({title: event.target.value});
    }

    searchByTitle(){
        const {title} = this.state;
        var url = `https://api.themoviedb.org/3/search/movie?api_key=dabd0229faca72dc1e2d5fd2bed9c0e9&language=en-US&query=${title}&page=1&include_adult=false`;
        axios.get(url)
            .then(response => {
                const data = response.data.results;
                this.setState({movies: data, title:''});
            })
            .catch(error => console.log(error))
    }

    render() {
        const {movies} = this.state;

        return (
            <div>
                <h4 className="test">Search movie</h4>

                <Row>
                    <Input s={4} label="Enter movie name" value={this.state.title} onChange={this.onTitleChange} />
                </Row>

                <Button><Link to='/'>Back</Link></Button>

                <Button onClick={this.searchByTitle.bind(this)}>Search</Button>


                <div>
                    { movies.length > 0 && movies.map((eachMovie, i) =>
                        <li key={i}>{eachMovie.title}</li>
                    )}
                </div>
            </div>
        );
    }
}
