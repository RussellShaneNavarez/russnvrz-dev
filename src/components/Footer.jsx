import '../styles/Footer.css';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='footer flex justify-between items-center'>
                <h3>{t("copyright")}</h3>
                <h3>Copyright © 2024 | Russell Shane Navarez</h3>
            </div>
        </>
    )
}