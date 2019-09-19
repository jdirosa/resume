export interface Work {
  company: string;
  dates: string;
  description: string;
  skills: string[];
  title: string;
}
export const Works: Work[] = [
  {
    company: 'Surge Solutions',
    dates: 'February 2019 - September 2019',
    description: `Had a lot of fun working with a ton of fantastic tech. I was able to develop external Salesforce tools that help streamline the lending process.`,
    title: 'Full Stack Engineer',
    skills: [
      'AWS',
      'Cloud Formation',
      'Serverless',
      'React',
      'NodeJS',
      'TypeScript',
      'RDS',
      'NestJS',
      'DynamoDB',
      'S3',
      'OAuth',
      'Lambda',
      'Material-UI',
      'Styled-Components',
      'React Hooks',
      'Mentorship',
      'Git',
    ],
  },
  {
    company: 'AssureSign',
    dates: 'April 2017 - February 2019',
    description: `Worked with an amazing team and helped to further their digital signature product. There was a major focus on security and scalability at every layer of the stack. `,
    title: 'Full Stack Engineer',
    skills: [
      'Azure',
      'MSSQL',
      'IIS',
      'C#',
      'Dependency Injection',
      'IOC',
      'TypeScript',
      'React',
      'Jenkins',
      'Team Foundation Server',
      'Mentorship',
      'OAuth',
      'Redis',
    ],
  },
  {
    company: 'Kubica Corp',
    dates: 'February 2016 - April 2017',
    description: `Developed and led projects around 
      factory automation and scheduling. 
      Worked as a project manager and met with 
      engineers from fortune 500 manufactures and worked to 
      develop systems that increase throughput, decrease 
      defects, and decrease inventory à la lean manufacturing. 
      I also served as a mentor for several junior level developers 
      and helped to bring their skill level to that of a 
      mid level developer.`,
    title: 'Software Engineer',
    skills: [
      'SQL',
      'C#',
      'Kendo UI',
      'MVC',
      'Angular',
      'JavaScript',
      'Hardware Integration',
      'IIS',
    ],
  },
  {
    company: 'AgingCare.com',
    dates: 'February 2015 - February 2016',
    description: `Fascinating position on a content and lead generation website. 
      I especially enjoyed the deep statistical dives on conversion 
      rates, experimenting with AB testing, and really understanding 
      the impact UX can have on a user.`,
    title: 'Software Developer',
    skills: ['C#', 'MVC', 'SQL', 'CSS', 'Bootstrap'],
  },
];
