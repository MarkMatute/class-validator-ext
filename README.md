# Class Validator Extension
### github
https://github.com/MarkMatute/class-validator-ext

### why do we have this library?
extension of [class-validator](https://github.com/typestack/class-validator)

class validator returns errors like this
```
[{
    target: /* post object */,
    property: "title",
    value: "Hello",
    constraints: {
        length: "$property must be longer than or equal to 10 characters"
    }
}, {
    target: /* post object */,
    property: "text",
    value: "this is a great post about hell world",
    constraints: {
        contains: "text must contain a hello string"
    }
}]
```
which is hard to use, this library simplifies it to be a key:value pair of errors


# Installation

```
yarn add class-validator-extension
```

# Usage

```
import { IsNotEmpty } from 'class-validator';
import * as classValidatorExt from 'class-validator-ext';

class User {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

(async () => {
  const user = new User();
  const errors = await classValidatorExt.validateAndExtract(user);
  console.log(errors);
})();
```

This will return **key: value** errors

```
    {
        "email": "email should not be empty",
        "password": "password should not be empty"
    }
```

## Author

[Mark Ernest R. Matute](https://github.com/JohnDoe)

## License

[MIT License]
