import React from "react";
import "./TrackPreview.css";

class TrackPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            audio: new Audio(this.props.track.preview),
            style: null
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
        if (!this.state.play) {
            this.setState({ style: { 
                top: '1.8rem',
                right: "1.4rem",
                width : "0.3vw",
                height:"1.7vw",
                borderColor: "initial",
                borderBottom: "transparent",
                borderTop: "transparent",
                borderRight: "0.7vw solid white",
                borderLeft: "0.7vw solid white",
             } });
        } else {
            this.setState({ style: null });
        }
      }
    
      render() {
        return (
          <div className="Track-preview">
            <img src={this.props.track.image} className="Track-image" onClick={this.togglePlay} alt="Track album" />
            <div className="Preview-overlay" style={this.state.style}></div>
          </div>
        );
      }
    }
    

export default TrackPreview;