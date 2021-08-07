# Full Stack Alumni website

A place for people to become students of a course, pay it, to watch the classes,
do quizzes, access blog posts, have meetings through a video app and deliver files 
(video, image or text);

TODO 
- [x] Setup Server
- [x] Install Dependencies
- [x] Setup Linter
- [x] Setup Express App
- [x] Setup Not Found and Error Middlewares
- [x] Model Database
- What kind of data will we store? 
- [x] Setup Mongoose Model
- [ ] Methods
    [ ] GET
    [ ] POST
    [ ] PUT
    [ ] DELETE
- [ ] Setup Client
- [ ] Create Form to add new User Entry
- [ ] Front-End
    - [ ] Homepage
        - [ ] Courses Available
            - [ ] Redirect to product page
    - [ ] Blog
    - [ ] Student Log-in 
        - [ ] Some way to store session log-in throughout all pages
    - [ ] Become a student
        - [ ] Grid/List of courses (Develop both options)
        - [ ] Add to cart
    - [ ] Cart
        - [ ] Checkout
        - [ ] Payment page
        - [ ] Successful payment
            - [ ] Store session token?
            - [ ] Redirect to student area
    - [ ] Student Area
        - [ ] Main Area
            - [ ] Navigation Bar 
                - [ ] Button: Set up a coaching session time
                - [ ] Button: Enter a course
                - [ ] Button: My profile
                - [ ] Button: My courses
            - [ ] Grid of courses
            - [ ] Tasks Sidebar
        - [ ] Course Page
        - [ ] Tasks Page
        - [ ] Video Meeting Page
    - [ ] Contact

# Database
- [x] Student 
    * Username - Text
    * Password - Text
    * Full Name - Text
    * Image - Text - URL
    * Job Title - Text
    * Gender - Text
    * Nationality - Text
    * Birthdate - DateTime
    * Email - Text
    * Classes Attended - Text - CONNECTED
    * Classes Attending - Text - CONNECTED
    * Created at - DateTime
    * Last time on-line at - DateTime
- [x] Instructor
     * Username - Text 
     * Password - Text
     * Full Name - Text
     * Image - Text - URL
     * Job Title - Text
     * Gender - Text
     * Nationality - DateTime
     * Birthdate - DateTime
     * Email - Text
     * Courses Instructed - Text - CONNECTED
    * Classes Instructed - Text CONNECTED
    * Created at - DateTime
    * Last time on-line at - DateTime
- [x] Course
    * Title - Text
    * Description - Text
    * Price - Number
    * Format (Recorded || Live) - Text
     * Classes - Text
     * Instructor(s) Responsible - Text - CONNECTED
     * Student(s) Attending - Text - Connected
    * Created at - DateTime
    * Last update at - DateTime
- [x] Class
    * Title - Text
    * Description - Text
    * From Course - Text - CONNECTED
    * Video - Text - URL
    * Watched by - Text - CONNECTED 
    * Rating - 1 to 1