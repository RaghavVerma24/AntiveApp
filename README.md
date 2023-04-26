Student Productivity App
========================

Technologies
--------
[![React](https://img.shields.io/badge/Built%20with-React-blue.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Built%20with-Firebase-orange.svg)](https://firebase.google.com/)

A student productivity app built with React and Firebase that includes features such as chat, budgeting tool, agenda, and file storage. This app aims to help students stay organized and productive by providing a centralized platform for managing their tasks, expenses, files, and communication.

Features
--------

-   **Chat**: The app includes a real-time chat feature that allows students to communicate with their peers, create groups, and share important information or collaborate on projects.
-   **Budgeting Tool**: The app provides a budgeting tool that allows students to track their expenses, set budgets, and monitor their spending habits. This helps students manage their finances effectively and develop healthy spending habits.
-   **Agenda**: The app includes a calendar-based agenda feature that allows students to keep track of their tasks, assignments, exams, and other important events. Students can set reminders, create to-do lists, and view their schedule in a user-friendly calendar interface.
-   **File Storage**: The app provides a file storage feature that allows students to upload, organize, and share their files. Students can store important documents, lecture notes, and other study materials in a secure and organized manner.

Installation
------------

To start the project or clone it, follow the steps below:

1.  Clone the repository to your local machine using the following command:

    ```
    git clone https://github.com/RaghavVerma24/AntiveApp.git
    ```

2.  Change to the project directory:

    ```
    cd src
    ```
    
3.  Install the dependencies using npm or yarn:

    ```
    npm install
    ```

1.  Create a Firebase project and obtain the Firebase configuration details (apiKey, authDomain, projectId, etc.).
2.  Create a `.env` file in the root directory of the project and add the Firebase configuration details as environment variables in the following format:

    ```
    REACT_APP_API_KEY=your_firebase_api_key
    REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_PROJECT_ID=your_firebase_project_id
    REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_APP_ID=your_firebase_app_id
    ```

1.  Start the development server:

    ```
    npm start
    ```

1.  Open your web browser and navigate to `http://localhost:3000` to access the app.

Technologies Used
-----------------

-   React: A popular JavaScript library for building user interfaces.
-   Firebase: A cloud-based platform for building web and mobile apps that provides authentication, real-time database, storage, and other backend services.

Contributing
------------

If you would like to contribute to the project, feel free to submit a pull request. Please ensure that your changes are in line with the project's coding standards and practices.

License
-------

This project is open-source and available under the [MIT License](https://chat.openai.com/LICENSE).
