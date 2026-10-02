"use client";

/* ── SVG TECH LOGOS ─────────────────────────────────────── */
const logos: { name: string; color: string; svg: string }[] = [
  {
    name: "React",
    color: "#61DAFB",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13-1.2-21.2-7.2-24.7-3.8-2.2-8.4-1.7-13.3.7-2.7 1.3-5.3 3.1-7.9 5.3-1.6-1.4-3.2-2.7-4.9-3.9-5.2-3.6-10.6-5.4-15.2-4.3C46 9.7 41.7 14 39.5 20.6c-.9 2.7-1.3 5.7-1.3 8.8 0 1.6.1 3.2.3 4.8-2.6.7-5 1.5-7.2 2.3-16.6 6.4-26 16.9-26 28.5s9.4 22.1 26 28.4c2.2.8 4.6 1.5 7 2.1-.4 2.1-.7 4.3-.9 6.4-1.4 13.1 1.6 22.1 7.6 25.7 1.4.8 3 1.3 4.7 1.3 4.3 0 9.4-2.4 14.7-7.1 1.9-1.7 3.9-3.6 5.8-5.8 2 2.1 4 4 6.1 5.6 5.5 4.3 10.8 5.9 15.2 3.4 6.2-3.5 9.2-12.7 7.8-26-.2-1.8-.5-3.7-.9-5.6 2.5-.7 4.9-1.4 7.1-2.3 16.6-6.3 26-16.9 26-28.5-.1-11.5-9.5-22.1-26.1-28.4z"/></g></svg>`,
  },
  {
    name: "Next.js",
    color: "#ffffff",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6H35.1V40.6h28.7l67.5 78.2C116.4 113.5 91.4 128 64 128C28.7 128 0 99.3 0 64S28.7 0 64 0zm56.1 109.2L97.5 82.6V40.6h13.3v68.6z" fill="white"/></svg>`,
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="6" fill="#3178C6"/><path d="M68.7 79.1V86h-9.8V55.4H68v6.8a14.5 14.5 0 0 1 5.3-5.8 14.2 14.2 0 0 1 7.4-2c2.7 0 5 .6 6.9 1.7a10.9 10.9 0 0 1 4.4 5 19 19 0 0 1 1.5 7.8V86h-9.7V70.4a8.7 8.7 0 0 0-1.5-5.5 5.2 5.2 0 0 0-4.4-1.9 6.4 6.4 0 0 0-3.8 1.1 7 7 0 0 0-2.6 3 10 10 0 0 0-.9 4zm-28.2-17H27.6V55h37.3v6.9H52.3V86h-11.8V62.1z" fill="white"/></svg>`,
  },
  {
    name: "Node.js",
    color: "#339933",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.426 4.954 8.038l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 42 42.061 42 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L20.583 90.73c-.437-.214-.583-.795-.583-1.181V38.407c0-.424.45-.874.471-.874l43.07-25.342c.175-.109.687-.109.862 0l43.093 25.342c.232.152.638.544.638.874v51.142c0 .436-.161.968-.639 1.181l-43.093 25.465c-.248.135-.685.135-.858 0l-11.382-6.718c-.31-.182-.731-.194-1.048-.013-3.432 1.933-4.11 2.168-7.351 3.286-.815.285-2.032.711.46 2.104l14.896 8.8c1.404.807 2.949 1.23 4.555 1.23 1.6 0 3.195-.418 4.6-1.23l43.093-25.465c2.87-1.654 4.657-4.791 4.657-8.108V38.407c0-3.319-1.787-6.426-4.657-8.073z"/></svg>`,
  },
  {
    name: "Python",
    color: "#3776AB",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><linearGradient id="pyA" x1="70.252" y1="1237.476" x2="170.659" y2="1356.876" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 .568 -29.215 -701.17)"><stop offset="0" stop-color="#5A9FD4"/><stop offset="1" stop-color="#306998"/></linearGradient><linearGradient id="pyB" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 .568 -29.215 -701.17)"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE873"/></linearGradient><path fill="url(#pyA)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><path fill="url(#pyB)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/></svg>`,
  },
  {
    name: "Docker",
    color: "#2496ED",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#2496ED" d="M124.8 52.1c-2.2-1.5-7.2-2-11.1-1.2-.5-3.7-2.7-6.9-6.4-9.8l-2.2-1.5-1.5 2.2c-2 2.9-2.6 7.7-2.3 11.4-1.1-.6-3-1.5-4.4-2.1-2.9-1.2-5.9-1.8-8.9-1.8H8.8L8.3 51c-.5 8.1 2 16.5 6.5 22.4 5.2 6.7 12.9 10.2 22.8 10.2 21.4 0 37.3-9.9 44.8-27.9 2.9.1 9.2.1 12.4-6.1.2-.4.6-1.3.8-1.7l.3-.7-2.1-1.1zm-103 4H12V46.7h9.8V56zm13.3 0h-9.8V46.7H35V56zm13.3 0h-9.8V46.7h9.8V56zm13.3 0h-9.8V46.7H62V56zm-52.7-13.5h-9.8v-9.2h9.8v9.2zm13.3 0h-9.8v-9.2H35v9.2zm13.3 0h-9.8v-9.2h9.8v9.2zm13.3 0h-9.8v-9.2H62v9.2zm13.3 0h-9.8v-9.2h9.8v9.2z"/></svg>`,
  },
  {
    name: "VS Code",
    color: "#007ACC",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#0065A9" d="M90.767 127.126a10.273 10.273 0 01-10.035.105L4.34 78.894A10.204 10.204 0 010 70.5v-67c0-4.702 4.714-7.8 9.142-6.021L90.785.543a10.204 10.204 0 016.553 9.457v107.5a10.2 10.2 0 01-6.571 9.626z"/><path fill="#007ACC" d="M93.338 127.127a10.2 10.2 0 006.55-9.585V10.458A10.2 10.2 0 0093.338.873L25.915 64zM32.99 76.244L9.5 98.33l13.72 7.965 36.71-30.11zm.29-24.488L9.5 29.7 23.22 21.734l36.71 30.11z"/></svg>`,
  },
  {
    name: "Git",
    color: "#F05032",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.667 9.667 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.001 32.981a9.708 9.708 0 012.559 1.861c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.172 3.174 8.32 3.174 11.497 0l54.858-54.858a8.135 8.135 0 00.001-11.501z"/></svg>`,
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.745-12.207-8.66C55.128 71.371 47.868 64 32.004 64z" fill="#06B6D4"/></svg>`,
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#336791" d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.131-27.994"/></svg>`,
  },
  {
    name: "AWS",
    color: "#FF9900",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#F90" d="M40.258 55.676c0 1.452.156 2.626.428 3.491.303.865.7 1.807 1.262 2.826.197.312.275.624.275.905 0 .396-.236.793-.729 1.19l-2.416 1.608c-.345.228-.69.34-1.008.34-.39 0-.779-.196-1.164-.567a12.077 12.077 0 01-1.39-1.816 29.832 29.832 0 01-1.195-2.287c-3.001 3.547-6.779 5.32-11.333 5.32-3.24 0-5.824-.924-7.721-2.77-1.899-1.847-2.862-4.313-2.862-7.397 0-3.268 1.152-5.921 3.475-7.937 2.322-2.016 5.41-3.024 9.302-3.024 1.293 0 2.621.113 4.02.312 1.4.2 2.83.511 4.332.877v-2.749c0-2.861-.6-4.849-1.774-5.997-1.199-1.149-3.228-1.71-6.117-1.71-1.318 0-2.668.158-4.051.503a29.816 29.816 0 00-4.053 1.338c-.607.28-1.054.447-1.324.53a2.333 2.333 0 01-.638.115c-.558 0-.838-.396-.838-1.208v-1.9c0-.623.077-1.088.257-1.363.178-.274.501-.55.967-.822a19.98 19.98 0 014.666-1.706 22.536 22.536 0 015.712-.713c4.349 0 7.528.987 9.557 2.96 2.005 1.975 3.019 4.97 3.019 8.983v11.838zm-15.66 5.865c1.243 0 2.522-.228 3.869-.686 1.347-.456 2.546-1.282 3.562-2.428.6-.712 1.046-1.507 1.276-2.428.228-.92.367-2.03.367-3.323v-1.602a31.83 31.83 0 00-3.494-.65 28.578 28.578 0 00-3.572-.228c-2.548 0-4.413.5-5.68 1.52-1.267 1.02-1.888 2.454-1.888 4.32 0 1.764.45 3.078 1.363 3.967.891.91 2.188 1.338 3.197 1.338z"/></svg>`,
  },
  {
    name: "Figma",
    color: "#F24E1E",
    svg: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#0ACF83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129z"/><path fill="#A259FF" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5z"/><path fill="#F24E1E" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5z"/><path fill="#FF7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67V0z"/><path fill="#1ABCFE" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5z"/></svg>`,
  },
];

/* ── SERVICE CARDS ───────────────────────────────────────── */
const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Frontend Development",
    desc: "Pixel-perfect UIs with React, Next.js & Tailwind CSS. Fast, accessible, and responsive across all devices.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind"],
    accent: "#7c3aed",
    gradient: "from-[#7c3aed]/15 to-[#3b82f6]/5",
    border: "border-[#7c3aed]/30",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Backend Engineering",
    desc: "Scalable REST & GraphQL APIs with Node.js, databases, auth, and cloud-ready deployments.",
    tools: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    accent: "#3b82f6",
    gradient: "from-[#3b82f6]/15 to-[#06B6D4]/5",
    border: "border-[#3b82f6]/30",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "UI / UX Design",
    desc: "Clean, modern interfaces with great user experience. End-to-end design using Figma and modern design systems.",
    tools: ["Figma", "React", "TypeScript", "Tailwind"],
    accent: "#a855f7",
    gradient: "from-[#a855f7]/15 to-[#7c3aed]/5",
    border: "border-[#a855f7]/30",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI / ML Integration",
    desc: "Intelligent AI & ML solutions integrated into real-world apps. Certified AI & ML Engineer with hands-on experience.",
    tools: ["Python", "Node.js", "AWS", "Docker"],
    accent: "#f59e0b",
    gradient: "from-[#f59e0b]/15 to-[#ef4444]/5",
    border: "border-[#f59e0b]/30",
  },
];

/* ── ORBIT UNIVERSE (properly centered) ──────────────────── */
function OrbitUniverse() {
  const SIZE = 420;      // total canvas size
  const CX = SIZE / 2;  // center x
  const CY = SIZE / 2;  // center y

  const rings = [
    { r: 100, items: logos.slice(0, 4),  dur: 20, rev: false, iconSz: 40 },
    { r: 158, items: logos.slice(4, 8),  dur: 32, rev: true,  iconSz: 36 },
    { r: 205, items: logos.slice(8, 12), dur: 46, rev: false, iconSz: 34 },
  ];

  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: SIZE, height: SIZE }}
    >
      <style>{`
        @keyframes spinCW  { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
        @keyframes spinCCW { from { transform: rotate(0deg); }   to { transform: rotate(-360deg); } }
        @keyframes counterCW  { from { transform: rotate(0deg); }   to { transform: rotate(-360deg); } }
        @keyframes counterCCW { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
        @keyframes coreGlow {
          0%,100% { box-shadow: 0 0 20px #7c3aed44, 0 0 50px #7c3aed1a; }
          50%      { box-shadow: 0 0 40px #7c3aed88, 0 0 80px #7c3aed33; }
        }
      `}</style>

      {/* Orbit ring tracks */}
      {rings.map((ring, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[#7c3aed]/10"
          style={{
            width: ring.r * 2,
            height: ring.r * 2,
            left: CX - ring.r,
            top: CY - ring.r,
          }}
        />
      ))}

      {/* Spinning rings with logos */}
      {rings.map((ring, ri) => (
        <div
          key={ri}
          className="absolute rounded-full"
          style={{
            width: ring.r * 2,
            height: ring.r * 2,
            left: CX - ring.r,
            top: CY - ring.r,
            animation: `${ring.rev ? "spinCCW" : "spinCW"} ${ring.dur}s linear infinite`,
          }}
        >
          {ring.items.map((item, ii) => {
            const count = ring.items.length;
            const angleDeg = (360 / count) * ii - 90; // start from top
            const angleRad = (angleDeg * Math.PI) / 180;
            // position on ring circumference
            const px = ring.r + ring.r * Math.cos(angleRad) - ring.iconSz / 2;
            const py = ring.r + ring.r * Math.sin(angleRad) - ring.iconSz / 2;

            return (
              <div
                key={item.name}
                className="absolute flex items-center justify-center rounded-full bg-[#13142b] border border-[#1e1f35] group cursor-default"
                style={{
                  width: ring.iconSz,
                  height: ring.iconSz,
                  left: px,
                  top: py,
                  // counter-rotate to keep icons upright
                  animation: `${ring.rev ? "counterCCW" : "counterCW"} ${ring.dur}s linear infinite`,
                  boxShadow: `0 0 10px ${item.color}33`,
                }}
                title={item.name}
              >
                <div
                  className="w-5 h-5"
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                />
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#13142b] border border-[#1e1f35] text-white text-[9px] px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      ))}

      {/* Center KS Core */}
      <div
        className="absolute flex flex-col items-center justify-center rounded-full border-2 border-[#7c3aed]/50 bg-gradient-to-br from-[#13142b] to-[#0d0e1a] z-20"
        style={{
          width: 100,
          height: 100,
          left: CX - 50,
          top: CY - 50,
          animation: "coreGlow 3s ease-in-out infinite",
        }}
      >
        <span className="text-2xl font-black text-white tracking-tighter">KS</span>
        <span className="text-[8px] text-[#8b5cf6] font-bold tracking-widest uppercase">Dev</span>
      </div>

      {/* Radial glow behind center */}
      <div
        className="absolute rounded-full pointer-events-none z-10"
        style={{
          width: 180,
          height: 180,
          left: CX - 90,
          top: CY - 90,
          background: "radial-gradient(circle, #7c3aed11 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ── MAIN COMPONENT ──────────────────────────────────────── */
export default function Services() {
  return (
    <section id="services" className="bg-[#0d0e1a] py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#8b5cf6] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#3b82f6]">
              Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-[15px] leading-relaxed px-4">
            Full-stack solutions from pixel-perfect UIs to scalable backend systems — built with the tools I use every day.
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT: Orbit Universe — hidden on small mobile, shown from sm up */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="scale-75 sm:scale-90 lg:scale-100 origin-center">
              <OrbitUniverse />
            </div>
          </div>

          {/* RIGHT: Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1 w-full">
            {services.map((s) => (
              <div
                key={s.title}
                className={`relative rounded-2xl border ${s.border} bg-gradient-to-br ${s.gradient} backdrop-blur-sm p-6 group overflow-hidden transition-all duration-300 hover:-translate-y-1`}
                style={{ background: `linear-gradient(135deg, ${s.accent}18 0%, #13142b 100%)` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 30px ${s.accent}11` }}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${s.border}`}
                  style={{ background: `${s.accent}18`, color: s.accent }}
                >
                  {s.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed mb-4">{s.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {s.tools.map((t) => {
                    const logo = logos.find((l) => l.name === t);
                    return (
                      <span
                        key={t}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0d0e1a] border border-[#1e1f35] text-[11px] font-medium text-gray-300"
                      >
                        {logo && (
                          <span
                            className="w-3 h-3 inline-block flex-shrink-0"
                            dangerouslySetInnerHTML={{ __html: logo.svg }}
                          />
                        )}
                        {t}
                      </span>
                    );
                  })}
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-10 rounded-tr-2xl pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${s.accent}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}