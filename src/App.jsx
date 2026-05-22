import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub } from "react-icons/fa";
import { listProyek, listSertifikat, listTools, socialLinks } from "./data";

const App = () => {
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white transition-colors duration-300 light:bg-slate-100 light:text-slate-900">
      {toast && (
        <div className="fixed right-5 top-5 z-[9999] w-[90%] max-w-sm rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-4 text-white shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
          <p
            className={
              toast.type === "success"
                ? "font-bold text-cyan-400"
                : "font-bold text-red-400"
            }
          >
            {toast.type === "success" ? "Berhasil" : "Gagal"}
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-300">
            {toast.message}
          </p>
        </div>
      )}

      <section id="beranda" className="section-padding pt-36">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="reveal reveal-delay-1">
              <div className="mb-6 flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`reveal reveal-delay-${(index % 4) + 1} grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400`}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>

              <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                UI/UX Designer • Front-End Developer • IT Enthusiast
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
                Hi, Saya <br />
                <span className="gradient-text">Bhimantara</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                Mahasiswa D-IV Sistem Informasi Bisnis Politeknik Negeri Malang,
                lulusan Teknik Komputer dan Jaringan, dengan minat pada UI/UX,
                front-end development, jaringan komputer, dan pengembangan
                sistem digital.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/assets/CV_Muhammad_Bhimantara_Wira_Eka_Putra.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <FaDownload /> Lihat CV
                </a>

                <a href="#proyek" className="btn-secondary">
                  Lihat Proyek <FaArrowRight />
                </a>
              </div>
            </div>

            <div className="relative reveal reveal-delay-2">
              <div className="absolute -inset-6 rounded-full bg-cyan-500/20 blur-3xl"></div>
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                <img
                  src="/assets/WhatsApp Image 2026-05-22 at 1.49.55 PM.jpeg"
                  alt="Bhimantara"
                  className="h-[460px] w-full rounded-[1.5rem] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="section-padding">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card reveal reveal-delay-1">
              <p className="section-subtitle">Tentang Saya</p>
              <h2 className="section-title">
                Mengenal <span className="gradient-text">Bhimantara</span>
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Saya memiliki kemampuan di bidang jaringan komputer dan
                teknologi informasi, termasuk troubleshooting, konfigurasi, dan
                instalasi jaringan. Saya juga terbiasa bekerja dalam tim,
                bertanggung jawab, komunikatif, serta memiliki ketertarikan pada
                desain antarmuka dan pengembangan website.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="stat-card">
                  <h3>4+</h3>
                  <p>Project</p>
                </div>
                <div className="stat-card">
                  <h3>5+</h3>
                  <p>Sertifikat</p>
                </div>
                <div className="stat-card">
                  <h3>2+</h3>
                  <p>Pengalaman</p>
                </div>
              </div>
            </div>

            <div className="glass-card reveal reveal-delay-2">
              <p className="section-subtitle">Pendidikan & Pengalaman</p>
              <div className="mt-6 space-y-5">
                {[
                  "Politeknik Negeri Malang",
                  "SMKN 1 Wonorejo",
                  "Praktik Kerja Industri",
                  "On Job Training",
                ].map((title, index) => (
                  <div
                    key={title}
                    className={`timeline-card reveal reveal-delay-${(index % 4) + 1}`}
                  >
                    <span>
                      {
                        ["2023 - Sekarang", "2020 - 2023", "2022", "2021 - 2022"][
                          index
                        ]
                      }
                    </span>
                    <h3>{title}</h3>
                    <p>
                      {
                        [
                          "D-IV Sistem Informasi Bisnis",
                          "Teknik Komputer dan Jaringan",
                          "Universitas Yudharta Pasuruan",
                          "CV Planet Solusindo Pasuruan",
                        ][index]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding">
        <div className="container">
          <div className="mb-10 text-center reveal">
            <p className="section-subtitle">Tools & Skills</p>
            <h2 className="section-title">
              Teknologi yang <span className="gradient-text">Saya Gunakan</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {listTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className={`tool-card reveal reveal-delay-${(index % 4) + 1}`}
                >
                  <Icon className="text-4xl text-cyan-400" />
                  <div>
                    <h3>{tool.name}</h3>
                    <p>{tool.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sertifikat" className="section-padding">
        <div className="container">
          <div className="mb-10 text-center reveal">
            <p className="section-subtitle">Sertifikat</p>
            <h2 className="section-title">
              Sertifikat & <span className="gradient-text">Pencapaian</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listSertifikat.map((item, index) => (
              <a
                key={item.title}
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className={`project-card group reveal reveal-delay-${(index % 4) + 1}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full rounded-2xl object-cover"
                />
                <div className="p-5">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-cyan-400">
                    Lihat Sertifikat →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="proyek" className="section-padding">
        <div className="container">
          <div className="mb-10 text-center reveal">
            <p className="section-subtitle">Portfolio Project</p>
            <h2 className="section-title">
              Project yang <span className="gradient-text">Saya Kerjakan</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {listProyek.map((project, index) => (
              <div
                key={project.title}
                className={`project-card reveal reveal-delay-${(index % 4) + 1}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full rounded-2xl object-cover"
                />

                <div className="p-5">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 px-5 py-3 text-sm font-semibold text-white"
                  >
                    <FaGithub /> Lihat GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="section-padding">
        <div className="container">
          <div className="glass-card reveal">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="section-subtitle">Kontak</p>
                <h2 className="section-title">
                  Mari <span className="gradient-text">Terhubung</span>
                </h2>
                <p className="mt-5 leading-8 text-slate-300">
                  Jika ingin berdiskusi, bekerja sama, atau melihat project saya
                  lebih lanjut, silakan hubungi saya melalui email atau social
                  media.
                </p>

                <a
                  href="mailto:bhimantarapolinema@gmail.com"
                  className="mt-8 inline-flex items-center gap-3 text-cyan-400"
                >
                  <FaEnvelope /> bhimantarapolinema@gmail.com
                </a>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.currentTarget;

                  emailjs
                    .sendForm(
                      "service_z8z8nmq",
                      "template_7pxcga6",
                      form,
                      "oJJjDPThzqjoK1j0w"
                    )
                    .then(() => {
                      showToast("success", "Pesan berhasil dikirim!");
                      form.reset();
                    })
                    .catch((error) => {
                      console.log("EMAILJS ERROR:", error);
                      showToast(
                        "error",
                        error.text ||
                          error.message ||
                          "Pesan gagal dikirim. Coba lagi."
                      );
                    });
                }}
              >
                <input
                  name="name"
                  className="form-input"
                  type="text"
                  placeholder="Nama Lengkap"
                  required
                />

                <input
                  name="email"
                  className="form-input"
                  type="email"
                  placeholder="Email"
                  required
                />

                <textarea
                  name="message"
                  className="form-input min-h-36"
                  placeholder="Pesan"
                  required
                ></textarea>

                <input
                  type="hidden"
                  name="title"
                  value="Pesan dari Website Portfolio"
                />

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;