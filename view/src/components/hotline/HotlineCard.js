import React from 'react';

function HotlineCard({
url,
no,
nama
}) {


    const image = require('../../assets/img/hotline/' + url +'.png');
    const noArr = no.split("atau");
    console.log(noArr);
return (
    <div className="col-12 col-md-4 my-3">
        <div className="card rounded shadow p-3 h-100">
            <img className="img-fluid mx-auto mb-2" style={{height:"56px"}} src={image} alt=""/>
            <h5 className="text-secondary ">{nama}</h5>

            {
                noArr.map(function(numb){
                    let no = numb.trim();
                    return <a href={"tel:"+no} className="small">{no}</a>
                })
            }
        </div>
    </div>
)
}

export default HotlineCard;
