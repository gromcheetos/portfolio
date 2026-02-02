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
    availableFor: string[];
    footerText: string;
}

export const contactContent: ContactContent = {
    heading: 'Get In Touch',
    intro:
        "Interested in working together? Let's discuss your project and how I can help build robust backend solutions.",
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
        'Full-time positions',
        'Freelance projects',
        'Technical consulting',
    ],
    footerText: '© Kim Hanna. All rights reserved.',
};
