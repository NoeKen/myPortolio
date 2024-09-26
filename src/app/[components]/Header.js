// app/components/Header.js
export default function Header() {
    return (
      <header className="header">
        <div className="profile-image-wrapper">
          <img src="/assets/profile.jpg" alt="Aurel Noe Kenfack" className="profile-image" />
        </div>
        <h1 className="header-title">Bonjour, je suis Aurel Noe Kenfack</h1>
        <p className="header-subtitle">Développeur Web et Power Apps basé à Montréal, Canada.</p>
      </header>
    );
  }
  