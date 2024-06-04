import '../styles/Experiences.css';
import { useTranslation } from 'react-i18next';

export const Experiences = () => {
    const cv = '/files/cv_navarez.pdf';

  const openPdf = () => {
    window.open(cv, '_blank');
  };

  const { t } = useTranslation();

    return (
        <div class='experiences'>
            <h2>{t("experiences")}</h2>
            <div className='exp-container flex flex-wrap flex-col justify-center items-center'>
                <div className='experience flex'>
                    <div className='exp-date'>
                        <p>{t("date1")}</p>
                    </div>
                    <div className='exp-job flex flex-col'>
                        <div className='exp-title flex items-center '>
                            <p>{t("job1")}</p>
                            <p>|</p>
                            <a href="https://www.vantea.com/">
                                <p class='underline-hover'>{t("company1")}</p>
                            </a>
                        </div>
                        <div className='exp-description flex'>
                            <p>{t("jobdesc1")}</p>
                        </div>
                        <div className='exp-li flex flex-wrap list-none'>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>IAM</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Cyber Security</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>OpenAM</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Linux</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Bash</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Java</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>OpenDJ</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Docker</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Postman</li>
                        </div>
                    </div>
                </div>
                <div className='experience flex'>
                    <div className='exp-date'>
                        <p>{t("date2")}</p>
                    </div>
                    <div className='exp-job flex flex-col'>
                        <div className='exp-title flex items-center '>
                            <p>{t("job2")}</p>
                            <p>|</p>
                            <a href="https://www.gromgelato.com/it/it/home.html">
                                <p class='underline-hover'>{t("company2")}</p>
                            </a>
                        </div>
                        <div className='exp-description flex'>
                            <p>{t("jobdesc2")}</p>
                        </div>
                        <div className='exp-li flex flex-wrap list-none'>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk1")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk2")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk3")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk4")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk5")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk6")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk7")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk8")}</li>
                        </div>
                    </div>
                </div>
                <div className='experience flex '>
                    <div className='exp-date'>
                        <p>{t("date3")}</p>
                    </div>
                    <div className='exp-job flex flex-col'>
                        <div className='exp-title flex items-center '>
                            <p>{t("job3")}</p>
                            <p>|</p>
                            <a href="https://vargas.it/">
                                <p class='underline-hover'>{t("company3")}</p>
                            </a>
                        </div>
                        <div className='exp-description flex'>
                            <p>{t("jobdesc3")}</p>
                        </div>
                        <div className='exp-li flex flex-wrap list-none'>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Microsoft Office</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk9")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk10")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk11")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk12")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk13")}</li>
                            <li class='font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>{t("sk14")}</li>
                        </div>
                    </div>
                </div>
                <div className='resume flex flex-col justify-center items-center'>
                    <div className="cv">
                        <button type="button" className=' font-semibold text-lg rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300' onClick={openPdf}>
                            {t("cv")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}