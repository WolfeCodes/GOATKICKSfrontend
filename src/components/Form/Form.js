import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from "./styles";

const Form = () => {
   const [shoeData, setShoeData] = useState({name: '', likes: '', size: '', selectedFile: ''})
   const classes = useStyles();

   const handleSubmit = () => {

    }

   const clear = () => {
       
   }

    return (
       <Paper className={classes.paper}>
         <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
         <Typography variant="h6" >Creating a Shoe</Typography>
         <TextField 
            name="name" 
            variant="outlined" 
            label="Name" 
            fullWidth 
            value={shoeData.name}
            onChange={(e) => setShoeData({ ...shoeData, name: e.target.value})}
         />
         <TextField 
            name="size" 
            variant="outlined" 
            label="Size" 
            fullWidth 
            value={shoeData.size}
            onChange={(e) => setShoeData({ ...shoeData, size: e.target.value})}
         />
         <div className={classes.fileInput}>
            <FileBase 
                type="file"
                multiple={false}
                onDone={({base64}) => setShoeData({ ...shoeData, selectedFile: base64})}
            />
         </div>
         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type='submit' fullWidth>Submit</Button>
         <Button  variant="contained" color="primary" size="small" onClick={clear} fullWidth>Clear</Button>
         


        </form>
        
       </Paper>
    );
}

export default Form;