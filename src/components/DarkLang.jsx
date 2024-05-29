import '../styles/DarkLang.css'

export const DarkLang = () => {
    return (
        <>
            <div className='button-container flex flex-row'>
                <button className='btn btn-lang font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-800'>IT</button>
                <button className='btn btn-dark font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-800'>🌙</button>
            </div>
        </>
    )
}