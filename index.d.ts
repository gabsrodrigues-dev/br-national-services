declare module 'br-national-services/src/prototype' {
  interface String {
    format(type: 'cpf' | 'phone' | 'currency'): string;
    validate(type: 'cpf' | 'email'): boolean;
    parse(type: 'phone' | 'currency'): number;
  }

  interface Number {
    format(type: 'currency'): string;
  }
}

declare module 'br-national-services/src/' {
  export const br: {
    validate: {
      cpf: (cpf: string) => boolean;
      email: (email: string) => boolean;
    };
    format: {
      currency: (number: number) => string;
      phone: (number: string) => string;
      cpf: (cpf: string) => string;
    };
    parse: {
      currency: (currency: string) => number;
      phone: (formatted: string) => string;
    };
  };
}
