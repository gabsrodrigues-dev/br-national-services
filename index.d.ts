declare module 'br-national-services' {
  function verifyCPF(cpf: string): boolean;
  function validateEmail(email: string): boolean;
  function formatToCurrency(number: number): string;
  function parseCurrencyToNumber(currency: string): number;

  export { 
    verifyCPF, 
    validateEmail,
    formatToCurrency,
    parseCurrencyToNumber
  };
}
