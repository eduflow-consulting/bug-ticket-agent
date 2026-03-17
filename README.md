# 🐛 Bug Ticket Enrichment Agent

A powerful, AI-driven ticket enrichment system that transforms raw bug reports into comprehensive, actionable Jira tickets. Built with Next.js 14, TypeScript, and n8n webhooks.

## 🎯 Features

- ✅ **Manual Bug Ticket Input** - Simple form for capturing initial bug reports
- ✅ **AI Agent Chat** - Interactive conversation to enrich ticket with context
- ✅ **SSE Streaming** - Real-time agent responses for smooth UX
- ✅ **Jira Auto-Sync** - Automatically create and update Jira tickets
- ✅ **File Attachments** - Upload screenshots, logs, videos with virus scanning
- ✅ **Multi-User Management** - Role-based access control with audit logging
- ✅ **GDPR Compliant** - Full data privacy and compliance measures
- ✅ **Production Ready** - Enterprise-grade security, monitoring, CI/CD

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- npm 10+
- Git
- n8n instance with webhooks enabled
- Jira Cloud account
- OpenAI or Claude API key

### Installation

```bash
# 1. Clone repository
git clone https://github.com/eduflow-consulting/bug-ticket-agent.git
cd bug-ticket-agent

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local
# Edit .env.local with your credentials

# 4. Start development server
npm run dev
# Open http://localhost:3000
```

### Environment Setup

See `.env.example` for all required environment variables.

## 📚 Documentation

- [Architecture Design](./docs/ARCHITECTURE.md) - System design and technical decisions
- [Development Guide](./docs/DEVELOPMENT.md) - Local setup and workflow
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production deployment on Vercel
- [Security Guide](./docs/SECURITY.md) - Security best practices

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 + shadcn/ui
- **State Management**: Zustand 4
- **Forms**: React Hook Form + Zod validation

### Backend Integration
- **Webhooks**: n8n (single integration point)
- **External APIs**: Jira Cloud, OpenAI/Claude, AWS S3
- **Hosting**: Vercel Pro
- **Monitoring**: Sentry + DataDog

### Development Tools
- **Testing**: Vitest + Playwright + React Testing Library
- **Linting**: ESLint
- **Formatting**: Prettier
- **CI/CD**: GitHub Actions

## 🧪 Testing

```bash
# Run all tests
npm test

# Unit tests only
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# With coverage
npm run test:coverage
```

## 🚀 Deployment

```bash
# Deploy to Vercel
vercel --prod
```

## 📁 Project Structure

```
bug-ticket-agent/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── hooks/            # Custom hooks
│   ├── store/            # Zustand stores
│   ├── services/         # API services
│   ├── types/            # TypeScript types
│   └── utils/            # Utilities
├── __tests__/            # Test suites
├── docs/                 # Documentation
├── .github/workflows/    # CI/CD
└── public/               # Static assets
```

## 👨‍💻 Development Workflow

### Git Workflow

```
main (Production)
  ↑ (PR reviewed)
  |
develop (Integration)
  ↑
  |
feature/ticket-form (Development)
```

### Commit Convention

```
type(scope): subject
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Code Quality

```bash
# Lint
npm run lint

# Format
npm run format

# Type check
npm run type-check
```

## 🔐 Security

- All data encrypted in transit (HTTPS/TLS)
- JWTs with RS256 signing for authentication
- GDPR-compliant data handling and retention
- Rate limiting and DDoS protection
- Input validation and sanitization

## 📊 Monitoring

- **Error Tracking**: Sentry integration
- **Performance**: DataDog APM + Real User Monitoring
- **Uptime**: 99.9% SLA with Vercel

## 📄 License

MIT License - see LICENSE file for details

---

**Version**: 1.0.0  
**Last Updated**: March 2026  
**Status**: ✅ Production Ready
