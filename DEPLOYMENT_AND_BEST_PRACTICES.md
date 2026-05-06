# Deployment & Best Practices Guide

## Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings fixed
- [ ] No console.log statements in production code
- [ ] All environment variables documented
- [ ] API error handling implemented
- [ ] Input validation on all forms
- [ ] SQL injection prevention (Prisma handles this)
- [ ] XSS protection implemented

### Security
- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] JWT token expiration set
- [ ] Password hashing with bcrypt
- [ ] Sensitive data not logged
- [ ] API keys in environment variables
- [ ] CSRF tokens implemented
- [ ] SQL injection prevention
- [ ] Authentication on all protected routes

### Performance
- [ ] Database indexes created
- [ ] API response times < 200ms
- [ ] Images optimized
- [ ] Code splitting implemented
- [ ] Caching strategy defined
- [ ] CDN configured for static assets
- [ ] Database query optimization done
- [ ] Lazy loading implemented

### Testing
- [ ] Unit tests written (>80% coverage)
- [ ] Integration tests for API routes
- [ ] E2E tests for critical flows
- [ ] Payment flow tested
- [ ] Authentication tested
- [ ] Error scenarios tested

### Documentation
- [ ] API documentation complete
- [ ] Database schema documented
- [ ] Deployment instructions written
- [ ] Environment variables documented
- [ ] Code comments added
- [ ] README updated

---

## Environment Variables

### Development (.env.local)
```
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/edtech_dev"

# NextAuth
NEXTAUTH_SECRET="dev-secret-key-change-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_test_..."

# AWS S3
AWS_ACCESS_KEY_ID="your_access_key"
AWS_SECRET_ACCESS_KEY="your_secret_key"
AWS_S3_BUCKET="your-bucket-name"
AWS_REGION="us-east-1"

# Email Service
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# API
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

### Production (.env.production)
```
# Database
DATABASE_URL="postgresql://user:password@prod-db.rds.amazonaws.com:5432/edtech_prod"

# NextAuth
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="https://yourdomain.com"

# Stripe
STRIPE_PUBLIC_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_live_..."

# AWS S3
AWS_ACCESS_KEY_ID="prod_access_key"
AWS_SECRET_ACCESS_KEY="prod_secret_key"
AWS_S3_BUCKET="prod-bucket-name"
AWS_REGION="us-east-1"

# Email Service
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASSWORD="SG.your-sendgrid-key"

# API
NEXT_PUBLIC_API_URL="https://yourdomain.com"

# Monitoring
SENTRY_DSN="your-sentry-dsn"
```

---

## Database Setup

### PostgreSQL Installation

#### Windows
```bash
# Download from https://www.postgresql.org/download/windows/
# Or use Chocolatey
choco install postgresql

# Create database
createdb edtech_db

# Connect
psql -U postgres -d edtech_db
```

#### macOS
```bash
# Using Homebrew
brew install postgresql@15

# Start service
brew services start postgresql@15

# Create database
createdb edtech_db
```

#### Linux (Ubuntu)
```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib

# Create database
sudo -u postgres createdb edtech_db
```

### Prisma Setup
```bash
# Install Prisma
npm install @prisma/client prisma

# Initialize Prisma
npx prisma init

# Create migration
npx prisma migrate dev --name init

# View database
npx prisma studio
```

---

## Deployment to Vercel

### Step 1: Prepare Repository
```bash
# Initialize git if not done
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git push origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Select Next.js framework
5. Configure build settings

### Step 3: Set Environment Variables
In Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add all production environment variables
3. Select which environments (Production, Preview, Development)

### Step 4: Configure Database
1. Create PostgreSQL database on AWS RDS or Railway
2. Add DATABASE_URL to Vercel environment variables
3. Run migrations:
```bash
npx prisma migrate deploy
```

### Step 5: Deploy
```bash
# Vercel CLI
npm i -g vercel
vercel

# Or push to main branch (auto-deploy)
git push origin main
```

---

## AWS RDS Setup (PostgreSQL)

### Create RDS Instance
1. Go to AWS Console → RDS
2. Click "Create database"
3. Select PostgreSQL
4. Choose instance class (db.t3.micro for free tier)
5. Set master username and password
6. Configure storage (20GB for free tier)
7. Set public accessibility to "Yes"
8. Create security group
9. Click "Create database"

### Connect to RDS
```bash
# Get endpoint from RDS console
# Format: your-db-instance.xxxxx.us-east-1.rds.amazonaws.com

# Connection string
postgresql://username:password@your-db-instance.xxxxx.us-east-1.rds.amazonaws.com:5432/edtech_db

# Connect using psql
psql -h your-db-instance.xxxxx.us-east-1.rds.amazonaws.com -U postgres -d edtech_db
```

### Security Group Configuration
1. Go to EC2 → Security Groups
2. Find RDS security group
3. Add inbound rule:
   - Type: PostgreSQL
   - Port: 5432
   - Source: 0.0.0.0/0 (or your IP)

---

## AWS S3 Setup (File Storage)

### Create S3 Bucket
1. Go to AWS Console → S3
2. Click "Create bucket"
3. Enter bucket name (e.g., edtech-files)
4. Select region
5. Uncheck "Block all public access" (for public files)
6. Create bucket

### Configure CORS
```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
    "AllowedOrigins": ["https://yourdomain.com"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3000
  }
]
```

### Create IAM User
1. Go to IAM → Users
2. Create new user
3. Attach policy: AmazonS3FullAccess
4. Create access keys
5. Add to environment variables

---

## Stripe Setup

### Create Stripe Account
1. Go to https://stripe.com
2. Sign up for account
3. Verify email
4. Complete account setup

### Get API Keys
1. Go to Dashboard → Developers → API keys
2. Copy Publishable key (pk_live_...)
3. Copy Secret key (sk_live_...)
4. Add to environment variables

### Setup Webhook
1. Go to Developers → Webhooks
2. Click "Add endpoint"
3. Enter endpoint URL: https://yourdomain.com/api/payments/webhook
4. Select events:
   - payment_intent.succeeded
   - payment_intent.payment_failed
   - charge.refunded
5. Copy signing secret
6. Add to environment variables

---

## Email Service Setup

### Using SendGrid
1. Go to https://sendgrid.com
2. Sign up for account
3. Create API key
4. Add to environment variables

### Using Gmail
1. Enable 2-factor authentication
2. Create app password
3. Use app password in SMTP_PASSWORD

### Email Templates
Create templates for:
- Welcome email
- Course enrollment confirmation
- Course completion
- Certificate issued
- Password reset

---

## Monitoring & Logging

### Sentry Setup (Error Tracking)
```bash
npm install @sentry/nextjs
```

Configure in `next.config.ts`:
```typescript
import { withSentryConfig } from "@sentry/nextjs";

const config = {
  // your config
};

export default withSentryConfig(config, {
  org: "your-org",
  project: "your-project",
  authToken: process.env.SENTRY_AUTH_TOKEN,
});
```

### Vercel Analytics
- Automatically enabled on Vercel
- View in Vercel dashboard
- Monitor Core Web Vitals

### Database Monitoring
- Use Prisma Studio for development
- Monitor query performance
- Set up database backups

---

## CI/CD Pipeline

### GitHub Actions Workflow
**File:** `.github/workflows/deploy.yml`

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm run test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Performance Optimization

### Database Optimization
```prisma
// Add indexes for frequently queried fields
model User {
  id    String  @id @default(cuid())
  email String  @unique
  
  @@index([email])
}

// Use select to fetch only needed fields
const user = await prisma.user.findUnique({
  where: { id: userId },
  select: { id: true, email: true, name: true }
});
```

### API Response Caching
```typescript
// Cache course list for 1 hour
export const revalidate = 3600;

export async function GET() {
  const courses = await prisma.course.findMany();
  return Response.json(courses);
}
```

### Image Optimization
```typescript
import Image from 'next/image';

export default function CourseCard({ course }) {
  return (
    <Image
      src={course.image}
      alt={course.title}
      width={300}
      height={200}
      priority={false}
    />
  );
}
```

### Code Splitting
```typescript
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  loading: () => <div>Loading...</div>,
});
```

---

## Security Best Practices

### Input Validation
```typescript
import { z } from 'zod';

const courseSchema = z.object({
  title: z.string().min(3).max(100),
  price: z.number().positive(),
  category: z.enum(['Web', 'Mobile', 'Data']),
});

const data = courseSchema.parse(req.body);
```

### Rate Limiting
```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### CORS Configuration
```typescript
// next.config.ts
const nextConfig = {
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NEXT_PUBLIC_API_URL,
          },
        ],
      },
    ];
  },
};
```

### Environment Variables
- Never commit .env files
- Use .env.example for documentation
- Rotate secrets regularly
- Use different secrets for each environment

---

## Backup & Recovery

### Database Backups
```bash
# Manual backup
pg_dump -h localhost -U postgres edtech_db > backup.sql

# Restore from backup
psql -h localhost -U postgres edtech_db < backup.sql
```

### AWS RDS Automated Backups
- Enabled by default
- Retention period: 7 days (configurable)
- Point-in-time recovery available

### S3 Versioning
- Enable versioning on S3 bucket
- Allows recovery of deleted files
- Minimal additional cost

---

## Monitoring & Alerts

### Set Up Alerts
1. Vercel: Configure deployment notifications
2. Sentry: Set up error alerts
3. AWS: CloudWatch alarms for RDS
4. Stripe: Webhook monitoring

### Health Checks
```typescript
// app/api/health/route.ts
export async function GET() {
  try {
    // Check database connection
    await prisma.user.count();
    
    return Response.json({ status: 'ok' });
  } catch (error) {
    return Response.json({ status: 'error' }, { status: 500 });
  }
}
```

---

## Scaling Considerations

### Horizontal Scaling
- Vercel handles auto-scaling
- Database read replicas for high traffic
- CDN for static assets

### Database Optimization
- Connection pooling (PgBouncer)
- Query optimization
- Caching layer (Redis)

### Load Balancing
- Vercel provides load balancing
- Multiple database replicas
- Distributed caching

---

## Maintenance

### Regular Tasks
- [ ] Monitor error logs
- [ ] Review performance metrics
- [ ] Update dependencies
- [ ] Security patches
- [ ] Database maintenance
- [ ] Backup verification
- [ ] Cost optimization

### Update Dependencies
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update major versions
npm install package@latest
```

---

## Troubleshooting

### Common Issues

#### Database Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```
Solution: Ensure PostgreSQL is running and DATABASE_URL is correct

#### Stripe Webhook Not Working
- Verify webhook URL is correct
- Check signing secret
- Ensure endpoint is publicly accessible
- Check firewall/security groups

#### S3 Upload Failing
- Verify AWS credentials
- Check bucket permissions
- Ensure CORS is configured
- Verify bucket name

#### High Database Query Time
- Add indexes to frequently queried fields
- Use select to fetch only needed fields
- Implement caching
- Consider database optimization

---

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Prisma Docs: https://www.prisma.io/docs
- Stripe Docs: https://stripe.com/docs
- AWS Docs: https://docs.aws.amazon.com
- Vercel Docs: https://vercel.com/docs
