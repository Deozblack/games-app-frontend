// Generated by https://quicktype.io

export interface History {
    total: number;
    logs:  Log[];
}

export interface Log {
    _id:       string;
    productId: string;
    name:      string;
    image:     string;
    price:     number;
    stock:     number;
    updatedAt: string;
}
