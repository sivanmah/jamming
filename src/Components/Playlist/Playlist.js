import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css"

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  renderAction() {
    if (!this.props.playlistSaved) {
      return (
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
        );
    } else {
      return (
        <h3>Playlist Saved</h3>
      );
    }
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
        <div className="Playlist">
            <input placeholder="New Playlist" onChange={this.handleNameChange}/>
            <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
            {this.renderAction()}
            <p>{this.props.error}</p>
        </div>
    );
  }
}
export default Playlist;