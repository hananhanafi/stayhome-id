import React from 'react';


function Card({
    status,
    urlImage,
    jumlah,
    type
}) {
    return (
        <div className="col-md-4 col-12">
            <div className={`card border-${type} mb-3`}>
                <div className="card-header row" style={{backgroundColor:"unset"}}>
                    <div className="col-9">
                        <h2>
                        {status} 
                        </h2>
                    </div>
                    <div className="col-3">
                        <img className="img-fluid ml-auto w-100" src={require(`../../assets/img/${urlImage}.png`)} alt=".."/></div>
                    </div>
                <div className={`card-body text-white bg-${type}`}>
                {<p className="card-text">{jumlah} orang</p>}
                </div>
            </div>
        </div>
    )
}

export default Card;
