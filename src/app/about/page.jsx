// app/about/page.js
export default function About() {
    return (
      <section style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>À propos de moi</h1>
        <p style={{ fontSize: '1.2rem', color: '#333' }}>
          Je suis développeur Power Apps junior avec plus de 3 ans d&apos;expérience dans le développement d&apos;applications web 
          et mobiles. Je me spécialise dans les solutions Microsoft Power Platform, notamment dans la création 
          d&apos;interfaces utilisateur intuitives et l&apos;automatisation de processus métier.
        </p>
        <h2 style={{ fontSize: '2rem', marginTop: '2rem' }}>Formation</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li><strong>Microsoft Power Apps Maker</strong> - Microsoft Learn (Depuis Mars 2024)</li>
          <li><strong>Baccalauréat en Informatique</strong> - Université de Yaoundé I, Cameroun (Juillet 2022)</li>
        </ul>
        <h2 style={{ fontSize: '2rem', marginTop: '2rem' }}>Compétences</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li>Power Apps, Power Automate, SharePoint, Dataverse</li>
          <li>React, Node.js, JavaScript</li>
          <li>Adobe Photoshop, Figma</li>
        </ul>
      </section>
    );
  }
  