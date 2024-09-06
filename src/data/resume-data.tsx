import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Emanuel Costa",
  initials: "EC",
  location: "Porto, PT",
  locationLink: "https://www.google.com/maps/place/Porto",
  about:
    "Experienced Full Stack Engineer with a focus on quality and user experience.",
  summary:
    "Experienced Full Stack Developer with a passion for creating dynamic and innovative solutions. With a background in building web applications, I bring a wealth of expertise in integrating cutting-edge technologies and frameworks to create seamless user experiences.",
  avatarUrl: "/me.jpeg",
  personalWebsiteUrl: "https://emanuelcosta.dev",
  contact: {
    email: "hello@emanuelcosta.dev",
    tel: "+351914380262",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/emanuelcosta-dev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/emanuel-costa/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Instituto Politécnico de Gestão e Tecnologia, ISLA Gaia",
      degree:
        "Specialized in Web and Mobile Development and graduated with high distinction",
      start: "2018",
      end: "2020",
    },
  ],
  work: [
    {
      company: "CoreMedia",
      link: "https://coremedia.com",
      badges: ["Hybrid"],
      title: "Full Stack Engineer",
      start: "Sep 2021",
      end: null,
      description:
        "Led the successful implementation of several projects with a major Spanish telecommunications provider, resulting in daily generation of thousands of leads.",
    },
    {
      company: "Optigest",
      link: "https://www.optigest.net/www/EN/",
      badges: [],
      title: "Full Stack Developer",
      start: "Dec 2020",
      end: "Sep 2021",
      description:
        "Played a key role in the development of the main product, multiple integrations with providers and core services of the company.",
    },
    {
      company: "Nemobile Applications",
      link: "https://sidis.ai/",
      badges: [],
      title: "Full Stack Developer",
      start: "Feb 2020",
      end: "Jul 2020",
      description:
        "Collaborated on the development of integrations with leading providers such as Google and Facebook, alongside the creation of multiple high-conversion websites.",
    },
  ],
  skills: [
    "PHP",
    "MySQL",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Git",
    "CI/CD",
    "Serverless",
    "Microservices",
  ],
  // projects: [
  //   {
  //     title: "Parabol",
  //     techStack: [
  //       "Full Stack Developer",
  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "The Agile meeting co-pilot that delivers better meetings with less effort",
  //     logo: ParabolLogo,
  //     link: {
  //       label: "github.com",
  //       href: "https://parabol.co/",
  //     },
  //   },
  // ],
} as const;
