import '../styles/Experiences.css';

export const Experiences = () => {
    const cv = '/files/cv_navarez.pdf';

  const openPdf = () => {
    window.open(cv, '_blank');
  };

    return (
        <div class='container experiences'>
            <h2 className="text-7xl px-28">Experiences</h2>
            <div className='container exp-container flex flex-wrap flex-col justify-center items-center'>
                <div className='experience w-3/5 flex gap-5'>
                    <div className='exp-date w-2/5'>
                        <p>JAN 2024 - PRESENT</p>
                    </div>
                    <div className='exp-job flex flex-col gap-2 w-3/5'>
                        <div className='exp-title flex items-center gap-2 '>
                            <p>SOFTWARE DEVELOPER</p>
                            <p>|</p>
                            <a href="https://www.vantea.com/">
                                <p class='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:underline'>Vantea SMART</p>
                            </a>
                        </div>
                        <div className='exp-description flex'>
                            <p>Specializing in securing digital identities and managing system access. Designing and implementing IAM solutions, ensuring compliance and data integrity. Crucial role in mitigating cybersecurity risks.</p>
                        </div>
                        <div className='exp-li flex flex-wrap list-none gap-2.5'>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>IAM</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Cyber Security</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>OpenAM</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Linux</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Bash</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Java</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>OpenDJ</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Docker</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Postman</li>
                        </div>
                    </div>
                </div>
                <div className='experience w-3/5 flex gap-5'>
                    <div className='exp-date w-2/5'>
                        <p>SEPT 2023 - DEC 2023</p>
                    </div>
                    <div className='exp-job flex flex-col gap-2 w-3/5'>
                        <div className='exp-title flex items-center gap-2 '>
                            <p>ICE CREAM SCOOPER</p>
                            <p>|</p>
                            <a href="https://www.gromgelato.com/it/it/home.html">
                                <p class='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:underline'>Grom</p>
                            </a>
                        </div>
                        <div className='exp-description flex'>
                            <p>Purpose of my role: satisfying customers through product sales and achieving company goals.</p>
                        </div>
                        <div className='exp-li flex flex-wrap list-none gap-2.5'>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Time Management</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Stress Management</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Team Work</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Patience</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Communication</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Customer Service</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Memorization</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Cashier</li>
                        </div>
                    </div>
                </div>
                <div className='experience w-3/5 flex gap-5'>
                    <div className='exp-date w-2/5'>
                        <p>FEB 2019 – MAR 2019</p>
                    </div>
                    <div className='exp-job flex flex-col gap-2 w-3/5'>
                        <div className='exp-title flex items-center gap-2 '>
                            <p>MARKETING ASSISTANT</p>
                            <p>|</p>
                            <a href="https://vargas.it/">
                                <p class='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hover:underline'>Vargas S.r.l.</p>
                            </a>
                        </div>
                        <div className='exp-description flex'>
                            <p>Main activities: negotiated contracts, made calls with clients, utilized Microsoft Excel for database management.</p>
                        </div>
                        <div className='exp-li flex flex-wrap list-none gap-2.5'>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Microsoft Office</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Contracts</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Adaptability</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Working under pressure</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Organization</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Strategy</li>
                            <li class='px-3 py-2 font-semibold rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Invoices</li>
                        </div>
                    </div>
                </div>
                <div className='resume flex flex-col justify-center items-center'>
                    <p class='resume-p text-lg italic py-4'>You can view my certifications & more on my resumé!</p>
                    <div className="cv">
                        <button type="button" className='px-5 py-2 font-semibold text-lg rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300' onClick={openPdf}>
                            Resumé
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}