export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Summer 2024",
    title: "Software Development Intern",
    company: "Hughes Systique Corporation",
    description:
      "Collaborated on building a robust real-time inventory management system leveraging Python, MySQL, Java, and Git to efficiently track and manage stock across multiple locations.",
   // advisor: "Peter Wang",
    companyUrl: "https://www.hsc.com/",
  },
 /* {
    date: "Summer 2022",
    title: "Research Intern",
    company: "Google Research",
    description:
      "Worked on improving robustness of large language models to distribution shifts",
    manager: "Elise Brown",
    companyUrl: "https://google.com",
  }, */
];
