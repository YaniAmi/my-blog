import { useEffect } from "react";

export default function Contact() {
  useEffect(function () {
    document.title = `Contact`;
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-description">
        Kamu dapat menghubungiku di bawah ini:
      </p>
      <ul>
        <li>WA: 085226368302</li>
        <li>Email: yaniamiatun21@gmail.com</li>
      </ul>
      <p>Atau kamu dapat melihatku di sosmed:</p>
      <ul>
        <li>
          <a href="https://www.instagram.com/">Instagram</a>
        </li>
        <li>
          <a href="https://twitter.com/">Twitter</a>
        </li>
      </ul>
    </section>
  );
}
