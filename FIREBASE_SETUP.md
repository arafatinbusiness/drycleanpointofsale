# Firebase Setup Guide for Dry Cleaning POS Booking System

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Enter project name: `dryclean-pos-bookings` (or your preferred name)
4. Follow the setup wizard (Google Analytics is optional)

## Step 2: Enable Firestore Database

1. In your Firebase project, go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select your preferred location

## Step 3: Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Web" icon (`</>`)
4. Register app with name: `DryClean POS Website`
5. Copy the configuration object

## Step 4: Update Environment Variables

Replace the placeholder values in `.env.local` with your actual Firebase config:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=your-actual-app-id
```

## Step 5: Set Up Security Rules (Optional but Recommended)

In Firestore Database > Rules, update to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to bookings collection
    match /bookings/{document} {
      allow read, write: if true;
    }
  }
}
```

## Step 6: Test the System

1. Restart your development server: `npm run dev`
2. Visit `http://localhost:3003`
3. Test the booking form
4. Check admin dashboard at `http://localhost:3003/admin/bookings`

## Firebase Configuration Example:

Your Firebase config from the console will look like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "dryclean-pos-bookings.firebaseapp.com",
  projectId: "dryclean-pos-bookings",
  storageBucket: "dryclean-pos-bookings.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789"
};
```

## Troubleshooting:

- **Firebase not connecting**: Check if environment variables are correctly set
- **Permission denied**: Verify Firestore security rules
- **Module not found**: Ensure Firebase is installed (`npm install firebase`)

## Next Steps for Production:

1. Set up proper Firestore security rules
2. Enable Firebase Authentication if needed
3. Set up Firebase Hosting for deployment
4. Configure custom domain

Your booking system is now ready to use with your Firebase project!
