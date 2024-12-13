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

| Page        | Element Tested              | Outcome |
|-------------|-----------------------------|---------|
| index.html  | Navigation Bar              | Pass    |
| index.html  | Dynamic Hero Slideshow      | Pass    |
| index.html  | Welcome Section Video       | Pass    |
| contact.html| Multi-step Contact Form     | Pass    |

### Validation Testing
- **HTML Validation**: [W3C Validator Results](assets/pdfs/index-validation.pdf)
- **CSS Validation**: [W3C CSS Validator Results](assets/pdfs/styles-validation.pdf)

### Google Lighthouse Testing

#### Index Page
![Lighthouse Report](assets/pdfs/lighthouse-index.pdf)

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