declare global {
  interface String {
    brFormat(type: 'cpf' | 'phone' | 'currency'): string;
    brValidate(type: 'cpf' | 'email'): boolean;
    brParse(type: 'phone' | 'currency'): number;
  }

  interface Number {
    brFormat(type: 'currency'): string;
  }

  interface Utils {
    generateCPF(): string;
  }
}

export {};
