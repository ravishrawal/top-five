import React from 'react';
import { connect } from 'react-redux';

import { removeSong } from '../redux/songs';
import Song from './Song';

const selectedSongs = (props)=>{
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        { props.activePlaylist.name ? <h1>Your Selections for { props.activePlaylist.name  }</h1> : <h1>Select A Playlist</h1> }
      </div>
      <div className="row justify-content-around">
      { props.songs.map((song, index) => <Song removeSong={props.removeSongFromTop} key={song.id || index} songDetails={song} number={index + 1} />) }
      </div>
      <div className="row justify-content-center">
      {
        props.songs.every(song => song.id) && props.songs.length === 5
          ? <button>Submit Your Top 5!</button>
          : null
      }
      </div>
    </div>
  )
}

const mapStateToProps = ({ songs, activePlaylist }, ownProps) => {
  return {
    ...ownProps,
    songs,
    activePlaylist,
  };
};

const mapDispatch = dispatch => {
  return {
    removeSongFromTop: song => {
      return dispatch(removeSong(song));
    },
  }
}

export default connect(mapStateToProps, mapDispatch)(selectedSongs);
