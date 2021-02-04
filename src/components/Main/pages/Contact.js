import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({

    // '& > *': {
    //     margin: theme.spacing(1),
    //     width: '60ch',
    // },
}));


const Contact = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Contact</h1>
            <p></p>
            <Grid container spacing={3} justify="center" alignItems="center" direction="column" >
                <Grid item xs={12}>
                    <TextField label="Name" variant="outlined" type="name" />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Email" variant="outlined" type="email" />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Message" variant="outlined" type="text" />
                </Grid>
            </Grid>
        </div>

    );
}

export default Contact;