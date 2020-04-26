import React from 'react';

function VideoEdukasi() {
    return (
        <div className="row">
            <div className="col-12">
                <div className=" text-center my-5 bg-white p-md-5 p-2" style={{borderRadius:"20px"}}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={require('../../assets/videos/vid.mp4')} allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoEdukasi;
