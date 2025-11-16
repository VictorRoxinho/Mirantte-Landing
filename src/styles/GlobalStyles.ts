import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1a1a1a;
    background-color: #ffffff;
    overflow-x: hidden;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  input, textarea {
    font-family: inherit;
  }
  
  ::selection {
    background-color: #fef3c7;
    color: #b45309;
  }

  /* Animações globais */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #b45309 0%, #d97706 100%);
  }

  /* Remove outline padrão mas mantém acessibilidade */
  *:focus-visible {
    outline: 2px solid #d97706;
    outline-offset: 2px;
  }

  /* Smooth transitions para elementos interativos */
  a, button, input, textarea, select {
    transition: all 0.3s ease;
  }
`;
