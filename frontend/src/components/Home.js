import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Row, Col } from 'antd';
import { setGenres } from '../actions/rootActions';
import GenreCard from './GenreCard';
import { Route } from 'react-router-dom';
import ArtistsModal from './ArtistsModal';

class Home extends Component {

    cardClicked = (id) => {
        this.props.history.push('/genres/' + id);
    }

    renderGenreCards() {
        return this.props.genres.length > 0 ?
            (
                <Row>
                    {
                        this.props.genres.map((genre) => (
                            <Col key={genre.id} xs={12} md={8} lg={6} xl={4} >
                                <GenreCard
                                    id={genre.id}
                                    title={genre.name}
                                    picture={genre.picture}
                                    onClick={this.cardClicked}
                                />
                            </Col>
                        ))
                    }
                </Row>

            ) :
            (
                <h1>Loading... (Did u turn on the server?)</h1>
            )
    }

    componentDidMount() {
        axios.get('http://localhost:8080/genre').then(({ data }) => {
            this.props.setGenres(data);
        }, (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h1>Genres</h1>
                <div className="cardContainer">
                    {this.renderGenreCards()}
                </div>
                <Route path='/genres/:id' component={ArtistsModal} />
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