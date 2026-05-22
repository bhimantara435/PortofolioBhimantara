import { socialLinks } from "../data";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#050816] py-8 text-white">
            <div className="container flex flex-col items-center justify-between gap-5 md:flex-row">
                <h2 className="text-xl font-bold">
                    Bhimantara<span className="text-cyan-400">.</span>
                </h2>

                <p className="text-sm text-slate-400">
                    © 2026 Muhammad Bhimantara Wira Eka Putra. All rights reserved.
                </p>

                <div className="flex gap-3">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:text-cyan-400"
                            >
                                <Icon />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;