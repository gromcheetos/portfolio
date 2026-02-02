export interface Experience{
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
}

export const experiences: Experience[] = [
    {
        id: 1,
        title: 'Software Developer',
        company: 'Wezle',
        period: '2024.09 - Present',
        description:
            'Backend developer responsible for building and maintaining large-scale public and enterprise systems using Spring and eGovFrame. Developed nationwide administrative services, enterprise API platforms, and production web systems.',
        achievements: [
            'Implemented the full digital case application workflow for a nationwide government administrative appeals platform',
            'Designed and developed scalable backend APIs for an enterprise integration platform',
            'Maintained and enhanced a live university web system, resolving production issues and improving system stability',
        ],
    },
    {
        id: 2,
        title: 'Backend Developer',
        company: 'BIDT',
        period: '2021.02 - 2022.03',
        description:
            'Focused on e-commerce systems and enterprise web platforms. Designed and implemented database architecture, payment integration, and secure backend services.',
        achievements: [
            'Developed backend services for an e-commerce platform including product, order, and payment processing workflows',
            'Redesigned and rebuilt the company web platform, improving system structure and maintainability',
            'Optimized database queries and API performance for high-traffic production environments',
        ],
    },
    {
        id: 3,
        title: 'Junior Java Developer',
        company: 'Chenglin E&M',
        period: '2019.10 - 2020.10',
        description:
            'Maintained production backend services for a cryptocurrency platform and developed core features of a donation system using Java and Spring.',
        achievements: [
            'Maintained and enhanced production backend services for a cryptocurrency management platform',
            'Developed administrative features and workflows for a donation platform including secure email verification',
            'Implemented and supported backend APIs across live systems, ensuring stability and operational reliability',
        ],
    },
];