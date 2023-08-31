import './Sidebar.css'


function Sidebar({openSidebarToggle, OpenSidebar}){
  return(

    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""} >
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
             Log Analyzer
        </div>
        <span className='icon close_icon' onClick={OpenSidebar} >X</span>
    </div>
  

    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href="">
             Files
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
             Reports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
             Role Managment
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
             User Managment
            </a>
        </li>

        <li className='sidebar-list-item signout'>
            <a href="">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign out
            </a>
        </li>
        
      
    </ul>
</aside>

  )
}

export default Sidebar