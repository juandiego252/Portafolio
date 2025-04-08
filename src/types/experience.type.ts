
type MultiLanguageText = {
    en: string;
    es: string;
}


export interface IExperience {
    role: MultiLanguageText;
    aboutRole: MultiLanguageText;
    company: string;
    companyUrl: string;
    datePeriod: MultiLanguageText;
    latest: boolean;
}