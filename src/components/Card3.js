import React from 'react';
import '../App.css';
import AWS3 from '../assets/aws-3.png';

export default function Card3() {
  return (
    <div className="card-body">
        <div className="single-card">
            <h1>Amazon RDS</h1>
            <img src={AWS3}/>
            <ul>
            <li>Eu dolor tempor ut commodo ut eiusmod sunt officia velit in veniam.</li>
            <li>Nostrud in excepteur nostrud ut ullamco.</li>
            <li>Consectetur consectetur velit cupidatat aliqua magna ut irure.</li>
            <li>Laborum laborum minim deserunt velit deserunt fugiat id.</li>
            <li>Esse exercitation officia qui nostrud culpa.</li>
            </ul>
            <button>Add to cart</button>
            <button>Share</button>
        </div>
    </div>
  );
}

