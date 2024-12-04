# Dynamic Form Builder [![Live Demo](https://img.shields.io/badge/Live%20Demo-ReactFormDynamic-4c9c6c)](https://reactformdynamic.netlify.app/)

A dynamic form builder that allows users to create and submit forms based on selected form types. The form types include "User Information," "Address Information," and "Payment Information." This app dynamically generates form fields based on mock API data and displays progress as the user completes the required fields.

## Features

- **Dynamic Form Fields:** The form fields are generated based on the selected form type (e.g., User Information, Address Information, or Payment Information).
- **Progress Bar:** A progress bar is displayed to show the percentage of required fields filled out.
- **Validation:** Each field is validated based on its type (e.g., text, number, dropdown, etc.), with appropriate error messages displayed when fields are incorrect or empty.
- **Conditional Input Handling:** Special handling for fields such as `cardNumber` and `cvv` to ensure that input follows the correct format.
- **Success Message:** Upon successful form submission, a success message is shown to the user.

## Technologies Used

- **React:** Used to build the user interface and handle form logic.
- **React Bootstrap:** For styling and UI components like the progress bar and alerts.
- **CSS:** Custom styles for a clean and modern design, using Google Fonts (Roboto) and gradient backgrounds.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/DynamicForm.git
2. Navigate to the project directory:
    ```bash
   cd DynamicForm
3. Install the necessary dependencies:
   ```bash
   npm install
4. Start the application:
   ```bash
   npm start
5. Open your browser and go to http://localhost:3000 to view the app.      

## App Overview

The application contains the following key components:

- **App:** The main component that holds the state of the selected form type and renders the appropriate form.
- **DynamicForm:** A form component that dynamically generates form fields based on the selected form type. Handles field validation and updates progress.
- **ProgressBar:** Displays the current progress of the form as a percentage.
- **Mock API Data:** Sample data to simulate API calls and define the structure of each form type (User Information, Address Information, Payment Information).

## Form Types

### User Information
- First Name
- Last Name
- Age

### Address Information
- Street
- City
- State
- Zip Code

### Payment Information
- Card Number
- Expiry Date
- CVV
- Cardholder Name

## Validation Rules

- Required fields must be filled out before submission.
- The `Age` field must be a number.
- `Card Number` and `CVV` fields have special validation for numeric input.
- Text fields must be at least 2 characters long.

## Styling

- **Fonts:** Google Fonts (Roboto) for modern typography.
- **Background:** Linear gradient background with a soft transition for a clean and minimalistic look.
- **Buttons:** Interactive buttons with gradient hover effects.
- **Form Fields:** Styled form controls with subtle shadow and rounded borders for a pleasant user experience.

## Contributing

Contributions are welcome! Feel free to fork the repository, create a branch, and submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
