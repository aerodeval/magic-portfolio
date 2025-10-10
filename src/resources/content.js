import { Logo } from "@once-ui-system/core";
import { React } from 'react';

const person = {
  firstName: "Sydney",
  lastName: "Gomes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "sydney223as@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Open to Opportunities</>,
  description: (
    <>
      Feel free to connect with my on LinkedIn or through my Mail, Sometimes the biggest career journeys begin with the smallest words hi or hello. If you see potential in my background, I’d be glad to connect and explore how I can contribute to your team’s success.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aerodeval",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sydneygomes223/",
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Where creative design meets scalable engineering.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">FinalSeat - Match booking Site</strong></>,
    href: "/work/building-final-seat",
  },
  subline: (
    <>
      I'm Sydney, a Frontend Developer at Jio, where I craft intuitive
      <br /> user experiences and high-end web applications. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/sydney-gomes-mz5dcp/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       Sydney is a Frontend Developer with strong experience in React, Next.js, and UI/UX
engineering. Adept at building scalable and accessible web applications with a focus on
performance and design. Proven ability to work across full-stack teams, deliver highquality products, and contribute to enterprise-level software. Passionate about animation,
interactivity, and building memorable web experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Jio",
        timeframe: "2023 - Present",
        role: "Frontend Developer",
        achievements: [
          <>
            Revamped Jio Careers platform with improved accessibility, simplified user flows, and redesigned UI aligned with Jio Design System.
          </>,
          <>
           Delivered major feature enhancements and optimized Reliance website with
caching, image optimization, and high-contrast mode, boosting performance
and accessibility

          </>,
            <>
            End-to-End Frontend Ownership: Delivered responsive, high-performance apps using
            React, React Native, Next.js, Angular, TypeScript, Tailwind CSS, and Node.js, ensuring
            seamless cross-platform experiences.</>, 
            <>
            Mobile Development: Built React Native applications with optimized navigation, offline
            support, and API integrations, ensuring smooth performance on iOS and Android.</>,
            <>
            Performance Engineering: Reduced page load time by 28% and improved Core Web
            Vitals, driving a 15% boost in user engagement across platforms.
            </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/jio-1.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/jio-2.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "SmartByte",
        timeframe: "March- July 2022",
        role: "App developer Intern",
        achievements: [
          <>
          Developed a mobile application: Created ”Smartbyte Notes,” a robust Flutter-based app
          for teachers to monitor student perfo
          </>,
          <>
Successfully launched the app on Google Play Store,
ensuring broad accessibility

          </>,

        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bachelor of Engineering, Mumbai University",
        description: <>Studied software engineering at Fr.C Rodrigues College of Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "ReactJs and React Native",
        description: <>Able to build scalable React applications with great expertise.</>,
        // optional: leave the array empty if you don't want to display images
        images: [     {
          src: "/images/projects/project-01/tmp-3.png",
          alt: "Project image",
          width: 16,
          height: 9,
        }, ],
      },
      {
        title: "Next.js and TailwindCSS",
        description: <>Building next gen apps with Next.js using page routing and server side rendering and TailwindCSS for rapid, responsive UI development </>,
        // optional: leave the array empty if you don't want to display images
        images: [
            {
              src: "/images/projects/project-01/Football-1.png",
              alt: "Project image",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/games-memoir.png",
              alt: "Project image",
              width: 16,
              height: 9,
            },
                
        ],
      },

      {
        title: "HTML, CSS, JavaScript",
        description: <>Strong foundation in HTML, CSS and JavaScript</>,
        // optional: leave the array empty if you don't want to display images
        images: [
            {
              src: "/images/projects/project-01/gushwork-1.png",
              alt: "Project image",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/gushwork-2.png",
              alt: "Project image",
              width: 16,
              height: 9,
            },
                
        ],
      },

    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/ps-images-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ps-images-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ps-images-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ps-images-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ps-images-5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ps-images-6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ps-images-7.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ps-images-8.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
