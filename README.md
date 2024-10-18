# Profile Manager

## Overview
Profile Manager is a web application designed to manage user profiles efficiently. It allows users to register, log in, reset passwords, and manage their personal information. The application is built using React for the frontend and Node.js with Express for the backend.

## Features
- User registration and authentication
- Password reset functionality
- User profile management
- Responsive design using Bulma CSS framework
- Protected routes for authenticated users

## Technologies Used
- **Frontend:**
  - React
  - React Router
  - Axios
  - Bulma CSS

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - JWT for authentication
  - bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Profile_Manager.git
   cd Profile_Manager
   ```

2. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Create a `.env` file in the backend directory and add your environment variables:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=30d
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend application in a new terminal:
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage
- **Register**: Create a new account by providing your name, email, and password.
- **Login**: Access your account using your email and password.
- **Forgot Password**: Reset your password if you forget it.
- **Profile Management**: Update your personal information and change your password.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Bulma](https://bulma.io/) for the CSS framework
- [React](https://reactjs.org/) for the frontend library
- [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) for the backend framework
- [MongoDB](https://www.mongodb.com/) for the database
