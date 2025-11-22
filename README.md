#  Heart Disease Prediction - Frontend

A modern, responsive React web application for predicting heart disease risk using machine learning. The frontend provides an intuitive interface for users to input clinical parameters and receive risk assessments in real-time.

## ✨ Features

- **Interactive Form**: User-friendly form with tooltips explaining each medical parameter
- **Real-time Predictions**: Instant heart disease risk assessment powered by machine learning
- **Modern UI**: Built with React and Tailwind CSS featuring:
  - Glassmorphism effects with backdrop blur
  - Smooth animations and transitions
  - Responsive design for all devices
  - Dark gradient theme (zinc to green color palette)
- **Educational Tooltips**: Hover over info icons to learn about each clinical parameter
- **Loading States**: Visual feedback during prediction processing
- **Error Handling**: Graceful error messages for network issues

## Tech Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite (using rolldown-vite for faster builds)
- **Styling**: Tailwind CSS 4.1.14
- **Routing**: React Router DOM 7.9.3
- **HTTP Client**: Axios 1.12.2
- **Icons**: Lucide React
- **Linting**: ESLint with React plugins

## Prerequisites

Before running this project, ensure you have:

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Installation

1. **Clone the repository** (if not already cloned):
   ```bash
   git clone <repository-url>
   cd Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_API_URL=https://heart-disease-backend-4-g3m1.onrender.com
   ```

## 🎯 Usage

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
Frontend/
├── public/              # Static assets
│   └── profile.jpg      # Profile image for navbar
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/
│   │   ├── Background.jsx   # Main layout with navbar and footer
│   │   └── HeartForm.jsx    # Heart disease prediction form
│   ├── api.js           # API service for backend communication
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── .env                 # Environment variables (not tracked)
├── .gitignore          # Git ignore rules
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🎨 Component Overview

### `Background.jsx`
- Main layout component with navbar and footer
- Sticky navbar with scroll effects
- Animated heart logo
- Footer with copyright and GitHub link

### `HeartForm.jsx`
- Comprehensive form for heart disease prediction
- 11 input fields for clinical parameters:
  - Age, Sex, Chest Pain Type
  - Resting BP, Cholesterol, Fasting Blood Sugar
  - Resting ECG, Max Heart Rate, Exercise Angina
  - Oldpeak, ST Slope
- Info tooltips for each parameter
- Visual prediction results with color-coded risk levels
- "About This Tool" section with disclaimer

### `api.js`
- API service layer for backend communication
- Handles POST requests to prediction endpoint
- Error handling and response parsing

## 🌐 API Integration

The frontend communicates with a backend API hosted at:
```
Create your own or find the API .
```

### Request Format
```json
{
  "Age": 45,
  "Sex": "M",
  "ChestPainType": "ATA",
  "RestingBP": 120,
  "Cholesterol": 200,
  "FastingBS": 0,
  "RestingECG": "Normal",
  "MaxHR": 150,
  "ExerciseAngina": "N",
  "Oldpeak": 1.0,
  "ST_Slope": "Up"
}
```

### Response Format
```json
{
  "prediction": "Low Risk for Heart Disease"
}
```

## 🎨 Design System

### Color Palette
- **Background**: Gradient from zinc-950 → zinc-900 → zinc-800
- **Primary Accent**: Green (green-400, green-500)
- **Success**: Green tones for low risk
- **Warning**: Red tones for high risk
- **Error**: Yellow tones for errors

### Styling Approach
- Glassmorphism with `backdrop-blur`
- Semi-transparent backgrounds with `bg-white/10`
- Smooth transitions on all interactive elements
- Responsive design with Tailwind breakpoints

## 🔒 Important Notes

- This application is for **educational purposes only**
- Always consult healthcare professionals for medical advice
- The prediction model is not a substitute for professional medical diagnosis

## 👨‍💻 Developer

**Kapil Singh**
- GitHub: [@kapilsingh09](https://github.com/kapilsingh09)

## 📄 License

This project is private and not licensed for public distribution.

## 🤝 Contributing

This is a personal project. For suggestions or issues, please contact the developer directly.

---

Made with ❤️ by Kapil Singh
