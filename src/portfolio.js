/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/brewing_coffee.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 4000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dids",
  title: "Hi! I'm Dids Irwyn Reyes",
  subTitle: emoji(
    "A passionate Full StackOverflow Developer 😂 kidding aside, i'm interested in Mobile Development and Artificial Intelligence."
  ),
  resumeLink:
    "https://www.docdroid.net/tOdeALf/cv-dids-pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/skedaddl3",
  linkedin: "https://www.linkedin.com/in/dids-irwyn-reyes-605214159/",
  gmail: "dids.irwyn@gmail.com",
  gitlab: "https://gitlab.com/skedaddl3",
  // facebook: "https://www.facebook.com/didsirwyn.reyes",
  instagram: "https://www.instagram.com/p0tatofu/",
  //medium: "https://medium.com/@reyes.dids.bscs",
  stackoverflow: "https://stackoverflow.com/users/10428502/dids",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "An Aspiring Developer that explored a lot of Tech but doesn't have a specific expertise",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services ( Firebase )")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "erlang",
      fontAwesomeClassname: "fab fa-erlang"
    },
    {
      skillName: "phoenix",
      fontAwesomeClassname: "fab fa-phoenix-framework"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        'Eulogio "Amang" Rodriguez Institute of Science and Technology',
      logo: require("./assets/images/EARIST_Logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2018 - 2022",
      desc: "",
      descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Montfort Academy",
      logo: require("./assets/images/Montfort.png"),
      subHeader: "Computer Systems Servicing",
      duration: "2016 - 2018",
      desc: "Artisan Awardee",
      descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "35%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "25%"
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Mobile Developer Intern",
      company: "Pragtechnologies",
      companylogo: require("./assets/images/pragtechnologies.png"),
      date: "March 2022 – August 2022",
      desc: "Language used is Dart using Flutter Framework.",
      descBullets: [
        "Created Mobile App Projects and Implemented Jitsi Library",
      ]
    },
    {
      role: "Jr. Software Engineer",
      company: "Pragtechnologies",
      companylogo: require("./assets/images/pragtechnologies.png"),
      date: "August 2022 – February 2023",
      desc: "Back-End Development, using Elixir and Phoenix Framework",
      descBullets: [
        "Worked Mostly in Telemedicine Platform",
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Internships and Projects I worked on during my Senior High",
  projects: [
    {
      image: require("./assets/images/municipality_r1.png"),
      projectName: "Municipality of Romblon",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/rcc.png"),
      projectName: "Romblon Cable Corporation",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements & Certifications",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/c++.png"),
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },
    {
      title: "Advanced C++ Programming",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/c++.png"),
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-71344b1f-aaca-4369-ab72-6817fbf49272/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I also write my opinion to matters that I find interesting.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@dids.irwyn.reyes/online-classes-in-the-philippines-is-mental-health-more-important-than-education-fe30bcf702e4",
      title:
        "Online Classes in the Philippines. Is Mental Health more important than Education?",
      description:
        "Since the sudden spread of Covid-19 around the world affected our daily lives, the economy dropped and some are at risk of losing their livelihoods, most of the companies as well as small businesses closed in compliance with government regulation due to the pandemic and causes a drastic increase in the unemployment rate here in the Philippines."
    },
    {
      url: "https://medium.com/@dids.irwyn.reyes/historical-negationism-and-the-rise-of-cyber-propaganda-72de4166f57f",
      title: "Historical Negationism and the Rise of Cyber Propaganda",
      description:
        "From campaign jingles to political advertisements on our televisions, it evolves and passes to our personal smartphones, where we don’t notice that targeting individuals actually work through the use of data and new technologies that are unknown to most of the Netizens that use Social Media."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📞"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+639217771724",
  email_address: "dids.irwyn@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};