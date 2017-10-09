import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // console.log(props);
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} />
        );
    });
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;

/*
The dolphin, the octopus, the starfish and otter…
Each geared to perform better than the other!
The shark, whale and the seal would swim its way to glory…
Will you also be a part in the ride to a delightful victory?
 
This year, get ready to explore the deep blue ocean at Bantala and take a peek at some of its amazing creatures!
Watch this space for more…
*/