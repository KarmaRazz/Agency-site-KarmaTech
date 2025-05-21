import { ArrowRight, Github } from "lucide-react";
import bankHotelImg from "../assets/Projects/bankhotel.png";
import bhkRoll from "../assets/Projects/bhkroll.png";
import kidsSchool from "../assets/Projects/kidsschool.png";
import brainWave from "../assets/Projects/brainwave.png";
import vaani from "../assets/Projects/evaani.png";
import annmarie from "../assets/Projects/annmarie.png";
import restaurant from "../assets/Projects/restaurant.png";

const projects = [
  {
    id: 1,
    title: "Brain Wave AI ChatBOT",
    description:
      "A smart AI chatbot UI for seamless, human-like conversations — fast, elegant, and Vercel-deployed.",
    image: brainWave,
    tags: ["react", "Tailwind CSS", "JavaScript", "Vercel"],
    demoUrl: "https://brainwave-ashen-nine.vercel.app/",
    githubUrl: "https://github.com/KarmaRazz/brainwave",
  },
  {
    id: 2,
    title: "BankHotel Website",
    description:
      "A sleek, responsive hotel website UI built for modern businesses and deployed via Vercel.",
    image: bankHotelImg,
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    demoUrl: "https://hotel-website-karmarazzs-projects.vercel.app/",
    githubUrl: "https://github.com/Basit46/Hotel-website",
  },
  {
    id: 3,
    title: "Grilli Restaurant Website",
    description:
      "A custom website for a Canada-based restaurant, built with a clean and responsive design on their own domain.",
    image: restaurant,
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "https://grilli-chi-six.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Kids School",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: kidsSchool,
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "https://kids-school-two.vercel.app/",
    githubUrl: "https://github.com/KarmaRazz/kids-school",
  },
  {
    id: 5,
    title: "E-Vaani Ed-tech",
    description:
      "A dynamic ed-tech platform built to deliver digital learning experiences across Nepal.",
    image: vaani,
    tags: ["react", "javascript", "Tailwind"],
    demoUrl: "https://e-vaani.com/",
    githubUrl: "https://github.com/KarmaRazz/",
  },
  {
    id: 6,
    title: "Ann Marie Spa Business",
    description:
      "A clean, elegant website built for a luxury spa business to showcase services and attract local clients.",
    image: annmarie,
    tags: ["wordpress"],
    demoUrl: "https://annmariespa.com/",
    githubUrl: "https://github.com/KarmaRazz/",
  },
    {
    id: 7,
    title: "BHK Roll Restaurant Website",
    description:
      "A custom website for a Canada-based restaurant, built with a clean and responsive design on their own domain.",
    image: bhkRoll,
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://bhkroll.com/",
    githubUrl: "#",
  },

  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of our recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <a
              key={key}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 block"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-start items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/KarmaRazz"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
