import './topbar.scss'
import {Person,Mail} from '@material-ui/icons/';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>sidd8rth</a>
                    <div className='itemContainer'>
                        <Person className='icon'/>
                        <span>+91 8982614977</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon'/>
                        <span>sidd8rthp0rwal@gmail.com</span>
                    </div>
                    <div className='itemContainer'>
                        <InsertDriveFileIcon className='icon'/>
                        <span><a href="">Resume</a></span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
