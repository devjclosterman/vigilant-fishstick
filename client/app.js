document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const mealList = document.getElementById('mealList');

    generateButton.addEventListener('click', function() {
        const vegetarianCheckbox = document.getElementById('vegetarianCheckbox');
        const caloriesInput = document.getElementById('caloriesInput').value;

        const dietaryPreferences = [];
        if (vegetarianCheckbox.checked) {
            dietaryPreferences.push('vegetarian');
        }
        // Add more dietary preferences if needed

        const preferences = {
            dietaryPreferences: dietaryPreferences,
            nutritionalRequirements: {
                calories: caloriesInput
                // Add more nutritional requirements here
            }
        };

        fetch('/generate-meal-plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(preferences),
        })
        .then(response => response.json())
        .then(data => {
            displayMealPlan(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function displayMealPlan(mealPlan) {
        mealList.innerHTML = ''; // Clear previous meal plan

        for (const [meal, dish] of Object.entries(mealPlan)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${meal}: ${dish}`;
            mealList.appendChild(listItem);
        }
    }
});
