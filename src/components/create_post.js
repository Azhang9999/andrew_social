import React, { useEffect, useState } from "react";
import {Avatar, Box, Button, Container, Grid, Paper, TextField, Theme, Typography} from '@mui/material';
import axios from 'axios';
import Posts from "./post"

interface CreatePostsProps {
    updatePost: () => null;
}

const CreatePosts = (createPostsProps: CreatePostsProps) => {
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [content, setContent] = useState("");

    const onPostSubmit = async () => {
        let result = await axios.post("https://my-worker.andrewzhang1635.workers.dev",
            JSON.stringify({"title": title, "username":username, "content": content}))
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
        <div>
            <form>
                <TextField id="Title of Post"
                           label="Title of Post"
                           placeholder="Title of Post"
                           required={true}
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                />
                <TextField id = "Username"
                           label="Username"
                           placeholder= "Username"
                           required={true}
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                />
                <TextField id="Content"
                           label="Content"
                           placeholder="Content"
                           required={true}
                           value={content}
                           onChange={(e) => setContent(e.target.value)}
                />
            </form>
            <Button disabled={submitButtonDisabled} onClick={onPostSubmit} name={"Submit Post"}>
                Submit Post
            </Button>
        </div>
    );
};

export default CreatePosts;