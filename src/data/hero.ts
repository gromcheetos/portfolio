import type { Lang } from '../i18n/LanguageContext';

export type I18nText = Record<Lang, string>;

export const hero = {
    badge: {
        en: 'Hanna Kim • Backend Engineer',
        ko: '김한나 • 백엔드 개발자',
    } satisfies I18nText,

    titleLine1: {
        en: 'Engineering Reliable',
        ko: '안정적인 운영 환경을 위한',
    } satisfies I18nText,

    titleHighlight: {
        en: 'Production Systems',
        ko: '백엔드 시스템을 만듭니다',
    } satisfies I18nText,

    subtitle: {
        en: 'Specialized in Java, Spring, MySQL, Oracle and scalable backend solutions that power modern applications.',
        ko: 'Java, Spring, MySQL, Oracle 기반으로 확장 가능한 백엔드와 API를 설계·구현합니다.',
    } satisfies I18nText,

    ctaPrimary: {
        en: 'Get In Touch',
        ko: '연락하기',
    } satisfies I18nText,

    ctaSecondary: {
        en: 'View Projects',
        ko: '프로젝트 보기',
    } satisfies I18nText,

    links: {
        github: 'https://github.com/gromcheetos',
        linkedin: 'https://www.linkedin.com/in/hanna-kim-3b58041a0/',
        email: 'mailto:hannadeseoul@gmail.com',
    },
};
