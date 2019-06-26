import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    
    state = { videos: [], selectedVideo: null }

    componentDidMount(){
        this.onTermSubmit('');
    }

    onTermSubmit = async (term) => {
        const youtubeResults = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({
            videos: youtubeResults.data.items,
            selectedVideo: youtubeResults.data.items[0]
        })
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video})
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videoArray={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;