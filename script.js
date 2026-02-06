/* --- Global Reset & Variables --- */
:root {
    /* Light Mode Variables (Default) */
    --primary-color: #4e54c8;
    --secondary-color: #8f94fb;
    --bg-color: #ffffff;
    --bg-alt: #f9f9f9;
    --text-color: #333333;
    --card-bg: #ffffff;
    --shadow: 0 4px 6px rgba(0,0,0,0.1);
    --border-color: #ddd;
    --nav-bg: rgba(255, 255, 255, 0.95);
}

/* Dark Mode Variables */
.dark-mode {
    --primary-color: #7278f3;
    --secondary-color: #a4a9fc;
    --bg-color: #121212;
    --bg-alt: #1e1e1e;
    --text-color: #e0e0e0;
    --card-bg: #252525;
    --shadow: 0 4px 6px rgba(0,0,0,0.4);
    --border-color: #444;
    --nav-bg: rgba(37, 37, 37, 0.95);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    background-color: var(--bg-color);
    color: var(--text-color);
    /* Smooth theme transition */
    transition: background-color 0.3s ease, color 0.3s ease;
}

ul { list-style: none; }
a { text-decoration: none; color: inherit; }

/* --- Reusable Classes --- */
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--primary-color);
}

.btn {
    display: inline-block;
    padding: 10px 30px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn-primary {
    background-color: var(--primary-color);
    color: #ffffff;
}

.btn-secondary {
    background-color: var(--text-color);
    color: var(--bg-color);
}

/* --- 🌟 SCROLL ANIMATION CLASSES --- */
.reveal {
    opacity: 0;
    transform: translateY(30px); /* Start slightly lower */
    transition: all 0.8s ease-out;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0); /* Move to original position */
}

/* --- 1️⃣ Header --- */
header {
    background: var(--nav-bg);
    backdrop-filter: blur(10px); /* Glass effect */
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
    transition: background 0.3s ease;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-weight: 700;
    color: var(--primary-color);
    font-size: 1.5rem;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
}

.nav-links a {
    color: var(--text-color);
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--primary-color);
    font-weight: 600;
}

/* Theme Toggle Button */
.theme-btn {
    background: none;
    border: 1px solid var(--border-color);
    padding: 5px 8px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.theme-btn:hover {
    background-color: var(--bg-alt);
    transform: rotate(15deg);
}

/* --- 2️⃣ Hero Section --- */
#hero {
    height: 90vh;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px;
}

.hero-content h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-content .btn {
    background-color: #ffffff;
    color: var(--primary-color);
    font-weight: 700;
}

/* --- 3️⃣ Features Section --- */
#features {
    padding: 4rem 0;
    background-color: var(--bg-alt);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, background 0.3s ease;
}

.feature-card:hover {
    transform: scale(1.05);
}

.feature-card h3 {
    margin-bottom: 1rem;
    color: var(--text-color);
}

/* --- 4️⃣ Pricing Section --- */
#pricing {
    padding: 4rem 0;
    text-align: center;
    background-color: var(--bg-color);
}

.pricing-card {
    background: var(--card-bg);
    padding: 3rem;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: var(--shadow);
    transition: background 0.3s ease;
}

.pricing-card .price {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin: 1rem 0;
}

.price-features {
    margin-bottom: 2rem;
}

.price-features li {
    margin-bottom: 0.5rem;
}

/* --- 5️⃣ Contact Section --- */
#contact {
    padding: 4rem 0;
    background-color: var(--bg-alt);
}

#contact-form {
    max-width: 600px;
    margin: 0 auto;
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: var(--shadow);
    transition: background 0.3s ease;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.form-group input, 
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-family: inherit;
    background-color: var(--bg-color);
    color: var(--text-color);
}

#form-message {
    margin-top: 1rem;
    font-weight: 600;
    text-align: center;
}

/* --- 6️⃣ Footer --- */
footer {
    background: var(--card-bg);
    color: var(--text-color);
    text-align: center;
    padding: 1.5rem 0;
    margin-top: auto;
    border-top: 1px solid var(--border-color);
}

/* --- 📌 Responsive Design --- */
@media (max-width: 768px) {
    .hero-content h2 { font-size: 2.2rem; }
}

@media (max-width: 600px) {
    .nav-container { flex-direction: column; }
    .nav-links { margin-top: 1rem; flex-direction: column; gap: 10px; text-align: center; }
    .pricing-card, #contact-form { width: 100%; padding: 1.5rem; }
    .hero-content h2 { font-size: 1.8rem; }
}
