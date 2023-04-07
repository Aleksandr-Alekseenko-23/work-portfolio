export function loadLocaleData(locale: string) {
  switch (locale) {
    case 'uk':
      return import('../../lang/uk.json');
    default:
      return import('../../lang/en.json');
  }
}

export type Messages = {
  [key: string]: {};
};
