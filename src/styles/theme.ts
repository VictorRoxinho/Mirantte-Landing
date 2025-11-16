export const theme = {
  colors: {
    // Cores Principais — Amber (CTAs principais)
    primary: {
      main: '#d97706',
      hover: '#b45309',
      light: '#fef3c7',
      gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
    },

    // Cores Secundárias — Emerald (WhatsApp, sucesso)
    secondary: {
      main: '#059669',
      hover: '#047857',
      light: '#d1fae5',
    },

    // Cores Neutras — Cinzas (texto e fundo)
    neutral: {
      900: '#171717',
      800: '#262626',
      600: '#525252',
      50: '#fafafa',
      white: '#ffffff',
    },

    // Cores de Apoio
    blue: '#2563eb',
    orange: {
      light: '#fed7aa',
      50: '#fff7ed',
    },
  },

  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },

  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
    xxxl: '6rem',
  },

  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },

  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
  },
};

export type Theme = typeof theme;
