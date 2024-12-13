document.addEventListener("DOMContentLoaded", function() {
    const checklistContainer = document.getElementById('checklist');
    const summaryTextArea = document.getElementById('summary');
    const progressBarFill = document.querySelector('.progress-fill');
    const copyButton = document.getElementById('copy-btn');
    const newCallButton = document.getElementById('new-call-btn');

    // Tech support template with main steps and sub-steps
    const techSupportTemplate = [
        { step: 'Opening', subSteps: ['Greeting', 'Verify identity (First & Last Name)', 'Ask about the issue'] },
        { step: 'Verification', subSteps: ['Verify Address', 'Best Call Back Number'] },
        { step: 'Authentication', subSteps: ['STAT/CPNI', 'Authenticate account'] },
        { step: 'Creating/Preserving Connections', subSteps: ['Check internet connection', 'Ensure device is connected'] },
        { step: 'Courtesy & Professionalism', subSteps: ['Maintain polite tone', 'Be empathetic'] },
        { step: 'Relationship Building', subSteps: ['Build rapport', 'Establish customer trust'] },
        { step: 'Ownership', subSteps: ['Take responsibility for the issue', 'Ensure timely follow-up'] },
        { step: 'Tool utilization', subSteps: ['Open troubleshooting tools', 'Run diagnostics'] },
        { step: 'Appointment Management', subSteps: ['Schedule follow-up', 'Confirm appointment details'] },
        { step: 'Credit', subSteps: ['Verify account credits', 'Apply credits if needed'] },
        { step: 'Upselling', subSteps: ['Offer additional services', 'Provide product recommendations'] },
        { step: 'Account Management/Modification', subSteps: ['Update account details', 'Resolve account issues'] },
        { step: 'Escalation Policy Adherence', subSteps: ['Follow escalation procedure', 'Transfer to senior agent if needed'] },
        { step: 'Lost Call', subSteps: ['Attempt to reconnect', 'Log incident details'] },
        { step: 'Account Documentation', subSteps: ['Log all actions taken', 'Record troubleshooting steps'] },
        { step: 'Closing', subSteps: ['Confirm resolution', 'Ask if the customer needs further help'] }
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
                            <input type="checkbox" id="sub-step-${index}-${subIndex}" class="sub-checkbox">
                            <label for="sub-step-${index}-${subIndex}">${subStep}</label>
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
        const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
        let summary = '';
        checkedItems.forEach(item => {
            const label = item.nextElementSibling.textContent;
            summary += `${label}\n`;
        });
        summaryTextArea.value = summary;
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
        alert('Documentation copied to clipboard!');
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
