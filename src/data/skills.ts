
export interface Skills {
    id:number;
    title: string;
    skills: Skill[];
}

export interface Skill{
    name: string;
    level: number;
}

export const skillCategories: Skills[] = [
    {
        id: 1,
        title: 'Backend Development',
        skills: [
            { name: 'Java', level: 95 },
            { name: 'Spring Boot', level: 90 },
            { name: 'Spring Security', level: 85 },
            { name: 'Hibernate/JPA', level: 88 },
            { name: 'RESTful APIs', level: 92 },
            { name: 'Servlet/JSP', level: 80 },
        ],
    },
    {
        id: 2,
        title: 'Database',
        skills: [
            { name: 'MySQL', level: 90 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'Oracle', level: 92 },
            { name: 'Cubrid', level: 80 },
            { name: 'Database Design', level: 90 },
            { name: 'Query Optimization', level: 82 },
        ],
    },
    {
        id: 3,
        title: 'Tools & DevOps',
        skills: [
            { name: 'Git', level: 90 },
            { name: 'Docker', level: 85 },
            { name: 'Maven/Gradle', level: 88 },
            { name: 'Jenkins/CI-CD', level: 80 },
            { name: 'Linux', level: 82 },
        ],
    },
    {
        id: 4,
        title: 'Additional Skills',
        skills: [
            { name: 'Unit Testing (JUnit)', level: 88 },
            { name: 'API Documentation', level: 90 },
            { name: 'Agile/Scrum', level: 85 },
            { name: 'Problem Solving', level: 92 },
            { name: 'System Design', level: 87 },
            { name: 'Performance Tuning', level: 83 },
        ],
    },
];