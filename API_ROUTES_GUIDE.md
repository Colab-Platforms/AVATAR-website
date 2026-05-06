# API Routes Implementation Guide

## Directory Structure

```
app/api/
├── auth/
│   ├── [...nextauth]/route.ts
│   ├── register/route.ts
│   ├── login/route.ts
│   └── me/route.ts
├── courses/
│   ├── route.ts (GET, POST)
│   ├── [id]/
│   │   ├── route.ts (GET, PUT, DELETE)
│   │   ├── reviews/route.ts
│   │   └── analytics/route.ts
│   └── categories/route.ts
├── enrollments/
│   ├── route.ts (GET, POST)
│   └── [id]/
│       ├── route.ts (GET)
│       └── progress/route.ts
├── payments/
│   ├── route.ts (GET)
│   ├── create-order/route.ts
│   ├── verify/route.ts
│   ├── webhook/route.ts
│   └── refund/route.ts
├── quizzes/
│   ├── route.ts (GET)
│   ├── [id]/
│   │   ├── route.ts (GET)
│   │   ├── submit/route.ts
│   │   └── results/route.ts
├── certificates/
│   ├── [id]/
│   │   ├── route.ts (GET)
│   │   ├── download/route.ts
│   │   └── verify/route.ts
├── reviews/
│   ├── route.ts (POST)
│   └── [id]/
│       ├── route.ts (PUT, DELETE)
├── admin/
│   ├── dashboard/route.ts
│   ├── analytics/route.ts
│   ├── users/route.ts
│   └── enrollments/route.ts
└── upload/route.ts
```

---

## Authentication Routes

### POST `/api/auth/register`
Register a new user

**Request:**
```json
{
  "email": "student@example.com",
  "password": "securePassword123",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "user_123",
    "email": "student@example.com",
    "name": "John Doe",
    "role": "STUDENT"
  }
}
```

### POST `/api/auth/login`
Login user

**Request:**
```json
{
  "email": "student@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_123",
    "email": "student@example.com",
    "role": "STUDENT"
  }
}
```

### GET `/api/auth/me`
Get current user (requires authentication)

**Response:**
```json
{
  "id": "user_123",
  "email": "student@example.com",
  "name": "John Doe",
  "role": "STUDENT",
  "image": "url_to_image"
}
```

---

## Course Routes

### GET `/api/courses`
Get all courses (public, paginated)

**Query Parameters:**
- `page`: number (default: 1)
- `limit`: number (default: 10)
- `category`: string (optional)
- `search`: string (optional)
- `level`: string (optional)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "course_123",
      "title": "React Basics",
      "slug": "react-basics",
      "description": "Learn React from scratch",
      "category": "Web Development",
      "level": "BEGINNER",
      "price": 49.99,
      "image": "url_to_image",
      "instructor": "John Doe",
      "duration": 20,
      "enrollmentCount": 150,
      "averageRating": 4.5
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50
  }
}
```

### GET `/api/courses/:id`
Get course details

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "course_123",
    "title": "React Basics",
    "description": "Learn React from scratch",
    "longDescription": "Comprehensive guide...",
    "category": "Web Development",
    "level": "BEGINNER",
    "price": 49.99,
    "instructor": "John Doe",
    "instructorImage": "url",
    "duration": 20,
    "modules": [
      {
        "id": "module_1",
        "title": "Getting Started",
        "lectures": [
          {
            "id": "lecture_1",
            "title": "Introduction",
            "duration": 15
          }
        ]
      }
    ],
    "reviews": [
      {
        "id": "review_1",
        "rating": 5,
        "comment": "Great course!",
        "studentName": "Jane Doe"
      }
    ],
    "averageRating": 4.5,
    "totalReviews": 25
  }
}
```

### POST `/api/courses` (Admin only)
Create new course

**Request:**
```json
{
  "title": "React Basics",
  "slug": "react-basics",
  "description": "Learn React",
  "category": "Web Development",
  "level": "BEGINNER",
  "price": 49.99,
  "instructor": "John Doe"
}
```

### PUT `/api/courses/:id` (Admin only)
Update course

### DELETE `/api/courses/:id` (Admin only)
Delete course

### GET `/api/courses/categories`
Get all course categories

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "cat_1",
      "name": "Web Development",
      "slug": "web-development",
      "courseCount": 25
    }
  ]
}
```

---

## Enrollment Routes

### POST `/api/enrollments`
Enroll in a course (initiate purchase)

**Request:**
```json
{
  "courseId": "course_123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "enrollmentId": "enrollment_123",
    "courseId": "course_123",
    "status": "PENDING",
    "message": "Proceed to payment"
  }
}
```

### GET `/api/enrollments`
Get student's enrolled courses (requires auth)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "enrollment_123",
      "course": {
        "id": "course_123",
        "title": "React Basics",
        "image": "url"
      },
      "status": "ACTIVE",
      "enrolledAt": "2024-01-15T10:00:00Z",
      "progress": 45,
      "completedLectures": 9,
      "totalLectures": 20
    }
  ]
}
```

### GET `/api/enrollments/:id/progress`
Get enrollment progress

**Response:**
```json
{
  "success": true,
  "data": {
    "enrollmentId": "enrollment_123",
    "courseProgress": 45,
    "completedLectures": 9,
    "totalLectures": 20,
    "quizzesPassed": 2,
    "certificateEarned": false,
    "lectureProgress": [
      {
        "lectureId": "lecture_1",
        "title": "Introduction",
        "completed": true,
        "watchedDuration": 900
      }
    ]
  }
}
```

### PUT `/api/enrollments/:id/progress`
Update lecture completion

**Request:**
```json
{
  "lectureId": "lecture_1",
  "watchedDuration": 900,
  "isCompleted": true
}
```

---

## Payment Routes

### POST `/api/payments/create-order`
Create payment order

**Request:**
```json
{
  "enrollmentId": "enrollment_123",
  "courseId": "course_123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "orderId": "order_123",
    "amount": 4999,
    "currency": "USD",
    "clientSecret": "stripe_client_secret"
  }
}
```

### POST `/api/payments/verify`
Verify payment

**Request:**
```json
{
  "orderId": "order_123",
  "paymentIntentId": "pi_123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment verified successfully",
  "enrollment": {
    "id": "enrollment_123",
    "status": "ACTIVE"
  }
}
```

### POST `/api/payments/webhook`
Stripe webhook handler

### GET `/api/payments/history`
Get payment history (requires auth)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "payment_123",
      "course": "React Basics",
      "amount": 49.99,
      "status": "COMPLETED",
      "transactionId": "txn_123",
      "date": "2024-01-15T10:00:00Z"
    }
  ]
}
```

### POST `/api/payments/refund` (Admin only)
Process refund

**Request:**
```json
{
  "paymentId": "payment_123",
  "reason": "Student requested refund"
}
```

---

## Quiz Routes

### GET `/api/quizzes/:id`
Get quiz questions

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "quiz_123",
    "title": "Module 1 Quiz",
    "timeLimit": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "q_1",
        "question": "What is React?",
        "type": "MULTIPLE_CHOICE",
        "options": ["A library", "A framework", "A language"],
        "order": 1
      }
    ]
  }
}
```

### POST `/api/quizzes/:id/submit`
Submit quiz answers

**Request:**
```json
{
  "answers": [
    {
      "questionId": "q_1",
      "answer": "A library"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "score": 85,
    "totalQuestions": 10,
    "passed": true,
    "results": [
      {
        "questionId": "q_1",
        "userAnswer": "A library",
        "correctAnswer": "A library",
        "isCorrect": true
      }
    ]
  }
}
```

### GET `/api/quizzes/:id/results`
Get quiz results

---

## Certificate Routes

### GET `/api/certificates/:id`
Get certificate details

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "cert_123",
    "certificateNumber": "CERT-2024-001",
    "studentName": "John Doe",
    "courseName": "React Basics",
    "issuedAt": "2024-01-15T10:00:00Z",
    "pdfUrl": "url_to_pdf"
  }
}
```

### POST `/api/certificates/:id/download`
Download certificate as PDF

### GET `/api/certificates/:id/verify`
Verify certificate (public)

---

## Review Routes

### POST `/api/courses/:id/reviews`
Create review (requires auth, must be enrolled)

**Request:**
```json
{
  "rating": 5,
  "title": "Excellent course!",
  "comment": "Very well structured and easy to follow"
}
```

### GET `/api/courses/:id/reviews`
Get course reviews

**Query Parameters:**
- `page`: number
- `limit`: number
- `sort`: "recent" | "helpful" | "rating"

### PUT `/api/reviews/:id`
Update own review

### DELETE `/api/reviews/:id`
Delete own review

---

## Admin Routes

### GET `/api/admin/dashboard`
Admin dashboard metrics

**Response:**
```json
{
  "success": true,
  "data": {
    "totalRevenue": 15000,
    "totalStudents": 250,
    "totalCourses": 12,
    "totalEnrollments": 450,
    "recentEnrollments": [],
    "topCourses": [],
    "revenueChart": []
  }
}
```

### GET `/api/admin/analytics`
Detailed analytics

### GET `/api/admin/users`
List all users (admin only)

### GET `/api/admin/enrollments`
List all enrollments (admin only)

---

## Upload Route

### POST `/api/upload`
Upload file (video, PDF, image)

**Request:** (multipart/form-data)
- `file`: File
- `type`: "video" | "pdf" | "image"

**Response:**
```json
{
  "success": true,
  "data": {
    "url": "https://s3.amazonaws.com/...",
    "filename": "lecture_1.mp4",
    "size": 1024000
  }
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Invalid request parameters",
  "details": "Email is required"
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": "Unauthorized",
  "message": "Please login to continue"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "error": "Forbidden",
  "message": "You don't have permission to access this resource"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Not found",
  "message": "Course not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal server error",
  "message": "Something went wrong"
}
```

---

## Authentication Headers

All protected routes require:
```
Authorization: Bearer <jwt_token>
```

---

## Rate Limiting

Recommended rate limits:
- Public endpoints: 100 requests/minute
- Authenticated endpoints: 1000 requests/minute
- Admin endpoints: 500 requests/minute
- Payment endpoints: 50 requests/minute

---

## Pagination

Standard pagination format:
```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}
```

---

## Status Codes

- 200: Success
- 201: Created
- 204: No Content
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 409: Conflict
- 422: Unprocessable Entity
- 500: Internal Server Error
