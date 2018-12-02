export class AppSettings {

    // Quantidade de itens por páginas das listagens:
    public static ITENS_PER_PAGE = 30;

    // LocalHost Cassis:
    // public static API_ENDPOINT = 'http://localhost:61420/api/';

    // Azure:
    public static API_ENDPOINT = 'https://fbtc-api.azurewebsites.net/api/';

    // Endereço do Serviço de CEP:
    public static API_ENDPOINT_CEP = 'http://api.postmon.com.br/v1/cep';

    // Target do PagSeguro: false = 'SANDBOX' ou true = 'PRD'
    public static API_ENDPOINT_PS_TARGET_PRD = false;

    // ENDPOINT SANDBOX PS:
    public static API_ENDPOINT_SANDBOX_PS = 'https://sandbox.pagseguro.uol.com.br/';

    // ENDPOINT PRODUÇÃO PS:
    public static API_ENDPOINT_PRODUCAO_PS = 'https://pagseguro.uol.com.br/';

    // Quantidade de itens por páginas das listagens:
    public static NR_DIAS_CONSULTA_PS = 31;

    // Quantidade de itens por páginas das listagens:
    public static NR_MAX_PAGE_RESULTS_PS = 100;
}
