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
    description: `Brought on to develop Salesforce
  integrated apps for lenders. While working on the entire
  stack, I was brought on to lead the team in UI/UX, focusing on
  usable design.`,
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
    description: `Brought on to further their digital signature SaaS product. During my tenure we revamped security, permissions, and transitioned from a legacy asp.net app to a modern SPA. `,
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
    description:
      'Worked on a content and lead generation site that has millions of distinct viewers. Worked with graphic designers to turn wireframes and ui spec into web designs that focus on conversion rates.',
    title: 'Software Developer',
    skills: ['C#', 'MVC', 'SQL', 'CSS', 'Bootstrap'],
  },
];
