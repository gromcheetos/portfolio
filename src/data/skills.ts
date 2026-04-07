import type { I18nText } from '../i18n/types';

export interface Skills {
    id:number;
    title: I18nText;
    skills: Skill[];
}

export interface Skill{
    nameEn: string;
    nameKo? : string;
    level: number;
}

export const skillCategories: Skills[] = [
    {
        id: 1,
        title: {
            en: 'Backend Development',
            ko: '',
        },
        skills: [
            { nameEn: 'Java',
              nameKo: '자바',
              level: 95,
            },
            { nameEn: 'Spring Boot',
              nameKo: '스프링 부트',
              level: 90
            },
            {
              nameEn: 'Hibernate/JPA',
              level: 88
            },
            {
              nameEn: 'RESTful APIs',
              level: 92,
            },
            { nameEn: 'Servlet/JSP',
              level: 80
            },
            { nameEn: 'React',
              level: 80  
            }
        ],
    },
    {
        id: 2,
        title: {
            en: 'Database',
            ko: '',
        },
        skills: [
            { nameEn: 'MySQL',
              level: 90,
            },
            { nameEn: 'PostgreSQL',
              level: 85
            },
            { nameEn: 'Oracle',
              level: 89
            },
            { nameEn: 'Cubrid',
              level: 80
            },
            { nameEn: 'Database Design',
              nameKo: '데이터베이스 설계',
              level: 87
            }
        ],
    },
    {
        id: 3,
        title: {
            en: 'Tools & DevOps',
            ko: '',
        },
        skills: [
            { nameEn: 'Git',
              nameKo: '깃',
              level: 90,
            },
            { nameEn: 'Docker',
              nameKo: '도커',
              level: 85
            },
            { nameEn: 'Maven/Gradle',
              nameKo: '메이븐/그래들',
              level: 89
            },
            { nameEn: 'Jenkins/CI-CD',
              nameKo: '젠킨스/CI-CD',
              level: 80
            },
            { nameEn: 'Linux',
              nameKo: '리눅스',
              level: 82
            }
        ],
    },
    {
        id: 4,
        title: {
            en: 'Additional Skills',
            ko: '',
        },
        skills: [
            { nameEn: 'Unit Testing (JUnit)',
              nameKo: '유닛 테스트(JUnit)',
              level: 95
            },
            { nameEn: 'API Documentation',
              nameKo: 'API 문서',
              level: 97
            },
            { nameEn: 'Agile/Scrum',
              nameKo: '애자일/스크럼',
              level: 92
            },
            { nameEn: 'Problem Solving',
              nameKo: '문제 해결 능력',
              level: 85
            },
            { nameEn: 'System Design',
              nameKo: '시스템 디자인',
              level: 88
            }
        ],
    },
    {
        id: 5,
        title: {
            en: 'Frontend Development',
            ko: '',
        },
        skills: [
            { nameEn: 'JavaScript',
              nameKo: '자바스크립트',
              level: 95
            },
            { nameEn: 'jQuery',
              nameKo: '제이쿼리',
              level: 97
            },
            { nameEn: 'React',
              nameKo: '리엑트',
              level: 89
            },
            { nameEn: 'TypeScript',
              nameKo: '타입스크립트',
              level: 85
            }
        ],
    }
];
