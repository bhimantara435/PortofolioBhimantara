import { FaArrowRight, FaDownload, FaEnvelope, FaGithub } from "react-icons/fa";
import { listProyek, listSertifikat, listTools, socialLinks } from "./data";

const App = () => {
  return (
    <main className="overflow-hidden bg-[#050816] text-white">
      <section id="beranda" className="section-padding pt-36">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
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
                  href="/assets/CV Muhammad Bhimantara Wira Eka Putra -- (1).pdf"
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

            <div className="relative">
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
            <div className="glass-card">
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

            <div className="glass-card">
              <p className="section-subtitle">Pendidikan & Pengalaman</p>
              <div className="mt-6 space-y-5">
                <div className="timeline-card">
                  <span>2023 - Sekarang</span>
                  <h3>Politeknik Negeri Malang</h3>
                  <p>D-IV Sistem Informasi Bisnis</p>
                </div>
                <div className="timeline-card">
                  <span>2020 - 2023</span>
                  <h3>SMKN 1 Wonorejo</h3>
                  <p>Teknik Komputer dan Jaringan</p>
                </div>
                <div className="timeline-card">
                  <span>2022</span>
                  <h3>Praktik Kerja Industri</h3>
                  <p>Universitas Yudharta Pasuruan</p>
                </div>
                <div className="timeline-card">
                  <span>2021 - 2022</span>
                  <h3>On Job Training</h3>
                  <p>CV Planet Solusindo Pasuruan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="section-subtitle">Tools & Skills</p>
            <h2 className="section-title">
              Teknologi yang <span className="gradient-text">Saya Gunakan</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {listTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.name} className="tool-card">
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
          <div className="mb-10 text-center">
            <p className="section-subtitle">Sertifikat</p>
            <h2 className="section-title">
              Sertifikat & <span className="gradient-text">Pencapaian</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listSertifikat.map((item) => (
              <a
                key={item.title}
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="project-card group"
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
          <div className="mb-10 text-center">
            <p className="section-subtitle">Portfolio Project</p>
            <h2 className="section-title">
              Project yang <span className="gradient-text">Saya Kerjakan</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {listProyek.map((project) => (
              <div key={project.title} className="project-card">
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
          <div className="glass-card">
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
                  href="mailto:bhimantara.bhima21@gmail.com"
                  className="mt-8 inline-flex items-center gap-3 text-cyan-400"
                >
                  <FaEnvelope /> bhimantara.bhima21@gmail.com
                </a>

                <div className="mt-6 flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg transition hover:text-cyan-400"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>

              <form className="space-y-4">
                <input className="form-input" type="text" placeholder="Nama Lengkap" />
                <input className="form-input" type="email" placeholder="Email" />
                <textarea className="form-input min-h-36" placeholder="Pesan"></textarea>
                <button type="button" className="btn-primary w-full justify-center">
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

