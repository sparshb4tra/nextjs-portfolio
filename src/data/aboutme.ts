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
    "Hey! I'm a 21-year-old final-year IT student who gets excited about building things that actually work. I love playing around with data and seeing what stories it can tell—whether that's predicting if a tennis match will go my way or helping farmers figure out why their crops look sick. My projects are a mix of polished apps and messy experiments, but I'm always learning something new from each one.\n\nI'm really into ML and AI, especially when I can make complex stuff feel simple and useful. I'm always curious about what other people are building and love connecting with folks who share this passion. Right now I'm just looking for opportunities to grow, learn from people who know more than me, and maybe build something cool together.",
    cvUrl: "https://www.dropbox.com/scl/fi/i768lg5b8464s8re8nk24/SPARSH-BATRA_Resume.pdf?rlkey=n6jeuzqatjlbwcwkrjk1rpbf6&st=xzvp63np&dl=0",
    email: "me@sbatra.xyz",
    imageUrl:"/pfp.jpg",
  
  githubUsername: "sparshb4tra",
  linkedinUsername: "sparsh-b4tra",
  institutionUrl: "https://bpitindia.ac.in",
  // altName: "",
   secretDescription: "I love crows and watermelon🍉.",
};
