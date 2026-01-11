# NetflixGPT – AI Powered Movie Discovery App

Live Demo:
https://netflix-gpt-nu-eight.vercel.app

NetflixGPT is a Netflix-style movie streaming UI with AI-powered search using OpenAI GPT and real-time movie data from TMDB. It demonstrates modern React development, authentication, API integration, state management, and production deployment.

Features

Authentication (Firebase)
- Sign In / Sign Up
- Form Validation
- Profile Update (Name & Avatar)
- Protected Routes
- Auto Login State Handling
- Test Credentials One-Click Login

Movie Browsing (TMDB API)
- Now Playing Movies
- Popular, Top Rated, Upcoming
- Background Trailer Autoplay (Muted)
- Responsive Movie Rows & Cards
- YouTube Embedded Player

AI Search (OpenAI GPT)
- Natural Language Movie Search
- GPT Powered Recommendations
- Multi-Language Support
- Smart Suggestions UI

Tech Stack
- React 18
- Redux Toolkit
- Tailwind CSS
- Firebase Authentication
- OpenAI API
- TMDB API
- React Router
- Custom Hooks
- Environment Variables (.env)
- Vercel Production Hosting

Application Flow
1. User logs in / signs up
2. Redirects to Browse page
3. Background trailer plays
4. Movie categories shown
5. GPT Search allows AI-based movie discovery
6. Suggestions shown using TMDB data

Main Modules
- Auth (Login / Signup)
- Browse (Movies, Trailer, Lists)
- GPT Search (AI Recommendations)
- Redux Store (User, Movies, GPT, Config)
- Reusable Components (Header, Cards, Lists)
- Custom Hooks (Data Fetching)

Installation

git clone <your-repo-url>
cd netflixgpt
npm install
npm start

Create .env file

REACT_APP_OPENAI_KEY=your_openai_key
REACT_APP_DEMO_EMAIL=demo@gmail.com
REACT_APP_DEMO_PASS=123456
REACT_APP_TMDB_KEY=your_tmdb_key

Deployment

Vercel
npm run build
vercel --prod

Firebase
npm run build
firebase deploy

What This Project Shows
- Real-world React architecture
- AI integration in frontend apps
- Secure authentication flow
- Scalable state management
- Clean UI with Tailwind
- Production deployment on Vercel
- Resume-ready full-stack project

Author
Harikishan Mittal
Full Stack Developer | React | Firebase | AI Integration
