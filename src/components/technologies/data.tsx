import {
  FaReact,
  FaWindows,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaCloud,
} from 'react-icons/fa';

import React from 'react';

export const skills = [
  {
    title: 'React',
    skill: 95,
    icon: <FaReact />,
  },
  {
    title: 'Javascript',
    skill: 90,
    icon: <FaJsSquare />,
  },
  {
    title: 'TypeScript',
    skill: 90,
    icon: (
      <div
        style={{
          color: 'white',
          background: '#333',
          fontSize: 14,
          width: 'auto',
          height: 'auto',
          padding: 4,
          fontWeight: 600,
          borderRadius: 5,
          display: 'inline',
        }}
      >
        TS
      </div>
    ),
  },
  {
    title: 'C#',
    skill: 90,
    icon: <FaWindows />,
  },
  {
    title: 'Cloud (AWS and Azure)',
    skill: 80,
    icon: <FaCloud />,
  },
  {
    title: 'NodeJS',
    skill: 50,
    icon: <FaNodeJs />,
  },
  {
    title: 'SQL',
    skill: 75,
    icon: <FaDatabase />,
  },
  {
    title: 'Docker',
    skill: 20,
    icon: <FaDocker />,
  },
];
