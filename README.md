# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/18e8289a-6455-422e-8b9b-47a448c3b5f8

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/18e8289a-6455-422e-8b9b-47a448c3b5f8) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Via Lovable (Recommended)

Simply open [Lovable](https://lovable.dev/projects/18e8289a-6455-422e-8b9b-47a448c3b5f8) and click on Share → Publish.

### Option 2: Manual deployment to Vercel

#### Prerequisites
- A [Vercel account](https://vercel.com)
- This repository pushed to GitHub

#### Method A: Import from GitHub (Recommended)

1. **Visit Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click **"Import Project"** or **"New Project"**

2. **Import from Git**
   - Select **"Import Git Repository"**
   - Connect your GitHub account if not already done
   - Search for `rafaelbucher/access--lovable` or paste the repository URL
   - Click **"Import"**

3. **Configure Project**
   - **Project Name**: `access-plus` (or your preferred name)
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `.` (leave default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)

4. **Deploy**
   - Click **"Deploy"**
   - Wait for the build to complete (2-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

#### Method B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy from the project directory
cd /path/to/access+-loveable
vercel --prod
```

#### Automatic Deployments

Once connected to GitHub:
- Every push to the `master` branch triggers automatic deployment
- Pull requests create preview deployments
- Zero configuration needed for updates

#### Custom Domain (Optional)

1. In Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate is automatically provided

#### Project Configuration

The project includes optimized configuration files:
- `vercel.json` - Vercel deployment settings
- `vite.config.ts` - Vite build configuration
- SPA routing support for React Router

#### Build Process

Vercel will automatically:
1. Install dependencies (`npm install`)
2. Build the project (`npm run build`)
3. Serve static files from `dist/` folder
4. Handle SPA routing for React Router

#### Troubleshooting

If deployment fails:
1. Check build logs in Vercel Dashboard
2. Ensure all dependencies are in `package.json`
3. Verify build succeeds locally with `npm run build`
4. Check for TypeScript/ESLint errors

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
