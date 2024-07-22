declare module 'br-national-services' {
  function verifyCPF(cpf: string): boolean;
  function validateEmail(email: string): boolean;
  function formatToCurrency(number: number): string;
  function parseCurrencyToNumber(currency: string): number;
  function formatPhoneNumber(number: string): string;
  function parsePhoneNumber(formatted: string): string;

  export { 
    verifyCPF, 
    validateEmail,
    formatToCurrency,
    parseCurrencyToNumber,
    formatPhoneNumber,
    parsePhoneNumber
  };
}
