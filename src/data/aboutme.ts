export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Sparsh Batra",
  title: "IT undergrad",
  institution: "Bhagwan Parshuram Institute of Technology, GGSIPU",
  // Note that links work in the description
  description:
    "I'm a pre final-year <a href='https://bpitindia.ac.in'>Information Technology student</a>  at Bhagwan Parshuram Institute of Technology with hands-on experience in data analytics and machine learning. <br> <br> My work spans from developing real-time inventory management systems to creating predictive models for student performance and plant disease detection. I'm passionate about building intuitive systems that transform complex data into actionable insights across industries.",
  
    cvUrl: "https://www.dropbox.com/scl/fi/8n6uvwh84a24l69q5is7w/Resume-Sparsh-Batra.pdf?rlkey=xwn7qwci6hqdmfvh0yamfatot&st=05fc1yq9&dl=0",
    email: "me@sbatra.xyz",
    imageUrl:"/pfp.jpg",
  
  githubUsername: "sparshb4tra",
  linkedinUsername: "sparsh-b4tra",
  institutionUrl: "https://bpitindia.ac.in",
  // altName: "",
   secretDescription: "I love dogs.",
};
