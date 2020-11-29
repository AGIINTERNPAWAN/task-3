import React, {Component} from 'react'; 
import { Grid, TextField, Button} from '@material-ui/core';
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
    render() {
        return(
            <div className="contact-page">
            <Grid container spacing={3} style={{ position: 'relative', width: '650px', top: '100px', left: '2%'}}>
            <div className='form-panel'></div>
                <Grid item xs={12} sm={8}>
                <TextField label="Name" name = "name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField label="Email" name = "email" type="email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField label="Subject" name = "subject" type="text" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextField multiline rows={9} variant="outlined" placeholder="Describe" fullWidth>Write a message</TextField>
                </Grid>
                <Grid item xs={12} sm={8}>
      <Button fullWidth style={{backgroundColor: '#263238', color: 'white', padding:'20px'}} >Send</Button>
                </Grid>
            </Grid>
            </div>
        );
    }
}
// <TextareaAutosize rowsMin={9} style={{width:'400px', backgroundColor: '#ede7f6', borderRadius:'7px', fontSize: '18px', fontFamily:'Arial', resize:'none', overflow: 'scroll'}} placeholder="Write a message" fullWidth />