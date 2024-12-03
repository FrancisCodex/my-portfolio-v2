import NestSeekerLogo from '@/assets/images/logos/logo_nestseeker.svg'
import OnTheJobTrackerLogo from '@/assets/images/logos/Logo_OJT.svg'
import CosmosCoffeeLogo from '@/assets/images/logos/logo_cosmos.svg'
import ExpenseTrackerLogo from '@/assets/images/logos/expensetracker_logo.svg'
import IWatchFilmsLogo from '@/assets/images/logos/iwatchfilms_logo.svg'
import StudentManagementLogo from '@/assets/images/logos/studentmanager_logo.svg'
// Import images for the blog
import NestSeekerHeader from '@/assets/images/blog/nestseeker/blog_header.png'
import NestSeekerBody from '@/assets/images/blog/nestseeker/blog_body.png'
import OJTHeader from '@/assets/images/blog/ojt_tracker/blog_header.png'
import OJTBody1 from '@/assets/images/blog/ojt_tracker/blog_body1.png'
import OJTBody2 from '@/assets/images/blog/ojt_tracker/blog_body2.png'
import CosmosHeader from '@/assets/images/blog/cosmoscafe/blog_header.png'
import CosmosBody1 from '@/assets/images/blog/cosmoscafe/blog_body1.png'
import CosmosBody2 from '@/assets/images/blog/cosmoscafe/blog_body2.png'
import BudgetFlowHeader from '@/assets/images/blog/budgetflow/blog_header.png'
import BudgetFlowBody from '@/assets/images/blog/budgetflow/blog_body.png'
import IWatchFilmsHeader from '@/assets/images/blog/iwatchfilms/blog_header.png'
import StudentManagementHeader from '@/assets/images/blog/studentmanager/blog_header.png'

const AllProjects = [
    {
        id: 1,
        title: 'NestSeeker',
        logo: NestSeekerLogo,
        project_url: 'https://nestseeker.vercel.app',
        project_github: 'https://github.com/FrancisCodex/NestSeeker',
        description: 'NestSeeker is an apartment finder that allows users to search for apartments and houses for rent.',
        responsibilities: 'Lead Developer',
        project_status: 'In Progress',
        date_project_started: 'January 2023',
        date_project_ended: 'Present',
        imageHeader: NestSeekerHeader,
        imageBody: NestSeekerBody,
        blog: {
            introduction: [
                "The search for rental properties is often a frustrating journey, fraught with incomplete information, fraudulent listings, and inefficiency. As a solution to these challenges, NestSeeker was born—a web-based application designed to simplify and improve the apartment hunting experience for tenants in Butuan City. This blog dives into the creation of NestSeeker, my role as the lead programmer, and the journey toward developing a functional and scalable MVP (Minimum Viable Product)."
            ],
            body: [
                {
                    subtitle: "The Problem",
                    paragraphs: [
                        "Finding rental properties in Butuan City has been a challenge due to the lack of centralized platforms, prevalence of misleading information, and inefficient traditional methods like browsing scattered social media posts. Renters struggle with issues like:",
                        {
                            ul: [
                                "Difficulty accessing complete, verified rental information.",
                                "Lack of a user-friendly platform to compare properties.",
                                "Risks of scams and misrepresentation."
                            ]
                        },
                        "NestSeeker aims to address these problems with a robust, data-driven, and user-focused solution.",
                    ]
                },
                {
                    subtitle: "NestSeeker at a Glance",
                    paragraphs: [
                        "NestSeeker is designed as an online rental platform that connects renters with property owners. The application stands out by integrating advanced algorithms, such as the Fuzzy Best-Worst Method (FBWM) and TOPSIS, to provide personalized property recommendations based on user preferences. Key features include:",
                        {
                            ul: [
                                "Verified Listings: Reduce fraud and ensure accurate property information.",
                                "Advanced Filtering: Search based on proximity, price, and amenities.",
                                "Ranking and Recommendations: Help users make informed decisions.",
                            ]
                        }
                    ],
                    imageBody: NestSeekerBody,
                },
                {
                    subtitle: "My Role",
                    paragraphs: [
                        "As the lead programmer, I have been responsible for translating the conceptual framework of NestSeeker into a working application. My contributions include:",
                        {
                            ul: [
                                "Developing the front-end interface using React.js.",
                                "Designing the back-end architecture with Node.js and Express.",
                                "Integrating Supabase for database management and authentication.",
                                "Implementing data analysis algorithms for personalized recommendations.",
                            ]
                        },
                        "My primary goal was to create a seamless user experience by ensuring that the application was intuitive, responsive, and efficient. By leveraging my expertise in full-stack development, I aimed to deliver a product that met the needs of both renters and property owners."
                    ]
                },
                {
                    subtitle: "Challenges and Learnings",
                    paragraphs: [
                        "Developing NestSeeker has been a rewarding yet challenging experience. Balancing the theoretical implementation of decision-making algorithms with practical coding required a deep understanding of both fields. While building the MVP, some of the hurdles included:",
                        {
                            ul: [
                                "Complex Data Analysis: Implementing algorithms for property ranking and recommendations required a deep understanding of data science and machine learning.",
                                "Scalability: Ensuring that the application could handle a large volume of users and listings without compromising performance was a critical consideration.",
                                "User Experience: Balancing functionality with simplicity to create an engaging and user-friendly interface was a continuous process of iteration and refinement.",
                            ]
                        },
                        "Each challenge has been a stepping stone, enhancing my skills in both software development and problem-solving.",
                    ]
                },
                {
                    subtitle: "The Road Ahead",
                    paragraphs: [
                        "Currently, NestSeeker is in active development, with an MVP expected by mid-December to early January. The MVP will undergo user testing to refine features and ensure the platform meets real-world requirements. My next steps include:",
                        {
                            ul: [
                                "Finalization: Finalizing core functionalities, such as user authentication and property filtering.",
                                "Enhancements: Enhancing the Frontend UI as there are still bugs and issues left to solve",
                                "Community Engagement: Collaborating with local property owners and renters to enhance the platform's features and usability.",
                            ]
                        },
                        "The journey of NestSeeker is a testament to the power of technology in solving real-world problems. By leveraging data-driven insights and user-centric design, the application aims to revolutionize the rental market in the City and beyond.",
                    ]
                }
            ],
            conclusion: {
                subtitle: "To end things off",
                paragraphs: [
                    "NestSeeker represents more than just a project; it is a solution to a real-world problem. Through collaboration, innovation, and dedication, we are working to transform the rental experience for tenants and landlords in Butuan City. As the lead programmer, this journey has not only enriched my technical skills but also taught me the value of user-centric design and algorithmic precision.",
                    " If you're curious to learn more about the project or collaborate, feel free to reach out through my portfolio. Together, let’s innovate solutions for better living experiences!"
                ]
            },
            date_posted: 'November 2024'
            
        },
        technologies_used: [
          {
            name: 'React-Vite',
          },
          {
            name: 'Node.js',
          },
          {
            name: 'Express',
          },
          {
            name: 'Supabase',
          },
        ]
    },
    {
      id: 2,
      title: 'OnTheJob Tracker',
      logo: OnTheJobTrackerLogo,
      project_url: 'https://onthejob-tracker.vercel.app',
      project_github: 'https://github.com/FrancisCodex/OJT-Tracker',
      description: 'OJT-Management for School Coordinators and Training Agencies.',
      responsibilities: 'Full Stack Developer',
      project_status: 'In Progress',
      date_project_started: 'September 2024',
      date_project_ended: 'Present',
      imageHeader: OJTHeader,
      imageBody: '@/assets/images/ojt_body.jpg',
      blog: {
        introduction: [
          "Traditional methods of monitoring On-the-Job Training (OJT) often rely on manual processes, which are time-consuming and prone to errors. To address these challenges, the OnTheJob Tracker System was developed as a centralized, web-based solution tailored to the needs of students, coordinators, and training agencies. This blog post explores the implementation of the project, my role as the lead developer, and the journey to refining the system for a complete launch.",
        ],
        body: [
          {
            subtitle: "The Problem",
            paragraphs: [
              "Managing OJT through manual processes creates inefficiencies, including delayed feedback, lost documentation, and lack of transparency. Key challenges included:",
                {
                    ul: [
                        "Difficulty in tracking student performance in real-time.",
                        "Inefficient handling of OJT documents, such as work plans and reports.",
                        "Lack of tools for actionable feedback and comprehensive reporting.",
                    ]
                },
              "The OnTheJob Tracker System addresses these challenges by providing a streamlined, automated, and user-friendly platform.",
            ]
          },
          {
            subtitle: "OnTheJob Tracker in a Nutshell",
            paragraphs: [
              "The system is designed to enhance the OJT process by integrating modern web technologies and offering robust features:",
              {
                ul: [
                    "Performance Tracking: Real-time monitoring of student progress and evaluations.",
                    "Automated Document Management: Submission, review, and approval workflows for OJT-related documents.",
                    "Role-Based Dashboards: Tailored interfaces for coordinators, students, and training agencies.",
                    "Scalable Architecture: Built to adapt to future needs and accommodate a growing user base.",
                ]
              },
            ],
            imageBody: OJTBody1
          },
          {
            subtitle: "My Role in the Project",
            paragraphs: [
              "As the lead developer, my primary responsibility has been the design, development, and implementation of the OnTheJob Tracker System. This includes:",
              {
                ul: [
                    "UX/UI Design: Creating a user-friendly interface that caters to the needs of students, coordinators, and training agencies. This is done using Figma.",
                    "Frontend Development: Built using ReactJS with Vite for fast development and Tailwind CSS for a responsive design.",
                    "Backend Architecture: Leveraged Supabase for secure authentication, real-time capabilities, and database management.",
                    "Deployment and Testing: Ensuring the system is functional, performant, and user-friendly.",
                ]
              }
            ]
          },
          {
            subtitle: "Challenges and Learnings throughout the Project",
            paragraphs: [
              {
                ul: [
                    "Complexity in Role-Based Access: Balancing the unique needs of coordinators, students, and training agencies required meticulous planning and testing.",
                    "Scalability: Ensuring the system could handle increasing users while maintaining performance was a significant focus.",
                    "User Experience: Simplifying the interfaces without compromising functionality demanded continuous iteration.",
                ]
              },
              "Each challenge strengthened my skills in system architecture, user-centered design, and efficient coding practices.",
            ],
            imageBody: OJTBody2
          },
          {
            subtitle: "So, What's Next?",
            paragraphs: [
              "While the system has undergone usability testing and is currently functional for evaluation, some features are still under development. The planned December 2024 completion will deliver:",
              {
                ul:[
                    "Enhanced mobile responsiveness.",
                    "Additional features based on user feedback.",
                ]
              },
              "The journey of the OnTheJob Tracker System is a testament to the power of technology in education. By simplifying OJT management, promoting accountability, and empowering stakeholders, the system aims to redefine OJT tracking for all schools and training agencies.",
            ]
          }
        ],
        conclusion: {
            subtitle: "Conclusion",
            paragraphs: [
              "The OnTheJob Tracker System embodies the transformative potential of technology in education. As the lead developer, I am proud to have contributed to a solution that simplifies OJT management, promotes accountability, and empowers stakeholders.",
              "Stay tuned for the official launch and explore how this system is set to redefine OJT tracking for all schools. For collaboration or inquiries, feel free to connect through my portfolio!"
            ]
        },
        date_posted: 'November 2024'
      },
      technologies_used: [
          {
            name: 'React-Vite',
          },
          {
            name: 'Supabase',
          },
      ]
    },
    {
      id: 3,
      title: 'Cosmos Coffee Shop',
      logo: CosmosCoffeeLogo,
      project_url: null,
      project_github: 'https://github.com/FrancisCodex/Cosmos_ServerSide',
      description: 'A simple coffee shop website that allows users to view the menu and order coffee.',
      responsibilities: 'Backend Development',
      project_status: 'Completed',
      date_project_started: 'September 2023',
      date_project_ended: 'November 2023',
      imageHeader: CosmosHeader,
      blog: {
        introduction: [
          "The idea for this project came from the realization that the conventional coffee shop, which was once a hub for social interaction, is changing to meet the needs of the contemporary world. Online coffee shops are appealing for more reasons than just practicality; they represent a desire for customized experiences in a time when time is of the essence. This project's importance goes beyond consumer behavior; it captures the story of an industry enduring change and demonstrating resilience. Our goal, as we work through the challenges of integrating an online coffee shop, is not just to keep up with the rapid advancement of technology but also to create a beautiful synthesis that will give coffee lovers a new meaning to their beloved customs."
        ],
        body: [
          {
            subtitle: "Objectives & Goals",
            paragraphs: [
              "The Primary Objectives and Goals for this project is implementation of data security techniques, as this application project is built for IT 107 (Information Security) class, making sure to implement the best security practices to protect customer data."
            ]
          },
          {
            subtitle: "What is Cosmos Coffee Shop?",
            paragraphs: [
              "Cosmos Coffee Shop is a web application that offers a seamless coffee ordering experience. Key features include:",
              {
                ul: [
                    "User-Friendly Interface: A clean and intuitive design that makes ordering coffee a breeze.",
                    "Order Management: Customers can view their order history and track the status of their current orders.",
                    "Security Measures: Data encryption to protect customer information.",
                ]
              }
            ],
            imageBody: CosmosBody2
          },
          {
            subtitle: "My Role",
            paragraphs: [
              "As the lead backend developer, my responsibilities included:",
              {
                ul: [
                    "Designing the database schema and implementing data security measures.",
                    "Developing the backend logic using Node.js and Express.",
                    "Integrating the frontend and backend to create a seamless user experience.",
                    "Applying best practices for data encryption and secure authentication routes.",
                ]
              }
            ],
            imageBody: CosmosBody1
          },
          {
            subtitle: "Challenges and Learnings",
            paragraphs: [
              "Developing Cosmos Coffee Shop presented several challenges, including:",
              {
                ul: [
                    "Implementing data encryption techniques to protect customer data.",
                    "Ensuring secure authentication and authorization routes. Implementing Content Security Policy (CSP) to prevent cross-site scripting attacks.",
                    "Applying Role-Based Access Control (RBAC) to manage user permissions and protect business-critical data.",
                ]
              },
            ]
          },
        ],
        conclusion: {
            subtitle: "What I learned from this project",
            paragraphs: [
                "I learned a lot from this experience, this was the first time I implemented data security techniques that I learned from online sources and class discussions in a project, and I learned a lot from it. I also learned how to work with a team and how to manage a project. I am proud of the work I did on this project and I am excited to create more similar projects like this in the future.",
            ]
        },
          date_posted: 'November 2024'
      },
      technologies_used: [
          {
            name: 'Node.js',
          },
          {
            name: 'Express',
          },
          {
            name: 'PostgreSQL',
          }

      ]
    },
    {
        id: 4,
        title: 'BudgetFlow',
        description: 'A simple expense tracker that allows users to track their expenses and manage Budget.',
        logo: ExpenseTrackerLogo,
        imageHeader: BudgetFlowHeader,
        project_status: 'Completed',
        date_project_started: 'October 2023',
        date_project_ended: 'December 2023',
        project_status: 'Completed',
        project_url: null,
        project_github: 'https://github.com/FrancisCodex/ExpenseTracker',
        responsibilities: 'Backend Development',
        blog: {
          introduction: [
            "BudgetFlow is an expense tracker that allows users to track their expenses and create budgets. The application is built using ReactJS, Laravel, and PostgreSQL. Users can create an account, log in, and track their expenses. The application also allows users to create budgets and set spending limits. This was a group school project and my tasks were handling the Backend of the application using Laravel and Database management using PostgreSQL."
          ],
          body: [
            {
              subtitle: "Goals and Objectives",
              paragraphs: [
                "Create an expense tracker that allows users to track their expenses and create budgets.",
                "The Primary Goals and Objectives of this application is to just create a simple app using Laravel and PostgreSQL and apply the concepts we learned in class."
              ]
            },
            {
              subtitle: "What did I contribute to the project?",
              paragraphs: [
                "As the backend developer, my responsibilities were:",
                {
                    ul: [
                        "Designing the database schema.",
                        "Developing the backend logics for Analytical Dashboard using Laravel.",
                        "Integrating the frontend and backend to create a seamless user experience.",
                        "Implementing data validation and error handling.",
                    ]
                }
              ],
                imageBody: BudgetFlowBody
            }
          ],
          conclusion: {
            subtitle: "What I learned from this project",
            paragraphs: [
              "Overall, this project was a great learning experience for me. I was introduced to new technologies such as Laravel, Bootstrap, and development concepts that I had not worked with before. I learned how to work with a team and how to manage a project. I am proud of the work I did on this project and I am excited to create more similar projects like this in the future.",
            ]
          },
        date_posted: 'November 2024'
        },
        technologies_used: [
            {
              name: 'Laravel',
            },
            {
              name: 'PostgreSQL',
            }
        ]
    },
    {
        id: 5,
        title: 'IWatchFilms',
        description: 'A simple movie app that allows users to search for movies and view details.',
        logo: IWatchFilmsLogo,
        imageHeader: IWatchFilmsHeader,
        project_status: 'Completed',
        date_project_started: 'May 2023',
        date_project_ended: 'June 2023',
        project_status: 'Completed',
        project_url: null,
        project_github: 'https://github.com/FrancisCodex/nextAuthSystem',
        responsibilities: 'Backend Development',
        blog: {
          introduction: [
            "IWatchFilms is a web application that allows users to rate and review films and TV shows. The application is built using Nextjs and Strapi CMS. Users can create an account, log in, and rate and review films and TV shows. The application also allows users to search for films and TV shows by title, genre, and rating. This application was my first website project that I created when I began to learn web development utilizing a Headless Open Source CMS called Strapi and using open source api like MovieDatabase to get the latest movies and tv shows."
          ],
          body: [
            {
              subtitle: "The Journey",
              paragraphs: [
                "This Project was my very first web app project that I created when I started learning web development back in 2022. The project was built using Nextjs and Strapi CMS which at that time I had no idea what they were and had to rely on online tutorials and documentation to learn how to use them. This was also the first time I used an API to get data for my project. I used the MovieDatabase API to get the latest movies and tv shows for the project which is a free API that provides data for movies and tv shows.",
              ]
            },
            {
              subtitle: "The things I learned from this project",
              paragraphs: [
                "This project introduced me to new technologies such:",
                {
                    ul: [
                        "Reactjs: A JavaScript library for building user interfaces.",
                        "Nextjs: A React Framework for building web applications.",
                        "Strapi CMS: A Headless CMS that allows you to create, manage and publish content.",
                        "MovieDatabase API: A free API that provides data for movies and tv shows.",
                    ]
                },
                "I had to adapt to new technologies and learn how to use them to build the project",
              ]
            }
          ],
          conclusion: {
            subtitle: "Learning Experience",
            paragraphs: [
              "This Project was a really great learning experience for me, as it was my first web app project that I created when I started learning web development. I learned a lot from this project and it was a great way to start my journey into web development. I learned how to work with new technologies and how to use them to build a project. I am proud of the work I did on this project as it was the first few steps I took into the world of web development.",
            ]
          },
          date_posted: 'November 2024'
        },
        technologies_used: [
            {
              name: 'Next.js',
            },
            {
              name: 'Strapi CMS',
            }
        ]
    },
    {
        id: 6,
        title: 'Student management system',
        description: 'A simple student management system that allows users to manage students.',
        logo: StudentManagementLogo,
        imageHeader: StudentManagementHeader,
        project_status: 'Completed',
        date_project_started: 'March 2022',
        date_project_ended: 'April 2022',
        project_status: 'Completed',
        project_url: null,
        project_github: null,
        responsibilities: 'Backend Development',
        blog: {
          introduction: [
            "My first project in college was a student management system that allows users to manage students in a classroom. Using Java and MySQL, I created a simple system that  allows teachers to view students enrolled in the course and store the data in a database. The system also allows students to view their attendance records.",
          ],
          body: [
            {
              subtitle: "What did I learn from this project?",
              paragraphs: [
                "This project introduced me to Java and MySQL, which were the main technologies used to build the system. I learned how integrate Java with MySQL to store and retrieve data. I also learned how to create a simple user interface using Java Swing and how to interact with the database to perform CRUD operations.",
              ]
            },
            {
              subtitle: "Technologies used",
              paragraphs: [
                "The main technologies used in this project were:",
                {
                    ul: [
                        "Java: A high-level, class-based, object-oriented programming language.",
                        "Xampp: A free and open-source cross-platform web server solution stack package.",
                        "MySQL: An open-source relational database management system.",
                        "Java Swing: A GUI widget toolkit for Java.",
                    ]
                }
              ]
            }
          ],
          conclusion: {
            subtitle: "What I gained from this project",
            paragraphs: [
              "This project was my first experience working with a database, and it was a great learning experience. I learned how to integrate Java with MySQL to store and retrieve data, and how to create a simple user interface using Java Swing. This project laid the foundation for my future projects and helped me develop my skills in database management and Java programming.",
            ]
          },
          date_posted: 'November 2024'
        },
        technologies_used: [
            {
              name: 'Java',
            },
            {
              name: 'MySQL',
            }
        ]
    },

  ]
  
  export default AllProjects