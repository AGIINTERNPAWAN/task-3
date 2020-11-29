import React, {Component} from 'react'; 
import axios from 'axios';
import { Grid, TextField, Button} from '@material-ui/core';
import SideImage from '../assets/side.png';
export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email: '',
            subject: '',
            description:'',
        }
    }
    handleChange = e=>{
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:2000/feedbacks',this.state).then(res => {
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        });
    }
    render() {
        return(
            <div className="contact-page">
                <Grid container spacing={4} style={{ position: 'relative', marginTop: '20px',backgroundColor:'white', width: '550px',minHeight:'646px' , top: '56px', left: '49.4%'}}>
                    <div className='form-panel'></div>
                        <Grid item xs={12}>
                            <TextField label="Name" name = "name" variant="outlined" style={{marginTop:'30px'}}  fullWidth value={this.state.name} onChange={this.handleChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Email" name = "email" type="email" variant="outlined" fullWidth value={this.state.email} onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Subject" name = "subject" type="text" variant="outlined" fullWidth value={this.state.subject} onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField multiline rows={9} name="description" variant="outlined"  placeholder = "Describe" fullWidth value={this.state.description} onChange={this.handleChange}/>
                        </Grid>
                        <Grid item xs={12} >
                            <Button fullWidth style={{backgroundColor: '#263238', color: 'white', padding:'20px'}} onClick={this.handleSubmit} >Send</Button>
                        </Grid>
                    </Grid>
                <div className="image"> <img src= {SideImage} alt="no preview" width="700" height="650"/> </div>
            </div>
        );
    }
}