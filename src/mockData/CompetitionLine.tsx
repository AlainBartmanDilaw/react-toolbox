export interface EditionLine {
    idt: number;
    code: string;
    description: string;
    startDate: Date;
    finishDate: Date;
    // Add more fields as needed
}

export interface CompetitionLine {
    idt: number;
    code: string;
    description: string;
    lines: EditionLine[];
}

export const mockData: CompetitionLine[] = [
    {
        idt: 1,
        code: 'UEFA CL',
        description: "UEFA Champion's League",
        lines: [
            {
                idt: 22,
                code: '69',
                description: '69th edition',
                startDate: new Date('2023-09-19'),
                finishDate: new Date('2024-06-01')
            },
            {
                idt: 1,
                code: '68',
                description: '68th edition',
                startDate: new Date('2022-09-06'),
                finishDate: new Date('2023-06-10')
            },
            {
                idt: 2,
                code: '67',
                description: '67th edition',
                startDate: new Date('2021-09-14'),
                finishDate: new Date('2022-05-28')
            },
            {
                idt: 10,
                code: '66',
                description: '66th edition',
                startDate: new Date('2020-10-20'),
                finishDate: new Date('2021-05-29')
            },
            {
                idt: 12,
                code: '65',
                description: '65th edition',
                startDate: new Date('2019-09-17'),
                finishDate: new Date('2020-08-23')
            },
            {
                idt: 21,
                code: '64',
                description: '64th edition',
                startDate: new Date('2018-09-18'),
                finishDate: new Date('2019-06-01')
            },
            {
                idt: 20,
                code: '63',
                description: '63th edition',
                startDate: new Date('2017-09-12'),
                finishDate: new Date('2018-05-26')
            },
        ],
    },
    {
        idt: 2,
        code: 'FIFA-WC',
        description: 'FIFA World Cup',
        lines: [
            {
                idt: 30,
                code: '21',
                description: 'FIFA World Cup Russia 2018',
                startDate: new Date('2018-06-14'),
                finishDate: new Date('2018-07-15')
            },
            {
                idt: 31,
                code: '22',
                description: 'FIFA World Cup Qatar 2022',
                startDate: new Date('2022-11-20'),
                finishDate: new Date('2022-12-18')
            },
            {
                idt: 32,
                code: '23',
                description: 'FIFA World Cup 26',
                startDate: new Date('2026-06-01'),
                finishDate: new Date('2026-07-19')
            },
        ],
    },
    // Add more invoices as needed
];
