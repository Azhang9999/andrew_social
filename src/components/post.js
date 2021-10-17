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
            //
            //     .then(resp => resp.body)
            //     .then(body => {
            //         console.log(body);
            //         const reader = body.getReader();
            //         console.log(reader.read().value)
            //         return reader.read().value;
            //     })
            //     .then(text => JSON.parse(text))
            //     .then(data => setPosts(data))
            //     .catch(e => setError(e.message));
            // //const j = JSON.parse('[{"title":"billy","username":"bob","content":"bob\'s first post"}]');
            //console.log(j);

            //setFetched("fetched")
            //setPosts(j);
            //console.log(posts);
        };
        const p = await getPosts();
        console.log(p);
        setPosts(p);
    }, []);

    return (
        <div>
            <h1>Your Social Media Posts</h1>
            {posts.map((post) => (
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