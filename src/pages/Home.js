import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = `Home`;
  }, []);

  function calculateAge(yearOfBirth) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - yearOfBirth;
    return age;
  }

  // Example usage:
  var yearOfBirth = 2002;
  var age = calculateAge(yearOfBirth);

  return (
    <section className="section">
      <h1 className="section-title">Selamat Datang</h1>
      <p className="section-description">
        Halo semua, nama saya yani ami, umur {age} tahun. Ini website baru aku.
        Kamu bisa mendapatkan informasi seputar profileku disini.
      </p>
    </section>
  );
}
