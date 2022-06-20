import React from "react";
import "./TrackPreview.css";

class TrackPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            audio: new Audio(this.props.track.preview)
        };
    }
    componentDidMount() {
        this.state.audio.addEventListener('ended', () => this.setState({ play: false }));
      }
      
      componentWillUnmount() {
        this.state.audio.removeEventListener('ended', () => this.setState({ play: false }));  
      }
    
      togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.state.audio.play() : this.state.audio.pause();
        });
      }
    
      render() {
        return (
          <div className="Track-preview">
            <img src={this.props.track.image} className="Track-image" onClick={this.togglePlay} alt="Track album" />
            <div className="Preview-overlay"></div>
          </div>
        );
      }
    }
    

export default TrackPreview;