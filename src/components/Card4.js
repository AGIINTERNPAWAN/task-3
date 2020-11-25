import React from 'react';
import '../App.css';
import AWS4 from '../assets/aws-4.png';

export default function Card1() {
  return (
    <div className="card-body">
        <div className="single-card">
            <h1>AWS IoT Core</h1>
            <img src={AWS4}/>
            <ul>
            <li>Eu dolor tempor ut commodo ut eiusmod sunt officia velit in veniam.</li>
            <li>Nostrud in excepteur nostrud ut ullamco.</li>
            <li>Consectetur consectetur velit cupidatat aliqua magna ut irure.</li>
            <li>Laborum laborum minim deserunt velit deserunt fugiat id.</li>
            <li>Esse exercitation officia qui nostrud culpa mollit pariatur officia.</li>
            </ul>
            <button>Add to cart</button>
            <button>Share</button>
        </div>
    </div>
  );
}
