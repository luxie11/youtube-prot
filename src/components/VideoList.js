import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videoArray, onVideoSelect}) =>{
    const videoList = videoArray.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} videos={video}/>
    })
    return <div className="ui relaxed divided list">
            {videoList}
        </div>
}

export default VideoList;