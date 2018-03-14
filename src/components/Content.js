import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import {Row, Icon, Input, Button} from 'react-materialize';

export class Content extends Component {
    constructor(props) {
        super();
        this.state = {
            title:'',
            movies:[]
        };
        console.log('Running constructor');
    }

    componentWillMount(){
        console.log('The ocmponent will mount now');
    }
    componentDidMount() {
        console.log('Component has finished rendering or mounting')
    }

    shouldComponentUpdate(){
        console.log('Should component update??');
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('The compoent will update now');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component has updated ', prevState);
        console.log('The component has mounted');
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
            <div className = "button">
                <Row>
                    <Input s={2} label="Enter movie name" value={this.state.title} onChange={this.onTitleChange} />
                    <Button className="marginTop" onClick={this.searchByTitle.bind(this)}>Search by title</Button>
                </Row>

                <div>
                    { movies.length > 0 && movies.map((eachMovie, i) =>
                        <li key={i}>{eachMovie.title}</li>
                    )}
                </div>
            </div>
        );
    }
}
