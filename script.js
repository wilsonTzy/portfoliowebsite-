        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Dynamic greeting based on time of day
        function setGreeting() {
            const hours = new Date().getHours();
            let greeting = "Hello";
            
            if (hours >= 5 && hours < 12) {
                greeting = "Good Morning!";
            } else if (hours >= 12 && hours < 18) {
                greeting = "Good Afternoon!";
            } else {
                greeting = "Good Evening!";
            }
            
            document.getElementById('greeting').textContent = greeting;
        }
        
        // Set initial greeting
        setGreeting();
        
        // Dark mode toggle
        const themeToggle = document.querySelector('.theme-toggle');
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');
        
        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
        
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            
            if (isDark) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
                localStorage.setItem('theme', 'dark');
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });