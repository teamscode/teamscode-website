---
title: Analyzing registration data from our contests
description:  Taking a look at the demographics and preferences of participants from past MIHS programming contests. 
image: '/images/blogs/analyzing-registration.webp'
date: '2019-03-23'
author: Alan Bi
---

On March 16, 2019, TeamsCode hosted its <a class="a" href="/contest/spring-2019-mihs/">fifth biannual MIHS Programming Contest</a> and seventh total event, bringing our total participant count to over 600. It's fair to say that the organization has come a long way since its founding in 2017. 

Now, this also means that we have a lot of registration data. I figured this was a good opportunity to analyze the demographics of our participants and other interesting insights like what programming languages they choose, what team sizes they prefer, etc. 

I downloaded Excel sheets of the registration data from all five MIHS contests and went through each manually to clean out the data (such as removing names/emails and grouping all school spelling variations together). After doing this, I read the data into a <a class="a" href="https://github.com/alankbi/python-notebooks/blob/master/exploration/teamscode_contest_registration_data.ipynb">Python Jupyter notebook</a> and started playing around. Below are some of the things I discovered. 

If you want to play around with this data yourself, you can download the Excel data <a class="a" href="https://github.com/teamscode/registration-data">here</a>.

_Note: due to the frequent last-minute changes in registration and no-shows, the data here may not be completely up to date and may not match exactly what is shown on teamscode.com's results pages._

First, let's look at a graph of participant count: 

![Graph of participant count](/images/blogs/participant-count.webp)

For the first three contests, participation hovered at around 100 students. However, after deciding to make our last two contests completely free, that number has soared to about 150 participants. Across all five contests, there have been 588 participants. 

Next, let's examine team sizes:

![Graph of team sizes](/images/blogs/team-sizes.webp)

Out of a total of 255 teams, 134 teams consisted of three members, or just over half. 65 teams consisted of two members, and the remaining 56 were solo programmers. On average, there were 2.3 members per team. 

Among the programming languages teams chose, Java was by far the most popular (probably because it's the one used in AP Computer Science). A whopping 183 teams, or 72%, chose Java, with Python taking second place at 55 teams. C#, C++, and Kotlin were next at 12, 4, and 1 teams respectively. 

![Graph of programming language usage](/images/blogs/language-usage.webp)

The data related to divisions is pretty straightforward; 163 of teams, or 64%, signed up for the Intermediate division while the remaining 92 signed up for Advanced. 

![Graph of divisions](/images/blogs/contest-divisions.webp)

Lastly, we can take a look at the schools our participants are from. In total, students have come from 54 schools across Washington, Oregon, and British Columbia. Among these schools, the most represented are as follows (with a couple of schools tied): 

<div> <!-- Prevents markdown from creating a numbered list from 1-11 -->
1. Issaquah High School (38 teams)<br>
2. Bellevue High School (28 teams)<br>
2. Newport High School (28 teams)<br>
4. Interlake High School (22 teams)<br>
5. TESLA Stem High School (15 teams)<br>
6. Mercer Island High School (14 teams)<br>
7. Garfield High School (12 teams)<br>
7. Odle Middle School (12 teams)<br>
9. Lakeside School (10 teams)<br>
10. Skyline High School (7 teams)<br>
10. Bishop Blanchet High School (7 teams)<br>
</div>

![Graph of schools](/images/blogs/contest-schools.webp)

_Note: The graph doesn't take into account teams that had members from two or more schools._

The numbers and graphs that I've detailed here are all pretty simple; with a little more effort, one can probably find many more cool or useful insights about our TeamsCode participants. Feel free to mess with the data however much you want, and if you find anything particularly interesting, don't hesitate to reach out to us at <a class="a" href="mailto:support@teamscode.com">support@teamscode.com</a>! We'd be happy to feature your findings in this blog post. For example, there's still another set of data from the CGS programming contests in Oregon that haven't been touched yet. And with several contests planned for the upcoming year, we're hoping that many more will soon join the list. 
