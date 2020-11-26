import { Grid,Card, CardContent, Container, Typography, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import React from 'react';
import '../App.css';
import AWS1 from '../assets/aws-1.png';
import AWS2 from '../assets/aws-2.png';
import AWS3 from '../assets/aws-3.png';
import AWS4 from '../assets/aws-4.png';
import AWS5 from '../assets/aws-5.png';
import AWS6 from '../assets/aws-6.png';
import AWS7 from '../assets/aws-7.png';
import AWS8 from '../assets/aws-8.png';
import AWS9 from '../assets/aws-9.png';
import AWS10 from '../assets/aws-10.png';
import AWS11 from '../assets/aws-11.png';
import AWS12 from '../assets/aws-12.png';

const listOfServices = [
  {"id": 1, "name": "Amazon EC2", "img": AWS1, "card": "card1"},
  {"id": 2, "name": "Amazon Lambda", "img": AWS2, "card": "card2"},
  {"id": 3, "name": "Amazon RDS", "img": AWS3, "card": "card3"},
  {"id": 4, "name": "AWS IoT Core", "img": AWS4, "card": "card4"},
  {"id": 5, "name": "Amazon Cognit0", "img": AWS5, "card": "card5"},
  {"id": 6, "name": "Amazon Redshift", "img": AWS6,"card": "card6"},
  {"id": 7, "name": "Elastic Load Balancing", "img": AWS7, "card": "card7"},
  {"id": 8, "name": "Elastic Search Sevice", "img": AWS8, "card": "card8"},
  {"id": 9, "name": "Amazon Simple Email Service", "img": AWS9, "card": "card9"},
  {"id": 10, "name": "Amazon Simple Queue Service", "img": AWS10, "card": "card10"},
  {"id": 11, "name": "Amazon API Gateway", "img": AWS11, "card": "card11"},
  {"id": 12, "name": "Amazon Kinesis Data Analytics", "img": AWS12, "card": "card12"},
]

function searching(items){
  return function(x){
    return x.name.toLowerCase().includes(items.toLowerCase()) || !items;
  }
}
export default class LandingPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      listOfServices: listOfServices,
      items: "",
    }
    this.searchFilter = this.searchFilter.bind(this);
    
  }
  searchFilter (e){
    this.setState({items:e.target.value})
  }
  
  render() {
    
    const {items, listOfServices} = this.state;
    return(
      <div className="main" >
        <div className="home-heading">
          <h1>Our Web Services</h1>
        </div>
        <div className="search-box" style={{ width: 600}} >
          <TextField type="search" variant="outlined" size="medium" fullWidth label="Search Services" onChange={this.searchFilter}  value={items}/>
          <SearchIcon />
        </div>
        <div className="panel">
          {
          listOfServices.filter(searching(items)).map( service => 
            <div key={service.id} className="card-details">
              <Container maxWidth='md'>
                <Grid container spacing={3} >
                <Link to={"/"+service.card} style={{ textDecoration: 'none' }}>
                  <Card className="card" style={{ borderRadius: "20px", backgroundColor: "#ffe0b2"}}>
                    <CardContent>
                      <img src ={service.img} className="item" alt="No Preview"/>
                      <Typography className="item-title" variant="h5" color="textSecondary" component="p">{service.name}</Typography>
                    </CardContent>
                  </Card>
                  </Link>
                </Grid>
              </Container>
            </div>
            
            )
          }
        </div>
      </div>
      
    )
  }
}
