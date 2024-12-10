
// Toggle the Navbar on mobile
document.getElementById('navToggler').addEventListener('click', () => {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('hidden');
});

// Modal functionality
document.querySelector('[data-modal-target="exampleModal"]').addEventListener('click', () => {
    document.getElementById('exampleModal').classList.remove('hidden');
});

document.querySelectorAll('.modal-close, .btn-close').forEach(el => {
    el.addEventListener('click', () => {
        document.getElementById('exampleModal').classList.add('hidden');
    });
});

    
// Search button functionality
document.getElementById('searchButton').addEventListener('click', () => {
    const emailInput = document.querySelector('input[type="email"]').value;
    alert('Search initiated for: ' + emailInput);
});
// Function to fetch weather data from OpenWeather API
async function fetchWeather(lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();  // Parse the response
        displayWeather(data);  // Display the weather data
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data');
    }
}

// Function to display the fetched weather data
function displayWeather(weatherData) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = '';  

    const weatherDiv = document.createElement('div');
    weatherDiv.className = 'weather-item';
    weatherDiv.innerHTML = `
        <h3>Current Weather</h3>
        <p><strong>Temperature:</strong> ${weatherData.current.temp}°C</p>
        <p><strong>Weather:</strong> ${weatherData.current.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${weatherData.current.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${weatherData.current.wind_speed} m/s</p>
    `;
    weatherContainer.appendChild(weatherDiv);
}
//  // Get the button
let scrollBtn = document.getElementById("scrollBtn");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.remove("hidden");  // Show the button
    } else {
        scrollBtn.classList.add("hidden");  // Hide the button
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}



// Toggle active state for filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Get filter type
        const filter = this.getAttribute('data-filter');
        filterEvents(filter);
    });
});

// Function to filter events based on the selected filter
function filterEvents(filter) {
    const events = document.querySelectorAll('.filter-item');
    events.forEach(event => {
        if (filter === 'all') {
            event.classList.remove('hidden');
        } else if (event.classList.contains(filter)) {
            event.classList.remove('hidden');
        } else {
            event.classList.add('hidden');
        }
    });
}

// Show today's events as default
filterEvents('today');

var firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
// Get references to the email and password inputs, and the sign in and sign up buttons
var email = document.getElementById("email");
var password = document.getElementById("password");
var signInButton = document.getElementById("signInButton");
var signUpButton = document.getElementById("signUpButton");

// Add event listeners to the sign in and sign up buttons
signInButton.addEventListener("click", function() {
  // Sign in the user using Firebase's signInWithEmailAndPassword method
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(function() {
      // Redirect the user to the protected resources page
      window.location.href = "/protected-resources.html";
    })
    .catch(function(error) {
      // Show an error message
      alert(error.message);
    });
});

signUpButton.addEventListener("click", function() {
  // Sign up the user using Firebase's createUserWithEmailAndPassword method
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function() {
      // Redirect the user to the protected resources page
      window.location.href = "/protected-resources.html";
    })
    .catch(function(error) {
      // Show an error message
      alert(error.message);
    });
});

