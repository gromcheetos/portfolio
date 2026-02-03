import type { I18nText } from '../i18n/types';

export type ItemType = 'code' | 'db' | 'server' | 'perform';

export interface Highlight{
    type: ItemType;
    title: I18nText;
    description: I18nText;
}

export interface AboutParagraph{
    id: number;
    contents: I18nText;
}

export const highlights: Highlight[] = [
    {
        type: 'code',
        title: {
            en: 'Clean Code',
            ko: '클린 코드',
        },
        description: {
            en: 'Writing maintainable, testable, and scalable code following best practices',
            ko: '유지보수 가능하고 확장 가능한 구조의 코드를 작성합니다',
        },
    },
    {
        type: 'db',
        title: {
            en: 'Database Design',
            ko: '데이터베이스 설계',
        },
        description: {
            en: 'Expert in relational database design, optimization, and complex queries',
            ko: '관계형 데이터베이스 설계 및 쿼리 최적화 경험',
        },
    },
    {
        type: 'server',
        title: {
            en: 'API Development',
            ko: 'API 개발',
        },
        description: {
            en: 'Building RESTful APIs and microservices with Spring Boot',
            ko: 'Spring Boot 기반 REST API 및 마이크로서비스 개발',
        },
    },
    {
        type: 'perform',
        title: {
            en: 'Performance',
            ko: '성능 최적화',
        },
        description: {
            en: 'Optimizing backend performance and caching strategies',
            ko: '백엔드 성능 개선 및 캐싱 전략 구현',
        },
    },
];

export const paragraph: AboutParagraph[] = [
    {
        id: 1,
        contents: {
            en: 'I’m a backend developer specializing in building large-scale, production systems used in real-world environments. My work includes developing nationwide government platforms, enterprise API infrastructures, and high-traffic web applications that require reliability and performance.',
            ko: '실제 운영 환경에서 사용되는 대규모 시스템을 중심으로 개발하는 백엔드 개발자',
        },
    },
    {
        id: 2,
        contents: {
            en:'I focus on Java and Spring-based architectures, designing secure APIs, complex business workflows, and scalable database structures. I have hands-on experience maintaining live systems, resolving production issues, and continuously improving system stability.',
            ko: 'Java 및 Spring 기반 아키텍처에서 보안 API와 확장 가능한 시스템을 설계합니다.',
        },
    },
    {
        id: 3,
        contents: {
            en: 'My approach emphasizes clean architecture, maintainable code, and practical engineering decisions that support long-term growth. I value systems that are not only functional, but resilient and easy for teams to evolve.',
            ko: '클린 아키텍처와 장기 유지보수 가능한 구조를 중요하게 생각합니다.',
        },
    },
];