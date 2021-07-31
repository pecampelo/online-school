# Full Stack Alumni website

A place for people to become students of a course, pay it, to watch the classes,
do quizzes, access blog posts, have meetings through a video app and deliver files 
(video, image or text);

TODO 
[ ] Setup Server
    [x] Install Dependencies
    [x] Setup Linter
    [x] Setup Express App
    [x ] Setup Not Found and Error Middlewares
[ ] Model Database
    - What kind of data will we store? 
[ ] Setup Mongoose Model
[ ] POST
[ ] Get 
[ ] Setup Client
[ ] Create Form to add new User Entry

Pages
[ ] Homepage
    [ ] Courses Available
        [ ] Redirect to product page
[ ] Blog
[ ] Student Log-in 
    [ ] Some way to store session log-in throughout all pages
[ ] Become a student
    [ ] Grid/List of courses (Develop both options)
    [ ] Add to cart
[ ] Cart
    [ ] Checkout
    [ ] Payment page
    [ ] Successful payment
        [ ] Store session token?
        [ ] Redirect to student area
[ ] Student Area
    [ ] Main Area
        [ ] Navigation Bar 
            [ ] Button: Set up a coaching session time
            [ ] Button: Enter a course
            [ ] Button: My profile
            [ ] Button: My courses
        [ ] Grid of courses
        [ ] Tasks Sidebar
    [ ] Course Page
    [ ] Tasks Page
    [ ] Video Meeting Page
[ ] Contact

# Database
* Student
    * Username
    * Password
    * Full Name
    * Job Title
    * Gender
    * Nationality
    * Birthdate
    * Billing Address
    * Created at
    * Last time on-line at
    * Student Privileges
    * Instructor Privileges
    * Admin Privileges
* Course
    * Course Name
    * Price
    * Format
    * Instructor
    * Created at
* Class
    * Class Name