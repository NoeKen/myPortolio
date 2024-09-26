// app/layout.js
import './globals.css';
import './animations.css';
import NavBar from '@/app/[components]/navBar';
import Header from '@/app/[components]/Header';
import Footer from '@/app/[components]/footer/Footer';

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
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
