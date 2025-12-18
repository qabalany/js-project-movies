🦐 Week 17 | React Router

0%

LESSON
What is React Router?

VIDEO
React Router Introduction

VIDEO
React Router in Code

LESSON
React Router Deep-dive

🦐 Week 17 | Dynamic Routes and the useParam hook

0%

LESSON
What are Dynamic Routes?

VIDEO
React Router Hook - useParams()

🪸 Week 18 | Global State
0%

LESSON
What is Global State Management?

VIDEO
Global State Management Introduction

LESSON
Global State Deep-dive

🪸 Week 18 | Context API
0%

VIDEO
React Context API

LESSON
React Context Deep-dive

🪸 Week 18 | Zustand
0%

LESSON
Why use Zustand?

VIDEO
Introduction to Zustand

LESSON
Zustand Deep-dive

🪸 Week 18 | Design hacks for non-designers
0%

LESSON
Design hacks for non-designers

LESSON
Lottie Animations

LESSON
Material UI








Lesson
Week 17 | React Router
Greetings! 🚀
So far, you've only built single-page applications. This week, we will introduce the React Router library so that we can create dynamic multi-page applications.

What you will learn
✓ How to build multi-page applications using React Router.
✓ How to pass information such as product IDs or blog post titles in the URL and pick this up in React Router to load dynamic content
✓ Continue to practice using APIs, combining useState with useEffect

Project instructions
This week, you will work in pairs to create a multi-page React application using a fun new API.

The goal is to use themoviedb.org's API to fetch a list of movies (more on which movies further down), display them on a page, and then link to a movie detail page when you click on a movie. We'd like you to follow (or improve) the design we've created in our example app using the same API. Here's our example. You are free to choose whatever endpoint you'd like to build up your list. You could do the same as us (showing popular movies), or you could, for example, show movies currently in the cinema or find movies in a particular genre. It's up to you!

👉 Fork and clone this repo to get started.

Requirements
Your app should have at least two pages - one showing a list of movies and one showing details
You should use React Router
You should follow the design from our example (it's OK to change things - just make sure it looks nice)
Make your app responsive (it should look good on devices from 320px width up to at least 1600px)
Your project should follow accessibility guidelines to ensure your website is usable by a diverse range of users:
You should have a score of at least 95 in Lighthouse
All images should have alt attributes and proper sizes
All contrasts should be OK
Follow the guidelines on how to write clean code
Stretch goals
Show a 'not found' page if you try to visit a movie detail page with an invalid movie ID (so the user has tried to enter an ID themselves, most likely).
In this case, when you send a movie detail request with a movie ID which doesn't exist in the API, the API returns with a 404 response. You can use .catch() on your promise to catch this exception and toggle some sort of 'error' state which can be used to show an error page.
Handle loading states - The API responds quite quickly, but if you're on a slow network then you'd be faced with a black screen until the response comes back. During this time, you could show a loading message or spinner of some sort on the page.
Use something like const [loading, setLoading] = useState(true) to make it so the page is loading by default, then call setLoading(false) once you get the response back from the API.
You could also investigate how to handle the loading of images - or show plain text by default and then use CSS to place the image over the text (using absolute positioning). This way, if the images take a long time to load, the user still sees something relevant.
On the homepage where you list popular movies, you could add a dropdown to change the list. For example, you could toggle between popular, upcoming, and new releases.
When you load a movie, you get a lot of information in the API response, such as a collection it belongs to, genres it has, or the companies involved with producing the film. Each of these has an API endpoint that can be used to fetch more information about that entity. You could use this data to make links from your movie page to another page. Take a look through the documentation and be creative!
How to get started
To use the API, you will need to register an account with themoviedb.org and then register for an API key.

When signing up for an API key, it asks a bunch of questions about what the application is for, but don't worry - we've contacted themoviedb.org and checked that they're OK with you all using the API for this purpose, and it's all good in the hood. So, this is what you need to do:

Signup for themoviedb.org
Go to https://www.themoviedb.org/settings/api/request
Select 'developer' & accept the terms
Fill in the form requesting an API. You need to select 'Website' in the dropdown and say the use is for Technigo. Like this:
Form Example
Fill in your personal details.
Submit the form and you should be approved automatically. Copy the v3 API key from the following page.
With your freshly minted API key, you're now ready to start making API requests. The API is well documented at developers.themoviedb.org, and if you click through onto an endpoint, there's a 'try it out' tab where you can paste in your API key and run a request to see what you get in response.

Endpoint for popular movies for the list page
https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1
Don't forget to replace {api_key} with your API key if you copy and paste this.

Endpoint for a movie's details
https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
Don't forget to replace {api_key} with your API key and {movie_id} with the id you get from the url via react-router if you copy and paste this.


A tip when rendering images from the API

Each movie comes with a 'poster', which looks like a cover you'd find in a DVD, and a 'backdrop' which is more like a screen capture from a scene in the film. In the API response you get for a movie or list of movies, each one has a property for these images, but it looks like this

"backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",

That path to the image is incomplete - it needs a full URL. To get the full URL, we need to decide what size of the image we'd like, and the API has a bunch of options for that. You can find the full list of sizes by loading the API endpoint https://api.themoviedb.org/3/configuration?api_key={api_key} (don't forget to put your API key in place of {api_key}). That response looks something like this:

{
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "backdrop_sizes": ["w300", "w780", "w1280", "original"],
    "logo_sizes": ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    "profile_sizes": ["w45", "w185", "h632", "original"],
    "still_sizes": ["w92", "w185", "w300", "original"]
  }
}
This means, that for backdrops (for example), we can choose to render the image at 300px wide, 780px, 1280px, or the original image size. You need to construct a URL using the secure_base_url + size + path from the API response.

For example, if we get this in a movie response

"backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",

and we want the backdrop at 1280px, we could build up a URL like this:

https://image.tmdb.org/t/p/w1280${movie.backdrop_path}

The resulting URL would be https://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg

You do not need to call the configuration endpoint within your app. Just use the sizes which it returns (shown above) to construct a URL with appropriate image sizes.

Hints and tips to complete the project
As always, start by sketching out your application - not just thinking about design, but how should it be split into components, and how should your routes look?

In the example application we've linked to for you to follow the design from, it's built using two routes which each has one component as a child (it's up to you if you want to use this approach!):

Route: /, component: PopularList

This route is responsible for the home page. It uses useEffect to run an API request to themoviedb.org and fetch popular films in the US, puts them into state using useState, and then renders them wrapped in a Link from react-router-dom to link to the detail page.

Route: /movies/:id, component: Detail

This route expects a movie ID in the URL and is responsible for showing more details about a movie after you click on it. It uses useParams from react-router-dom to get the id from the URL and then passes that into an API call (within useEffect) to themoviedb.org to fetch details about a single movie, then puts the response into state using useState and finally renders it onto the page.




Lesson
Week 18 | Global State
Guten tag!
The topic for the week is Global State Management, meaning no more prop drilling. We will explore two different approaches:

React useContext API
Zustand library
What you will learn
✓ Enrich your understanding of state management in React applications
✓ Grasp the concept of global state
✓ Explore the useContext hook in React
✓ Explore the Zustand state management library

Project instructions
This week, the task is to build a Todo app using Zustand for state management. It's up to you if you work solo, in pairs or in small groups. In your to-do app, you should be able to add tasks, list tasks, and toggle whether a task is done or not. You're free to style your to-do app however you'd like, but try to keep it simple and clean — remember, prospective employers will probably be interested in seeing this project!

👉 Fork and clone this repo to get started.

Requirements
You should use Zustand for global state management. No prop-drilling.
Your app should list all tasks - completed and uncompleted
You should be able to mark an uncompleted task as complete (and change it back to uncompleted)
You should be able to add and remove tasks
Your app should show a count of the tasks. Either all tasks or all uncompleted tasks (or both)
You should make your app look nice when there's no data. See empty states UX design for some ideas.
Make your app responsive (it should look good on devices from 320px width up to at least 1600px)
Your project should follow accessibility guidelines to ensure your website is usable by a diverse range of users:
You should have a score of at least 95 in Lighthouse
All images should have alt attributes and proper sizes
All contrasts should be OK
Follow the guidelines on how to write clean code
Stretch goals
Add a timestamp for each task indicating when it was created. The timestamp should be displayed as a formatted date but stored as a raw date. You can use a third-party library, such as date-fns or Moment.js for this.
Add a complete all button to set all tasks as completed.
Add a button to switch dark/light mode.
Implement local storage
Add a date input to your new task form to set a due date on a task. It could be required, or optional - it's up to you. You could then display this in the list and style it differently when a task is overdue.
Add filters to display completed/uncompleted tasks, tasks created after a given date or anything else you consider important.
Create categories/tags for tasks so they can be grouped - for example, 'Housework', 'Shopping', etc.
Create projects for tasks → A project could be a group of tasks which all need to be completed, and when they are completed, the project is marked as complete.
Hints and tips to complete the project
As always, start by sketching out how your app will look and what components you'll need. Break down the UI into smaller components. Once you have your sketch, think about how the data in your store should look. What data does a task contain? 

When writing your code, try working on the project in small chunks rather than taking on too much at once. For example, you could start by making a new store for your tasks and use a hardcoded list of tasks to get up and running with.

Once you have your to-dos listed, a good next step is to implement some form of addTask function and a form to add a new task to the array of hardcoded tasks.


Assessment Criteria - React and Global State Management
💡 Deadlines
Hand in continuously throughout the sprint to get feedback. This is also so that your teammates can do code reviews.

1. Portfolio project - 30th of November (code review deadline 14th of December)
2. Happy Thoughts messaging app - 14th of December (code review deadline 21st of December)
3. Movies app - 21st of December
4. Todo app - 18th of January

Grade G (Pass) Requirements
Project 1: Portfolio project
Requirements:

Your portfolio should have components and props
Your portfolio should contain:
A picture of you
A presentation of your tech skills
A presentation of your projects linking to GitHub and Netlify. 
A presentation of some thoughts that you have around code. (If you didn't write an article last week - use placeholder text for now)
A clear way to get in contact with you
Your portfolio should use styled components
Your portfolio should follow the Figma design
Your code should follow the guidelines on how to write clean code
Your portfolio should follow accessibility guidelines to ensure your website is usable by a diverse range of users:
You should have a score of at least 95 in Lighthouse
All images should have alt attributes and proper sizes
All contrasts should be OK
Your portfolio should be responsive (it should look good on devices from 320px width up to at least 1600px)
Project 2: Happy Thoughts messaging app
Requirements:

Your app should follow the design
Your app should be responsive (it should look good on devices from 320px width up to at least 1600px)
Your app should have a text area and a submit button. When the button is clicked, your app should empty the form and show the form submission in a message card according to the design.
Your code should follow the guidelines on how to write clean code
On form submission, the happy thoughts should be posted to the API
The happy thoughts should be listed (most recent thoughts at the top and older thoughts at the bottom) and rendered on page load and updated after form submission
The happy thoughts should show the content of the message and how many likes they've received
Each happy thought should include a heart button that sends likes. The number should increase after a user has liked a thought.
Project 3: Movies app
Requirements:

Your app should have at least two pages - one showing a list of movies and one showing details
You should use React Router.
You should follow the design from our example (it's OK to change things - just make sure it looks nice)
Follow the guidelines on how to write clean code
Make your app responsive (it should look good on devices from 320px width up to at least 1600px)
Your project should follow accessibility guidelines to ensure your website is usable by a diverse range of users:
You should have a score of at least 95 in Lighthouse
All images should have alt attributes and proper sizes
All contrasts should be OK
Project 4: Todo app
Requirements:

You should use Zustand for global state management. No prop-drilling.
Your app should list all tasks - completed and uncompleted
You should be able to mark an uncompleted task as complete (and change it back to uncompleted)
You should be able to add and remove tasks
Your app should show a count of the tasks. Either all tasks or all uncompleted tasks (or both)
You should make your app look nice when there's no data. See empty states UX design for some ideas.
Make your app responsive (it should look good on devices from 320px width up to at least 1600px)
Your project should follow accessibility guidelines to ensure your website is usable by a diverse range of users:
You should have a score of at least 95 in Lighthouse
All images should have alt attributes and proper sizes
All contrasts should be OK
Follow the guidelines on how to write clean code
Course Participation Requirements
Active participation in mob/pair programming workshops
Regular attendance at weekly demos and retrospectives
Completion of (at least) two peer code reviews
Grade VG (Pass with Distinction) Requirements
All Grade G requirements plus implementing a minimum of 2 stretch goals on a minimum of 3 projects.

Project 1: Portfolio project
Stretch goal options:

Implement animation on scroll as presented in the design for enhanced user experience.
Optimise your website for sharing on social media using og:tags.
Add a favicon
Give your portfolio a custom domain and connect it to your deployed site. Read more.
Project 2: Happy Thoughts messaging app
Stretch goal options:

Show a count below the form input that updates as the user types and shows how many characters are remaining. Make it go red when the user has typed over 140 characters
When POSTing a new thought, if the message was empty, too long, or too short, you get an error message in the UI. Use this to set some sort of error state to show a friendly message to your user.
Add an animation for when a new thought is submitted and appears in the list below
Keep count of how many different posts you have liked (different from how many times a post has been liked). Keep count and display it in some way. You could even go as far as to store this number in localStorage so that when the page is reloaded, the initial state can be set from the number you've stored.
Handle loading states. See hint below 👇 When you initially fetch the list of recent thoughts, it might take a little time to get the response back from the API. During this time, you could show a loading message or spinner of some sort on the page. Use something like const [loading, setLoading] = useState(true) to make it so the page is loading by default, then call setLoading(false) once you get the response back from the API. With the new thought form and the heart button, you could choose to also show a loading state, or you could opt to do an optimistic update which means you update the UI before the API request has succeeded (making the assumption that it will be successful).
Project 3: Movies app
Stretch goal options:

Show a 'not found' page if you try to visit a movie detail page with an invalid movie ID (so the user has tried to enter an ID themselves, most likely).
In this case, when you send a movie detail request with a movie ID which doesn't exist in the API, the API returns with a 404 response. You can use .catch() on your promise to catch this exception and toggle some sort of 'error' state which can be used to show an error page.
Handle loading states - The API responds quite quickly, but if you're on a slow network then you'd be faced with a black screen until the response comes back. During this time, you could show a loading message or spinner of some sort on the page.
Use something like const [loading, setLoading] = useState(true) to make it so the page is loading by default, then call setLoading(false) once you get the response back from the API.
You could also investigate how to handle the loading of images - or show plain text by default and then use CSS to place the image over the text (using absolute positioning). This way, if the images take a long time to load, the user still sees something relevant.
On the homepage where you list popular movies, you could add a dropdown to change the list. For example, you could toggle between popular, upcoming, and new releases.
When you load a movie, you get a lot of information in the API response, such as a collection it belongs to, genres it has, or the companies involved with producing the film. Each of these has an API endpoint that can be used to fetch more information about that entity. You could use this data to make links from your movie page to another page. Take a look through the documentation and be creative!
Project 4: Todo app
Stretch goal options:

Add a timestamp for each task indicating when it was created. The timestamp should be displayed as a formatted date but stored as a raw date. You can use a third-party library, such as date-fns or Moment.js for this.
Add a complete all button to set all tasks as completed.
Add a button to switch dark/light mode.
Implement local storage
Add a date input to your new task form to set a due date on a task. It could be required, or optional - it's up to you. You could then display this in the list and style it differently when a task is overdue.
Add filters to display completed/uncompleted tasks, tasks created after a given date or anything else you consider important.
Create categories/tags for tasks so they can be grouped - for example, 'Housework', 'Shopping', etc.
Create projects for tasks → A project could be a group of tasks which all need to be completed, and when they are completed, the project is marked as complete.



Lesson
Syllabus
Course Syllabus: React and Global State Management
Scope of the Course: 30 YH credits (6 full weeks)

Programme Affiliation: Frontend Developer / JavaScript Developer

Programme to which the Course Belongs: JavaScript Development (160 YH credits)

Decision on Confirmation: 2/6-2025

Purpose and Objectives
The purpose of the course is to provide the student with practical and theoretical knowledge of React, one of the most widely used JavaScript libraries for building modern web applications. Throughout the course, the student will build several responsive and interactive projects while learning how to manage application state, both locally and globally, using tools such as the Context API and Zustand.

Upon completion of the course, the student should be able to:

Build responsive web apps using React and styled components
Create and compose reusable components using JSX
Manage state with useState, useEffect, and global state libraries
Work with routing using React Router
Handle asynchronous API requests in a React application
Implement accessibility and clean code practices in React projects
After completing the course, the student should have acquired the following knowledge, skills, and competencies:

Knowledge

Understanding the problems React is built to solve
Knowledge of React hooks and component lifecycle
Understanding of global vs local state in React applications
Familiarity with CSS-in-JS and component-based styling approaches
Awareness of accessibility standards in React-based applications
Skills

Write and structure React applications using components and props
Use useState, useEffect, and other built-in hooks effectively
Implement routing with React Router to create multi-page experiences
Connect to APIs and display asynchronous data
Style components using Styled Components and manage styles dynamically
Use Zustand and the Context API to manage global state
Competencies

Independently build and deploy React applications with multiple pages and dynamic content
Create accessible, responsive user interfaces that follow design specifications
Use clean code principles when writing and refactoring React code
Debug and test React components using Chrome DevTools and browser-based testing tools
Collaborate effectively in a team using GitHub, code reviews, and agile methods
Grading and Assessment
Grades are set either Fail (IG), Pass (G) or Pass with Distinction (VG).

Fail (IG): The student has completed the course but has not achieved all course requirements
Pass (G): The student has achieved all course requirements
Pass with Distinction (VG): The student has achieved all course requirements as well as the VG requirements.
Knowledge assessment is conducted through four code project hand-ins. After the course has ended, the students’ hand-ins will be evaluated by the teachers.