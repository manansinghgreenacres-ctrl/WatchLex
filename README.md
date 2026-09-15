
# Watchlex

**Watchlex** is a full-stack web application designed to help users discover random movies and coordinate watch sessions with friends. 

## 🚀 Live Demo
[Insert your live deployment link here, or delete this line if not deployed yet]

## ✨ Features
* **Dynamic Content Generation:** Leverages asynchronous API workflows to instantly serve random, curated film selections.
* **Live API Integration:** Fetches real-time movie titles, summaries, ratings, and poster assets via the TMDB API.
* **Modern UI/UX:** Built with a highly responsive, mobile-first design philosophy using Tailwind CSS.
* **Type-Safe Architecture:** Developed with TypeScript to ensure strict data parsing and stable component states.
* **Secure Environment Management:** Fully isolates sensitive configuration endpoints and private API credentials.

## 🛠️ Built With
* **Frontend Framework:** React (Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS, PostCSS
* **Data Provider:** [TMDB API (The Movie Database)](https://themoviedb.org)
* **DevOps & Tools:** Git, GitHub, ESLint

## ⚙️ Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd WatchLex
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure your environment variables:**
   Create a `.env` file in the root directory and add your private TMDB API key:
   ```env
   VITE_TMDB_API_KEY=your_actual_api_key_here
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```
