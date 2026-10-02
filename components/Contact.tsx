import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0a0b18]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#13142b] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 border border-[#1e1f35] relative overflow-hidden">

          {/* Purple glow top-right */}
          <div
            className="absolute -top-20 -right-20 w-48 h-48 sm:w-64 sm:h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #7c3aed22, transparent 70%)" }}
          />

          <div className="text-center mb-10 sm:mb-12 relative z-10">
            <p className="text-[#8b5cf6] text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-3">
              LET&apos;S CONNECT
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">
                Together
              </span>
            </h2>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-16 justify-center mb-10 sm:mb-12 text-center sm:text-left relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center sm:justify-start">
              <div className="w-8 h-8 relative">
                <Image src="/email.png" alt="Email" width={32} height={32} className="object-contain" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest">EMAIL</p>
                <a
                  href="mailto:kavindusasmitha20@gmail.com"
                  className="text-sm sm:text-base text-white hover:text-[#8b5cf6] transition-colors"
                >
                  kavindusasmitha20@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center sm:justify-start">
              <div className="w-8 h-8 relative">
                <Image src="/phone.png" alt="Phone" width={32} height={32} className="object-contain" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest">PHONE / WHATSAPP</p>
                <a href="tel:+94772312420" className="text-sm sm:text-base text-white hover:text-[#8b5cf6] transition-colors">
                  +94 77 231 2420
                </a>
              </div>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 relative z-10">
            {[
              { href: "https://github.com/kavindu-sasmitha", src: "/git.png", label: "GitHub" },
              { href: "https://www.linkedin.com/in/kavindu-sasmitha-6198b8296/", src: "/linkdin.png", label: "LinkedIn" },
              { href: "https://wa.me/94772312420", src: "/whats.png", label: "WhatsApp" },
              { href: "https://www.facebook.com/share/1Ds6T2NQy3/", src: "/fb.png", label: "Facebook" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 bg-[#0d0e1a] hover:bg-[#7c3aed]/15 hover:border-[#7c3aed]/50 border border-[#1e1f35] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all text-xs sm:text-sm font-medium"
              >
                <Image src={s.src} alt={s.label} width={20} height={20} className="object-contain sm:w-6 sm:h-6" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}