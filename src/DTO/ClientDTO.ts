export type Client = {
    id: string;
    razao: string;
    fantasia: string;
    contribuinte: string;
    tipo_pessoa: string;
    cpf_cnpj: string;
    endereco: string;
    bairro: string;
    cidade: string;
    uf: string;
    telefone: string;
    email: string;
    visita?: string;
    rota?: string;
    obs?: string;
    situacao: string;
}