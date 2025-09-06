import React from 'react';

const WarriorHacks: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#F2EDA8', color: '#000000', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#FAE100', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#EAAB00' }}>Warrior Hacks</h1>
        <p>Welcome to the University of Waterloo's student hackathon!</p>
      </header>
      <main style={{ padding: '20px' }}>
        <section id="about">
          <h2>About the Event</h2>
          <p>Join us for an exciting hackathon where students from all disciplines come together to innovate and create amazing projects.</p>
        </section>
        <section id="schedule">
          <h2>Schedule</h2>
          <p>Stay tuned for the event schedule and updates.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>For more information, please contact us at hackathon@uwaterloo.ca.</p>
        </section>
      </main>
      <footer style={{ backgroundColor: '#FED34C', textAlign: 'center', padding: '10px', position: 'fixed', width: '100%', bottom: '0' }}>
        <p>&copy; 2025 University of Waterloo</p>
      </footer>
    </div>
  );
};

export default WarriorHacks;
