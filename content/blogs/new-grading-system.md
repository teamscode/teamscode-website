---
title: We are developing a new grading system
description: A distributed contest grading system developed with TypeScript and Microsoft Azure.
image: '/images/blogs/new-grading-system.webp'
date: '2022-06-12'
author: Harry Chen
---

TeamsCode is developing a new distributed contest grading system with TypeScript and Microsoft Azure. Grading machines compile and execute our contestants' submissions in a secure sandbox originally developed by IOI organizers. Grading tasks are distributed among all available machines in the cluster through a message queue hosted by Azure.

For our contestants, this means that all test cases of a submission can be graded simultaneously, and results will be available in seconds. For TeamsCode organizers, this new system allows us to scale horizontally better and prepare for larger contests in the future. The strong typing nature of TypeScript also improves the code maintainability in the long run.

We expect to host our contest on the new grading system this summer or next spring. As always, we'll open-source our codebase once the project reaches a stable stage.
