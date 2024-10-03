// Export the type and data
export type cardInfoType = {
    name: string;
    number: number;
    info: string;
};

export const aboutUsParagraph: string = `Speed Design began with a simple idea: to provide exceptional creative design and printing services that empower our clients. Over the years, we have grown into a 
trusted partner for businesses of all sizes, 
adapting to the ever-evolving landscape of design and 
technology while maintaining our commitment to quality and service.`;

export const cardInfo: cardInfoType[] = [
    {
        name: 'experience',
        number: 10,
        info: 'Years of Experience',
    },
    {
        name: 'project',
        number: 100,
        info: 'Successful Projects',
    },
    {
        name: 'client',
        number: 50,
        info: 'Happy Clients',
    },
];
