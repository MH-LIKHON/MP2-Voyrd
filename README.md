# MP2-VoYrD (INTERACTIVE FRONTEND DEVELOPMENT MILESTONE PROJECT)

## Table of Contents

1. [Project Overview](#project-overview)
2. [Live Site](#live-site)
3. [Repository](#repository)
4. [User Experience (UX)](#user-experience-ux)
    - [Project Goals](#project-goals)
    - [User Stories](#user-stories)
    - [Design](#design)
5. [Wireframes](#wireframes)
6. [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#future-features)
7. [Technologies Used](#technologies-used)
8. [Testing](#testing)
    - [Manual Testing](#manual-testing)
    - [Validation Testing](#validation-testing)
    - [Google Lighthouse Testing](#google-lighthouse-testing)
    - [User Testing](#user-testing)
9. [Bugs and Fixes](#bugs-and-fixes)
10. [Deployment](#deployment)
11. [Credits](#credits)
12. [Acknowledgements](#acknowledgements)

---

## Project Overview

VoYrD is an interactive frontend project designed to provide a one-stop travel shop for exploring the beauty and culture of the UK. This project showcases an engaging user interface featuring dynamic elements such as image slideshows, embedded videos, hover animations, and responsive design.

The project was developed as part of the Interactive Frontend Development Milestone Project and focuses on delivering an immersive user experience for potential travelers.

---

## Live Site

[VoYrD - Live Site](https://example.com)

---

## Repository

[GitHub Repository](https://github.com/username/voyrd-project)

---

## Pre-Project Planning

To kick off this project, I evaluated several service-based industries that would benefit from a well-designed, user-centric website. I scored each industry on a set of criteria to determine which would provide the best balance between showcasing my skills and meeting market demands. The criteria were:

- **Portfolio-Weight**: How well the website would represent my capabilities in web development.
- **Complexity**: The complexity of the site features and content.
- **Time to Research**: The amount of time required to understand and implement the content.
- **Revenue Potential**: The potential for generating income by building similar websites for businesses in the industry.

| Type                       | Portfolio-Weight | Complexity | Time to Research | Revenue Potential | Total Score |
|----------------------------|------------------|------------|------------------|-------------------|-------------|
| Travel & Tourism          | 9                | 8          | 7                | 9                 | 33          |
| Event Planning            | 8                | 7          | 6                | 8                 | 29          |
| Small Business Websites   | 9                | 6          | 7                | 8                 | 30          |
| Entertainment Services    | 7                | 6          | 5                | 7                 | 25          |

From this analysis, I chose to create a website for the Travel & Tourism industry. This project was ideal for demonstrating a wide range of web development skills, including responsive design, media integration, and user interaction, while also catering to a real-world market need.

### Service Industry Ranking

I also ranked specific services within the travel and tourism industry to identify which would offer the most engaging content and user experience:

| No. | Service Type           | Rank |
|-----|------------------------|------|
| 1   | Guided Tours          | 1    |
| 2   | Chauffeur Services    | 2    |
| 3   | Luxury Hotels         | 3    |
| 4   | Flight Booking        | 4    |
| 5   | Travel Packages       | 5    |

The focus on guided tours and chauffeur services reflected the growing demand for these experiences in the luxury travel market, making it a good fit for the target audience.

---

## User Experience (UX)

### Project Goals

- Create an interactive, visually engaging website that promotes UK travel experiences.
- Showcase services such as flights, hotels, guided tours, and chauffeur services in an appealing manner.
- Provide a responsive and seamless user experience across all devices.

### User Stories

#### New Users
- As a new user, I want to learn about travel services offered.
- As a new user, I want visually appealing content to inspire my travel plans.
- As a new user, I want to easily navigate to the booking page.

#### Returning Users
- As a returning user, I want to access updated travel options and new offers.
- As a returning user, I want to review specific travel packages and book quickly.

#### Frequent Users
- As a frequent user, I want an easy-to-use interface for repetitive bookings.
- As a frequent user, I want to quickly navigate to pages relevant to my travel needs.

#### Business Owner
- As a business owner, I want to showcase services and destinations with high-quality visuals.
- As a business owner, I want to provide seamless navigation for potential clients.
- As a business owner, I want the website to reflect professionalism and creativity.

### Design

#### Colour Scheme
- Primary: `#F2BA1E` (gold accent)
- Secondary: `#FFFFFF` (white background)
- Tertiary: `#5A5A5A` (subtle gray for text)
- Background: `#D1D9DD`

#### Typography
- **Roboto**: Used for general body text.
- **Exo**: Applied to headings and call-to-action buttons.

#### Imagery
High-resolution AI-generated images are used to represent UK landmarks and services. Videos were captured to provide an authentic experience.

---

## Wireframes

### Home Wireframes
![Home Wireframe](assets/wireframes/MP2-VoYrD_Home.bmpr)

### Booking Wireframes
![Booking Wireframe](assets/wireframes/MP2-VoYrD_Booking.bmpr)

### Explore Page Wireframe
![Explore Wireframe](assets/wireframes/MP2-VoYrD_Explore.bmpr)

### Contact Page Wireframe
![Contact Wireframe](assets/wireframes/MP2-VoYrD_Contact.bmpr)

---

## Features

### Existing Features

#### Hero Section
- **Dynamic Image Slideshow**: Features multiple UK city images transitioning with smooth animations.
- **Neon-Styled Text**: The heading and description use a glowing text effect.
- **Book Now Button**: Animated circular button leading to the booking page.

#### Welcome Section
- **Embedded Video**: A YouTube video starts at 30 seconds and scales dynamically.
- **Responsive Layout**: Text aligns on the left with the video on the right.
- **Explore UK Button**: Guides users to the explore page.

#### Why Choose Us Section
- Features services such as Flights, Chauffeurs, Hotels, and Tours.
- **Hover Animations**: Cards enlarge with shadow effects on hover.
- **Icons and Descriptions**: Icons are styled in gold for visual appeal.

### Future Features
- **Google Maps Integration**: Interactive maps for destinations.
- **Live Chat**: Real-time assistance for users.
- **API Integration**: Display live weather updates for destinations.

---

## Technologies Used

### Main Technologies
- **HTML5**: For structuring the website.
- **CSS3**: For styling and animations.
- **Bootstrap 5**: For responsive design.
- **JavaScript**: For interactive elements.

### Tools
- Git: For version control.
- GitHub Pages: For deployment.
- Balsamiq: For wireframe creation.

---

## Testing

### Manual Testing
The website was manually tested across multiple browsers (Chrome, Firefox, Safari, and Edge) and on different devices (mobile, tablet, desktop) to ensure responsiveness, functionality, and user experience. Below is a detailed overview of the tests conducted and their outcomes.

#### Testing for Links and Forms

| Test                                         | Outcome |
|----------------------------------------------|---------|
| All links in the navigation bar lead to their correct pages | Pass    |
| "Book Now" button in the hero section directs users to the contact page | Pass    |
| Footer social links lead to respective social media pages  | Pass    |
| Contact form submits successfully when all fields are filled correctly | Pass    |
| User is prevented from submitting the form without filling in the required fields | Pass    |
| Form validation presents errors when incorrect data types are entered (e.g., email field) | Pass    |

#### Testing for Responsiveness

| Test                                        | Outcome |
|---------------------------------------------|---------|
| The website displays correctly on screens larger than 950px (desktop) | Pass    |
| The website displays correctly on screens smaller than 950px (tablet, mobile) | Pass    |

### User Testing

#### User Testing Challenge
Five users were asked to complete specific tasks on the website before receiving any instructions. The tasks and their respective results are listed below.

| Test                                                       | Result |
|------------------------------------------------------------|--------|
| Upon arrival, navigate to the Contact Form and submit a message | 100%   |
| Locate and access the company's Facebook social media page from the footer | 100%   |
| Fill in the contact form and opt-in for promotional offers | 100%   |
| Provide the company's phone number for 24/7 breakdown services | 100%   |
| Navigate to the Fleet page and count the number of vehicle images | 100%   |

#### User Responsive Testing
Five users tested the website on mobile devices and/or tablets. Feedback was gathered on any issues related to overlapping content, page layout, or navigation problems.

| Test                | Result |
|---------------------|--------|
| Issues Reported     | None   |

### Google Lighthouse Testing
Google Lighthouse was used to assess the site's performance, accessibility, best practices, and SEO across all major pages. Below are the results for each page tested.

#### Lighthouse Reports
- **Index Page**: ![Lighthouse Report](assets/pdfs/lighthouse-index.pdf)
- **Explore Page**: ![Lighthouse Report](assets/pdfs/lighthouse-explore.pdf)
- **Contact Page**: ![Lighthouse Report](assets/pdfs/lighthouse-contact.pdf)

### Validation Testing
- **HTML Validation**: [W3C Validator Results](assets/pdfs/index-validation.pdf)
- **CSS Validation**: [W3C CSS Validator Results](assets/pdfs/styles-validation.pdf)

---

## Bugs and Fixes

### Bug 1: Video Not Autoplaying
- **Fix**: Added `?autoplay=1` and muted the video for compliance.

### Bug 2: Hover Effects Not Consistent
- **Fix**: Adjusted CSS to ensure all hover animations scale similarly.

### Bug 3: Footer Overlap
- **Fix**: Added padding and adjusted margins for proper alignment.

---

## Deployment

### Steps for Deployment on GitHub Pages
1. Push changes to the repository.
2. Navigate to the repository settings.
3. Select `main` branch for GitHub Pages deployment.
4. Access the live link provided in settings.

### Running the Project Locally
1. Clone the repository using:
   ```bash
   git clone https://github.com/username/voyrd-project.git
   ```
2. Navigate to the project folder:
   ```bash
   cd voyrd-project
   ```
3. Open `index.html` in your browser.

---

## Credits

### Media
- **Images**: AI-generated using DALL-E.
- **Videos**: Captured and edited by the project owner.
- **Logo**: [Source](https://iconscout.com)

### Code Libraries
- Bootstrap 5: [Bootstrap Official Site](https://getbootstrap.com)
- FontAwesome: [FontAwesome Icons](https://fontawesome.com)

---

## Acknowledgements

Special thanks to Miguel for their guidance throughout the project.