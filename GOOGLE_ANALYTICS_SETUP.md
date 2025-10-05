# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create an account name (e.g., "Dry Clean POS Website")
5. Set up a property:
   - Property name: "Dry Clean POS Website"
   - Reporting time zone: Choose your timezone
   - Currency: Choose your currency
6. Fill in business information
7. Accept the terms of service

## Step 2: Get Your Measurement ID

1. After creating the property, go to **Admin** (gear icon in bottom left)
2. Under "Property", click **Data Streams**
3. Click on your web data stream
4. Copy the **Measurement ID** (starts with `G-`)

## Step 3: Update Environment Variable

1. Open `.env.local` file
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Save the file

## Step 4: Test Your Setup

1. Restart your development server if it's running
2. Visit your website at `http://localhost:3001`
3. Go to Google Analytics → Reports → Realtime
4. You should see active users on your site

## What Gets Tracked Automatically

- Page views
- User sessions
- Device information
- Geographic location
- Traffic sources
- User behavior

## Additional Tracking (Optional)

You can add custom event tracking for:
- Form submissions
- Button clicks
- Service page visits
- ROI calculator usage
- Booking widget interactions

## Troubleshooting

- If you don't see data in Google Analytics, wait 24-48 hours for initial data processing
- Make sure your Measurement ID is correct
- Check that the environment variable is properly set
- Verify the website is publicly accessible for production tracking

## Production Deployment

When you deploy to production, make sure to:
1. Set the same environment variable on your hosting platform
2. Update your website URL in Google Analytics property settings
3. Verify the tracking is working in production
