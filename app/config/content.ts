import { SiMysql, SiMongodb, SiJenkins } from "react-icons/si";
import { FaCodeCommit } from "react-icons/fa6";
import { PiDevToLogoLight } from "react-icons/pi";
import { GiMaterialsScience } from "react-icons/gi";
import { link } from "fs";
import { FaDocker } from "react-icons/fa";
import { FaLinux } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiHelm } from "react-icons/si";
import { SiPrometheus } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiAnsible } from "react-icons/si";
import { FaJenkins } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { SiApachetomcat } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { SiApache } from "react-icons/si";
import { FaCloud } from "react-icons/fa6";
import { CgGirl } from "react-icons/cg";


export const ProfileData = {
    logoText: 'VaishnaviD',
    logoIcon: FaCloud , CgGirl ,
    fname: 'Vaishnavi',
    lname: 'Dhawalekar',
    tagline: 'Cloud architect by skill, problem-solver by instinct.',
    intro: 'I’m a Cloud & DevOps Engineer with 1 year of hands-on experience designing scalable cloud infrastructures, automating workflows, and building CI/CD pipelines using AWS, Kubernetes, Terraform, Docker, and Jenkins. I love simplifying complex systems, exploring new cloud tools, and turning real-world problems into efficient, reliable, and elegant solutions.',
    aboutSubTitle: 'Brains, cloud, and a little bit of chaos engineered perfectly.',
    aboutMe: `I am a dedicated Cloud & DevOps Engineer with hands-on experience in designing, deploying, and managing scalable cloud infrastructures. I specialize in automation, CI/CD pipelines, and cloud-native architectures, working with tools like AWS, Kubernetes, Terraform, Docker, and Jenkins to build secure, reliable, and high-performance systems.

To deepen my practical skills, I completed the #90DaysOfDevOps Challenge, where I explored real-world DevOps concepts, built end-to-end workflows, and strengthened my understanding of modern cloud and automation practices. This experience helped me sharpen both my technical proficiency and my problem-solving mindset.

When I’m not orchestrating containers or fine-tuning pipelines, I love experimenting with new cloud technologies and exploring smarter ways to automate everyday tasks. I’m driven by curiosity, clean engineering, and the challenge of turning complex problems into elegant, efficient solutions.`,
    Availability: "Yes",
    CurrentlyWorking: "None",
    Location: "Pune, India",
    skillsIntro: `As a Cloud & DevOps Engineer, I design and deploy scalable cloud infrastructures while automating workflows and building efficient CI/CD pipelines. I work with AWS, Kubernetes, Docker, Terraform, and Jenkins, constantly leveling up my skills to deliver reliable, high-performance, and future-ready cloud solutions.`,
    skillsubtitle: "",
    skills: [

        { name: "Linux", icon: FaLinux },
        { name: "AWS", icon: FaAws },
        { name: "Maven", icon: SiApachemaven },
        { name: "Tomcat", icon: SiApachetomcat },
        { name: "Nginx", icon: SiNginx },
        { name: "Apache", icon: SiApache },
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Helm", icon: SiHelm },
        { name: "Prometheus", icon: SiPrometheus },
        { name: "Grafana", icon: SiGrafana },
        { name: "Jenkins", icon: SiJenkins },
        { name: "Terraform", icon: SiTerraform },
        { name: "Ansible", icon: SiAnsible },
        { name: "Git", icon: FaGitSquare },
        { name: "Github", icon: FaGithub },
        { name: "Bitbucket", icon: FaBitbucket },
        { name: "PostgreSQL", icon: BiLogoPostgresql },
        { name: "Bash", icon: SiGnubash },
        { name: "Python", icon: FaPython },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb }
    ],
    projects: [
      {
        id: "p1",
        title: "AWS 3 tier Deployment",
        description:
          "Designed and deployed a scalable AWS 3-Tier Architecture with secure VPC networking, private App/DB tiers, and a public Web tier, integrating ALBs, Auto Scaling, RDS, CloudWatch, and SNS to deliver high availability, automated scaling, and robust operational visibility",
        link: "https://github.com/vaishnaviid/AWS_3tier_architecture_fianl-_project"
      },
      {
        id: "p2",
        title: "Python Application Deployment Using Jenkins ",
        description:
          "Automated end-to-end Python application deployment using a Jenkins CI/CD pipeline with Git integration, secure SSH-based delivery, virtual environment provisioning, and remote server execution to enable streamlined, repeatable, and scalable deployments.",
        link: "https://github.com/vaishnaviid/python-app-CICD"
      },
      /*{
        id: "p3",
        title: "ansible-deployment-scripts",
        description:
          "modular Ansible playbooks and mini-projects for automating server configuration, deployments, and infrastructure provisioning using Infrastructure-as-Code practices..",
        link: "https://github.com/vaishnaviid/ansible-deployment-scripts"
      },
      {
        id: "p4",
        title: "Freshmart Store | Modern Grocery Web App",
        description:
          "A clean, modern, and responsive grocery store web app built with React, Vite, Redux, and Tailwind CSS.",
        link: "#"
      },
      {
        id: "p5",
        title: "GitHub Profile Viewer | Instant GitHub Insights",
        description:
          "A web app to instantly view detailed GitHub profiles with clean UI using HTML, CSS, and JavaScript.",
        link: "#"
      },
      {
        id: "p6",
        title: "UI Brix | Open-Source Components Library",
        description:
          "A growing library of open-source, reusable UI components built with React, Next.js, and TypeScript.",
        link: "#"
      },
      {
        id: "p6",
        title: "UI Brix | Open-Source Components Library",
        description:
          "A growing library of open-source, reusable UI components built with React, Next.js, and TypeScript.",
        link: "#"
      }, */
    ],
    experienceIntro: `Through my hands-on experience in the field, I learned the real-world workings of cloud and DevOps tools by building projects that clarified many practical doubts. Collaborating with teammates, troubleshooting issues, and deploying scalable solutions helped me develop problem-solving skills, a strong understanding of workflows, and the confidence to tackle complex challenges in Cloud and DevOps engineering.`,
    experiences: [
        {
          title: "DevOps Intern",
          org: "Cravita Technologies Pvt. Ltd.",
          date: "june 2025 – Present",
          desc:
            "Currently contributing as an Open Source Developer at Hacktoberfest, working on various web development projects and collaborating with the global developer community.",
          badge: "Latest",
        },
        {
          title: " Trainee",
          org: "Fortun Cloud Technologies",
          date: "Nov. 2024 –  may 2025",
          desc:
            "Learned full‑stack technologies and DevOps practices. Participated in hackathons and collaborated on projects with the developer community.",
        },
    ],

    educationIntro: `Throughout my academic journey, I explored a variety of tools, technologies, and programming concepts, building a strong foundation in computer science. Pursuing my Bachelor's in Computer Science and Technology (BTech) at UMIT, Santacruz, helped me develop problem-solving skills and technical expertise, which eventually guided me toward my true passion: Cloud and DevOps Engineering.`,
    education: [
        {
          title: "Bachelor of Computer Science and Technology (BTech)",
          org: "UMIT, Santacruz, India",
          date: "june 2019 - Aug 2023",
          badge: "Graduate"
        },
        {
          title: "Higher Secondary Education (12th · Science)",
          org: "Smt. Sushiladevi Deshmikh college of Science · Latur",
          date: "June 2017 – May 2019",
          badge: "HSC"
        }
    ],
    stats: { projects: 12, yearsExp: 1 },
    socials: { 
      hashnode: 'https://zerotoroot.hashnode.dev/',
      mail: "vaishnavidhawalekar@gmail.com",
      github: 'https://github.com/vaishnaviid',
      linkedin: 'http://linkedin.com/in/vaishnavidhawalekar' },
};