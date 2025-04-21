export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Retro Portfolio",
    description:
      "Step back in time with this retro-inspired portfolio website, mimicking the classic Mac OS interface! Featuring a draggable desktop, interactive windows, and a built-in Snake game, it showcases my skills and projects with a nostalgic twist. Check it out live and dive into the 90s vibe! 💾🎮",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    projectUrl: "https://retro-portfolio-eta.vercel.app",
    imageUrl: "/retro.png",
    codeUrl: "https://github.com/sparshb4tra/Retro-website",
  },
  
  {
    title: "Tennis Match Outcome Predictor",
    description:
      "Tennis Match Outcome Predictor uses machine learning to predict ATP match winners based on player stats, surfaces, and past performances. The project is a work in progress, with ongoing model training and optimization. 🚀🎾",
    technologies: ["Python", "PyTorch", "Sci-kit learn","Matplotlib", "Numpy", "Seaborn", "Pandas"],
    //projectUrl: "https://project-demo.com",https
    imageUrl:"/tenn.png",
      codeUrl: "https://github.com/sparshb4tra/Tennis-Match-Outcome-Predictor",
  },

  {
    title: "Student Performance Prediction",
    description:
      "Student Performance Predictor leverages machine learning to analyze student demographics, study habits, and extracurricular activities to predict academic performance. The project is a work in progress, with ongoing model training and evaluation. 📚🎯",
    technologies: ["Python", "PyTorch", "Pandas", "Numpy", "Sci-kit learn"],
    //projectUrl: "https://project-demo.com",
    imageUrl:"/student.jpg",
    codeUrl: "https://github.com/sparshb4tra/Student-Performance-Prediction",
  },

  {
    title: "INVY- Real Time Inventory Management System",
    description:
      "INVY focuses on seamlessly managing and tracking ingredient inventory. It provides a comprehensive list of ingredients categorized systematically, enabling users to handle stock efficiently. The application operates with two primary roles: Admin and User, each with specific features and permissions.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "XAMPP"],
   // projectUrl: "https://project-demo.com",
    imageUrl:"/inv.jpg",
      codeUrl: "https://github.com/sparshb4tra/INVY",
  },

  /*{
    title: "Causal Discovery Framework",
    description:
      "A framework for discovering causal relationships in high-dimensional time series data using state-of-the-art machine learning techniques.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "XAMPP"],
   // projectUrl: "https://project-demo.com",
    imageUrl:
      "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/username/project",
  }, */
];
