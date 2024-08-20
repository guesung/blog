// 1. Nothing entered
export type EmailInputType = {
  email?: string;
  password?: string;
  other?: unknown;
};
// 2. Email entered
export type PasswordInputType = {
  email: string;
  password?: string;
  other?: unknown;
};
// 3. Email and password entered
export type OtherInfoInputType = {
  email: string;
  password: string;
  other?: unknown;
};
