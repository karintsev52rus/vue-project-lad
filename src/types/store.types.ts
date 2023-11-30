interface LoginData {
  email: string;
  password: string;
}
export type { LoginData };

export interface IThemeStore {
  themeName: string;
  themeLabel: string;
}

export interface IAuthStore {
  auth: boolean;
  token: string;
  userId: string;
}

export interface IAlertOptions {
  text: string;
  type: string;
}
