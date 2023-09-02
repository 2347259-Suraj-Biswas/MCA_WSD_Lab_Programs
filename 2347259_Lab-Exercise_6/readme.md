You've been tasked with creating a registration form for a website. The form has the following fields:

Full Name: Accepts alphabetic characters and spaces only, with a minimum length of 3 characters.
Email Address: Should be a valid email format (e.g., "user@example.com").
Password: Must be at least 8 characters long and contain a mix of letters and numbers.
Confirm Password: Should match the password entered.
Date of Birth: Requires a valid date in the format "YYYY-MM-DD" and the user must be at least 18 years old.
Your goal is to implement form validation using JavaScript and provide a user-friendly experience by handling events appropriately.

Tasks:

a. Write the HTML structure of the registration form, including appropriate input fields, labels, and a submit button.

b. Implement JavaScript code to handle the following tasks:
Form Validation: On form submission, validate each field based on the requirements mentioned above. Display an error message next to each field that doesn't meet the criteria. If the form is invalid, prevent it from being submitted.
Real-time Validation: As the user types in the fields, implement real-time validation for each input. For instance, show a green checkmark if the input is valid and a red "x" if it's invalid. Update the status as the user types.
Password Match: Check that the "Password" and "Confirm Password" fields match in real-time. Display an appropriate message if they don't match.
Date Calculation: Calculate the user's age based on the entered date of birth and disable the submit button if the user is not yet 18 years old.
c. Attach event listeners to the form elements to trigger the validation and event handling functions appropriately.

d. Provide CSS styling to visually represent the validation status and error messages. For instance, you can use a red border for invalid fields and a green border for valid fields.

Feel free to use plain JavaScript or any libraries/frameworks of your choice to accomplish these tasks. Explain your code and the rationale behind your approach.
