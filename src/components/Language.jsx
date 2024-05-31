import React, { useState, useEffect } from 'react';
import '../styles/Language.css';
import { useTranslation } from 'react-i18next';

export const Language = () => {
    const { i18n } = useTranslation();
    const languages = [
        { code: 'en', name: 'ENG' },
        { code: 'it', name: 'IT' },
        { code: 'phl', name: 'PHL' }
    ];

    const savedLanguage = localStorage.getItem('selectedLanguage');

    const defaultLanguage = savedLanguage ? savedLanguage : 'en';
    const [currentLangCode, setCurrentLangCode] = useState(defaultLanguage);

    useEffect(() => {
        i18n.changeLanguage(currentLangCode);
    }, [i18n, currentLangCode]);

    const changeLanguage = (code) => {
        setCurrentLangCode(code);
        localStorage.setItem('selectedLanguage', code);
    };

    return (
        <div className='button-container flex flex-row gap-1'>
            <p
                className='text-black p-2 flex items-center justify-center font-semibold underline-hover cursor-pointer border-solid border-1 border-black rounded-md min-w-12 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'
                onClick={() => changeLanguage(currentLangCode === 'en' ? 'it' : currentLangCode === 'it' ? 'phl' : 'en')}
            >
                {languages.find(lang => lang.code === currentLangCode)?.name}
            </p>
        </div>
    );
}
