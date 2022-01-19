# ShareIt Social Media Application

## Login Page
![ShareIt](https://expertdesign.cc/share-it/login.jpg)

## Lightmode Homepage
![ShareIt](https://expertdesign.cc/share-it/screenshot-lightmode.jpg)
## Darkmode Homepage
![ShareIt](https://expertdesign.cc/share-it/screenshot-darkmode.jpg)

## Lightmode Add a Pin/Image Page
![ShareIt](https://expertdesign.cc/share-it/screenshot-upload-image--page-lightmode.jpg)

## Darkmode Add a Pin/Image Page
![ShareIt](https://expertdesign.cc/share-it/screenshot-upload-image--page-darkmode.jpg)

## Lightmode User Profile Page
![ShareIt](https://expertdesign.cc/share-it/screenshot-user-profile-page-lightmode.jpg)

## Darkmode User Profile Page
![ShareIt](https://expertdesign.cc/share-it/screenshot-user-profile-page-darkmode.jpg)

## A Full Stack Social Media Application totally responsive using React, Tailwind, Sanity.io and Google Authentication.

- Google login authentication
- Photo/graphic upload app with darkmode/lightmode depending on if the users computer/phone is set to dark or light mode.
- The Search Bar works fantastic.
- You can upload an image, add a title, a description, a link and a category dropdown to select from so it gets added to that category.
- Anyone can leave a comment on the photo/graphic you uploaded. 
- The photos/graphics can be Saved and show up on your profile page under Saved.
- On your profile page you can logout from the upper right corner logout icon.
- You can save Pins that others posted and even your own.
- You can view other users profiles and see what they posted and saved. 
- Also notice you can delete any of your posts/pins but not anyone else's. 
- Add pins by clicking on the plus in the right top of app to upload your image and details.
- If you don't want to add a link while adding the title and description just type a letter and it won't show up.

[Youtube Tutorial on this app](https://www.youtube.com/watch?v=1RHDhtbqo94&t=2893s)

### First off let's setup our backend with Sanity.io I reccomend downloading the zip or cloning the whole project and inside the Terminal cd into backend_sanity and run:
`npm install` 
or
`yarn`
### cd frontend_sanity folder and run the same command.
`npm install` 
or
`yarn`
### Now type
`cd ..`
### To get you back into the main directory of app.
### Now do the following:

`cd backend_sanity`

`npm install --global @sanity/cli &&`

`sanity init`

### The Terminal will ask a few questions:
### Press enter for Google and a Login Successful tab will open. You can go ahead and close that tab.
### Back in the Terminal press enter on Create new project. It will ask you to name the project, I will name it shareit
### Press Y to use the default data configuration.
### Just press enter on Project output path.
### Last we will choose Clean project with no predefined schemas and press enter. Now the project default files are being created. Let them be created and finish.
### Next run this command in your Terminal:
`sanity start`
### You should see Content Studio successfully compiled! Go to http://localhost:3333
### It will ask you to login with Sanity and be directed to Desk with empty schema. 
### Now press Ctrl + c to stop http://localhost:3333
### Now type in or copy and paste:
`sanity manage`
### Now it popped up our Sanity Overview page. Close that we don't need that right now, that was just to make sure everything is hooked up and working correctly.
### Now it's time to make the 6 schemas needed. Inside the schemas folder inside of the backend_sanity folder.
### I suggest copying the schemas folder and the 6 different files in it as it is a little tedious.
### Now run the command in your Terminal and the Desk page pops up:
`sanity start`
### Now notice the Desk looks different with Content, User, Pin, Comment and Save. You can add stuff through the Desk, we may add one but our database is hooked and ready to go! 
### Now we are going inside the frontend_sanity folder. We will hook that up to the backend shortly.
### If you used the folders above Tailwind CSS gets installed automatically through the package.json when you ran npm install or yarn inside the frontend_sanity folder.

[Youtube Tutorial on this app](https://www.youtube.com/watch?v=1RHDhtbqo94&t=2893s)
