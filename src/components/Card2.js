import React from 'react';
import '../App.css';
import AWS2 from '../assets/aws-2.png';

export default function Card2() {
  return (
    <div className="card-body">
        <div className="single-card">
            <h1>Amazon Lambda</h1>
            <img src={AWS2} alt="No Preview"/>
            <ul>
            <li>Eu dolor tempor ut commodo ut eiusmod sunt officia velit in veniam.</li>
            <li>Nostrud in excepteur nostrud ut ullamco.</li>
            <li>Consectetur consectetur velit cupidatat aliqua magna ut irure.</li>
            <li>Laborum laborum minim deserunt velit deserunt fugiat id.</li>
            <li>Esse exercitation officia qui nostrud culpa mollit pariatur.</li>
            </ul>
            <button>Add to cart</button>
            <button>Share</button>
        </div>
    </div>
  );
}
