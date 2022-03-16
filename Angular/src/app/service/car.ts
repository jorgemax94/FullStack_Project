export interface Ponto {
    nome?: string;
    raio?: string;
    latitude?: string;
    longitude?: string;
  }
  
  export interface Car {
    placa?: string;
    dataPosicao?: any
    velocidade?: number;
    longitude?: string;
    latitude?: string;
    ignicao?: boolean;
    distanciaPontoMetros?: number;
    ponto?: Ponto;
  }