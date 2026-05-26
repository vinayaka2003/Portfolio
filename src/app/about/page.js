"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stack = [
  {
    category: "Languages",
    items: [
      {
        name: "Python",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "SQL",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "FastAPI",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Firebase",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    category: "AI / ML",
    items: [
      {
        name: "PyTorch",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "Scikit-learn",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "NumPy",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      },
      {
        name: "Pandas",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
      },
      {
        name: "OpenAI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "Docker",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
    ],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function TechCard({ name, logo }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -4,
      }}
      className="
      group
      relative
      flex
      flex-col
      items-center
      justify-center
      gap-3
      w-[105px]
      p-5
      rounded-2xl
      border
      border-border
      bg-surface
      backdrop-blur-xl
      hover:bg-surface-hover
      hover:border-foreground/20
      transition-all
      duration-300
      "
    >
      <img
        src={logo}
        alt={name}
        width={34}
        height={34}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      <span className="text-[11px] text-muted text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
}

function StackCategory({ category, items }) {
  return (
    <motion.div variants={fadeUp}>
      <p className="text-[11px] uppercase tracking-[0.25em] text-muted mb-5">
        {category}
      </p>

      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <TechCard key={item.name} {...item} />
        ))}
      </div>
    </motion.div>
  );
}

export default function AboutClient() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)] bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_40%)]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-10 border-b border-border">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-6xl mx-auto w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface backdrop-blur-xl mb-10">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />

            <span className="text-sm text-muted">
              Building AI-powered software
            </span>
          </div>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-semibold
            leading-[0.95]
            tracking-tight
            max-w-5xl
            mb-8
            "
          >
            I&apos;m Vinayaka.
            <br />
            I build AI-powered software.
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            MCA student &middot; Python &middot; JavaScript &middot; AI &amp;
            automation
          </p>
        </motion.div>
      </section>

      {/* BIO */}
      <section className="relative px-6 md:px-10 py-32 border-b border-border">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted mb-8">
            Bio
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                Building practical systems,
                <br />
                not just learning tools.
              </h2>
            </div>

            <div className="space-y-6 text-muted text-[17px] leading-relaxed">
              <p>
                I started with one question — how does software actually work?
                That pulled me through Python, into web development, and
                eventually into AI systems. Now I&apos;m an MCA student focused
                on building real products, not just learning tools.
              </p>

              <p>
                My goal is to build a self-funded SaaS company. I&apos;m working
                toward that by shipping things, learning what breaks, and
                improving. I&apos;m also exploring NLP for Kannada — an area
                that&apos;s genuinely underserved.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* STACK */}
      <section className="relative px-6 md:px-10 py-32 border-b border-border">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-16">
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted mb-4">
              Stack
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Technologies I use to build products.
            </h2>
          </div>

          <div className="space-y-14">
            {stack.map((group) => (
              <StackCategory key={group.category} {...group} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="relative px-6 md:px-10 py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto"
        >
          <div
            className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-border
            bg-surface
            backdrop-blur-2xl
            p-10
            md:p-16
            "
          >
            <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-white/[0.03] bg-gradient-to-br from-black/[0.03] to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                  Let&apos;s connect.
                </h2>

                <p className="text-muted text-lg max-w-xl">
                  Interested in AI, automation, and building useful software.
                </p>
              </div>

              <Link
                href="/contact"
                className="
                group
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden
                px-6
                py-3
                rounded-2xl
                border
                border-gray-200
                dark:border-border
                bg-white
                dark:bg-surface
                text-sm
                font-medium
                tracking-wide
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.03)]
                hover:bg-gray-50
                dark:hover:bg-surface-hover
                dark:hover:text-foreground
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    "
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-r
                  from-transparent
                  via-black/[0.03]
                  to-transparent
                  dark:via-white/[0.03]
                  "
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}