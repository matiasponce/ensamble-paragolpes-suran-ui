// let tornillos = 10000;
// let paragolpesTraseros = {
//     color: string,
// }


export type Tornillo = {
    cantidad : number,
    tipo: string,
}

export enum TipoDePiel  {
    'delantero',
    'trasero' ,
    'rejilla',
}

export type Piel = {
    posicion: TipoDePiel,
    color: string, //hexa
}

export type Paragolpe = {
    piel: Piel,
    codigo: string,
}

export type ParagolpeDelantero  = {
    piel: {
        posicion: 'delantero',
        color: string,
    },
    codigo: string,
}

export type ParagolpeTrasero  = {
    piel: {
        posicion: 'trasero',
        color: string,
    },
    codigo: string,
}

export type Rejilla  = {
    piel: {
        posicion: 'rejilla',
        color: string,
    },
    codigo: string,
}

