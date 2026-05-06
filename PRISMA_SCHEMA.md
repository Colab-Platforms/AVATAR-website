# Prisma Schema - Complete Database Models

## File: `prisma/schema.prisma`

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================
// USER MODELS
// ============================================

enum UserRole {
  STUDENT
  ADMIN
  SUPER_ADMIN
}

model User {
  id            String     @id @default(cuid())
  email         String     @unique
  name          String?
  password      String?
  image         String?
  bio           String?
  phone         String?
  role          UserRole   @default(STUDENT)
  isVerified    Boolean    @default(false)
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt

  // Relations
  enrollments   Enrollment[]
  payments      Payment[]
  reviews       Review[]
  certificates  Certificate[]
  quizResults   QuizResult[]
  progress      Progress[]
  assignments   AssignmentSubmission[]
  coursesCreated Course[] @relation("CreatedBy")

  @@index([email])
  @@index([role])
}

// ============================================
// COURSE MODELS
// ============================================

enum CourseStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

enum CourseLevel {
  BEGINNER
  INTERMEDIATE
  ADVANCED
}

model Course {
  id              String        @id @default(cuid())
  title           String
  slug            String        @unique
  description     String?
  longDescription String?
  category        String
  level           CourseLevel   @default(BEGINNER)
  price           Float
  discountPrice   Float?
  image           String?
  status          CourseStatus  @default(DRAFT)
  instructor      String?
  instructorImage String?
  duration        Int?          // in hours
  language        String        @default("English")
  createdBy       User          @relation("CreatedBy", fields: [createdById], references: [id], onDelete: Cascade)
  createdById     String
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt

  // Relations
  modules         Module[]
  enrollments     Enrollment[]
  reviews         Review[]
  quizzes         Quiz[]

  @@index([category])
  @@index([status])
  @@index([createdById])
  @@index([slug])
}

model Module {
  id          String    @id @default(cuid())
  title       String
  description String?
  order       Int
  course      Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)
  courseId    String
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  lectures    Lecture[]

  @@index([courseId])
  @@unique([courseId, order])
}

model Lecture {
  id          String    @id @default(cuid())
  title       String
  description String?
  order       Int
  duration    Int?      // in minutes
  module      Module    @relation(fields: [moduleId], references: [id], onDelete: Cascade)
  moduleId    String
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  videos      Video[]
  assignments Assignment[]
  progress    Progress[]

  @@index([moduleId])
  @@unique([moduleId, order])
}

model Video {
  id        String   @id @default(cuid())
  title     String
  url       String   // S3 or Cloudinary URL
  duration  Int?     // in seconds
  lecture   Lecture  @relation(fields: [lectureId], references: [id], onDelete: Cascade)
  lectureId String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([lectureId])
}

// ============================================
// ENROLLMENT & PAYMENT MODELS
// ============================================

enum EnrollmentStatus {
  ACTIVE
  COMPLETED
  CANCELLED
}

model Enrollment {
  id              String           @id @default(cuid())
  student         User             @relation(fields: [studentId], references: [id], onDelete: Cascade)
  studentId       String
  course          Course           @relation(fields: [courseId], references: [id], onDelete: Cascade)
  courseId        String
  status          EnrollmentStatus @default(ACTIVE)
  enrolledAt      DateTime         @default(now())
  completedAt     DateTime?
  createdAt       DateTime         @default(now())
  updatedAt       DateTime         @updatedAt

  // Relations
  payment         Payment?
  progress        Progress[]
  quizResults     QuizResult[]
  certificate     Certificate?
  assignments     AssignmentSubmission[]

  @@unique([studentId, courseId])
  @@index([studentId])
  @@index([courseId])
  @@index([status])
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}

model Payment {
  id              String        @id @default(cuid())
  user            User          @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId          String
  enrollment      Enrollment    @relation(fields: [enrollmentId], references: [id], onDelete: Cascade)
  enrollmentId    String        @unique
  amount          Float
  currency        String        @default("USD")
  status          PaymentStatus @default(PENDING)
  transactionId   String?       @unique
  paymentMethod   String?       // stripe, razorpay, etc
  orderId         String?
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt

  @@index([userId])
  @@index([enrollmentId])
  @@index([status])
  @@index([transactionId])
}

// ============================================
// QUIZ & ASSESSMENT MODELS
// ============================================

model Quiz {
  id          String   @id @default(cuid())
  title       String
  description String?
  course      Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  courseId    String
  passingScore Int     @default(60)
  timeLimit   Int?     // in minutes
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relations
  questions   QuizQuestion[]
  results     QuizResult[]

  @@index([courseId])
}

model QuizQuestion {
  id          String   @id @default(cuid())
  quiz        Quiz     @relation(fields: [quizId], references: [id], onDelete: Cascade)
  quizId      String
  question    String
  order       Int
  type        String   @default("MULTIPLE_CHOICE") // MULTIPLE_CHOICE, TRUE_FALSE, SHORT_ANSWER
  options     String[] // JSON array of options
  correctAnswer String
  explanation String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([quizId])
  @@unique([quizId, order])
}

model QuizResult {
  id          String     @id @default(cuid())
  student     User       @relation(fields: [studentId], references: [id], onDelete: Cascade)
  studentId   String
  quiz        Quiz       @relation(fields: [quizId], references: [id], onDelete: Cascade)
  quizId      String
  enrollment  Enrollment @relation(fields: [enrollmentId], references: [id], onDelete: Cascade)
  enrollmentId String
  score       Int
  totalQuestions Int
  answers     String     // JSON array of answers
  passed      Boolean
  attemptNumber Int      @default(1)
  completedAt DateTime   @default(now())
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  @@index([studentId])
  @@index([quizId])
  @@index([enrollmentId])
}

// ============================================
// ASSIGNMENT MODELS
// ============================================

enum AssignmentStatus {
  PENDING
  SUBMITTED
  GRADED
}

model Assignment {
  id          String   @id @default(cuid())
  title       String
  description String?
  lecture     Lecture  @relation(fields: [lectureId], references: [id], onDelete: Cascade)
  lectureId   String
  dueDate     DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relations
  submissions AssignmentSubmission[]

  @@index([lectureId])
}

model AssignmentSubmission {
  id           String           @id @default(cuid())
  student      User             @relation(fields: [studentId], references: [id], onDelete: Cascade)
  studentId    String
  assignment   Assignment       @relation(fields: [assignmentId], references: [id], onDelete: Cascade)
  assignmentId String
  enrollment   Enrollment       @relation(fields: [enrollmentId], references: [id], onDelete: Cascade)
  enrollmentId String
  fileUrl      String
  status       AssignmentStatus @default(PENDING)
  grade        Int?
  feedback     String?
  submittedAt  DateTime         @default(now())
  gradedAt     DateTime?
  createdAt    DateTime         @default(now())
  updatedAt    DateTime         @updatedAt

  @@index([studentId])
  @@index([assignmentId])
  @@index([enrollmentId])
}

// ============================================
// PROGRESS TRACKING MODELS
// ============================================

model Progress {
  id          String     @id @default(cuid())
  student     User       @relation(fields: [studentId], references: [id], onDelete: Cascade)
  studentId   String
  enrollment  Enrollment @relation(fields: [enrollmentId], references: [id], onDelete: Cascade)
  enrollmentId String
  lecture     Lecture    @relation(fields: [lectureId], references: [id], onDelete: Cascade)
  lectureId   String
  isCompleted Boolean    @default(false)
  watchedDuration Int    @default(0) // in seconds
  completedAt DateTime?
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  @@unique([enrollmentId, lectureId])
  @@index([studentId])
  @@index([enrollmentId])
  @@index([lectureId])
}

// ============================================
// CERTIFICATE MODELS
// ============================================

model Certificate {
  id          String     @id @default(cuid())
  student     User       @relation(fields: [studentId], references: [id], onDelete: Cascade)
  studentId   String
  enrollment  Enrollment @relation(fields: [enrollmentId], references: [id], onDelete: Cascade)
  enrollmentId String     @unique
  certificateNumber String @unique
  issuedAt    DateTime   @default(now())
  expiresAt   DateTime?
  pdfUrl      String?
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  @@index([studentId])
  @@index([enrollmentId])
  @@index([certificateNumber])
}

// ============================================
// REVIEW & RATING MODELS
// ============================================

model Review {
  id        String   @id @default(cuid())
  student   User     @relation(fields: [studentId], references: [id], onDelete: Cascade)
  studentId String
  course    Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  courseId  String
  rating    Int      // 1-5
  title     String?
  comment   String?
  helpful   Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([studentId, courseId])
  @@index([studentId])
  @@index([courseId])
  @@index([rating])
}

// ============================================
// ADDITIONAL MODELS
// ============================================

model Category {
  id    String @id @default(cuid())
  name  String @unique
  slug  String @unique
  icon  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Notification {
  id      String   @id @default(cuid())
  userId  String
  title   String
  message String
  type    String   // email, in-app, sms
  read    Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
}
```

## Key Features of This Schema

### 1. User Management
- Role-based access (STUDENT, ADMIN, SUPER_ADMIN)
- Email verification tracking
- Profile information

### 2. Course Structure
- Hierarchical: Course → Module → Lecture → Video
- Status tracking (DRAFT, PUBLISHED, ARCHIVED)
- Difficulty levels
- Pricing with discounts

### 3. Enrollment & Payments
- Track student enrollments
- Payment status and transaction tracking
- Refund capability

### 4. Learning Assessment
- Quiz system with multiple question types
- Quiz results tracking with scores
- Assignment submission and grading

### 5. Progress Tracking
- Lecture completion tracking
- Watch duration tracking
- Overall course progress calculation

### 6. Certification
- Automatic certificate generation
- Unique certificate numbers
- Optional expiration dates

### 7. Reviews & Ratings
- Course ratings (1-5 stars)
- Written reviews
- Helpful votes

### 8. Indexes
- Optimized for common queries
- Foreign key indexes
- Unique constraints where needed

## Migration Commands

```bash
# Create initial migration
npx prisma migrate dev --name init

# Create new migration after schema changes
npx prisma migrate dev --name add_new_feature

# View database in Prisma Studio
npx prisma studio

# Generate Prisma Client
npx prisma generate

# Reset database (development only)
npx prisma migrate reset
```

## Relationships Summary

```
User (1) ──────────────────── (Many) Enrollment
User (1) ──────────────────── (Many) Payment
User (1) ──────────────────── (Many) Review
User (1) ──────────────────── (Many) Certificate
User (1) ──────────────────── (Many) QuizResult
User (1) ──────────────────── (Many) Progress
User (1) ──────────────────── (Many) AssignmentSubmission
User (1) ──────────────────── (Many) Course (as creator)

Course (1) ──────────────────── (Many) Module
Course (1) ──────────────────── (Many) Enrollment
Course (1) ──────────────────── (Many) Review
Course (1) ──────────────────── (Many) Quiz

Module (1) ──────────────────── (Many) Lecture
Lecture (1) ──────────────────── (Many) Video
Lecture (1) ──────────────────── (Many) Assignment
Lecture (1) ──────────────────── (Many) Progress

Quiz (1) ──────────────────── (Many) QuizQuestion
Quiz (1) ──────────────────── (Many) QuizResult

Assignment (1) ──────────────────── (Many) AssignmentSubmission

Enrollment (1) ──────────────────── (1) Payment
Enrollment (1) ──────────────────── (1) Certificate
Enrollment (1) ──────────────────── (Many) Progress
Enrollment (1) ──────────────────── (Many) QuizResult
Enrollment (1) ──────────────────── (Many) AssignmentSubmission
```
