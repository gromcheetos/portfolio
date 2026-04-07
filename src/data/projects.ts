import type { I18nText } from '../i18n/types';

export interface Project {
    id:number;
    title: I18nText;
    description : I18nText;
    github?: string;
    externalLink?: string;
    externalLabel?: 'demo' | 'production';
    techStack: string[];
    color: string;
}

export const projects: Project[] =[
    {
        id: 1,
        title:{
            en:'Online Administrative Appeals System',
            ko: '온라인 행정심판 시스템 구축'
        },
        description:{
            en: 'Built the full case application workflow for a nationwide government administrative appeals platform, handling submission, validation, and lifecycle management of citizen appeals.',
            ko: '국민권익위원회 행정심판 시스템에서 사건 접수부터 검증, 처리 라이프사이클까지 전체 신청관련 워크플로우 구현'
        },
        techStack: ['Java', 'Spring', 'PostgreSQL', 'JS', 'SVN', 'Jenkins'],
        externalLink: 'https://www.simpan.go.kr',
        externalLabel: "production",
        color: 'from-emerald-400 to-teal-500',
    },
    {
        id: 2,
        title: {
            en: 'Task Management Web App',
            ko: '업무관리 웹앱'
        },
        description: {
            en:'Developed a full-stack collaborative task management platform inspired by Kanban workflows. \n' +
                'Users can create projects, invite team members, track task progress, and manage personal profiles.',
            ko: '칸반(Kanban) 보드 스타일의 풀스택 협업형 작업 관리 플랫폼을 개발\n' +
                '사용자는 프로젝트를 생성하고 팀원을 초대하여 작업 진행 상황을 추적할 수 있고, 실시간 진척률 통계와 함께 업무를 관리하는 기능 구현'
        },
        techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JS', 'Thymeleaf', 'Github'],
        github: 'https://github.com/gromcheetos/task-management-proj',
        externalLink: 'https://example.com',
        externalLabel: "demo",
        color: 'from-blue-400 to-cyan-500',
    },
    {
        id: 3,
        title:{
            en: 'Weather-data-analysis',
            ko: '날씨정보 분석 엔진'
        },
        description:{
            en: 'Implemented a Java weather data engine capable of parsing large CSV datasets and executes analytical queries on temperature and regional climate statistics.',
            ko: '대용량 CSV 데이터를 파싱하고 온도 및 지역 기후 통계에 대한 분석 쿼리를 수행할 수 있는 Java 기반 기상 데이터 엔진을 구현'
        },
        techStack: ['Java', 'Spring Boot', 'MySQL'],
        github: 'https://github.com/gromcheetos/weather-data-analysis',
        color: 'from-green-400 to-emerald-500',
    },
    {
        id:4,
        title: {
            en: 'Donation Platform',
            ko: '기부 플랫폼'
        },
        description: {
            en: 'Developed the administrative backend of a donation platform, implementing dashboards, donation management tools, and secure email verification workflows to support reliable operational processing.',
            ko: '안정적인 운영 처리를 위해 관리자 대시보드, 기부 관리 기능, 보안 이메일 인증 흐름을 포함한 기부 플랫폼의 관리자 백엔드 시스템을 설계 및 구현'
        },
        techStack: ['egov', 'Java', 'MySQL', 'JS', 'SVN'],
        github: 'https://github.com/gromcheetos/donation',
        color: 'from-teal-400 to-cyan-500',
    },
    {
    id: 5,
        title: {
            en: 'Intranet Messenger',
            ko: '사내 인트라넷 메신저'
        },
        description: {
            en: 'Developed a real-time intranet messaging application for internal company communication.\n' +
                'Implemented WebSocket-based live chat with support for multiple chat rooms and channels, enabling seamless team collaboration within the organization.',
            ko: 'WebSocket 기반 실시간 채팅 기능과 다중 채팅방 및 채널을 지원하는 사내 인트라넷 메신저 애플리케이션 개발\n' +
                '조직 내 원활한 팀 협업을 위한 채널별 메시지 분리 및 실시간 송수신 기능 구현'
        },
        techStack: ['React', 'TypeScript', 'Spring Boot', 'WebSocket', 'PostgreSQL', 'Github'],
        github: 'https://github.com/gromcheetos/intranet-messenger.git',
        externalLink: 'https://intranet-messenger.vercel.app/',
        externalLabel: 'demo',
        color: 'from-violet-400 to-purple-500',
    },
];
