import React from 'react'
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Laporan',
    path: '/laporan',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Data',
    path: '/data',
    icon: <AiIcons.AiOutlineDatabase />,
    cName: 'nav-text'
  }
]
export default SidebarData;