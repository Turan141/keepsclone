import React from 'react'
import { Link } from 'react-router-dom'
import {
  BsFillAlarmFill,
  BsFillLightbulbFill,
  BsFillPencilFill,
  BsFillArchiveFill,
  BsFillBasket2Fill,
} from 'react-icons/bs'
import './Sidebar.scss'

export const SideBar = () => {
  const sidebarListItems = React.useMemo(
    () => [
      {
        id: '1',
        title: 'Заметки',
        to: `/`,
        icon: <BsFillLightbulbFill />,
      },
      {
        id: '2',
        title: 'Напоминание',
        to: `/reminders`,
        icon: <BsFillAlarmFill />,
      },
      {
        id: '3',
        title: 'Изменение ярлыков',
        to: `/linkModify`,
        icon: <BsFillPencilFill />,
      },
      {
        id: '4',
        title: 'Архив',
        to: `/archive`,
        icon: <BsFillArchiveFill />,
      },
      {
        id: '5',
        title: 'Корзина',
        to: `/basket`,
        icon: <BsFillBasket2Fill />,
      },
    ],
    []
  )

  return (
    <div className="sidebar_main">
      {sidebarListItems.map((item: any) => {
        return (
          <li key={item.id}>
            <Link to={item.to}>
              <div className="sidebar_menu_items">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            </Link>
          </li>
        )
      })}
    </div>
  )
}
