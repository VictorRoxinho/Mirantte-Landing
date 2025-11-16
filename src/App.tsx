import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Typologies } from './sections/Typologies';
import { Amenities } from './sections/Amenities';
import { Gallery } from './sections/Gallery';
import { Location } from './sections/Location';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Typologies />
        <Amenities />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
