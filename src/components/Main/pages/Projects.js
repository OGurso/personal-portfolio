
import { useState, useEffect } from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



// const StyledA = styled.a`
//     text-decoration: none;
//     color:white;

// `

// const StyledDiv = styled.div`
//     /* width: 100vw; */

//     display: flex;
//     flex-direction:column;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 30px;
// `;

const StyledButton = styled.button`
    padding: 5px 10px;
    font-size: 20px;
    border: none;
    color:black;
    background-color: black;
    border-radius: 20px;
    
    :hover{
        background-color: #2b2b2b;
    }
    `;

const StyledA = styled.a`
    text-decoration: none;
    color:white;
`


const useStyles = makeStyles({
    root: {
        maxWidth: "1500px",
    },
    grid: {
        backgroundColor: "inherit",
    }
})



const Projects = () => {
    const [gitList, setGitList] = useState([])


    useEffect(() => {
        fetch("https://api.github.com/users/OGurso/repos")
            .then(response => response.json())
            .then(data => setGitList(data))

    }, [])

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <h1>Projects</h1>
            <Grid container
                direction='column'
                justify="space-evenly"
                alignItem="center"
            >
                <Grid container
                    direction='row'
                    justify="space-between"
                    alignItem="center"
                    spacing={2}
                >
                    {gitList.map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} lg={6} align="center" className={classes.grid}>
                            <h3 >{item.full_name}</h3>
                            <img src="https://picsum.photos/300/300" alt="Logo" />
                            <p>This project was initialized {item.created_at}</p>
                            <StyledButton><StyledA href={item.html_url}>{item.name}</StyledA></StyledButton>
                        </Grid>
                    ))
                    }
                </Grid>
            </Grid>

        </div >
    );

}

export default Projects;