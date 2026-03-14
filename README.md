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

3. Set up EmailJS for contact form (Required for contact form to work):

   ### Step-by-Step EmailJS Setup:
   
   #### 1. Create EmailJS Account
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account
   
   #### 2. Add Email Service
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, Yahoo, etc.)
   - Connect your email account and verify the connection
   
   #### 3. Create Email Template
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Use these template variables in your email:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email address
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message content
     - `{{to_email}}` - Your email address
   
   - Example template subject: `{{subject}}`
   
   - Example template content:
     ```
     Hi,
     
     You have received a new message from your portfolio website:
     
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     Best regards,
     Portfolio Contact Form
     ```
   
   #### 4. Get Your Credentials
   - **Service ID**: Found in Email Services section (e.g., "service_xxxxx")
   - **Template ID**: Found in Email Templates section (e.g., "template_xxxxx")
   - **Public Key**: Found in Account → General settings (e.g., "xxxxxxxxxxxxxxx")
   
   #### 5. Configure Environment Variables in Vercel
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add these production environment variables:
     ```
     VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
     VITE_EMAILJS_SERVICE_ID=your_actual_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
     ```
   - **Important**: Make sure to set them for "Production", "Preview", and "Development" environments
   - Redeploy your application after adding the variables

4. Create a `.env` file in the root directory (for local development):
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
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
