document.addEventListener('DOMContentLoaded', () => {
    // Mark document as ready for animations and transitions immediately
    document.body.classList.add('ready');
    
    // DOM elements - cache references to avoid repeated queries
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const cards = document.querySelectorAll('.card');
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    const clockElement = document.getElementById('clock');
    
    // Info modal elements
    const infoButton = document.getElementById('info-button');
    const infoModal = document.getElementById('info-modal');
    const infoModalOverlay = document.getElementById('info-modal-overlay');
    const closeModalButton = document.getElementById('close-modal');
    
    // State variables
    let currentCategory = 'all';
    let searchTerm = '';
    let searchTimeout;
    let clockUpdateInterval;
    
    // Card data cache for faster filtering
    const cardData = Array.from(cards).map(card => {
        return {
            element: card,
            text: card.textContent.toLowerCase(),
            searchTerms: (card.dataset.search || '').toLowerCase(),
            category: card.dataset.category || '',
            visible: true
        };
    });
    
    // Initialize the app
    initializeApp();
    
    /**
     * Initialize all app features with performance optimizations
     */
    function initializeApp() {
        // Run non-UI critical tasks immediately
        initializeTheme();
        updateClock();
        
        // Use requestAnimationFrame for smoother UI updates and better frame rendering
        requestAnimationFrame(() => {
            // Once the frame is ready, set up the UI
            setupEventListeners();
            // Remove animation class to avoid unnecessary transitions on page load
            document.body.classList.add('ready');
            
            // Delay heavy operations slightly to prioritize initial render
            setTimeout(() => {
                filterCards();
                checkModalState();
            }, 100);
        });
        
        // Set clock interval (update every minute instead of every second for better performance)
        clockUpdateInterval = setInterval(updateClock, 60000);
        
        // Add event listener for page visibility changes to save resources when tab is inactive
        document.addEventListener('visibilitychange', handleVisibilityChange);
    }
    
    /**
     * Handle page visibility changes to save resources
     */
    function handleVisibilityChange() {
        if (document.hidden) {
            // Page is hidden, clear interval to save resources
            clearInterval(clockUpdateInterval);
        } else {
            // Page is visible again, update clock and restart interval
            updateClock();
            clockUpdateInterval = setInterval(updateClock, 60000);
        }
    }
    
    /**
     * Initialize theme from localStorage
     */
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }
    
    /**
     * Set up all event listeners
     */
    function setupEventListeners() {
        // Theme toggle
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
        
        // Category filtering
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                currentCategory = button.dataset.category;
                filterCards(searchInput.value);
            });
        });
        
        // Search functionality
        searchInput.addEventListener('input', debounce((e) => {
            filterCards(e.target.value);
        }, 300));
        
        // Prevent form submission
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
        
       // Info button and modal functionality
infoButton.addEventListener('click', () => {
    gtag('event', 'info_button_click', {
        event_category: 'interaction',
        event_label: 'Tool Info Floating Button',
        value: 1
    });
    openModal();
});
closeModalButton.addEventListener('click', closeModal);
infoModalOverlay.addEventListener('click', (e) => {
    if (e.target === infoModalOverlay) {
        closeModal();
    }
});

        
        // Close modal with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !infoModalOverlay.classList.contains('hidden')) {
                closeModal();
            }
        });
    }
    
    /**
     * Set theme and save preference
     * @param {string} theme - Theme name (light/dark)
     */
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
    
    /**
     * Update clock with current time
     */
    function updateClock() {
        const now = new Date();
        const options = {
            timeZone: 'Africa/Cairo',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            month: 'short',
            day: 'numeric'
        };
        clockElement.textContent = now.toLocaleString('en-US', options) + ' CLT';
    }
    
    /**
     * Optimized filtering function for better performance
     * @param {string} query - Search term
     */
    function filterCards(query = '') {
        // Store the search term
        searchTerm = query.toLowerCase().trim();
        
        // Use requestAnimationFrame for smoother UI updates
        requestAnimationFrame(() => {
            let visibleCount = 0;
            
            // Apply filter logic to each card using cached data
            cardData.forEach(card => {
                const matchesSearch = searchTerm === '' || 
                                     card.text.includes(searchTerm) ||
                                     card.searchTerms.includes(searchTerm);
                const matchesCategory = currentCategory === 'all' || 
                                       card.category.split(' ').includes(currentCategory);
                
                const shouldBeVisible = matchesSearch && matchesCategory;
                
                // Only manipulate DOM if visibility changed (reduces reflows)
                if (card.visible !== shouldBeVisible) {
                    if (shouldBeVisible) {
                        card.element.classList.remove('hidden');
                        visibleCount++;
                    } else {
                        card.element.classList.add('hidden');
                    }
                    
                    card.visible = shouldBeVisible;
                } else if (shouldBeVisible) {
                    visibleCount++;
                }
            });
        });
    }
    
    /**
     * Debounce function to limit execution frequency
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in ms
     * @returns {Function} - Debounced function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    /**
     * Check if modal has been shown before
     */
    function checkModalState() {
        const hasSeenModal = localStorage.getItem('hasSeenInfoModal');
        
        // If first visit or modal hasn't been shown, show it automatically
        if (!hasSeenModal) {
            // Wait a bit before showing the modal on first visit
            setTimeout(() => {
                openModal();
            }, 1000);
        }
    }
    
    /**
     * Open info modal with animation
     */
    function openModal() {
        // Show the overlay first
        infoModalOverlay.classList.remove('hidden');
        infoModalOverlay.offsetHeight; // Force reflow
        infoModalOverlay.classList.add('show');
        
        // Then animate in the modal
        setTimeout(() => {
            infoModal.classList.add('show');
        }, 50);
        
        // Record that user has seen the modal
        localStorage.setItem('hasSeenInfoModal', 'true');
    }
    
    /**
     * Close info modal with animation
     */
    function closeModal() {
        // Animate out the modal first
        infoModal.classList.remove('show');
        
        // Then hide the overlay
        setTimeout(() => {
            infoModalOverlay.classList.remove('show');
            
            // After fade out is complete, hide the elements
            setTimeout(() => {
                infoModalOverlay.classList.add('hidden');
            }, 300);
        }, 200);
    }
});
