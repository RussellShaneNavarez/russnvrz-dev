import '../styles/Navbar.css';

export const Navbar = () => {
    return ( 
    
            <nav class="flex justify-center space-x-4 items-center w-100"> 
                <a href="/dashboard" class="font-medium px-3 py-2 text-slate-100  hover:text-sky-950">Home</a>
                <a href="/team" class="font-medium px-3 py-2 text-slate-100  hover:text-slate-900">Team</a>
                <a href="/projects" class="font-medium px-3 py-2 text-slate-100  hover:text-slate-900">Projects</a>
                <a href="/reports" class="font-medium px-3 py-2 text-slate-100 hover:text-slate-900">Reports</a>
            </nav> 
      
         
    )
}