import Link from "next/link";

const Sidebar = ({ item }) => {
  return (
    <div class="dashboard-widget">
      <nav class="dashboard-menu">
        <ul>
          <li class={item.active}>
            <Link href={`${item.page}`}>
              <a href="#">
                <i class={`fas ${item.icon}`}></i>
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
