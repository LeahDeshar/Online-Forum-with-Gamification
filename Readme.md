# Online Forum with Gamification

## Overview

This project is an Online Forum with Gamification built using NestJS for the backend API and Angular for the frontend. The application includes features like user authentication, forum browsing, gamification elements (points, badges, leaderboards), private messaging, notifications, and more.

## Features

- **User Management**

  - Registration, login, profile management
  - Authentication with JWT
  - User roles

- **Forum Functionality**

  - Create, browse, and manage categories and topics
  - Create, view, and reply to threads
  - Nested replies and rich text formatting
  - Upvote and downvote posts

- **Gamification**

  - Points system for user activities (creating threads, posting, etc.)
  - Badges and achievements based on milestones
  - Leaderboards to showcase top users

- **Interaction and Notifications**

  - Private messaging between users
  - In-app and email notifications for replies, upvotes, badges, etc.

## Technologies Used

- **Backend**

  - NestJS
  - TypeScript
  - MongoDb
  - JWT for authentication
  - WebSocket (optional for real-time features)

- **Frontend**

  - Angular
  - TypeScript
  - Angular Material
  - NgRx (for state management)
  - RxJS
