import React, { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { setModalStatus, setArtists } from '../actions/rootActions';
import ArtistCard from '../components/ArtistCard';
import axios from 'axios';

class ArtistsModal extends Component {

    getModalTitle = () => {
        if (this.props.genres.length === 0) {
            return "Loading...";
        }
        else {
            var genre = this.props.genres.find(g => { return g.id === parseInt(this.props.match.params.id) });
            if (genre) {
                return genre.name + " Top Artists";
            }
            return "Invalid ID";
        }
    }

    getArtists = () => {
        /**
         * The below try/catch will handle the case if someone
         * enters an invalid (random) genre ID, and will automatically
         * close the modal
         */
        try {
            var genreID = this.props.genres.find(g => { return g.id === parseInt(this.props.match.params.id) }).id;
            axios.get('http://localhost:8080/genre_artists?id=' + genreID).then(({ data }) => {
                this.props.setArtists(data);
            }, (error) => {
                console.log(error);
            })
        }
        catch (e) {
            this.handleCloseModal();
        }
    }


    componentDidMount() {
        this.props.setModalStatus(true);
        if (this.props.genres.length > 0) {
            this.getArtists();
        }
    }


    /**
     * In case someone navigates directly to /genres/:id
     * and we still don't have any genres inside state.
     * In this case, we wait for the genres to be delivered,
     * THEN we fetch the associated artists
     */

    componentDidUpdate(prevProps) {
        if (prevProps.genres.length !== this.props.genres.length) {
            // GET ARTISTS
            this.getArtists();
        }
    }

    renderArtistsCards = () => {
        if (this.props.artists.length === 0) {
            return (
                <h4>Loading...</h4>
            )
        }
        else {
            return (
                this.props.artists.map((artist) => (
                    <div key={artist.id}>
                        <ArtistCard
                            name={artist.name}
                            img={artist.picture_medium}
                        />
                    </div>
                ))
            )
        }
    }

    handleCloseModal = () => {
        this.props.history.push('/genres');
        this.props.setArtists([]);
    }

    render() {
        return (
            <div>
                <Modal
                    visible={this.props.modalOpen}
                    title={this.getModalTitle()}
                    className="artistModal"
                    afterClose={this.handleCloseModal}
                    onCancel={() => { this.props.setModalStatus(false) }}
                    footer={null}
                >
                    {this.renderArtistsCards()}
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        genres: state.genres,
        modalOpen: state.modalOpen,
        artists: state.artists
    }
}

const actions = {
    setModalStatus,
    setArtists
}

export default connect(mapStateToProps, actions)(ArtistsModal);
