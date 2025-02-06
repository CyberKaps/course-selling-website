# 📚 Course Selling Website - Backend  

This is the backend of a **Course Selling Website**, built using **Node.js, Express.js, and MongoDB**. It provides **RESTful APIs** for user authentication, course management, and purchases.  

---

## 🚀 Features  
✅ **User Authentication** (JWT-based login/signup)  
✅ **Role-based Access** (User & Admin)  
✅ **CRUD Operations** for Courses  
✅ **Secure API Endpoints** with JWT Middleware  
✅ **MongoDB Database** Integration  

---

## 🛠 Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT (JSON Web Token)  
- **Middleware:** Express, bcrypt for password hashing  

---

## 📂 Project Structure  
```
/course-selling-backend
│── /routes          # API Routes (Users, Admin, Courses)
│── /models          # Mongoose Models (User, Course)
│── /controllers     # Business Logic & Handlers
│── /middleware      # Authentication & Authorization
│── server.js        # Main server file
│── package.json     # Dependencies & Scripts
│── .env.example     # Environment Variables
│── README.md        # Documentation
```

---

## 🛠 Setup & Installation  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/CyberKaps/course-selling-website.git
cd course-selling-website
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Set Up Environment Variables  
Create a **.env** file in the root directory and add:  
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

### 4️⃣ Run the Server  
```sh
npm start
```
The server will start at **http://localhost:3000**  

---

## 🔗 API Endpoints  

| Method | Endpoint              | Description               | Auth Required |
|--------|-----------------------|---------------------------|--------------|
| POST   | `/api/auth/register`  | Register a new user       | ❌ |
| POST   | `/api/auth/login`     | User login (JWT)          | ❌ |
| GET    | `/api/courses`        | Fetch all courses         | ✅ |
| POST   | `/api/courses/add`    | Add new course (Admin)    | ✅ |
| POST   | `/api/purchase`       | Purchase a course         | ✅ |

---

## 🛡 Security & Best Practices  
✔ **Passwords are hashed** using bcrypt.  
✔ **JWT authentication** for secure access.  
✔ **Role-based access control** (Admin vs User).  

---

