export interface Project {
    id:number;
    title: string;
    description : string;
    github?: string;
    demo?: string;
    techStack: string[];
    color: string;
}

export const projects: Project[] =[
    {
        id: 1,
        title: 'Online Administrative Appeals',
        description:
            'Built the full case application workflow for a nationwide government administrative appeals platform, handling submission, validation, and lifecycle management of citizen appeals.',
        techStack: ['Java', 'Spring', 'PostgreSQL', 'JS', 'SVN', 'Jenkins'],
        demo: 'https://www.simpan.go.kr',
        color: 'from-emerald-400 to-teal-500',
    },
    {
        id: 2,
        title: 'Kanban board Web App',
        description:
            'Developed a full-stack collaborative task management platform inspired by Kanban workflows. \n' +
            'Users can create projects, invite team members, track task progress, and manage personal profiles.',
        techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JS', 'Thymeleaf', 'Github'],
        github: 'https://github.com/gromcheetos/task-management-proj',
        demo: 'https://example.com',
        color: 'from-blue-400 to-cyan-500',
    },
    {
        id: 3,
        title: 'Weather-data-analysis',
        description:
            'Implemented a Java weather data engine capable of parsing large CSV datasets and executes analytical queries on temperature and regional climate statistics.',
        techStack: ['Java', 'Spring Boot', 'MySQL'],
        github: 'https://github.com/gromcheetos/weather-data-analysis',
        demo: 'https://example.com',
        color: 'from-green-400 to-emerald-500',
    },
    {
        id:4,
        title: 'Donation Platform',
        description:
            'Developed the administrative backend of a donation platform, implementing dashboards, donation management tools, and secure email verification workflows to support reliable operational processing.',
        techStack: ['egov', 'Java', 'MySQL', 'JS', 'SVN'],
        github: 'https://github.com/gromcheetos/donation',
        color: 'from-teal-400 to-cyan-500',
    },
];
