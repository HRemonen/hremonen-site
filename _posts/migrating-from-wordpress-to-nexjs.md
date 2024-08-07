---
title: 'Migrating from WordPress to Next.js'
coverImageId: 'https://res.cloudinary.com/daty4gssm/image/upload/q_auto,f_auto,w_1024/v1721217459/photo-1720121020107-ea60f907eb72_l4pvhe.jpg'
coverImageAttribute: 'Photo by [Daniela E.](https://unsplash.com/@daniela_e_photography)'
excerpt: 'Since I started blogging about half a year ago, I have wondered should I have just done my own blog website rather than using a WordPress to deliver content. Now I have finally made my choice and set my eyes about migrating from WordPress to Next.js. If you would be interested on knowing more I will explain some non-technical and more technical stuff in this post!'
date: '2024-07-14'
author:
  name: Henri Remonen
featured: false
ogImage:
  url: 'https://res.cloudinary.com/daty4gssm/image/upload/v1721217459/photo-1720121020107-ea60f907eb72_l4pvhe.jpg'
categories:
  - 'react'
  - 'personal'
keywords:
  - 'nextjs blog'
  - 'nextjs rss'
  - 'nextjs rss feed'
  - 'nextjs rss feed blog'
  - 'nextjs sitemap'
  - 'nextjs sitemap blog'
  - 'migration nextjs wordpress'
  - 'migration wordpress'
  - 'astro vs nextjs'
  - 'nextjs markdown'
  - 'nextjs markdown blog'
---

When I first started this blog I was thinking about two different routes to start it:

- Setup a WordPress site
- Build my web application for it

Obviously, I went with the first one. At the time going with WordPress seemed like a good idea because my goal was to start blogging like yesterday, and creating my application for the blog would have meant overhead to begin working on writing the actual posts. Also, my father has bought hosting from one provider and it had extra capacity to run my WordPress -- so why not?

## Motivation

After blogging for 6 months or so I've encountered things that are rather annoying with Wordpress. For every simple task, you need to either build your own plugin or install some 3rd party plugin. Yeah, the plugins are fine, I am not saying that, and of course, I could code my own ones, but then again we are nearing the question: why not just built the whole goddamn thing from scratch with a language that I am proficient in rather than trying to tunkkaa (Finnish slang for something rather tedious coding or debugging work) PHP.

For example, to get the code snippets to work I had to install a plugin (ofc) and the plugin is not even that great. Instead, I could just implement my blog so that I can write Markdown files that can handle code snippets out of the box.

I still think that WordPress is great -- it gets the job done without hassle. The other side of me still wants to build things with code so I get frustrated when I need to install plugins for some features I could code in 5 minutes in React.

## The plan

Okay, now the mandatory bullshit has been dealt with. I have made my conscious clear and told excuses why I should build my own shitty blog instead of sticking with the perfectly working one -- the technicals.

So I want to stick with Next.js as I want to benefit from some level of SEO. For the posts I am not going to put up any database -- just plain Markdown files. Why? Well writing markdown is fast, it has a lot of nice features, the files can be stored in Git, and I can supercharge it further with something like [MDX](https://mdxjs.com/) as I am using React.

Some other options I looked into were:

- Astro -- Seemed really cool, but idk why not just do it with Next.js (?) Also, no point in learning a new niche framework when I can stick with what I know.
- Next.js + Headless WP -- This one I thought at first, but then I realized that it really won't fix all of my issues and why would I want to host my WordPress site and just create some fancier?

### Initial steps

For the initial stage, I want to build a PoC type version, just to get the feel of it and experiment some with the Markdown posts. Actually, I've made one test blog with the setup and it was a lot of fun. I am thinking right now that I am going to utilize that repository and start from there to build my blog site. It works as the MVP for me as I can put it running like superfast.

The repository has the markdown support for the posts, tailwind.css, static code analysis (Prettier, Eslint), etc. essentials setup, which allows me to move forward rather quickly. Beyond these static analysis checks, I want to introduce [Renovate bot](https://github.com/renovatebot/renovate) to keep the dependencies up to date -- also to detect security issues with Dependabot security updates. Also planning on activating [Sonar Cloud](https://www.sonarsource.com/products/sonarcloud/), as it will help to deliver "clean code" and avoid any code smell.

### Further considerations

Apart from the obvious design of the new page and all that -- which I totally will be writing about in a separate post, there are a few things that I need to think through that WordPress handled for me.

One of the things is [RSS feed](https://en.wikipedia.org/wiki/RSS). RSS feed is just an XML document that allows users to subscribe to it and read the content without actually visiting the website. It's a neat tool and one of the de-facto ways of reading content online. Of course, the benefits include improved user experience but also it helps to build a reader base, technically at least. The implementation of the feed shouldn't be that hard. Using JavaScript to loop through each post and generate the correct XML file, then serve the file in the `/feed` route should do it, but I will dig into the details later on.

If RSS feed is for the readers we must also provide a way to search engines to know which links the site has. Luckily for us, there is exactly another XML document -- the [Sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview). Basically, a sitemap lists every link in the site which means the document can be used as an entry point to crawl by search engines. Without the sitemap, it would be rather hard to get search engines to crawl and index the pages.

### Hosting

The logical solution would be to host on [Vercel](https://vercel.com/) and since it's free for non-profitable personal stuff I think it is a no-brainer.

### Environment setup

Next.js makes the dev environment really easy. I don't have to set up anything special as I am not using a database or anything. If I need a database or other services to run along I can just set up a Docker network using docker-compose and that's that pretty much.

Since I am planning on hosting on Vercel I will set up Staging and Production pipelines.

The Staging pipeline will run always on push to the master branch and push the newest version to the Vercel staging environment. Production will only run on GitHub releases, which means I get to manually create the production releases.

## Conclusion

So yeah, that's that. I think this will be a fun journey. I am also a very visual person and moving to Next.js and React + Tailwind just opens so many design paths for me at least. I was already getting tired of writing CSS onto the tiny tiny custom CSS window inside [GenerateBlock](https://generateblocks.com/), which is the "theme" I am using for WordPress.

One thing to consider is actually how will I migrate the old posts to Markdown. There are some automatic tools that I saw and I guess it's not that hard to convert HTML to Markdown because the semantics are really close to each other, or even identical. If that's not possible, it's not the end of the world to manually go through and migrate the posts.

I actually wrote this post in Markdown and to my surprise, I could just copy-paste this post straight into the freaking Gutenberg editor or whatever it is called. <surprised_picachu_face> So there goes one of my selling points for this migration and I haven't even started!
