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

      {/* Pricing */}
      <section>
        <h2>Pricing Plans</h2>

        <div>
          <h3>Basic</h3>
          <p>$5 / month</p>
          <ul>
            <li>1 Website</li>
            <li>5 GB Storage</li>
            <li>Free SSL</li>
          </ul>

          <button>Choose Plan</button>
        </div>

        <div>
          <h3>Pro</h3>
          <p>$15 / month</p>
          <ul>
            <li>10 Websites</li>
            <li>50 GB Storage</li>
            <li>24/7 Support</li>
          </ul>

          <button>Choose Plan</button>
        </div>

        <div>
          <h3>Enterprise</h3>
          <p>$30 / month</p>
          <ul>
            <li>Unlimited Websites</li>
            <li>Unlimited Storage</li>
            <li>Priority Support</li>
          </ul>

          <button>Choose Plan</button>
        </div>
      </section>

      <hr />

      {/* Testimonials */}
      <section>
        <h2>What Users Say</h2>

        <div>
          <p>
            "Amazing hosting platform. My website loads super fast now."
          </p>

          <h4>- Rahul</h4>
        </div>

        <div>
          <p>
            "Very easy deployment process and great support team."
          </p>

          <h4>- Priya</h4>
        </div>
      </section>

      <hr />

      {/* Contact */}
      <section>
        <h2>Contact Us</h2>

        <form>
          <input type="text" placeholder="Enter your name" />
          <br />
          <br />

          <input type="email" placeholder="Enter your email" />
          <br />
          <br />

          <textarea placeholder="Enter your message"></textarea>
          <br />
          <br />

          <button type="submit">Send Message</button>
        </form>
      </section>

      <hr />

      {/* Footer */}
      <footer>
        <p>© 2026 Hostify. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;