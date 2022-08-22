import { IsEmail, IsNotEmpty } from 'class-validator';
import * as classValidatorExt from '.';

class User {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

const user = new User();

const user2 = new User();
user2.email = 'Mark@ernest.com';
user2.password = '123';

(async () => {
  console.log('Invalid');
  const errors = await classValidatorExt.validateAndExtract(user);
  console.log(errors);

  console.log('Valid');
  const errors2 = await classValidatorExt.validateAndExtract(user2);
  console.log(errors2);
})();
