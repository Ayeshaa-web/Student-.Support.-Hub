<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Support Hub</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Slideshow Style */
        .fade {
            animation: fade 1.5s ease;
        }
        @keyframes fade {
            from {opacity: 0.4} 
            to {opacity: 1}
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">Student Support Hub</div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Login/Sign Up</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="slideshow-container">
            <div class="slide fade">
                <img src="image1.jpg" alt="Slide 1">
            </div>
            <div class="slide fade">
                <img src="image2.jpg" alt="Slide 2">
            </div>
            <div class="slide fade">
                <img src="image3.jpg" alt="Slide 3">
            </div>
        </div>
        <h1>Welcome to Your Student Support Hub</h1>
        <p>Your one-stop solution for academic assistance and resources.</p>
        <a href="#" class="cta-button">Get Started</a>
    </section>

    <section class="features">
        <h2>Our Features</h2>
        <div class="feature-card">
            <h3>Academic Assistance</h3>
            <p>Get help with your studies and