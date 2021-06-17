
import React from 'react';
import classes from './Movie.module.css';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'add movie details.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                   <label>
                    movie detail:
                     </label>
          <textarea className={classes.movie} value={this.state.value} onChange={this.handleChange} />
               
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddMovie;