# br-national-services

`br-national-services` is a JavaScript library for formatting and validating various Brazilian national services data such as CPF, phone numbers, emails, and currency.

## Installation

Install the library using npm:

```sh
npm install br-national-services
```

## Usage

### Example Usage in React

To use the library in a React project, import the prototype extensions:

```javascript
import 'br-national-services'; // if you prefer, import it into your index.js (or _app.tsx, in the case of NextJs). You can use anywhere.

[...]
  useEffect(() => {
    const string = '31991647507';
    console.log(`${string} now is ${string.brFormat('phone')}`);
  }, []);
[...]
```

### Methods

#### String.prototype.brFormat(type)

Formats the string based on the specified type.

- **type**: The type of formatting. Supported values are `'cpf'`, `'phone'`, and `'currency'`.

```javascript
const cpf = "12345678909";
console.log(cpf.brFormat("cpf")); // Outputs: 123.456.789-09

const phone = "31991647507";
console.log(phone.brFormat("phone")); // Outputs: (31) 99164-7507
```

#### String.prototype.brParse(type)

Parses the string based on the specified type.

- **type**: The type of parsing. Supported values are `'phone'` and `'currency'`.

```javascript
const formattedPhone = "(31) 99164-7507";
console.log(formattedPhone.brParse("phone")); // Outputs: 31991647507 <-- string

const currency = "R$ 1.250,52";
console.log(currency.brParse("currency")); // Outputs: 1250.52 <-- number
```

#### String.prototype.brValidate(type)

Validates the string based on the specified type.

- **type**: The type of validation. Supported values are `'cpf'` and `'email'`.

```javascript
const cpf = "12345678909";
console.log(cpf.brValidate("cpf")); // Outputs: true

const email = "example@example.com";
console.log(email.brValidate("email")); // Outputs: true
```

#### Number.prototype.brFormat(type)

Formats the number based on the specified type.

- **type**: The type of formatting. Supported value is `'currency'`.

```javascript
const number = 1250.52;
console.log(number.brFormat("currency")); // Outputs: R$ 1.250,52
```

### Tests

To run the tests, use the following command:

```sh
npm test
```

### License

This project is licensed under the MIT License.
