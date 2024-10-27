// app/layout.js
import NavBar from './[components]/navBar/navBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './animations.css';
import './globals.css';


export const metadata = {
  title: 'Portfolio - Aurel Noe Kenfack',
  description: 'Portfolio de développeur web avec un design moderne.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="content-wrapper">
          <NavBar />
          {/* <Header /> */}
          <main className="main-content">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
