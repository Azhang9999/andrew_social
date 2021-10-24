import React, { useEffect, useState } from "react";
import {Card, Container, Grid, Typography} from '@mui/material';
import styles from "./Styles.js"

interface PostsProps {
    uselessInt : int;
}

const Posts = (props: PostsProps) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const classes = styles();


    useEffect(async () => {
        console.log("GETTING POSTS");
        const getPosts = async () => {
            const resp = await fetch(
                "https://my-worker.andrewzhang1635.workers.dev",
                {headers: {'Content-Type': 'application/json'}, method: "GET"})
                .catch(error => setError(error))
            return resp.json();
        };
        const p = await getPosts();
        console.log(p);
        setPosts(p);
    }, [props.uselessInt]);

    return (
        <Container className={"container"}>

            <Typography variant={'h3'}>Your Social Media Posts</Typography>
            {posts.filter(post => (post != null)).map((post) => (
                <Grid item paddingTop={3}>
                    <Card className={classes.card}>
                        <Grid container direction={"column"}  paddingTop={2} paddingLeft={3} paddingRight={3}>
                            <Grid container direction={"row"} spacing={2} paddingBottom={2}>
                                <Grid item xs={8}>
                                    <Typography variant="h4" component={'h4'}>
                                        {post.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h6" component={'h6'}>
                                        {post.username}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction={"row"} paddingBottom={3}>
                                <Grid item xs={12}>
                                    <Typography variant={"span"} component={"span"} >
                                        {post.content}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            ))}
            {error}
        </Container>

    );
};

export default Posts;