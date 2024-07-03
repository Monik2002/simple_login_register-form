import { body } from 'express-validator';

const userValidationRules = () => {
  return [
    body('name')
    .notEmpty()
    .withMessage('Name is required'),
    body('email')
    .isEmail()
    .withMessage('Valid email is required'),
    body('password')
    .if(body('googleId').not().exists())
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  ];
};

const loginValidationRules = () => {
  return [
  body('email')
  .isEmail()
  .withMessage('Valid email is required'),
  body('password')
  .notEmpty()
  .withMessage('Password is required'),
];
};

export { userValidationRules, loginValidationRules };
