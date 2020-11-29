import React from 'react';
import '../App.css';
import AWS5 from '../assets/aws-5.png';

export default function Card1() {
  return (
    <div className="card-body">
        <div className="single-card">
            <h1>Amazon Cognito</h1>
            <img src={AWS5} alt="No Preview"/>
            <ul>
            <li>Eu dolor tempor ut commodo ut eiusmod sunt officia velit in veniam.</li>
            <li>Nostrud in excepteur nostrud ut ullamco.</li>
            <li>Consectetur consectetur velit cupidatat aliqua magna ut irure.</li>
            <li>Laborum laborum minim deserunt velit deserunt fugiat id.</li>
            <li>Esse exercitation officia qui nostrud.</li>
            </ul>
            <button>Add to cart</button>
            <button>Share</button>
        </div>
    </div>
  );
}
