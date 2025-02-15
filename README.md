# 🎥 W3 Movies

A user-friendly Movie Portal for exploring movies, viewing details, adding favorites, and managing movies dynamically. Built with **React, Firebase, MongoDB**, and **Tailwind CSS**.

---

## 🚀 Live Demo
🔗 [Live Site](https://w3movies-184d8.web.app/)

---

## 📌 Features

- ✅ **Explore Movies** – Browse all available movies in a responsive grid layout.
- ✅ **Movie Details** – View full details of any movie, including its poster, genre, and rating.
- ✅ **User Authentication** – Secure login & registration using Firebase (Google sign-in included).
- ✅ **Add & Manage Movies** – Users can add, edit, and delete movies (private routes).
- ✅ **Favorites List** – Save favorite movies for quick access.
- ✅ **Search & Filter** – Quickly find movies by title.
- ✅ **Dark/Light Theme** – Toggle between light and dark mode.
- ✅ **Responsive Design** – Fully optimized for **mobile, tablet, and desktop**.

---

## 🛠 Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication
- **State Management:** React Hooks, Context API
- **Hosting:** Vercel (Backend), Firebase (Frontend)

---

## 📂 Project Structure
```
/client
  ├── src
  │   ├── components
  │   │   ├── Navbar.jsx
  │   │   ├── MovieCard.jsx
  │   │   ├── Footer.jsx
  │   ├── pages
  │   │   ├── Home.jsx
  │   │   ├── AllMovies.jsx
  │   │   ├── MovieDetails.jsx
  │   │   ├── Favorites.jsx
  │   ├── App.js
  │
  ├── server
      ├── index.js
      ├── routes
      │   ├── movies.js
      │   ├── users.js
      ├── models
          ├── Movie.js



### 3️⃣ Setup Environment Variables
Create a `.env` file in both the `client` and `server` directories.



-
## 📄 API Routes
| Endpoint          | Method | Description                        |
|------------------|--------|------------------------------------|
| `/api/movies`   | GET    | Fetch all movies                  |
| `/api/movies/:id` | GET    | Fetch movie details               |
| `/api/movies`   | POST   | Add a new movie (Auth required)    |
| `/api/movies/:id` | DELETE | Delete a movie (Auth required)    |

---

## 🏆 Challenges & Enhancements

- ✅ Implemented **pagination** for better movie browsing.
- ✅ Used **React Hook Form** for better form validation.
- ✅ Improved **error handling** with Toast & SweetAlert.

---

## 📝 Contributors

👤 **Your Name**  
📧 Email: [avijitmohajon21977@gmail.com] 
🔗 GitHub: [your-github-profile](https://github.com/avijitmohajon)  

---

### 🚀 Ready to Explore Movies? Click Below!
🔗 [Live Site]:(https://w3movies-184d8.web.app/)

