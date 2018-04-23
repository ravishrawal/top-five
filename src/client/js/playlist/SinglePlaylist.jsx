import React from 'react';

import { connect } from 'react-redux';

import { getActivePlaylist } from '../redux/playlists';

import Song from '../selectedSongs/Song';

const SinglePlaylist = (props) => {
  const playlist = props.playlistInfo;
  return (
    <div onClick = { ()=>{ props.setActivePlaylist(playlist.id) } }>
      <h3 style={{color: 'green'}}>{ playlist.name }</h3>
      { playlist.id === props.activePlaylist.id &&
        <div>
          <em>|| currently selected ||</em>
          songs
          { playlist.songs.map((song, index) => {
              return (
                <Song key={song.id || index} songDetails={song} number={index + 1} />
              )
            })
          }
        </div>
      }
    </div>
  )
}

const mapState = ({ activePlaylist }) => {
  return {
    activePlaylist,
  };
}

const mapDispatch = (dispatch) => {
  return {
    setActivePlaylist: (id) => {
      dispatch(getActivePlaylist(id));
    }
  }
}

export default connect(mapState, mapDispatch)(SinglePlaylist);
