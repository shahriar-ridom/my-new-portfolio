# 🚀 Next.js Portfolio with Admin Panel

A modern, full-stack portfolio website built with Next.js 15, featuring a powerful admin panel for content management, real-time analytics, and seamless project showcase.

![Portfolio Preview](https://qqrpgsocjemlffjtunvz.supabase.co/storage/v1/object/public/images//brave_screenshot_www.shahriardev.me.png)

## ✨ Features

### 🎨 Frontend

- **Modern Design** - Clean, responsive UI with dark/light theme support
- **Smooth Animations** - Powered by Framer Motion and Tailwind CSS
- **Mobile-First** - Fully responsive design for all devices
- **SEO Optimized** - Built-in metadata and social media optimization
- **Performance** - Optimized images, lazy loading, and fast page loads

### 🛠️ Admin Panel

- **Dashboard Analytics** - Real-time visitor statistics and charts
- **Project Management** - Create, edit, and delete portfolio projects
- **Profile Management** - Update personal information and social links
- **Secure Authentication** - Password-protected admin access
- **Settings Panel** - Customize site preferences and notifications

### 🔧 Technical Features

- **Type-Safe** - Full TypeScript implementation
- **Database** - PostgreSQL with Prisma ORM
- **Authentication** - JWT-based session management
- **API Routes** - RESTful API with Next.js App Router
- **Form Validation** - Zod schema validation
- **Toast Notifications** - User feedback system

## 🛠️ Tech Stack

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Backend & Database

- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Prisma Postgres](https://www.prisma.io/postgres)** - Managed database service

### Authentication & Security

- **[JSON Web Tokens](https://jwt.io/)** - Secure token-based authentication
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** - Password hashing
- **HTTP-only Cookies** - Secure session storage

### Development Tools

- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Prettier](https://prettier.io/)** - Code formatting

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended) or npm
- **PostgreSQL** database

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shahriar-ridom/my-new-portfolio.git
   cd my-new-portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your configuration:

   ```env
   # Database
   DATABASE_URL="your_postgresql_database_url"
   DIRECT_URL="your_direct_database_url"

   # Authentication
   ADMIN_PASSWORD="your_secure_admin_password"
   JWT_SECRET="your_jwt_secret_key_min_32_characters"
   ```

4. **Set up the database**

   ```bash
   pnpm prisma generate
   pnpm prisma db push
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── admin/             # Admin panel pages
│   │   ├── api/               # API routes
│   │   ├── login/             # Authentication page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── admin/             # Admin-specific components
│   │   ├── layout/            # Layout components
│   │   ├── sections/          # Page sections
│   │   └── ui/                # Reusable UI components
│   ├── contexts/              # React contexts
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   └── images/                # Static images
├── prisma/                    # Database schema
├── docs/                      # Documentation
└── public/                    # Static assets
```

## 🎯 Usage

### Admin Panel Access

1. **Navigate to Admin**

   - Click "Admin" in the main header, or
   - Go directly to `/login`

2. **Login**

   - Enter your admin password
   - Session lasts 7 days

3. **Manage Content**
   - **Dashboard**: View analytics and quick actions
   - **Projects**: Add, edit, or delete portfolio projects
   - **Profile**: Update personal information
   - **Settings**: Configure preferences

### Adding Projects

1. Go to **Admin → Projects**
2. Click **"Add Project"**
3. Fill in the project details:
   - Title and description
   - Image, live URL, and GitHub URL
   - Technology tags
4. Click **"Create Project"**

### Updating Profile

1. Go to **Admin → Profile**
2. Update your information:
   - Personal details
   - Professional title and about section
   - Social media links
3. Click **"Update Profile"**

## 🔐 Security Features

- **Password Protection** - Admin panel secured with environment variable password
- **JWT Authentication** - Secure token-based session management
- **HTTP-only Cookies** - Session tokens stored securely
- **Route Protection** - Middleware protects admin routes
- **API Security** - All write operations require authentication
- **Environment Variables** - Sensitive data stored securely

## 📊 Analytics Dashboard

The admin panel includes a comprehensive analytics dashboard featuring:

- **Real-time Statistics** - Visitor counts, page views, and conversion rates
- **Interactive Charts** - Visual representation of traffic data
- **Recent Activity** - Latest site activities and updates
- **Quick Actions** - Fast access to common admin tasks

## 🎨 Customization

### Themes

- Built-in dark/light theme toggle
- Customizable color schemes via Tailwind CSS
- Automatic system theme detection

### Styling

- Modify `tailwind.config.ts` for custom themes
- Update component styles in respective files
- Global styles in `src/app/globals.css`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect GitHub repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Automatic deployments on push

### Other Platforms

1. **Build the project**

   ```bash
   pnpm build
   ```

2. **Start production server**
   ```bash
   pnpm start
   ```

## 📝 Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `pnpm dev`       | Start development server |
| `pnpm build`     | Build for production     |
| `pnpm start`     | Start production server  |
| `pnpm lint`      | Run ESLint               |
| `pnpm typecheck` | Check TypeScript types   |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vercel** for the amazing Next.js framework
- **Radix UI** for accessible components
- **Tailwind CSS** for utility-first styling
- **Prisma** for the excellent ORM

## 📞 Contact

**Shahriar Ridom**

- **Portfolio**: [https://shahriardev.me](https://shahriardev.me)
- **GitHub**: [@shahriar-ridom](https://github.com/shahriar-ridom)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/shahriar-ridom)
- **Email**: shahriarridom.info@gmail.com

---

<div align="center">
  <p>Built with ❤️ using Next.js and TypeScript</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
