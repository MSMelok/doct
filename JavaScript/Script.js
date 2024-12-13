document.addEventListener("DOMContentLoaded", function() {
    // Add code for welcome page
    const welcomeOverlay = document.createElement('div');
    welcomeOverlay.id = 'welcome-overlay';
    welcomeOverlay.classList.add('welcome-overlay');
    welcomeOverlay.innerHTML = `
        <div class="welcome-content">
            <h1 id="welcodeHeader">Welcome to My Humble Tool!</h1>
            <p>I'm glad to have you here.❤</p>
            <br>
            <h1>Loading...</h1>
        </div>
    `;
    document.body.appendChild(welcomeOverlay);

    // Function to hide the welcome overlay after 5 seconds
    setTimeout(function() {
        welcomeOverlay.classList.add('fade-out'); // Add the fade-out class for smooth transition
        setTimeout(function() {
            welcomeOverlay.style.display = 'none'; // Hide the welcome overlay after fade-out
        }, 1000); // Wait for fade-out transition to finish
    }, 3000); // Show for 5 seconds

    // Existing code continues here

    const checklistContainer = document.getElementById('checklist');
    const summaryTextArea = document.getElementById('summary');
    const progressBarFill = document.querySelector('.progress-fill');
    const copyButton = document.getElementById('copy-btn');
    const newCallButton = document.getElementById('new-call-btn');

    // Tech support template with main steps and sub-steps
    const techSupportTemplate = [
        { step: 'Opening', subSteps: [
            { label: 'Greeting', summary: '' }, 
            { label: 'Verify identity (First & Last Name)', summary: 'Customer identity was verified' }, 
            { label: 'Ask about the issue', summary: 'The customer explained the issue' }
        ]},
        { step: 'Verification', subSteps: [
            { label: 'Verify Address', summary: 'Customer address was verified' },
            { label: 'Best Call Back Number', summary: 'Best call back number was confirmed' }
        ]},
        { step: 'Authentication', subSteps: [
            { label: 'STAT/CPNI', summary: 'STAT/CPNI authentication was done' }, 
            { label: 'Authenticate account', summary: 'Account authentication was successful' }
        ]},
        { step: 'Creating/Preserving Connections', subSteps: [
            { label: 'Check internet connection', summary: 'Internet connection was checked' }, 
            { label: 'Ensure device is connected', summary: 'Device connection was confirmed' }
        ]},
        // More steps here as needed...
    ];

    // Function to populate the checklist
    function populateChecklist() {
        checklistContainer.innerHTML = ''; // Clear the existing checklist
        techSupportTemplate.forEach((item, index) => {
            const li = document.createElement('li');
            li.classList.add('main-item');
            li.innerHTML = `
                <input type="checkbox" id="step-${index}" class="main-checkbox"> 
                <label for="step-${index}">${item.step}</label>
                <ul class="sub-checklist" id="sub-${index}" style="display: none;">
                    ${item.subSteps.map((subStep, subIndex) => `
                        <li>
                            <input type="checkbox" id="sub-step-${index}-${subIndex}" class="sub-checkbox" data-summary="${subStep.summary}">
                            <label for="sub-step-${index}-${subIndex}">${subStep.label}</label>
                        </li>
                    `).join('')}
                </ul>
            `;
            checklistContainer.appendChild(li);
        });

        // Add event listeners for main checkboxes
        const mainCheckboxes = document.querySelectorAll('.main-checkbox');
        mainCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('click', toggleSubChecklist);
        });
    }

    // Toggle the visibility of sub-checklist
    function toggleSubChecklist(event) {
        const subChecklist = event.target.parentElement.querySelector('.sub-checklist');
        if (event.target.checked) {
            subChecklist.style.display = 'block'; // Show sub-checklist when main checkbox is checked
        } else {
            subChecklist.style.display = 'none'; // Hide sub-checklist when main checkbox is unchecked
        }
    }

    // Update summary when checkboxes are clicked
    checklistContainer.addEventListener('change', function(event) {
        if (event.target.type === 'checkbox') {
            updateSummary();
        }
    });

    // Update summary text area based on checked items
    function updateSummary() {
        let summary = '';
        
        // Loop through all the sub-checkboxes and check their state
        const subCheckboxes = document.querySelectorAll('.sub-checkbox');
        subCheckboxes.forEach(subCheckbox => {
            const subSummary = subCheckbox.getAttribute('data-summary');
            // Only add non-empty summaries to the summary
            if (subCheckbox.checked && subSummary.trim() !== '') {
                // If summary is not empty, add the value with " - " separator
                if (summary !== '') {
                    summary += ' - ';
                }
                summary += subSummary;
            }
        });

        // Update the summary textarea with the new content
        summaryTextArea.value = summary.trim(); // Remove the last empty space if any
        updateProgressBar();
    }

    // Update progress bar based on checked items
    function updateProgressBar() {
        const totalItems = document.querySelectorAll('input[type="checkbox"]').length;
        const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked').length;
        const percentage = (checkedItems / totalItems) * 100;
        progressBarFill.style.width = `${percentage}%`;
    }

    // Initialize the tool with the tech-support template
    populateChecklist();

    // Copy button functionality
    copyButton.addEventListener('click', function() {
        summaryTextArea.select();
        document.execCommand('copy');
        
        // Show the success message
        const copyMessage = document.getElementById('copy-message');
        copyMessage.classList.add('show');

        // Hide the success message after 3 seconds
        setTimeout(function() {
            copyMessage.classList.remove('show');
        }, 3000);
    });

    // New Call button functionality
    newCallButton.addEventListener('click', function() {
        // Clear the checklist and summary
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
        summaryTextArea.value = '';
        progressBarFill.style.width = '0%';

        // Reset the template to default (tech-support)
        populateChecklist();
    });
});
