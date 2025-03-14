# My React App

This project is a simple React application with a backend server that allows users to save and view data using MongoDB.

## Project Structure

```
my-react-app
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── app.js
│   └── package.json
├── frontend
│   ├── public
│   ├── src
│   └── package.json
├── .gitignore
└── README.md
```

## Technologies Used

- React
- Express
- MongoDB
- Mongoose

## Setup Instructions

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB connection in `app.js`.

4. Start the backend server:
   ```
   node app.js
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

## Usage

- Use the input field to enter data and click the "Save" button to store it in the database.
- Click the "View" button to retrieve and display the saved data.

## License

This project is licensed under the MIT License.