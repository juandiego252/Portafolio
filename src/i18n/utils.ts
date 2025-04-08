import { ui, defaultLanguage } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLanguage;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLanguage]) {
        return ui[lang][key] || ui[defaultLanguage][key];
    }
}

export function getLocalizedContent<T>(content: T | Record<string, T>, lang: keyof typeof ui): T {
    if (typeof content === 'object' && content !== null && 'en' in content && 'es' in content) {
        return (content as Record<string, T>)[lang] || (content as Record<string, T>)[defaultLanguage];
    }
    return content as T;
}