declare global {
  interface String {
    br: {
      format(type: 'cpf' | 'phone' | 'currency'): string;
      validate(type: 'cpf' | 'email'): boolean;
      parse(type: 'phone' | 'currency'): number;
    };
  }

  interface Number {
    br: {
      format(type: 'currency'): string;
    };
  }
}

export {};
