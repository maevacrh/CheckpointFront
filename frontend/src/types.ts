export type Country = {
    id: number;
    name: string;
    emoji: string;
    code: string;
    continent: {
        id: number;
        name: string;
    };
};
export type CountryCardProps = Country;