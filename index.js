require('dotenv').config();
const express = require('express');
const app = express()
 const githubData = {
  "login": "Vikas3103",
  "id": 168931095,
  "node_id": "U_kgDOChGvFw",
  "avatar_url": "https://avatars.githubusercontent.com/u/168931095?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Vikas3103",
  "html_url": "https://github.com/Vikas3103",
  "followers_url": "https://api.github.com/users/Vikas3103/followers",
  "following_url": "https://api.github.com/users/Vikas3103/following{/other_user}",
  "gists_url": "https://api.github.com/users/Vikas3103/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Vikas3103/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Vikas3103/subscriptions",
  "organizations_url": "https://api.github.com/users/Vikas3103/orgs",
  "repos_url": "https://api.github.com/users/Vikas3103/repos",
  "events_url": "https://api.github.com/users/Vikas3103/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Vikas3103/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vikas Maurya",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 14,
  "created_at": "2024-05-04T18:51:45Z",
  "updated_at": "2026-10-13T14:10:22Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {
  res.send('Hello Login!')
})

app.get('/vikas', (req, res) => {
  res.send('Hello Vikas!')
})

app.get('/maurya', (req, res) => {
  res.send('Hello Maurya!')
})

app.get('/github', (req, res) => {
  res.json(githubData);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})