# KismayoBNB - Bed & Breakfast Booking Website

A modern, fully responsive booking website built with React and Tailwind CSS. This project creates a beautiful platform for browsing and booking unique stays and experiences worldwide.

## Features

✨ **Comprehensive Pages**

- **Stays** - Browse featured accommodations with search and filtering
- **Search** - Advanced search with filters, amenities, and ratings
- **Experiences** - Unique activities and experiences hosted by locals
- **Sign In** - User authentication with social login options
- **Create Account** - User registration with form validation
- **Contact** - Contact form and support information

🎨 **Design & UX**

- Modern, clean UI with Tailwind CSS
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional color scheme (Red accent, Gray neutral)
- Reusable components

⚡ **Technologies**

- React 18
- Vite (fast build tool)
- Tailwind CSS (utility-first CSS)
- React Router (page navigation)
- Lucide React (icons)

## Installation

1. **Clone or download this repository**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:3000` in your browser

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar
│   └── Footer.jsx      # Footer component
├── pages/
│   ├── Stay.jsx        # Stays listing page
│   ├── Search.jsx      # Search results page
│   ├── Experiences.jsx # Experiences page
│   ├── SignIn.jsx      # Login page
│   ├── CreateAccount.jsx # Registration page
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Tailwind styles
```

## Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS configuration
- `package.json` - Dependencies and scripts

## Features Breakdown

### Stays Page

- Hero section with large search bar
- Featured properties grid
- Amenity indicators
- Star ratings and reviews
- Category browsing

### Search Page

- Detailed search filters
- Price range slider
- Rating filters
- Amenity selection
- Room type filtering
- Properties with full details

### Experiences Page

- Unique activities showcase
- Category browsing
- Duration and group size info
- Rating and reviews

### Authentication Pages

- Email/password forms
- Social login buttons (Google, Apple)
- Form validation
- Responsive design

### Contact Page

- Contact information
- Message form
- Business hours
- FAQ section

## Customization

### Change Brand Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: "#YOUR_COLOR",
  secondary: "#YOUR_COLOR",
  accent: "#YOUR_COLOR"
}
```

### Update Content

All pages are easily editable React components. Replace placeholder images, text, and data as needed.

### Add More Routes

1. Create a new page in `src/pages/`
2. Import and add a Route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Fast load times with Vite
- Optimized images
- Code splitting with React Router
- Tailwind CSS purging for minimal CSS

## License

Created for demonstration purposes.

## Support

For issues or questions, contact us through the Contact page or email support@kismayobnb.com
