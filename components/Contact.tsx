import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#0d130d]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#111a0f] text-white rounded-3xl p-10 md:p-16 border border-[#1e2e1e]">
          
          <div className="text-center mb-12">
            <p className="text-[#7aba3a] text-sm font-bold uppercase tracking-widest mb-3">
              LET&apos;S CONNECT
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Work Together
            </h2>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center mb-12 text-center md:text-left">
            {/* Email */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-8 h-8 relative">
                <Image 
                  src="/email.png" 
                  alt="Email" 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 tracking-widest">EMAIL</p>
                <a
                  href="mailto:kavindu@example.com"
                  className="text-white hover:text-[#7aba3a] transition-colors"
                >
                  kavindu@example.com
                </a>
              </div>
            </div>

            {/* Phone / WhatsApp */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-8 h-8 relative">
                <Image 
                  src="/phone.png" 
                  alt="Phone" 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 tracking-widest">PHONE / WHATSAPP</p>
                <a
                  href="tel:+94772312420"
                  className="text-white hover:text-[#7aba3a] transition-colors"
                >
                  +94 77 231 2420
                </a>
              </div>
            </div>
          </div>

          {/* Social Buttons with Image Icons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/kavindu-sasmitha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1a2519] hover:bg-[#7aba3a]/10 hover:border-[#7aba3a] border border-[#1e2e1e] px-6 py-3 rounded-2xl transition-all text-sm font-medium"
            >
              <Image 
                src="/git.png" 
                alt="GitHub" 
                width={24} 
                height={24}
                className="object-contain"
              />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kavindu-sasmitha-6198b8296/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1a2519] hover:bg-[#7aba3a]/10 hover:border-[#7aba3a] border border-[#1e2e1e] px-6 py-3 rounded-2xl transition-all text-sm font-medium"
            >
              <Image 
                src="/linkdin.png" 
                alt="LinkedIn" 
                width={24} 
                height={24}
                className="object-contain"
              />
              LinkedIn
            </a>

            <a
              href="https://wa.me/94772312420"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1a2519] hover:bg-[#7aba3a]/10 hover:border-[#7aba3a] border border-[#1e2e1e] px-6 py-3 rounded-2xl transition-all text-sm font-medium"
            >
              <Image 
                src="/whats.png" 
                alt="WhatsApp" 
                width={24} 
                height={24}
                className="object-contain"
              />
              WhatsApp
            </a>

            <a
              href="https://www.facebook.com/share/1Ds6T2NQy3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1a2519] hover:bg-[#7aba3a]/10 hover:border-[#7aba3a] border border-[#1e2e1e] px-6 py-3 rounded-2xl transition-all text-sm font-medium"
            >
              <Image 
                src="/fb.png" 
                alt="Facebook" 
                width={24} 
                height={24}
                className="object-contain"
              />
              Facebook
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}