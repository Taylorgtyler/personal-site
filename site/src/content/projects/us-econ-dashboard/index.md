---
title: "US Economic Dashboard"
description: "A dashboard to visualize US economic data"
date: "Dec 1,2024"
repoURL: "https://github.com/Taylorgtyler/fred-dashboard"
---

I have been working with data and data visualization apps for a long time. I always found data warehouses to be a little slow loading data into react web apps. Here is my attempt at making a quick loading dashboard using data from FRED and loaded into a Motherduck instance. 

The backend is built in go and housed here[https://github.com/Taylorgtyler/fred-data]. It uses Motherduck, Chi for routing, and base go for the api. 

The frontend is a React app that uses the recharts data visualizations, tailwind for styling, and ReactQuery for data fetching.

Visit the live dashboard here[https://fred-dashboard-v1.pages.dev/]. It's deployed on Cloudflare Pages, but I had a little trouble with the Cloudflare automated build process, so I manually built and deployed this version while I try to work out those kinks.

I will be adding some more features to the dashboard in the future to make it more useful and make data exploration easier. 