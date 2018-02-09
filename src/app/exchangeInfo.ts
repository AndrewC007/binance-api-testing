export interface RateLimit {
    rateLimitType: string;
    interval: string;
    limit: number;
}

export interface Filter {
    filterType: string;
    minPrice: string;
    maxPrice: string;
    tickSize: string;
    minQty: string;
    maxQty: string;
    stepSize: string;
    minNotional: string;
}

export interface Symbol {
    symbol: string;
    status: string;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quotePrecision: number;
    orderTypes: string[];
    icebergAllowed: boolean;
    filters: Filter[];
}

export interface ExchangeInfo {
    timezone: string;
    serverTime: number;
    rateLimits: RateLimit[];
    exchangeFilters: any[];
    symbols: Symbol[];
}

