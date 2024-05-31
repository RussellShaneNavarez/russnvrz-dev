import '../styles/Bio.css';
import bio from '../assets/gif/bio.gif'
import { useTranslation } from 'react-i18next';

export const Bio = () => {
    const { t } = useTranslation();
    return (
        <div class='container bio gap-3 px-32 py-8'>
            <div>
                <img src={bio} alt="Bio" />
            </div>
            <div className='mx-auto'>
                <p>{t("bio")}</p>
            </div>
        </div>
    )
}