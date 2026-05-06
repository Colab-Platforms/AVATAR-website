# Frontend Components & Pages Guide

## Directory Structure

```
app/
├── components/
│   ├── common/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Loader.tsx
│   │   └── Toast.tsx
│   ├── course/
│   │   ├── CourseCard.tsx
│   │   ├── CourseGrid.tsx
│   │   ├── CourseDetails.tsx
│   │   ├── CourseHero.tsx
│   │   ├── CourseReviews.tsx
│   │   └── ReviewForm.tsx
│   ├── learning/
│   │   ├── VideoPlayer.tsx
│   │   ├── LectureNavigation.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── ModuleSidebar.tsx
│   │   └── LectureContent.tsx
│   ├── quiz/
│   │   ├── QuizCard.tsx
│   │   ├── QuestionDisplay.tsx
│   │   ├── QuizResults.tsx
│   │   └── QuizTimer.tsx
│   ├── admin/
│   │   ├── AdminSidebar.tsx
│   │   ├── DashboardCard.tsx
│   │   ├── AnalyticsChart.tsx
│   │   ├── CourseForm.tsx
│   │   ├── ModuleForm.tsx
│   │   └── LectureForm.tsx
│   └── auth/
│       ├── LoginForm.tsx
│       ├── RegisterForm.tsx
│       └── ProtectedRoute.tsx
├── layouts/
│   ├── StudentLayout.tsx
│   ├── AdminLayout.tsx
│   └── AuthLayout.tsx
├── (auth)/
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── forgot-password/page.tsx
├── (student)/
│   ├── dashboard/page.tsx
│   ├── my-courses/page.tsx
│   ├── profile/page.tsx
│   ├── courses/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       ├── page.tsx
│   │       ├── learn/page.tsx
│   │       ├── quiz/[quizId]/page.tsx
│   │       └── quiz/[quizId]/results/page.tsx
│   └── certificates/
│       └── [id]/page.tsx
├── (admin)/
│   ├── admin/
│   │   ├── dashboard/page.tsx
│   │   ├── courses/
│   │   │   ├── page.tsx
│   │   │   ├── create/page.tsx
│   │   │   └── [id]/
│   │   │       ├── edit/page.tsx
│   │   │       └── content/page.tsx
│   │   ├── users/page.tsx
│   │   ├── enrollments/page.tsx
│   │   ├── payments/page.tsx
│   │   └── analytics/page.tsx
└── page.tsx (home)
```

---

## Common Components

### Button Component
**File:** `app/components/common/Button.tsx`

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  ...props 
}: ButtonProps) {
  // Implementation
}
```

### Input Component
**File:** `app/components/common/Input.tsx`

```typescript
interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function Input({ label, error, ...props }: InputProps) {
  // Implementation
}
```

### Card Component
**File:** `app/components/common/Card.tsx`

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className }: CardProps) {
  // Implementation
}
```

### Modal Component
**File:** `app/components/common/Modal.tsx`

```typescript
interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export default function Modal({ isOpen, title, children, onClose }: ModalProps) {
  // Implementation
}
```

---

## Course Components

### CourseCard Component
**File:** `app/components/course/CourseCard.tsx`

Displays individual course in grid/list view

```typescript
interface CourseCardProps {
  course: {
    id: string;
    title: string;
    image: string;
    price: number;
    instructor: string;
    rating: number;
    enrollmentCount: number;
  };
  onEnroll?: () => void;
}

export default function CourseCard({ course, onEnroll }: CourseCardProps) {
  // Show course image, title, instructor, price, rating
  // Enroll button
}
```

### CourseGrid Component
**File:** `app/components/course/CourseGrid.tsx`

Displays multiple courses in grid layout

```typescript
interface CourseGridProps {
  courses: Course[];
  loading?: boolean;
  onEnroll?: (courseId: string) => void;
}

export default function CourseGrid({ courses, loading }: CourseGridProps) {
  // Grid layout with CourseCard components
}
```

### CourseDetails Component
**File:** `app/components/course/CourseDetails.tsx`

Full course details page

```typescript
interface CourseDetailsProps {
  course: Course;
  isEnrolled: boolean;
  onEnroll: () => void;
}

export default function CourseDetails({ course, isEnrolled }: CourseDetailsProps) {
  // Course overview, curriculum, reviews, enroll button
}
```

### ReviewForm Component
**File:** `app/components/course/ReviewForm.tsx`

Form to submit course review

```typescript
interface ReviewFormProps {
  courseId: string;
  onSubmit: (review: ReviewData) => void;
  loading?: boolean;
}

export default function ReviewForm({ courseId, onSubmit }: ReviewFormProps) {
  // Star rating input, text review, submit button
}
```

---

## Learning Components

### VideoPlayer Component
**File:** `app/components/learning/VideoPlayer.tsx`

Video player for course content

```typescript
interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onComplete?: () => void;
  onProgress?: (duration: number) => void;
}

export default function VideoPlayer({ videoUrl, title, onComplete }: VideoPlayerProps) {
  // HLS.js or Plyr video player
  // Play/pause, progress, quality selection
  // Track watch duration
}
```

### LectureNavigation Component
**File:** `app/components/learning/LectureNavigation.tsx`

Navigate between lectures

```typescript
interface LectureNavigationProps {
  currentLectureId: string;
  lectures: Lecture[];
  onSelectLecture: (lectureId: string) => void;
}

export default function LectureNavigation({ currentLectureId, lectures }: LectureNavigationProps) {
  // List of lectures with completion status
  // Current lecture highlight
  // Next/Previous buttons
}
```

### ProgressBar Component
**File:** `app/components/learning/ProgressBar.tsx`

Show course progress

```typescript
interface ProgressBarProps {
  completed: number;
  total: number;
  percentage?: number;
}

export default function ProgressBar({ completed, total }: ProgressBarProps) {
  // Visual progress bar
  // Percentage display
}
```

### ModuleSidebar Component
**File:** `app/components/learning/ModuleSidebar.tsx`

Sidebar showing course modules and lectures

```typescript
interface ModuleSidebarProps {
  modules: Module[];
  currentLectureId: string;
  progress: Progress[];
  onSelectLecture: (lectureId: string) => void;
}

export default function ModuleSidebar({ modules, currentLectureId }: ModuleSidebarProps) {
  // Expandable modules
  // Lectures with completion checkmarks
  // Current lecture highlight
}
```

---

## Quiz Components

### QuestionDisplay Component
**File:** `app/components/quiz/QuestionDisplay.tsx`

Display quiz question

```typescript
interface QuestionDisplayProps {
  question: QuizQuestion;
  selectedAnswer?: string;
  onSelectAnswer: (answer: string) => void;
  showResult?: boolean;
  isCorrect?: boolean;
}

export default function QuestionDisplay({ question, selectedAnswer }: QuestionDisplayProps) {
  // Question text
  // Multiple choice options
  // Selected answer highlight
  // Result feedback
}
```

### QuizTimer Component
**File:** `app/components/quiz/QuizTimer.tsx`

Quiz timer countdown

```typescript
interface QuizTimerProps {
  timeLimit: number; // in minutes
  onTimeUp: () => void;
}

export default function QuizTimer({ timeLimit, onTimeUp }: QuizTimerProps) {
  // Countdown timer
  // Warning when time is running out
}
```

### QuizResults Component
**File:** `app/components/quiz/QuizResults.tsx`

Display quiz results

```typescript
interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  passed: boolean;
  results: QuestionResult[];
  onRetake?: () => void;
}

export default function QuizResults({ score, totalQuestions, passed }: QuizResultsProps) {
  // Score display
  // Pass/Fail status
  // Question-by-question review
  // Retake button
}
```

---

## Admin Components

### AdminSidebar Component
**File:** `app/components/admin/AdminSidebar.tsx`

Admin navigation sidebar

```typescript
export default function AdminSidebar() {
  // Navigation links
  // Dashboard, Courses, Users, Enrollments, Analytics
  // Logout
}
```

### DashboardCard Component
**File:** `app/components/admin/DashboardCard.tsx`

Dashboard metric card

```typescript
interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: number;
  color?: string;
}

export default function DashboardCard({ title, value, icon }: DashboardCardProps) {
  // Card with metric
  // Icon and trend indicator
}
```

### CourseForm Component
**File:** `app/components/admin/CourseForm.tsx`

Form to create/edit course

```typescript
interface CourseFormProps {
  initialData?: Course;
  onSubmit: (data: CourseFormData) => void;
  loading?: boolean;
}

export default function CourseForm({ initialData, onSubmit }: CourseFormProps) {
  // Title, description, category, level, price
  // Image upload
  // Submit button
}
```

### ModuleForm Component
**File:** `app/components/admin/ModuleForm.tsx`

Form to create/edit module

```typescript
interface ModuleFormProps {
  courseId: string;
  initialData?: Module;
  onSubmit: (data: ModuleFormData) => void;
}

export default function ModuleForm({ courseId, onSubmit }: ModuleFormProps) {
  // Module title, description, order
  // Submit button
}
```

### LectureForm Component
**File:** `app/components/admin/LectureForm.tsx`

Form to create/edit lecture

```typescript
interface LectureFormProps {
  moduleId: string;
  initialData?: Lecture;
  onSubmit: (data: LectureFormData) => void;
}

export default function LectureForm({ moduleId, onSubmit }: LectureFormProps) {
  // Lecture title, description, order, duration
  // Video upload
  // PDF upload
  // Submit button
}
```

---

## Auth Components

### LoginForm Component
**File:** `app/components/auth/LoginForm.tsx`

Login form

```typescript
interface LoginFormProps {
  onSubmit: (data: LoginData) => void;
  loading?: boolean;
  error?: string;
}

export default function LoginForm({ onSubmit, loading, error }: LoginFormProps) {
  // Email input
  // Password input
  // Remember me checkbox
  // Login button
  // Sign up link
  // OAuth buttons
}
```

### RegisterForm Component
**File:** `app/components/auth/RegisterForm.tsx`

Registration form

```typescript
interface RegisterFormProps {
  onSubmit: (data: RegisterData) => void;
  loading?: boolean;
  error?: string;
}

export default function RegisterForm({ onSubmit, loading, error }: RegisterFormProps) {
  // Name input
  // Email input
  // Password input
  // Confirm password input
  // Register button
  // Login link
  // OAuth buttons
}
```

### ProtectedRoute Component
**File:** `app/components/auth/ProtectedRoute.tsx`

Protect routes that require authentication

```typescript
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  // Check authentication
  // Check role if required
  // Redirect to login if not authenticated
}
```

---

## Page Components

### Home Page
**File:** `app/page.tsx`

Landing page with:
- Hero section
- Featured courses
- Testimonials
- Call-to-action

### Courses Page
**File:** `app/(student)/courses/page.tsx`

Browse all courses with:
- Course grid
- Search and filter
- Pagination
- Category filter

### Course Details Page
**File:** `app/(student)/courses/[id]/page.tsx`

Course details with:
- Course overview
- Curriculum
- Reviews
- Enroll button

### Course Learning Page
**File:** `app/(student)/courses/[id]/learn/page.tsx`

Course player with:
- Video player
- Lecture navigation
- Progress tracking
- Quiz access

### Quiz Page
**File:** `app/(student)/courses/[id]/quiz/[quizId]/page.tsx`

Quiz interface with:
- Questions display
- Timer
- Answer selection
- Submit button

### Quiz Results Page
**File:** `app/(student)/courses/[id]/quiz/[quizId]/results/page.tsx`

Quiz results with:
- Score display
- Question review
- Retake option

### Student Dashboard
**File:** `app/(student)/dashboard/page.tsx`

Student dashboard with:
- Enrolled courses
- Learning progress
- Recent activity
- Certificates

### My Courses Page
**File:** `app/(student)/my-courses/page.tsx`

List of enrolled courses with:
- Course cards
- Progress bars
- Resume button
- Filter options

### Profile Page
**File:** `app/(student)/profile/page.tsx`

User profile with:
- User information
- Edit profile form
- Change password
- Account settings

### Certificate Page
**File:** `app/(student)/certificates/[id]/page.tsx`

Certificate display with:
- Certificate details
- Download button
- Share options
- Verification link

### Admin Dashboard
**File:** `app/(admin)/admin/dashboard/page.tsx`

Admin dashboard with:
- Key metrics
- Charts
- Recent enrollments
- Top courses

### Admin Courses Page
**File:** `app/(admin)/admin/courses/page.tsx`

Manage courses with:
- Course list
- Create button
- Edit/Delete options
- Search and filter

### Create Course Page
**File:** `app/(admin)/admin/courses/create/page.tsx`

Create new course with:
- Course form
- Module management
- Lecture management
- Publish button

### Edit Course Page
**File:** `app/(admin)/admin/courses/[id]/edit/page.tsx`

Edit course details

### Course Content Page
**File:** `app/(admin)/admin/courses/[id]/content/page.tsx`

Manage course content with:
- Module list
- Lecture list
- Video upload
- PDF upload
- Quiz management

### Admin Users Page
**File:** `app/(admin)/admin/users/page.tsx`

Manage users with:
- User list
- Filter by role
- View details
- Manage permissions

### Admin Enrollments Page
**File:** `app/(admin)/admin/enrollments/page.tsx`

Manage enrollments with:
- Enrollment list
- Filter options
- View progress
- Manage refunds

### Admin Analytics Page
**File:** `app/(admin)/admin/analytics/page.tsx`

Analytics dashboard with:
- Revenue charts
- Student analytics
- Course performance
- Export reports

---

## Layout Components

### StudentLayout
**File:** `app/layouts/StudentLayout.tsx`

Layout for student pages with:
- Navbar
- Sidebar (optional)
- Main content area
- Footer

### AdminLayout
**File:** `app/layouts/AdminLayout.tsx`

Layout for admin pages with:
- Admin navbar
- Admin sidebar
- Main content area

### AuthLayout
**File:** `app/layouts/AuthLayout.tsx`

Layout for auth pages with:
- Centered form
- Logo
- No navbar/footer

---

## Styling Approach

Use Tailwind CSS for all components:
- Utility-first approach
- Responsive design
- Dark mode support (optional)
- Custom color scheme

---

## State Management

Use React hooks:
- useState for local state
- useContext for global state (auth, user)
- useReducer for complex state
- Custom hooks for reusable logic

---

## API Integration

Use fetch or axios:
- Create API client in `lib/api.ts`
- Handle errors globally
- Add loading states
- Add error boundaries

---

## Performance Optimization

- Code splitting with dynamic imports
- Image optimization with Next.js Image
- Lazy loading for components
- Memoization with React.memo
- useCallback for event handlers
