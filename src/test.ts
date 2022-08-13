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

(async () => {
  const errors = await classValidatorExt.validateAndExtract(user);
  console.log(errors);
})();
