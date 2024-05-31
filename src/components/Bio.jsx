import '../styles/Bio.css';
import bio from '../assets/gif/bio.gif'
import { useTranslation } from 'react-i18next';

export const Bio = () => {
    const { t } = useTranslation();
    return (
        <div class='bio'>
            <div className='bio-img'>
                <img src={bio} alt="Bio" />
            </div>
            <div className='bio-p'>
                <p>{t("bio")}</p>
            </div>
        </div>
    )
}