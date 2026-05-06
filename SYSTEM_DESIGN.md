# Online Learning Platform - System Design

## 1. Architecture Overview

### Tech Stack
- **Frontend**: Next.js 14+ (React, TypeScript)
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payment Gateway**: Stripe/Razorpay
- **File Storage**: AWS S3 / Cloudinary
- **Real-time**: Socket.io (optional for live classes)
- **Caching**: Redis (optional)

### High-Level Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                     Client (Next.js)                        │
│  (Student Portal, Admin Dashboard, Course Player)           │
└────────────────────┬────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│              Next.js API Routes (Backend)                   │
│  (Auth, Courses, Payments, Users, Analytics)                │
└────────────────────┬────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│         Prisma ORM + PostgreSQL Database                    │
│  (Users, Courses, Enrollments, Payments, Reviews)           │
└─────────────────────────────────────────────────────────────┘
```

## 2. Database Schema (Prisma Models)

### Core Models
1. **User** - Students and Admins
2. **Course** - Course information
3. **Module** - Course modules/sections
4. **Lecture** - Individual lectures
5. **Video** - Video content
6. **Quiz** - MCQ tests
7. **QuizQuestion** - Quiz questions
8. **Enrollment** - Student course enrollment
9. **Payment** - Payment transactions
10. **Certificate** - Course completion certificates
11. **Review** - Course reviews and ratings
12. **Progress** - Student learning progress
13. **Assignment** - Course assignments

## 3. Feature Breakdown

### Student Features
- Authentication (Sign up, Login, OAuth)
- Browse courses by category
- Search and filter courses
- View course details and reviews
- Purchase courses (Payment integration)
- Access course content (Videos, PDFs, Lectures)
- Take quizzes and MCQ tests
- Track learning progress
- Download certificates on completion
- Leave reviews and ratings
- Profile management
- View purchase history
- Download course materials

### Admin Features
- Create and manage courses
- Add course structure (modules, lectures)
- Upload videos and PDFs
- Create quizzes and assignments
- Set course pricing
- Publish/unpublish courses
- View analytics dashboard
- Track student enrollments
- Monitor payments and revenue
- View student progress
- Manage reviews and ratings
- Generate reports

## 4. User Roles & Permissions

```
STUDENT
├── View courses
├── Purchase courses
├── Access enrolled courses
├── Take quizzes
├── Submit assignments
├── Leave reviews
└── Download certificates

ADMIN
├── Create courses
├── Manage course content
├── Set pricing
├── View analytics
├── Manage users
├── Process refunds
└── Generate reports

SUPER_ADMIN
└── All admin permissions + User management
```

## 5. API Endpoints Structure

### Authentication
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/refresh-token
- GET /api/auth/me

### Courses
- GET /api/courses (public, paginated)
- GET /api/courses/:id (public)
- GET /api/courses/category/:category
- POST /api/courses (admin only)
- PUT /api/courses/:id (admin only)
- DELETE /api/courses/:id (admin only)
- GET /api/courses/:id/reviews

### Enrollments
- POST /api/enrollments (purchase course)
- GET /api/enrollments (student's courses)
- GET /api/enrollments/:id/progress
- PUT /api/enrollments/:id/progress

### Payments
- POST /api/payments/create-order
- POST /api/payments/verify
- GET /api/payments/history
- POST /api/payments/refund (admin)

### Quizzes
- GET /api/courses/:id/quizzes
- POST /api/quizzes/:id/submit
- GET /api/quizzes/:id/results

### Reviews
- POST /api/courses/:id/reviews
- GET /api/courses/:id/reviews
- PUT /api/reviews/:id (own review)
- DELETE /api/reviews/:id (own review)

### Admin Analytics
- GET /api/admin/dashboard
- GET /api/admin/enrollments
- GET /api/admin/revenue
- GET /api/admin/students
- GET /api/admin/courses/:id/analytics

### Certificates
- GET /api/certificates/:id
- POST /api/certificates/:id/download

## 6. Database Relationships

```
User (1) ──────────────────── (Many) Enrollment
User (1) ──────────────────── (Many) Review
User (1) ──────────────────── (Many) Payment
User (1) ──────────────────── (Many) Certificate

Course (1) ──────────────────── (Many) Module
Course (1) ──────────────────── (Many) Enrollment
Course (1) ──────────────────── (Many) Review
Course (1) ──────────────────── (Many) Quiz

Module (1) ──────────────────── (Many) Lecture
Lecture (1) ──────────────────── (Many) Video
Lecture (1) ──────────────────── (Many) Assignment

Quiz (1) ──────────────────── (Many) QuizQuestion
Quiz (1) ──────────────────── (Many) QuizResult

Enrollment (1) ──────────────────── (Many) Progress
Enrollment (1) ──────────────────── (Many) Certificate
Enrollment (1) ──────────────────── (Many) QuizResult

Payment (1) ──────────────────── (1) Enrollment
```

## 7. Key Features Implementation

### Authentication Flow
1. User registers with email/password or OAuth
2. Email verification (optional)
3. JWT token generation
4. Session management with NextAuth.js

### Course Purchase Flow
1. Student views course details
2. Clicks "Enroll" or "Purchase"
3. Redirected to payment gateway
4. Payment processing (Stripe/Razorpay)
5. Webhook confirmation
6. Enrollment record created
7. Access granted to course content

### Learning Progress Tracking
1. Track lecture completion
2. Quiz scores and attempts
3. Assignment submissions
4. Overall course progress percentage
5. Time spent on course

### Certification
1. Automatic generation on course completion
2. Unique certificate ID
3. Student name, course name, completion date
4. Digital download and sharing
5. Verification link

### Review & Rating System
1. Students can rate (1-5 stars) after course completion
2. Written reviews
3. Helpful votes
4. Admin moderation (optional)
5. Display average rating on course page

## 8. Security Considerations

- Password hashing (bcrypt)
- JWT token expiration
- CORS configuration
- Rate limiting on API endpoints
- Input validation and sanitization
- SQL injection prevention (Prisma)
- XSS protection
- CSRF tokens
- Secure payment processing
- Environment variables for secrets
- HTTPS only
- Role-based access control (RBAC)

## 9. Performance Optimization

- Database indexing on frequently queried fields
- Pagination for large datasets
- Caching with Redis
- CDN for video delivery
- Image optimization
- Code splitting in Next.js
- API response compression
- Database query optimization

## 10. Scalability Considerations

- Horizontal scaling with load balancer
- Database replication
- Microservices for video processing
- Message queue for async tasks (Bull/RabbitMQ)
- Separate storage for media files
- CDN for global content delivery

## 11. Deployment

- Vercel for frontend/backend
- AWS RDS for PostgreSQL
- AWS S3 for file storage
- GitHub Actions for CI/CD
- Environment-based configuration

## 12. Development Phases

### Phase 1: MVP (2-3 weeks)
- User authentication
- Course listing and details
- Basic enrollment
- Simple payment integration
- Course access

### Phase 2: Core Features (2-3 weeks)
- Video player
- Quiz system
- Progress tracking
- Reviews and ratings
- Admin dashboard basics

### Phase 3: Advanced Features (2-3 weeks)
- Certificates
- Advanced analytics
- Assignment system
- Email notifications
- Refund management

### Phase 4: Optimization & Polish (1-2 weeks)
- Performance optimization
- Security hardening
- Testing
- Documentation
- Deployment
