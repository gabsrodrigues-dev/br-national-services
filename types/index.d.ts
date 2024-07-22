declare module "br-national-services" {
  function verifyCPF(cpf: string): boolean;
  function validateEmail(email: string): boolean;

  export { verifyCPF, validateEmail };
}
