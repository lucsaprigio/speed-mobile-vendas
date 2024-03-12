export type Product = {
    id: string;
    descricao: string;
    ean: string;
    ncm: string;
    cest: string;
    preco: number;
    embalagem: string;
    saldo?: number;
    linha?:string;
}