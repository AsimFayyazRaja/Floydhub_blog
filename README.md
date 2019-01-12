# Activity Monitoring Desktop Application

## Introduction
With the area of deep learning progressing rapidly, cool and helpful applications are being made day by day. In this blog post 
I am going to explain a similar application made by me, which monitors the computer activity automatically and after each 5 hours(pre defined) interval
tells how much time is spent doing what on the computer. So, basically it is a computer activity surveillance application
which is designed for employers that pay hefty salaries to client and expect fair work done in return.

![blah](gid_made.gif)


So these are the basic steps done in this application:

- Starts automatically when computer boots up.
- Takes screenshots after some random time of your computer screen
- After some time screenshot classifier executes and organizes screenshots in respective folders
- A pie graph is saved also which tells which applicaton/activity was used how frequently
- This process continues until computer shutdown

## Dataset
The most important factor of any deep learning application is data. The larger and bigger the data, the better the application
is made and is generalized well in production. The dataset of this application was made using a simple node js application that took screenshots and
labeled them by renaming the folder name having images of some category. And the best part is that, by using that node js application
one can make dataset of it's own choice so the application made is quite flexible and supports new categories/classes as well.

## Working
So, the application runs when the computer starts
