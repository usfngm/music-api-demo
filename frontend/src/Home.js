import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGenres } from './actions/rootActions';

class Home extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>I'm Home</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        genres: state.genres
    }
}

const actions = {
    setGenres
}

export default connect(mapStateToProps, actions)(Home);