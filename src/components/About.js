import React from 'react';
import '../App.css';
import Background from '../assets/wallpaper.jpg'
export default function DevelopmentInfo(){
    return(
        <React.Fragment>
            <img src ={Background} className="img" alt="No Preview"/>
            <div className="dev-info1">
            <h2 class="Heading">Material Design:</h2>
            <p>Material Design (codenamed Quantum Paper)[1] is a design language that Google developed in 2014. Expanding on the "card" motifs that debuted in Google Now, Material Design uses more grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.</p>
            </div>
            <div className="dev-info2">
            <h2 class="Heading">React Framework:</h2>
            <p>React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.</p>
            </div>
            <div className="dev-info3">
            <h2 class="Heading">Modularity:</h2>
            <p>Modularity is the process of decomposing a problem (program) into a set of modules so as to reduce the overall complexity of the problem. Booch has defined modularity as − “Modularity is the property of a system that has been decomposed into a set of cohesive and loosely coupled modules.”</p>
            </div>
        </React.Fragment>

    );
}