interface Data {
    id: string;
    country: string;
    city: string;
}


const data: Data[] = [
    {
        id: "0",
        country: "Germany",
        city: "Aachen",
    },
    {
        id: "1",
        country: "USA",
        city: "New York",
    },
];


export {
    data
}

export type {
    Data
}