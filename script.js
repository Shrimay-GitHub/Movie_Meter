const movies = [
    { title: "Inception", release: "2010", rating: 4.8, img: "91X5E6LYKPL.webp" },
    { title: "Titanic", release: "1997", rating: 4.7, img: "Titanic-Vintage-Movie-Poster-Original.webp" },
    { title: "Interstellar", release: "2014", rating: 4.9, img: "interstellar_ver2_xxlg.webp" },
    { title: "The Dark Knight", release: "2008", rating: 4.9, img: "The-Dark-Knight-Vintage-Movie-Poster-Original.webp" },
    { title: "Avengers: Endgame", release: "2019", rating: 4.7, img: "MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.webp" },
    { title: "The Godfather", release: "1972", rating: 4.9, img: "the-godfather.webp" },
    { title: "Forrest Gump", release: "1994", rating: 4.8, img: "61F7SuvJ58L.webp" },
    { title: "The Matrix", release: "1999", rating: 4.8, img: "51oBxmV-dML.webp" },
    { title: "Gladiator", release: "2000", rating: 4.7, img: "fdd9650f57e9850ea8a13e040dc1ff15.webp" },
    { title: "Shawshank Redemption", release: "1994", rating: 5.0, img: "71715eBi1sL.webp" }
];

function checkAuth() {
    if (!localStorage.getItem("user")) {
        window.location.href = "login.html";
    }
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("error-msg").innerText = "Please enter username and password!";
        return;
    }

    localStorage.setItem("user", username);
    window.location.href = "index.html";
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}

function loadMovies() {
    checkAuth();

    let container = document.getElementById("movies-container");
    container.innerHTML = "";

    movies.forEach((movie, index) => {
        let storedRating = localStorage.getItem(movie.title) || movie.rating;
        
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            stars += `<span class="star" onclick="rateMovie(${index}, ${i})">${i <= storedRating ? "★" : "☆"}</span>`;
        }

        container.innerHTML += `
            <div class="movie-card">
                <img src="${movie.img}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Release: ${movie.release}</p>
                <p>Rating: ${storedRating}</p>
                <div class="rating">${stars}</div>
            </div>
        `;
    });
}

function rateMovie(index, rating) {
    let movie = movies[index];
    localStorage.setItem(movie.title, rating);
    loadMovies();
}

if (window.location.pathname.includes("index.html")) {
    loadMovies();
}
function signup() {
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let dob = document.getElementById("signup-dob").value;
    let phone = document.getElementById("signup-phone").value;

    if (!username || !email || !password || !dob || !phone) {
        document.getElementById("signup-error-msg").innerText = "Please fill out all fields!";
        return;
    }

    let userData = { username, email, password, dob, phone };
    localStorage.setItem("user", JSON.stringify(userData));

    window.location.href = "index.html";
}

if (window.location.pathname.includes("signup.html")) {
    localStorage.removeItem("user");
}
