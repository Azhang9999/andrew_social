import React, { useState } from "react";
import {Card, Button, Container, Grid, TextField,  Typography} from '@mui/material';
import axios from 'axios';
import styles from "./Styles.js"

interface CreatePostsProps {
    updatePost: () => null;
}

const CreatePosts = (createPostsProps: CreatePostsProps) => {
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [content, setContent] = useState("");
    const classes = styles(createPostsProps.theme);

    const onPostSubmit = async () => {
        let result = await axios.post("https://my-worker.andrewzhang1635.workers.dev",
            JSON.stringify({"title": title, "username": username, "content": content}))
        if (result.error) {
            console.log(result.error)
        } else {
            setTitle("");
            setUsername("");
            setContent("");
            createPostsProps.updatePost();
        }
    }
    
    const submitButtonDisabled = title.trim().length === 0 || username.trim().length === 0 || content.trim().length === 0
    
    return (
        <Container className={classes.container}>
            <Card className={classes.card}>
                <Grid item paddingTop={3} paddingLeft={3} paddingRight={3}>
                    <Typography variant="h4" component={'h4'}>
                        Create New Post
                    </Typography>
                </Grid>

                <form>
                    <Grid container direction={"column"} paddingTop={3} paddingLeft={3} paddingRight={3}>
                        <Grid container direction={"row"} spacing={2} paddingBottom={2}>
                            <Grid item xs={8}>
                                <TextField id="Title of Post"
                                           label="Title of Post"
                                           placeholder="Title of Post"
                                           fullWidth={true}
                                           required={true}
                                           value={title}
                                           onChange={(e) => setTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField id = "Username"
                                           label="Username"
                                           placeholder= "Username"
                                           fullWidth={true}
                                           required={true}
                                           value={username}
                                           onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"}>
                            <Grid item xs={12}>
                                <TextField id="Content"
                                           label="Content"
                                           placeholder="Content"
                                           fullWidth={true}
                                           required={true}
                                           value={content}
                                           onChange={(e) => setContent(e.target.value)}
                                           multiline
                                           minRows={4}
                                           maxRows={12}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                </form>
                <Grid container spacing={2} paddingTop={3} direction={"column"} alignItems={"center"} paddingBottom={3}>
                    <Grid item xs={12}>
                        <Button variant="contained" disabled={submitButtonDisabled} onClick={onPostSubmit} name={"Submit Post"}>
                            Submit Post
                        </Button>
                    </Grid>
                </Grid>
            </Card>

        </Container>
    );
};

export default CreatePosts;