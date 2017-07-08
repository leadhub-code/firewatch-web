import Router from 'next/router'
import { Menu, Input } from 'semantic-ui-react'

export default (props) => {
  const { activeItem } = props;
  const go = (dst) => (event) => { Router.push(dst); };
  return (
    <div className="topMenu">
      <Menu inverted stackable size="small" color="orange">
        <Menu.Item header>
          <span className="siteTitle">Firewatch</span>
        </Menu.Item>
        <Menu.Item name='overview' active={activeItem === 'overview'} onClick={go('/overview')} />
        <Menu.Item name='events' active={activeItem === 'events'} onClick={go('/events')} />
        <Menu.Item name='patterns' active={activeItem === 'patterns'} onClick={go('/patterns')} />
        <Menu.Item name='agents' active={activeItem === 'agents'} onClick={go('/agents')} />
        <Menu.Item name='files' active={activeItem === 'files'} onClick={go('/files')} />
        <Menu.Menu position='right'>
          <Menu.Item name='configuration' active={activeItem === 'configuration'} onClick={go('/configuration/')} />
          <Menu.Item>
            <Input className='icon' icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='logout' href='/logout' />
        </Menu.Menu>
      </Menu>
    </div>
  );
}
