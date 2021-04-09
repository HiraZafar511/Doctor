import Link from "next/link";

const Sidebar = ({ item }) => {
  return (
    <div className="dashboard-widget">
      <nav className="dashboard-menu">
        <ul>
          <li className={item.active}>
            <Link href={`${item.page}`}>
              <a href="#">
                <i className={`fas ${item.icon}`}></i>
                <span>{item.title}</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
