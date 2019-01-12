# Activity Monitoring Desktop Application

## Introduction
With the area of deep learning progressing rapidly, cool and helpful applications are being made day by day. In this blog post 
I am going to explain a similar application made by me, which monitors the computer activity automatically and after each 5 hours(pre defined) interval
tells how much time is spent doing what on the computer. So, basically it is a computer activity surveillance application
which is designed for employers that pay hefty salaries to client and expect fair work done in return.

![Yeah that's what needs to be stopped](gid_made.gif)

Yeah that's what needs to be stopped

So these are the basic steps done in this application:

- Starts automatically when computer boots up.
- Takes screenshots after some random time of your computer screen
- After some time screenshot classifier executes and organizes screenshots in respective folders
- A pie graph is saved also which tells which applicaton/activity was used how frequently
- This process continues until computer shutdown

## Dataset
The most important factor of any deep learning application is data. The larger and bigger the data, the better the application
is made and is generalized well in production. The dataset of this application was made using a simple node js application that took screenshots and labeled them by renaming the folder name having images of some category. And the best part is that, by using that node js application one can make dataset of it's own choice so the application made is quite flexible and supports new categories/classes as well. The dataset used for creation of this application was of Ubuntu's screenshots of different categories.
But testing have shown that it works just fine on windows screenshots as well because the major portion of screenshot
is same and just sidebars are different.

## Working
So, the application runs when the computer starts. The screenshots are taken after some random interval of time by the node js application and are saved in a specific folder. After some time the node js application runs the model which is built using 
deep Convolutional Neural Network (CNN). CNNs are state of the art models for image classifiation so that's why they are used.
Those screenshots are then added to their respective folders and pie chart is also saved. 

## Results
So far this application classifies screenshot in 6 categories that are facebook, youtube, stack overflow, gmail, coding and others.
