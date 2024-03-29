# johnsapan.com

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://vercel.com/postgres)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

This application requires Node.js v18.17+.

```bash
git clone https://github.com/johnsapan/portfolio.git
cd portfolio
bun install
bun dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/JohnSapan/portfolio/blob/main/portfolio/.env.example).

## Database Schema

```sql
CREATE TABLE IF NOT EXISTS redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS guestbook (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_by VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT NOT NULL
);

CREATE TABLE IF NOT EXISTS views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT NOT NULL
);

CREATE TABLE IF NOT EXISTS emails (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    from_email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    date TIMESTAMP NOT NULL
);

```

## License

1. You are free to use this code as inspiration.
2. Please do not copy it directly.
3. Crediting the author is appreciated.