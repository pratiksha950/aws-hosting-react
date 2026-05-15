function App() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <h1>Hostify</h1>

        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>

      <hr />

      {/* Hero Section */}
      <section>
        <h1>Fast & Secure App Hosting</h1>

        <p>
          Deploy your websites and applications quickly with reliable cloud
          hosting.
        </p>

        <button>Start Hosting</button>
        <button>Learn More</button>
      </section>

      <hr />

      {/* Features */}
      <section>
        <h2>Our Features</h2>

        <div>
          <h3>Fast Deployment</h3>
          <p>Upload and launch your app in seconds.</p>
        </div>

        <div>
          <h3>Global CDN</h3>
          <p>Deliver content quickly around the world.</p>
        </div>

        <div>
          <h3>Free SSL</h3>
          <p>Secure your website with HTTPS encryption.</p>
        </div>

        <div>
          <h3>Cloud Storage</h3>
          <p>Reliable and scalable storage solutions.</p>
        </div>
      </section>

  


      <hr />


      <hr />

      {/* Footer */}
      <footer>
        <p>© 2026 Hostify. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;