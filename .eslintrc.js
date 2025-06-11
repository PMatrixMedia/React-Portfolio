
export default {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended" // Or other React configurations like "airbnb"
      ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2020, // Or newer
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
      "settings": {
        "react": {
          "version": "detect" // Automatically detect the React version
        }
      },
      "rules": {
        // Ensure this rule is enabled:
        "react/jsx-uses-vars": "error", // Or "warn"
    
        // For the 'React' variable and new JSX transform (React 17+):
        // "react/react-in-jsx-scope": "off",
        // "react/jsx-uses-react": "off",
    
        // If you are NOT using the new JSX transform, you might need:
        // "react/jsx-uses-react": "error", // Or "warn"
        // "react/react-in-jsx-scope": "error", // Or "warn"
    
        // Keep your existing no-unused-vars, but jsx-uses-vars helps it
        "no-unused-vars": "warn" // Or "error"
        // ... other rules
      }
    }