import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';
import { useState } from 'react';


class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/films")
            .then(res => res.json())
            .then(
                (resul) => {
                    this.setState({
                        isLoaded: true,
                        items: resul.results
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                      
                        <Movie movies={item} />
                    ))}
                </ul>
            );
        }
    }
}
export default MovieList;
