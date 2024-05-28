import '../styles/Bio.css';
import bio from '../assets/gif/bio.gif'

export const Bio = () => {
    return (
        <div class='container bio gap-3 px-32 py-8'>
            <div>
                <img src={bio} alt="Ciao" />
            </div>
            <div className='mx-auto'>
                <p>Born in 2002 at San Pablo City, Philippines. I’m a Software Architect Specialist student at ITS
                    Academy Angelo Rizzoli, a passionate Full Stack Developer, an anspiring Photographer. 
                    Ready for new opportunities and challenges to grow personally and professionally.</p>
            </div>
        </div>
    )
}