import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses  } from 'react-pro-sidebar';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SidebarCom() {
    const [collapse, setCollapse] = useState(false)
  return (
        <>
            <Sidebar
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: '#27779B',
                        color: 'text'
                    },
                }}
                className='fixed h-screen text-white rounded-md'
                width='280px'
                toggled = {true}
                collapsed = {collapse}
                collapsedWidth='120px'
                breakPoint='md'
            >

                <Menu className='pt-[7rem]'>
                    <div className= 'relative pl-5'>
                        <input type="text" 
                            className='w-[14rem] h-10 rounded-md bg-gray-500 p-3 pl-10 placeholder:text-white'
                            placeholder = "hello" />
                            <button className='' type='submit'>
                                <SearchIcon className='absolute top-2 left-8'/>
                            </button>
        
                        

                    </div>
  
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>;
        </>
  )
}

export default SidebarCom


