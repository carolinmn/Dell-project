import "../../comp/Sidebar.css";

function AdminSidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">Log Analyzer</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="/">
            <i class="fa-solid fa-table-columns"></i> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/">
            <i class="fas fa-users"></i> Users
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/Logs">
            <i class="fa-regular fa-file"></i> Logs
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;
