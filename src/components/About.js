import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    ...theme.aboutComp
})

/*
Handles the about section with the contents starting from the left
*/
function About({ classes }){
    return (
        <section id="about">
            <div className={classes.root}>
                <Grid container direction="column" justify="space-between" alignItems="flex-start">
                    <Grid item xs={12}>
                        <Typography className={classes.titleFont}>
                            About Me
                        </Typography>
                    </Grid>
                    <Grid item align="left">
                        <Typography className={classes.basicFont}>
                            I graduated from University of Calfornia, Irvine in 2020 with a degree in
                            Business Information Management and have been learning new
                            frameworks and languages for fullstack development. 
                            It's a satisfying feeling to be able to connect the dots 
                            between the front and backend to put the learned concepts into practice.
                            Currently I'm working on a project related to stocks and educating myself
                            on financial literacy which is both crucial to know and is pretty interesting.
                            It would be intriguing to apply these knowledge in a business setting one day
                            since I like to be efficient and optimizing business processes is a tough challenge
                            that I would glady take on.
                        </Typography>
                    </Grid>
                    <Grid item style={{marginTop: "30px"}}>
                        <Typography className={classes.titleFont}>
                            Hobbies
                        </Typography>
                    </Grid>
                    <Grid item align="left">
                        <Typography className={classes.basicFont}>
                            During free time, I like to play video games (MMORPG), watch tv shows
                            and cute cat videos on youtube.
                            Some of the outdoor activities I enjoy are hiking and biking. Extra points if the
                            scenery is engaging. I also like to play badminton despite the fact that I'm not that
                            good at it, but what's important is the joy of playing with friends...right?
                            And lastly, I love to build computers especially with an extra feature of 
                            watercooling. Something about the end result when the screen loads up really pulls me in,
                            making the whole building experience worth it. That of course, is after loads of troubleshooting
                            when something goes wrong aka computer not loading up only to conclude that the monitor wasn't turned 
                            on. Happens to the best of us I suppose!
                        </Typography>
                    </Grid>         
                </Grid>
            </div>
        </section>
    )
}

export default withStyles(styles)(About);