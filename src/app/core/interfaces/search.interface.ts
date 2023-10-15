// Generated by https://quicktype.io

export interface SearchResponse {
    results: Result[];
}

export interface Result {
    _id:         string;
    sku:         string;
    name:        string;
    description: string;
    price:       number;
    stock:       number;
    state:       boolean;
    image:       string;
    tag:         string;
}