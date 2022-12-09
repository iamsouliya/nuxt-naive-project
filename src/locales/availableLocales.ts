export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
    flag: 'i-twemoji-flag-us-outlying-islands',
  },
  la: {
    name: 'Lao',
    iso: 'la',
    flag: 'i-twemoji-flag-laos',
  },
}
