# Obinta Sacco Website

A modern, responsive website for Obinta Sacco - a Savings and Credit Cooperative Organization.

## Features

- 🏠 **Home Page** - Welcoming hero section with call-to-action buttons
- 📖 **About Section** - Information about the Sacco with key statistics
- 💼 **Services** - Detailed information about savings, loans, digital banking, and financial education
- 👥 **Membership** - Benefits and requirements for becoming a member
- 📞 **Contact** - Contact information and inquiry form
- 📱 **Responsive Design** - Fully responsive and mobile-friendly
- 🎨 **Modern UI** - Clean, professional design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
obinta-sacco/
├── public/          # Static assets
├── src/
│   ├── App.jsx      # Main application component
│   ├── App.css      # App-specific styles
│   ├── index.css    # Global styles
│   └── main.jsx     # Application entry point
├── index.html       # HTML template
└── package.json     # Project dependencies
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern CSS features

## Customization

You can customize the website by:

- Updating contact information in `src/App.jsx`
- Modifying colors in `src/index.css` (CSS variables in `:root`)
- Adding new sections or components
- Updating content and statistics

## License

This project is created for Obinta Sacco.
