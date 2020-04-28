import React from 'react';

function HotlineCard({
url,
no,
nama
}) {


    const image = require('../../assets/img/hotline/' + url +'.png');

return (
    <div className="col-12 col-md-4 my-3">
        <div className="card rounded shadow p-3">
            <img className="img-fluid mx-auto" style={{height:"56px"}} src={image} alt=""/>

            <h6 className="my-3">{no}</h6>
            <h5 className="text-secondary">{nama}</h5>
        </div>
    </div>
)
}

export default HotlineCard;
