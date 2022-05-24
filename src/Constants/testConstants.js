
export const MOCK_DROPDOWN_LIST = [
    {
        id: '323',
        firstName: 'Harriet',
        lastName: 'McKinney',
        name: 'Harriet McKinney',
        accountId: '324',
        profileColor: '#97802D',
        email: 'harriet.mckinney@kinetar.com',
    },
    {
        id: '139',
        firstName: 'Harriet',
        lastName: 'Banks',
        name: 'Harriet Banks',
        accountId: '140',
        profileColor: '#AE3093',
        email: 'harriet.banks@kinetar.com',
    },
    {
        id: '142',
        firstName: 'Mathilda',
        lastName: 'Summers',
        name: 'Mathilda Summers',
        accountId: '143',
        profileColor: '#13ACFC',
        email: 'mathilda.summers@kinetar.com',
    },
];

export const MOCK_API_REPONSE = {
    data: [
        {
            type: 'employees',
            id: '323',
            links: {
                self: 'http://localhost:3000/v1/employees/323',
            },
            attributes: {
                identifier: null,
                firstName: 'Harriet',
                lastName: 'McKinney',
                name: 'Harriet McKinney',
                features: ['engagement'],
                avatar: null,
                employmentStart: '2016-01-31T00:00:00.000Z',
                external: false,
                'Last Year Bonus': 3767,
                'Business Unit': 'Sales',
                'Commute Time': 34,
                Age: '1984-02-08',
                Department: 'Customer Care',
                Gender: 'Female',
                'Job Level': 'Manager',
                'Local Office': 'Kuala Lumpur',
                '% of target': 88,
                Region: 'APAC',
                Salary: 76000,
                Tenure: '2014-05-31',
            },
            relationships: {
                company: {
                    data: {
                        type: 'companies',
                        id: '5',
                    },
                },
                account: {
                    data: {
                        type: 'accounts',
                        id: '324',
                    },
                },
                phones: {
                    data: [],
                },
                Manager: {
                    data: {
                        type: 'employees',
                        id: '201',
                    },
                },
            },
        },
        {
            type: 'employees',
            id: '139',
            links: {
                self: 'http://localhost:3000/v1/employees/139',
            },
            attributes: {
                identifier: null,
                firstName: 'Harriet',
                lastName: 'Banks',
                name: 'Harriet Banks',
                features: ['engagement'],
                avatar: null,
                employmentStart: '2016-01-31T00:00:00.000Z',
                external: false,
                'Last Year Bonus': 215835,
                'Business Unit': 'People & Operations',
                'Commute Time': 18,
                Age: '1984-04-19',
                Department: 'Learning and Development',
                Gender: 'Female',
                'Job Level': 'Executive',
                'Local Office': 'New York',
                '% of target': 12,
                Region: 'AMER',
                Salary: 332000,
                Tenure: '2009-06-30',
            },
            relationships: {
                company: {
                    data: {
                        type: 'companies',
                        id: '5',
                    },
                },
                account: {
                    data: {
                        type: 'accounts',
                        id: '140',
                    },
                },
                phones: {
                    data: [],
                },
            },
        },
        {
            type: 'employees',
            id: '142',
            links: {
                self: 'http://localhost:3000/v1/employees/142',
            },
            attributes: {
                identifier: null,
                firstName: 'Mathilda',
                lastName: 'Summers',
                name: 'Mathilda Summers',
                features: ['engagement'],
                avatar: null,
                employmentStart: '2016-01-31T00:00:00.000Z',
                external: false,
                'Last Year Bonus': 95050,
                'Business Unit': 'Marketing',
                'Commute Time': 131,
                Age: '1976-12-19',
                Department: 'Media',
                Gender: 'Female',
                'Job Level': 'Executive',
                'Local Office': 'London',
                '% of target': 166,
                Region: 'EMEA',
                Salary: 248000,
                Tenure: '2000-05-15',
            },
            relationships: {
                company: {
                    data: {
                        type: 'companies',
                        id: '5',
                    },
                },
                account: {
                    data: {
                        type: 'accounts',
                        id: '143',
                    },
                },
                phones: {
                    data: [],
                },
                Manager: {
                    data: {
                        type: 'employees',
                        id: '139',
                    },
                },
            },
        }
    ],
    included: [
        {
            type: 'accounts',
            id: '140',
            links: {
                self: 'http://localhost:3000/v1/accounts/140',
            },
            attributes: {
                email: 'harriet.banks@kinetar.com',
                locale: null,
                timezone: null,
                bouncedAt: null,
                bounceReason: null,
                localeEffective: 'en-GB',
                timezoneEffective: null,
            },
        },
        {
            type: 'accounts',
            id: '143',
            links: {
                self: 'http://localhost:3000/v1/accounts/143',
            },
            attributes: {
                email: 'mathilda.summers@kinetar.com',
                locale: null,
                timezone: null,
                bouncedAt: null,
                bounceReason: null,
                localeEffective: null,
                timezoneEffective: null,
            },
        },
        {
            type: 'accounts',
            id: '324',
            links: {
                self: 'http://localhost:3000/v1/accounts/324',
            },
            attributes: {
                email: 'harriet.mckinney@kinetar.com',
                locale: null,
                timezone: null,
                bouncedAt: null,
                bounceReason: null,
                localeEffective: null,
                timezoneEffective: null,
            },
        }
    ],
    meta: {
        page: {
            total: 9,
        },
    },
    links: {
        self: 'http://localhost:3000/v1/employees/contexts/company_5?per_page=25&q=harriet&sort=score&order=desc&include=account%2Cphones%2CLast%20Year%20Bonus%2CBusiness%20Unit%2CCommute%20Time%2CManager&simple=false',
        first:
            'http://localhost:3000/v1/employees/contexts/company_5?per_page=25&q=harriet&sort=score&order=desc&include=account%2Cphones%2CLast%20Year%20Bonus%2CBusiness%20Unit%2CCommute%20Time%2CManager&simple=false',
        last: 'http://localhost:3000/v1/employees/contexts/company_5?per_page=25&page=1&q=harriet&sort=score&order=desc&include=account%2Cphones%2CLast%20Year%20Bonus%2CBusiness%20Unit%2CCommute%20Time%2CManager&simple=false',
    },
};
