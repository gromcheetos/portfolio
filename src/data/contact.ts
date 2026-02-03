import type { I18nText } from '../i18n/types';

export type ContactItemType = 'email' | 'linkedIn' | 'location';

export interface ContactItem {
    type: ContactItemType;
    title: string;
    value: string;
    link?: string;
}

export interface ContactContent {
    heading: string;
    intro: string;
    items: ContactItem[];
    availableFor: I18nText[];
    footerText: string;
}

export const contactContent: ContactContent = {
    heading: 'Get In Touch',
    intro: "Interested in working together? Let's discuss your project and how I can help build robust backend solutions.",
    items: [
        {
            type: 'email',
            title: 'Email',
            value: 'hannadeseoul@gmail.com',
            link: 'mailto:hannadeseoul@gmail.com',
        },
        {
            type: 'linkedIn',
            title: 'LinkedIn',
            value: 'https://www.linkedin.com/in/hanna-kim-3b58041a0/',
            link: 'https://www.linkedin.com/in/hanna-kim-3b58041a0/',
        },
        {
            type: 'location',
            title: 'Location',
            value: 'Seoul, Korea',
        },
    ],
    availableFor: [
        {
            en: 'Java backend',
            ko: '자바 백엔드 개발자'
        },
        {
            en: 'Full-stack',
            ko: '플스택 개발자'
        },
        {
            en: 'Software engineer',
            ko: '소프트웨어 엔지니어'
        }
    ],
    footerText: '© Kim Hanna. All rights reserved.',
};
