import React, { useEffect, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [fetched, setFetched] = useState("not fetched");

    async function readableToString2(readable) {
        let result = '';
        for await (const chunk of readable) {
            result += chunk;
        }
        return result;
    }

    useEffect(async () => {
        console.log("GETTING POSTS");
        const getPosts = async () => {
            const resp = await fetch(
                "https://my-worker.andrewzhang1635.workers.dev",
                {headers: {'Content-Type': 'application/json'}, method: "GET"})
            return resp.json();
        };
        const p = await getPosts();
        console.log(p);
        setPosts(p);
    }, []);

    return (
        <div>
            <h1>Your Social Media Posts</h1>
            {posts.filter(post => (post != null)).map((post) => (
                <div title={post.title} user={post.username}>
                    <h2>{post.title + " by " + post.username}</h2>
                    {post.content}
                </div>
            ))}
            {error}
        </div>
    );
};

export default Posts;