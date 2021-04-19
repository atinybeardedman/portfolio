---
title: Dark Ave Photography
tags:
  - name: VueJS
  - name: Wordpress
  - name: Gridsome
excerpt: A minimalist photography portfolio I built for a friend using the JAMstack. It uses Wordpress as a headless CMS and Gridsome (VueJS) as a static site generator.
demo: https://www.darkavenuephotography.com
repo: https://github.com/atinybeardedman/dark-avenue-photography
tile: ./tile.png
icon: fas,camera-retro
order: 3
---

## Motivation
A friend approached me about creating a simple website where he could feature his photography. He was most interested in creating a minimalist layout that focused on each photo individually.His second concern was about keeping costs down for the actual hosting of the site, while still being able to update it himself. I immediately thought of the JAMstack approach that would allow the best of both worlds: creating a static website that could be hosted for free, while also allowing easy content editing by using a CMS like Wordpress as a backend. 

## Development
Creating a photo blog like this one requires some important choices regarding how to best serve the photos. It is important to preserve the aspect ratio and art direction of the photos, while still optimizing them for different screen sizes. I chose to use the srcset features of the html img tag to allow me to serve different resolution images depending on the screen size. Wordpress generates different sized images by default when handling uploads, and I created a Vue component to use these sized images for this very purpose.

## Tech Stack
I chose to use Gridsome as the static site generator for this project, due to my familiarity with VueJS and its unique GraphQL data layer it uses. Gridsome allows me to write Vue components and layouts, while adding an extra feature of being able to inject and query data from external sources such as Wordpress or other CMS platforms. With Gridsome's built in Wordpress support, I was able to easily query posts by category to group them together onto separate pages on the website. The static website is hosted on Netlify's static site hosting platform, while the Wordpress backend is hosted on Hostinger.