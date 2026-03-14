# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- Responsive design with dark theme
- Contact form with email functionality
- Smooth animations with Framer Motion
- Modern UI components with Radix UI

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up EmailJS for contact form:
   - Go to [EmailJS](https://www.emailjs.com/) and create an account
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
     - `{{to_email}}` - Your email address
   - Copy your Service ID, Template ID, and Public Key

4. Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

## Build

```bash
npm run build
# or
pnpm build
```

## Deployment

This project is configured for deployment on Vercel. The contact form will work automatically once the EmailJS environment variables are set in your Vercel project settings.
