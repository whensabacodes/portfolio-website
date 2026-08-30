import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { MotionProvider } from './components/motion/MotionProvider';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MotionProvider>
          <AppRoutes />
        </MotionProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
