const linkedInUsers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      headline: 'Software Developer',
      profileUrl: 'https://www.linkedin.com/in/johndoe',
      pictureUrl: 'https://www.linkedin.com/in/johndoe/picture',
      email: 'johndoe@example.com',
      location: {
        country: 'United States',
        city: 'New York',
      },
      industry: 'Information Technology and Services',
      connections: 500,
      summary: 'Experienced software developer passionate about creating efficient and scalable applications. I have a strong background in JavaScript, React, Node.js, Java, and SQL.',
      skills: ['JavaScript', 'React', 'Node.js', 'Java', 'SQL'],
      experiences: [
        {
          title: 'Senior Software Engineer',
          company: 'Tech Co.',
          startDate: '2020-01-01',
          endDate: '2022-12-31',
          location: 'San Francisco, CA',
          description: 'I led a team of developers in building innovative software solutions at Tech Co.',
        },
        {
          title: 'Software Engineer',
          company: 'Startup XYZ',
          startDate: '2018-05-01',
          endDate: '2019-12-31',
          location: 'New York, NY',
          description: 'At Startup XYZ, I developed and maintained web applications, contributing to the startup\'s success.',
        },
      ],
      activities: ['Open Source Contribution', 'Tech Meetups', 'Mentoring'],
      preferredLocations: ['San Francisco, CA', 'Seattle, WA', 'Remote'],
      about: `
        I hold a Bachelor of Science in Computer Science from the University ABC.
        My certifications include Certified ScrumMaster (CSM) and AWS Certified Developer - Associate.
        I am proficient in English and Spanish.
        I am passionate about Machine Learning and UX Design, exploring new technologies and methodologies to enhance my skills.
      `,
    },
    // User 2
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      headline: 'Data Scientist',
      profileUrl: 'https://www.linkedin.com/in/janesmith',
      pictureUrl: 'https://www.linkedin.com/in/janesmith/picture',
      email: 'janesmith@example.com',
      location: {
        country: 'United States',
        city: 'San Francisco',
      },
      industry: 'Data Science',
      connections: 300,
      summary: 'Data scientist with expertise in machine learning, statistical analysis, and data visualization. Proficient in Python, R, and SQL.',
      skills: ['Machine Learning', 'Python', 'R', 'Data Visualization', 'Statistics'],
      experiences: [
        {
          title: 'Data Scientist',
          company: 'Data Insights Corp',
          startDate: '2019-02-01',
          endDate: null, // Present
          location: 'San Francisco, CA',
          description: 'Lead data science projects, analyzing and extracting insights from large datasets.',
        },
        {
          title: 'Data Analyst',
          company: 'Tech Analytics LLC',
          startDate: '2017-05-01',
          endDate: '2019-01-31',
          location: 'Seattle, WA',
          description: 'Performed statistical analysis on user behavior data to inform business strategies.',
        },
      ],
      activities: ['Contributor to Data Science Community', 'Speaker at Tech Conferences'],
      preferredLocations: ['San Francisco, CA', 'New York, NY', 'Remote'],
      about: `
        I earned my Master's in Data Science from XYZ University.
        Certified in Machine Learning by XYZ Institute.
        Enthusiastic about contributing to the data science community and sharing knowledge at tech conferences.
      `,
    },
    // User 3
    {
      id: 3,
      firstName: 'Alex',
      lastName: 'Johnson',
      headline: 'UX/UI Designer',
      profileUrl: 'https://www.linkedin.com/in/alexjohnson',
      pictureUrl: 'https://www.linkedin.com/in/alexjohnson/picture',
      email: 'alexjohnson@example.com',
      location: {
        country: 'United States',
        city: 'Los Angeles',
      },
      industry: 'Design',
      connections: 200,
      summary: 'Creative UX/UI designer with a passion for creating visually appealing and user-friendly interfaces. Proficient in Adobe Creative Suite and Figma.',
      skills: ['UI Design', 'UX Design', 'Adobe Creative Suite', 'Figma', 'Prototyping'],
      experiences: [
        {
          title: 'Senior UX/UI Designer',
          company: 'Design Innovations Agency',
          startDate: '2018-09-01',
          endDate: null, // Present
          location: 'Los Angeles, CA',
          description: 'Lead the design team in creating innovative and user-centric interfaces for various clients.',
        },
        {
          title: 'UX/UI Designer',
          company: 'Tech Solutions Inc.',
          startDate: '2016-04-01',
          endDate: '2018-08-31',
          location: 'San Francisco, CA',
          description: 'Designed and implemented user interfaces for web and mobile applications.',
        },
      ],
      activities: ['Participant in Design Hackathons', 'Contributor to Open Source Design Projects'],
      preferredLocations: ['Los Angeles, CA', 'New York, NY', 'Remote'],
      about: `
        I hold a Bachelor's degree in Graphic Design from ABC University.
        Adept at creating visually stunning and intuitive user interfaces.
        Passionate about contributing to open source design projects and participating in design hackathons.
      `,
    },
    // ... (Previous users' data)

// User 4
{
    id: 4,
    firstName: 'Emily',
    lastName: 'Clark',
    headline: 'Marketing Specialist',
    profileUrl: 'https://www.linkedin.com/in/emilyclark',
    pictureUrl: 'https://www.linkedin.com/in/emilyclark/picture',
    email: 'emilyclark@example.com',
    location: {
      country: 'United States',
      city: 'Chicago',
    },
    industry: 'Marketing',
    connections: 150,
    summary: 'Marketing specialist with a focus on digital marketing strategies, content creation, and social media management. Proven track record in driving brand awareness and engagement.',
    skills: ['Digital Marketing', 'Content Creation', 'Social Media Management', 'SEO', 'Email Marketing'],
    experiences: [
      {
        title: 'Digital Marketing Manager',
        company: 'Global Marketing Solutions',
        startDate: '2019-03-01',
        endDate: null, // Present
        location: 'Chicago, IL',
        description: 'Developed and executed comprehensive digital marketing campaigns, resulting in a 30% increase in online engagement.',
      },
      {
        title: 'Content Specialist',
        company: 'Tech Content Creators',
        startDate: '2017-07-01',
        endDate: '2019-02-28',
        location: 'New York, NY',
        description: 'Managed content creation and distribution strategies, enhancing the company\'s online presence and brand image.',
      },
    ],
    activities: ['Speaker at Marketing Conferences', 'Blogger on Digital Marketing Trends'],
    preferredLocations: ['Chicago, IL', 'San Francisco, CA', 'Remote'],
    about: `
      I hold a Bachelor's degree in Marketing from XYZ University.
      Experienced in creating and implementing successful digital marketing strategies.
      Passionate about staying updated on the latest trends in the marketing industry and sharing knowledge through speaking engagements and blogging.
    `,
  },
  // ... (Previous users' data)

// User 5
{
    id: 5,
    firstName: 'Michael',
    lastName: 'Taylor',
    headline: 'Financial Analyst',
    profileUrl: 'https://www.linkedin.com/in/michaeltaylor',
    pictureUrl: 'https://www.linkedin.com/in/michaeltaylor/picture',
    email: 'michaeltaylor@example.com',
    location: {
      country: 'United States',
      city: 'Boston',
    },
    industry: 'Finance',
    connections: 100,
    summary: 'Financial analyst with expertise in financial modeling, budgeting, and data analysis. Proven track record in providing actionable insights to drive financial decision-making.',
    skills: ['Financial Modeling', 'Budgeting', 'Data Analysis', 'Excel', 'Financial Reporting'],
    experiences: [
      {
        title: 'Senior Financial Analyst',
        company: 'Finance Insights LLC',
        startDate: '2020-05-01',
        endDate: null, // Present
        location: 'Boston, MA',
        description: 'Conducted financial analysis and forecasting, providing valuable insights to support strategic business decisions.',
      },
      {
        title: 'Financial Analyst',
        company: 'Investment Strategies Inc.',
        startDate: '2018-08-01',
        endDate: '2020-04-30',
        location: 'New York, NY',
        description: 'Assisted in the development of investment strategies through in-depth financial analysis and reporting.',
      },
    ],
    activities: ['Presenter at Finance Seminars', 'Contributor to Finance Research Papers'],
    preferredLocations: ['Boston, MA', 'New York, NY', 'Remote'],
    about: `
      I hold a Master's in Finance from ABC University.
      Proficient in financial modeling and data analysis using Excel and other tools.
      Active in presenting at finance seminars and contributing to research papers in the finance domain.
    `,
  },
  
  // User 6
  {
    id: 6,
    firstName: 'Sophia',
    lastName: 'Miller',
    headline: 'Human Resources Manager',
    profileUrl: 'https://www.linkedin.com/in/sophiamiller',
    pictureUrl: 'https://www.linkedin.com/in/sophiamiller/picture',
    email: 'sophiamiller@example.com',
    location: {
      country: 'United States',
      city: 'Los Angeles',
    },
    industry: 'Human Resources',
    connections: 80,
    summary: 'Human Resources professional with extensive experience in talent acquisition, employee relations, and HR strategy development. Dedicated to fostering a positive workplace culture.',
    skills: ['Talent Acquisition', 'Employee Relations', 'HR Strategy', 'Performance Management', 'Training & Development'],
    experiences: [
      {
        title: 'Human Resources Manager',
        company: 'Talent Solutions Inc.',
        startDate: '2019-09-01',
        endDate: null, // Present
        location: 'Los Angeles, CA',
        description: 'Managed all aspects of HR operations, including talent acquisition, employee relations, and performance management.',
      },
      {
        title: 'HR Specialist',
        company: 'PeopleFirst Corporation',
        startDate: '2017-03-01',
        endDate: '2019-08-31',
        location: 'San Francisco, CA',
        description: 'Specialized in talent acquisition and employee engagement initiatives, contributing to a positive workplace culture.',
      },
    ],
    activities: ['Speaker at HR Conferences', 'Mentorship Programs Advocate'],
    preferredLocations: ['Los Angeles, CA', 'San Francisco, CA', 'Remote'],
    about: `
      I hold a Bachelor's degree in Human Resources Management.
      Skilled in talent acquisition, employee relations, and HR strategy development.
      Active in speaking at HR conferences and advocating for mentorship programs.
    `,
  },
  // ... (Previous users' data)

// User 7 (Indian Name)
{
    id: 7,
    firstName: 'Ravi',
    lastName: 'Sharma',
    headline: 'Senior Software Engineer',
    profileUrl: 'https://www.linkedin.com/in/ravisharma',
    pictureUrl: 'https://www.linkedin.com/in/ravisharma/picture',
    email: 'ravisharma@example.com',
    location: {
      country: 'India',
      city: 'Bangalore',
    },
    industry: 'Information Technology',
    connections: 150,
    summary: 'Experienced software engineer with expertise in full-stack development. Proficient in Java, Spring Boot, React, and database management.',
    skills: ['Java', 'Spring Boot', 'React', 'Database Management', 'Agile Development'],
    experiences: [
      {
        title: 'Senior Software Engineer',
        company: 'Tech Innovators India',
        startDate: '2019-02-01',
        endDate: null, // Present
        location: 'Bangalore, India',
        description: 'Developed and maintained scalable and efficient software solutions, contributing to the success of Tech Innovators India.',
      },
      {
        title: 'Software Engineer',
        company: 'Infinite Solutions Pvt. Ltd.',
        startDate: '2016-07-01',
        endDate: '2019-01-31',
        location: 'Hyderabad, India',
        description: 'Contributed to the development of web applications, ensuring high-quality and timely delivery of projects.',
      },
    ],
    activities: ['Contributor to Open Source Projects', 'Tech Meetups Participant'],
    preferredLocations: ['Bangalore, India', 'Hyderabad, India', 'Remote'],
    about: `
      I hold a Bachelor's degree in Computer Science from XYZ University.
      Passionate about contributing to open source projects and actively participating in tech meetups.
    `,
  },
  
  // User 8 (Indian Name)
  {
    id: 8,
    firstName: 'Priya',
    lastName: 'Patel',
    headline: 'UX/UI Designer',
    profileUrl: 'https://www.linkedin.com/in/priyapatel',
    pictureUrl: 'https://www.linkedin.com/in/priyapatel/picture',
    email: 'priyapatel@example.com',
    location: {
      country: 'India',
      city: 'Mumbai',
    },
    industry: 'Design',
    connections: 120,
    summary: 'Creative UX/UI designer with a focus on creating visually appealing and user-friendly interfaces. Proficient in Adobe XD, Sketch, and Figma.',
    skills: ['UI Design', 'UX Design', 'Adobe XD', 'Sketch', 'Figma'],
    experiences: [
      {
        title: 'UX/UI Designer',
        company: 'DesignCraft India',
        startDate: '2018-04-01',
        endDate: null, // Present
        location: 'Mumbai, India',
        description: 'Led design initiatives for various clients, ensuring the delivery of high-quality and innovative user interfaces.',
      },
      {
        title: 'Junior UX/UI Designer',
        company: 'Creative Minds Solutions',
        startDate: '2016-01-01',
        endDate: '2018-03-31',
        location: 'Pune, India',
        description: 'Contributed to the design process, creating wireframes and prototypes for web and mobile applications.',
      },
    ],
    activities: ['Design Hackathon Participant', 'Speaker at Design Workshops'],
    preferredLocations: ['Mumbai, India', 'Pune, India', 'Remote'],
    about: `
      I graduated with a degree in Visual Communication from ABC Institute.
      Actively participating in design hackathons and sharing insights through speaking engagements at design workshops.
    `,
  },
  
  // User 9 (Indian Name)
  {
    id: 9,
    firstName: 'Amit',
    lastName: 'Kumar',
    headline: 'Marketing Manager',
    profileUrl: 'https://www.linkedin.com/in/amitkumar',
    pictureUrl: 'https://www.linkedin.com/in/amitkumar/picture',
    email: 'amitkumar@example.com',
    location: {
      country: 'India',
      city: 'Delhi',
    },
    industry: 'Marketing',
    connections: 90,
    summary: 'Results-driven marketing manager with a focus on digital marketing strategies, brand management, and market analysis. Proven track record in driving successful marketing campaigns.',
    skills: ['Digital Marketing', 'Brand Management', 'Market Analysis', 'Content Marketing', 'SEO'],
    experiences: [
      {
        title: 'Marketing Manager',
        company: 'Digital Solutions India',
        startDate: '2017-09-01',
        endDate: null, // Present
        location: 'Delhi, India',
        description: 'Developed and executed comprehensive digital marketing campaigns, increasing brand visibility and engagement.',
      },
      {
        title: 'Assistant Marketing Manager',
        company: 'Brand Connect Pvt. Ltd.',
        startDate: '2015-03-01',
        endDate: '2017-08-31',
        location: 'Kolkata, India',
        description: 'Assisted in the planning and implementation of marketing strategies, contributing to brand success.',
      },
    ],
    activities: ['Guest Speaker at Marketing Webinars', 'Blogger on Marketing Trends'],
    preferredLocations: ['Delhi, India', 'Mumbai, India', 'Remote'],
    about: `
      I hold an MBA in Marketing from XYZ Business School.
      Actively sharing insights as a guest speaker at marketing webinars and contributing to marketing trends through blogging.
    `,
  },
  // ... (Previous users' data)

// User 10 (Indian Name)
{
    id: 10,
    firstName: 'Sneha',
    lastName: 'Gupta',
    headline: 'Data Scientist',
    profileUrl: 'https://www.linkedin.com/in/snehagupta',
    pictureUrl: 'https://www.linkedin.com/in/snehagupta/picture',
    email: 'snehagupta@example.com',
    location: {
      country: 'India',
      city: 'Hyderabad',
    },
    industry: 'Data Science',
    connections: 80,
    summary: 'Data scientist with expertise in machine learning, statistical analysis, and data visualization. Proficient in Python, R, and SQL.',
    skills: ['Machine Learning', 'Python', 'R', 'Data Visualization', 'Statistics'],
    experiences: [
      {
        title: 'Data Scientist',
        company: 'Insights Analytics India',
        startDate: '2019-07-01',
        endDate: null, // Present
        location: 'Hyderabad, India',
        description: 'Led data science projects, analyzing and extracting insights from large datasets for clients in various industries.',
      },
      {
        title: 'Data Analyst',
        company: 'Tech Insights Pvt. Ltd.',
        startDate: '2017-02-01',
        endDate: '2019-06-30',
        location: 'Bangalore, India',
        description: 'Performed statistical analysis on user behavior data, contributing to strategic business decisions.',
      },
    ],
    activities: ['Presenter at Data Science Conferences', 'Contributor to Data Science Research'],
    preferredLocations: ['Hyderabad, India', 'Bangalore, India', 'Remote'],
    about: `
      I earned my Master's in Data Science from ABC University.
      Certified in Machine Learning by XYZ Institute.
      Passionate about contributing to the data science community and presenting insights at conferences.
    `,
  },
  
  // User 11 (Indian Name)
  {
    id: 11,
    firstName: 'Arun',
    lastName: 'Verma',
    headline: 'Financial Analyst',
    profileUrl: 'https://www.linkedin.com/in/arunverma',
    pictureUrl: 'https://www.linkedin.com/in/arunverma/picture',
    email: 'arunverma@example.com',
    location: {
      country: 'India',
      city: 'Mumbai',
    },
    industry: 'Finance',
    connections: 70,
    summary: 'Financial analyst with expertise in financial modeling, budgeting, and data analysis. Proven track record in providing actionable insights to drive financial decision-making.',
    skills: ['Financial Modeling', 'Budgeting', 'Data Analysis', 'Excel', 'Financial Reporting'],
    experiences: [
      {
        title: 'Financial Analyst',
        company: 'Wealth Solutions India',
        startDate: '2018-09-01',
        endDate: null, // Present
        location: 'Mumbai, India',
        description: 'Conducted financial analysis and forecasting, providing valuable insights for clients to make informed financial decisions.',
      },
      {
        title: 'Investment Analyst',
        company: 'Capital Ventures Pvt. Ltd.',
        startDate: '2016-04-01',
        endDate: '2018-08-31',
        location: 'Delhi, India',
        description: 'Analyzed market trends and investment opportunities, supporting the development of successful investment strategies.',
      },
    ],
    activities: ['Speaker at Finance Seminars', 'Mentorship Programs Advocate'],
    preferredLocations: ['Mumbai, India', 'Delhi, India', 'Remote'],
    about: `
      I hold a Master's in Finance from XYZ University.
      Proficient in financial modeling and data analysis using Excel and other tools.
      Active in presenting at finance seminars and advocating for mentorship programs.
    `,
  },
  
  // User 12 (Indian Name)
  {
    id: 12,
    firstName: 'Neha',
    lastName: 'Chopra',
    headline: 'Human Resources Manager',
    profileUrl: 'https://www.linkedin.com/in/nehachopra',
    pictureUrl: 'https://www.linkedin.com/in/nehachopra/picture',
    email: 'nehachopra@example.com',
    location: {
      country: 'India',
      city: 'Chennai',
    },
    industry: 'Human Resources',
    connections: 60,
    summary: 'Human Resources professional with extensive experience in talent acquisition, employee relations, and HR strategy development. Dedicated to fostering a positive workplace culture.',
    skills: ['Talent Acquisition', 'Employee Relations', 'HR Strategy', 'Performance Management', 'Training & Development'],
    experiences: [
      {
        title: 'HR Manager',
        company: 'People Solutions India',
        startDate: '2017-12-01',
        endDate: null, // Present
        location: 'Chennai, India',
        description: 'Managed all aspects of HR operations, including talent acquisition, employee relations, and performance management.',
      },
      {
        title: 'HR Generalist',
        company: 'Corporate Solutions Ltd.',
        startDate: '2015-06-01',
        endDate: '2017-11-30',
        location: 'Pune, India',
        description: 'Handled various HR functions, including recruitment, employee engagement, and policy implementation.',
      },
    ],
    activities: ['Speaker at HR Conferences', 'Mentorship Programs Advocate'],
    preferredLocations: ['Chennai, India', 'Pune, India', 'Remote'],
    about: `
      I hold a Bachelor's degree in Human Resources Management.
      Skilled in talent acquisition, employee relations, and HR strategy development.
      Active in speaking at HR conferences and advocating for mentorship programs.
    `,
  },
  
  // User 13 (Indian Name)
  {
    id: 13,
    firstName: 'Rahul',
    lastName: 'Srivastava',
    headline: 'Marketing Specialist',
    profileUrl: 'https://www.linkedin.com/in/rahulsrivastava',
    pictureUrl: 'https://www.linkedin.com/in/rahulsrivastava/picture',
    email: 'rahulsrivastava@example.com',
    location: {
      country: 'India',
      city: 'Kolkata',
    },
    industry: 'Marketing',
    connections: 50,
    summary: 'Marketing specialist with a focus on digital marketing strategies, content creation, and social media management. Proven track record in driving brand awareness and engagement.',
    skills: ['Digital Marketing', 'Content Creation', 'Social Media Management', 'SEO', 'Email Marketing'],
    experiences: [
      {
        title: 'Marketing Specialist',
        company: 'Digital Impact India',
        startDate: '2016-10-01',
        endDate: null, // Present
        location: 'Kolkata, India',
        description: 'Executed digital marketing campaigns, emphasizing content creation and social media management for clients across industries.',
      },
      {
        title: 'Content Coordinator',
        company: 'Creative Vibes Pvt. Ltd.',
        startDate: '2014-05-01',
        endDate: '2016-09-30',
        location: 'Bangalore, India',
        description: 'Coordinated content creation and distribution strategies, contributing to brand success and online visibility.',
      },
    ],
    activities: ['Guest Speaker at Marketing Webinars', 'Blogger on Marketing Trends'],
    preferredLocations: ['Kolkata, India', 'Bangalore, India', 'Remote'],
    about: `
      I hold an MBA in Marketing from XYZ Business School.
      Actively sharing insights as a guest speaker at marketing webinars and contributing to marketing trends through blogging.
    `,
  },
  // ... (Previous users' data)

// User 14 (Indian Name)
{
    id: 14,
    firstName: 'Ananya',
    lastName: 'Mishra',
    headline: 'Software Developer',
    profileUrl: 'https://www.linkedin.com/in/ananyamishra',
    pictureUrl: 'https://www.linkedin.com/in/ananyamishra/picture',
    email: 'ananyamishra@example.com',
    location: {
      country: 'India',
      city: 'Bangalore',
    },
    industry: 'Information Technology',
    connections: 40,
    summary: 'Enthusiastic software developer with a focus on web and mobile application development. Proficient in JavaScript, React, Node.js, and MongoDB.',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'RESTful APIs'],
    experiences: [
      {
        title: 'Software Developer',
        company: 'CodeCrafters India',
        startDate: '2020-01-01',
        endDate: null, // Present
        location: 'Bangalore, India',
        description: 'Developed and maintained web applications, contributing to the growth of CodeCrafters India.',
      },
      {
        title: 'Junior Developer',
        company: 'Tech Wizards Pvt. Ltd.',
        startDate: '2018-05-01',
        endDate: '2019-12-31',
        location: 'Hyderabad, India',
        description: 'Contributed to the development of mobile applications, ensuring adherence to best coding practices.',
      },
    ],
    activities: ['Open Source Contributor', 'Tech Meetups Participant'],
    preferredLocations: ['Bangalore, India', 'Hyderabad, India', 'Remote'],
    about: `
      I graduated with a degree in Computer Science from XYZ University.
      Passionate about contributing to open source projects and actively participating in tech meetups.
    `,
  },
  
  // User 15 (Indian Name)
  {
    id: 15,
    firstName: 'Vikram',
    lastName: 'Rajput',
    headline: 'UX/UI Designer',
    profileUrl: 'https://www.linkedin.com/in/vikramrajput',
    pictureUrl: 'https://www.linkedin.com/in/vikramrajput/picture',
    email: 'vikramrajput@example.com',
    location: {
      country: 'India',
      city: 'Mumbai',
    },
    industry: 'Design',
    connections: 35,
    summary: 'Creative UX/UI designer with a passion for creating intuitive and visually appealing interfaces. Proficient in Adobe XD, Sketch, and Figma.',
    skills: ['UI Design', 'UX Design', 'Adobe XD', 'Sketch', 'Figma'],
    experiences: [
      {
        title: 'UX/UI Designer',
        company: 'DesignCraft India',
        startDate: '2019-02-01',
        endDate: null, // Present
        location: 'Mumbai, India',
        description: 'Led design projects, ensuring the delivery of user-centric and innovative interfaces for various clients.',
      },
      {
        title: 'Junior UX/UI Designer',
        company: 'Creative Minds Solutions',
        startDate: '2017-07-01',
        endDate: '2019-01-31',
        location: 'Pune, India',
        description: 'Contributed to the design process, creating wireframes and prototypes for web and mobile applications.',
      },
    ],
    activities: ['Design Hackathon Participant', 'Speaker at Design Workshops'],
    preferredLocations: ['Mumbai, India', 'Pune, India', 'Remote'],
    about: `
      I hold a Bachelor's degree in Visual Communication from ABC Institute.
      Actively participating in design hackathons and sharing insights through speaking engagements at design workshops.
    `,
  },
  
  // User 16 (Indian Name)
  {
    id: 16,
    firstName: 'Rahul',
    lastName: 'Gupta',
    headline: 'Marketing Manager',
    profileUrl: 'https://www.linkedin.com/in/rahulgupta',
    pictureUrl: 'https://www.linkedin.com/in/rahulgupta/picture',
    email: 'rahulgupta@example.com',
    location: {
      country: 'India',
      city: 'Delhi',
    },
    industry: 'Marketing',
    connections: 30,
    summary: 'Dynamic marketing manager with a focus on creating and executing impactful marketing strategies. Proven track record in driving brand visibility and engagement.',
    skills: ['Strategic Marketing', 'Brand Management', 'Social Media Marketing', 'Content Creation', 'Market Analysis'],
    experiences: [
      {
        title: 'Marketing Manager',
        company: 'Innovate India Marketing',
        startDate: '2018-09-01',
        endDate: null, // Present
        location: 'Delhi, India',
        description: 'Developed and executed comprehensive marketing strategies, resulting in increased brand recognition and market share.',
      },
      {
        title: 'Assistant Marketing Manager',
        company: 'Digital Solutions Pvt. Ltd.',
        startDate: '2016-04-01',
        endDate: '2018-08-31',
        location: 'Mumbai, India',
        description: 'Assisted in the planning and implementation of marketing initiatives, contributing to brand success.',
      },
    ],
    activities: ['Guest Speaker at Marketing Webinars', 'Blogger on Marketing Trends'],
    preferredLocations: ['Delhi, India', 'Mumbai, India', 'Remote'],
    about: `
      I hold an MBA in Marketing from XYZ Business School.
      Actively sharing insights as a guest speaker at marketing webinars and contributing to marketing trends through blogging.
    `,
  },
  
  // User 17 (Indian Name)
  {
    id: 17,
    firstName: 'Shreya',
    lastName: 'Sharma',
    headline: 'Data Analyst',
    profileUrl: 'https://www.linkedin.com/in/shreyasharma',
    pictureUrl: 'https://www.linkedin.com/in/shreyasharma/picture',
    email: 'shreyasharma@example.com',
    location: {
      country: 'India',
      city: 'Chennai',
    },
    industry: 'Data Science',
    connections: 25,
    summary: 'Analytical data analyst with expertise in statistical analysis and data visualization. Proficient in Python, R, and SQL.',
    skills: ['Data Analysis', 'Python', 'R', 'SQL', 'Data Visualization'],
    experiences: [
      {
        title: 'Data Analyst',
        company: 'Insights Analytics India',
        startDate: '2019-07-01',
        endDate: null, // Present
        location: 'Chennai, India',
        description: 'Conducted data analysis, providing actionable insights for clients across various industries.',
      },
      {
        title: 'Research Assistant',
        company: 'Data Insights Research Institute',
        startDate: '2017-02-01',
        endDate: '2019-06-30',
        location: 'Bangalore, India',
        description: 'Contributed to research projects, performing statistical analysis on datasets to extract meaningful insights.',
      },
    ],
    activities: ['Presenter at Data Analysis Workshops', 'Contributor to Data Science Community'],
    preferredLocations: ['Chennai, India', 'Bangalore, India', 'Remote'],
    about: `
      I earned my Master's in Data Science from ABC University.
      Passionate about presenting insights at data analysis workshops and contributing to the data science community.
    `,
  },
  // ... (Previous users' data)

// User 18 (Indian Name)
{
    id: 18,
    firstName: 'Neha',
    lastName: 'Gupta',
    headline: 'Full Stack Developer',
    profileUrl: 'https://www.linkedin.com/in/nehagupta',
    pictureUrl: 'https://www.linkedin.com/in/nehagupta/picture',
    email: 'nehagupta@example.com',
    location: {
      country: 'India',
      city: 'Bangalore',
    },
    industry: 'Information Technology',
    connections: 40,
    summary: 'Passionate full-stack developer with expertise in building scalable and efficient web applications. Proficient in JavaScript, React, Node.js, and MongoDB.',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'RESTful APIs'],
    experiences: [
      {
        title: 'Full Stack Developer',
        company: 'CodeCrafters India',
        startDate: '2020-01-01',
        endDate: null, // Present
        location: 'Bangalore, India',
        description: 'Developed and maintained web applications, contributing to the growth of CodeCrafters India.',
      },
      {
        title: 'Software Engineer',
        company: 'Tech Wizards Pvt. Ltd.',
        startDate: '2018-05-01',
        endDate: '2019-12-31',
        location: 'Hyderabad, India',
        description: 'Contributed to the development of mobile applications, ensuring adherence to best coding practices.',
      },
    ],
    activities: ['Open Source Contributor', 'Tech Meetups Participant'],
    preferredLocations: ['Bangalore, India', 'Hyderabad, India', 'Remote'],
    about: `
      I graduated with a degree in Computer Science from XYZ University.
      Passionate about contributing to open source projects and actively participating in tech meetups.
    `,
  },
  
  // User 19 (Indian Name)
  {
    id: 19,
    firstName: 'Aryan',
    lastName: 'Verma',
    headline: 'Data Scientist',
    profileUrl: 'https://www.linkedin.com/in/aryanverma',
    pictureUrl: 'https://www.linkedin.com/in/aryanverma/picture',
    email: 'aryanverma@example.com',
    location: {
      country: 'India',
      city: 'Mumbai',
    },
    industry: 'Data Science',
    connections: 35,
    summary: 'Data scientist with a passion for leveraging data to drive strategic business decisions. Proficient in machine learning, Python, and data visualization.',
    skills: ['Machine Learning', 'Python', 'Data Visualization', 'Statistical Analysis', 'SQL'],
    experiences: [
      {
        title: 'Data Scientist',
        company: 'Insights Analytics India',
        startDate: '2019-07-01',
        endDate: null, // Present
        location: 'Mumbai, India',
        description: 'Led data science projects, analyzing and extracting insights from large datasets for clients in various industries.',
      },
      {
        title: 'Data Analyst',
        company: 'Tech Insights Pvt. Ltd.',
        startDate: '2017-02-01',
        endDate: '2019-06-30',
        location: 'Bangalore, India',
        description: 'Performed statistical analysis on user behavior data, contributing to strategic business decisions.',
      },
    ],
    activities: ['Presenter at Data Science Conferences', 'Contributor to Data Science Research'],
    preferredLocations: ['Mumbai, India', 'Bangalore, India', 'Remote'],
    about: `
      I earned my Master's in Data Science from ABC University.
      Certified in Machine Learning by XYZ Institute.
      Passionate about contributing to the data science community and presenting insights at conferences.
    `,
  },
  
  // User 20 (Indian Name)
  {
    id: 20,
    firstName: 'Aditi',
    lastName: 'Mishra',
    headline: 'UX/UI Designer',
    profileUrl: 'https://www.linkedin.com/in/aditimishra',
    pictureUrl: 'https://www.linkedin.com/in/aditimishra/picture',
    email: 'aditimishra@example.com',
    location: {
      country: 'India',
      city: 'Delhi',
    },
    industry: 'Design',
    connections: 30,
    summary: 'Creative UX/UI designer with a focus on crafting engaging and user-friendly interfaces. Proficient in Adobe XD, Sketch, and Figma.',
    skills: ['UI Design', 'UX Design', 'Adobe XD', 'Sketch', 'Figma'],
    experiences: [
      {
        title: 'UX/UI Designer',
        company: 'DesignCraft India',
        startDate: '2019-02-01',
        endDate: null, // Present
        location: 'Delhi, India',
        description: 'Led design projects, ensuring the delivery of user-centric and innovative interfaces for various clients.',
      },
      {
        title: 'Junior UX/UI Designer',
        company: 'Creative Minds Solutions',
        startDate: '2017-07-01',
        endDate: '2019-01-31',
        location: 'Pune, India',
        description: 'Contributed to the design process, creating wireframes and prototypes for web and mobile applications.',
      },
    ],
    activities: ['Design Hackathon Participant', 'Speaker at Design Workshops'],
    preferredLocations: ['Delhi, India', 'Pune, India', 'Remote'],
    about: `
      I hold a Bachelor's degree in Visual Communication from ABC Institute.
      Actively participating in design hackathons and sharing insights through speaking engagements at design workshops.
    `,
  },
  
  // User 21 (Indian Name)
  {
    id: 21,
    firstName: 'Arjun',
    lastName: 'Sharma',
    headline: 'Marketing Specialist',
    profileUrl: 'https://www.linkedin.com/in/arjunsharma',
    pictureUrl: 'https://www.linkedin.com/in/arjunsharma/picture',
    email: 'arjunsharma@example.com',
    location: {
      country: 'India',
      city: 'Chennai',
    },
    industry: 'Marketing',
    connections: 25,
    summary: 'Results-driven marketing specialist with expertise in digital marketing strategies and brand development. Proven track record in driving successful marketing campaigns.',
    skills: ['Digital Marketing', 'Brand Development', 'Content Marketing', 'Social Media Management', 'SEO'],
    experiences: [
      {
        title: 'Marketing Specialist',
        company: 'Digital Impact India',
        startDate: '2016-10-01',
        endDate: null, // Present
        location: 'Chennai, India',
        description: 'Executed digital marketing campaigns, emphasizing content creation and social media management for clients across industries.',
      },
      {
        title: 'Content Coordinator',
        company: 'Creative Vibes Pvt. Ltd.',
        startDate: '2014-05-01',
        endDate: '2016-09-30',
        location: 'Bangalore, India',
        description: 'Coordinated content creation and distribution strategies, contributing to brand success and online visibility.',
      },
    ],
    activities: ['Guest Speaker at Marketing Webinars', 'Blogger on Marketing Trends'],
    preferredLocations: ['Chennai, India', 'Bangalore, India', 'Remote'],
    about: `
      I hold an MBA in Marketing from XYZ Business School.
      Actively sharing insights as a guest speaker at marketing webinars and contributing to marketing trends through blogging.
    `,
  },
  
  // User 22 (Indian Name)
  {
    id: 22,
    firstName: 'Anushka',
    lastName: 'Rajput',
    headline: 'Human Resources Manager',
    profileUrl: 'https://www.linkedin.com/in/anushkarajput',
    pictureUrl: 'https://www.linkedin.com/in/anushkarajput/picture',
    email: 'anushkarajput@example.com',
    location: {
      country: 'India',
      city: 'Mumbai',
    },
    industry: 'Human Resources',
    connections: 20,
    summary: 'Dedicated human resources manager with extensive experience in talent acquisition and employee relations. Committed to fostering a positive and inclusive workplace culture.',
    skills: ['Talent Acquisition', 'Employee Relations', 'HR Strategy', 'Performance Management', 'Training & Development'],
    experiences: [
      {
        title: 'HR Manager',
        company: 'People Solutions India',
        startDate: '2017-12-01',
        endDate: null, // Present
        location: 'Mumbai, India',
        description: 'Managed all aspects of HR operations, including talent acquisition, employee relations, and performance management.',
      },
      {
        title: 'HR Generalist',
        company: 'Corporate Solutions Ltd.',
        startDate: '2015-06-01',
        endDate: '2017-11-30',
        location: 'Pune, India',
        description: 'Handled various HR functions, including recruitment, employee engagement, and policy implementation.',
      },
    ],
    activities: ['Speaker at HR Conferences', 'Mentorship Programs Advocate'],
    preferredLocations: ['Mumbai, India', 'Pune, India', 'Remote'],
    about: `
      I hold a Bachelor's degree in Human Resources Management.
      Skilled in talent acquisition, employee relations, and HR strategy development.
      Active in speaking at HR conferences and advocating for mentorship programs.
    `,
  },
  ];
  
  export default linkedInUsers;
  