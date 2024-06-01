
import React from 'react';

export default function Hero(props) {
  return (
   <div>
    <main className="row">
            <div className="col">
                <h1 className="text-center">{props.title}</h1>
                <div>
                    <img className="img-xxl" src={"assets/images/"+props.photo} alt="Summer" />
                </div>
            </div>
        </main>
   </div>
  );
}
