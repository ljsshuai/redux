import  React from 'react';
import './theme.css'
import './index.css'
import NavTop from '../nav-top/index';
import NavSide from '../nav-side/index';
class Layout extends React.Component {
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
          <div id="wrapper">
              <NavTop />
              <NavSide />
              {this.props.children}
          </div>
        );
    }
}
export default Layout;