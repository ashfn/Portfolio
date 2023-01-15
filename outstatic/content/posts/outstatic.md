---
title: 'blog without a cms?'
status: 'published'
author:
  name: 'auth'
  picture: 'https://avatars.githubusercontent.com/u/65650599?v=4'
slug: 'outstatic'
description: 'Using a static CMS - pros and cons?'
coverImage: ''
publishedAt: '2022-11-06T20:09:49.242Z'
---

I'll get straight to the point - this site has no CMS. Well, technically it does, but the blog part of it doesn't. 🤔

I recently found an awesome tool called Outstatic, it is a easy to use, static CMS, which means I don't need to host a backend, and it maked editing posts easy. It lets you sign in with your github account, and then when you edit a post, it makes a commit on the repo, which in turn causes Vercel to redeploy my app. Now of course for data that's changing fast, like leaderboards etc, this would be terrible, as each time you update a post it causes vercel to rebuild the app, but for things that are updated not very often, it works like a charm.

It allows me to easily edit my posts through an intuitive interface, where I can add images, code blocks cover images and everything I would ever need for a simple blog site like this.

You can check out the Outstatic Github repository [here](https://github.com/avitorio/outstatic).

