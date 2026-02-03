import type { I18nText } from '../i18n/types';


export interface Experience{
    id: number;
    title: I18nText;
    company: string;
    period: string;
    description: I18nText;
    achievements: I18nText[];
}

export const experiences: Experience[] = [
    {
        id: 1,
        title: {
            en: 'Software Developer',
            ko: '소프트웨어 개발자'
        },
        company: 'Wezle',
        period: '2024.09 - Present',
        description: {
            en: 'Backend developer responsible for building and maintaining large-scale public and enterprise systems using Spring and eGovFrame. Developed nationwide administrative services, enterprise API platforms, and production web systems.',
            ko: 'Spring 및 eGovFrame 기반으로 대규모 공공·엔터프라이즈 시스템을 구축하고 유지보수, 전국 단위 행정 서비스, 엔터프라이즈 API 플랫폼, 운영 중인 웹 시스템을 개발'
        },
        achievements: [
            {
                en: 'Implemented the full digital case application workflow for a nationwide government administrative appeals platform',
                ko: '국민권익위원회 행정심판 플랫폼에서 사건 신청 전 과정을 포함한 디지털 워크플로우를 구현'
            },
            {
                en:'Designed and developed scalable backend APIs for an enterprise integration platform',
                ko: '엔터프라이즈 통합 플랫폼을 위한 확장 가능한 백엔드 API를 설계 및 개발'
            },
            {
                en: 'Maintained and enhanced a live university web system, resolving production issues and improving system stability',
                ko: '운영 중인 대학 웹 시스템을 유지보수하며 장애를 해결하고 시스템 안정성 개선'
            }
        ]
    },
    {
        id: 2,
        title: {
            en: 'Java Developer',
            ko: '자바 개발자'
        },
        company: 'BIDT',
        period: '2021.02 - 2022.03',
        description: {
            en: 'Focused on e-commerce systems and enterprise web platforms. Designed and implemented database architecture, payment integration, and secure backend services.',
            ko: '이커머스 시스템과 엔터프라이즈 웹 플랫폼을 중심으로 개발했으며, 데이터베이스 아키텍처 설계, 결제 연동, 보안 중심의 백엔드 서비스를 구현.'
        },
        achievements: [
            {
                en: 'Developed backend services for an e-commerce platform including product, order, and payment processing workflows',
                ko: '상품, 주문, 결제 처리 흐름을 포함한 이커머스 플랫폼의 백엔드 서비스를 개발'
            },
            {
                en:'Redesigned and rebuilt the company web platform, improving system structure and maintainability',
                ko: '회사 웹 플랫폼을 전면 재구축하여 시스템 구조와 유지보수성을 개선'
            },
            {
                en: 'Optimized database queries and API performance for high-traffic production environments',
                ko: '트래픽이 높은 운영 환경에서 데이터베이스 쿼리와 API 성능을 최적화'
            }
        ]
    },
    {
        id: 3,
        title: {
            en: 'Java Developer',
            ko: '자바 개발자'
        },
        company: 'Chenglin E&M',
        period: '2019.10 - 2020.10',
        description: {
            en: 'Maintained production backend services for a cryptocurrency platform and developed core features of a donation system using Java and Spring.',
            ko: 'Java와 eGaveFrame 기반으로 운영 중인 암호화폐 플랫폼의 백엔드 서비스를 유지보수하고, 기부 시스템의 핵심 기능을 개발'
        },
        achievements: [
            {
                en: 'Maintained and enhanced production backend services for a cryptocurrency management platform',
                ko: '운영 중인 암호화폐 관리 플랫폼의 백엔드 서비스를 유지보수하고 기능을 개선'
            },
            {
                en:'Developed administrative features and workflows for a donation platform including secure email verification',
                ko: '보안 이메일 인증을 포함한 기부 플랫폼의 관리자 기능과 업무 흐름을 개발'
            },
            {
                en: 'Implemented and supported backend APIs across live systems, ensuring stability and operational reliability',
                ko: '실사용 시스템 전반의 백엔드 API를 구현하고 지원하며 안정적인 운영을 보장'
            }
        ]
    },
];