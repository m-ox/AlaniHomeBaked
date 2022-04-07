import * as React from 'react'
import styles from '/styles/Navbar.module.scss'
import Link from 'next/link'

import { FaInstagram, FaFacebook } from 'react-icons/fa'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Fade from '@mui/material/Fade';

export default function Navbar() {
        const [anchorEl, setAnchorEl] = React.useState(null)
        const open = Boolean(anchorEl)
        const handleClick = (e) => {
          setAnchorEl(e.currentTarget);
        }
        const handleClose = () => {
          setAnchorEl(null);
        }

    return (
        <div className={styles.navbar}>

            <div className={styles.navbaritems}>
                <Button variant="text" sx={{
                        height: 20,
                        color: "#644a3a"
                    }}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </Button>

                <Button variant="text" sx={{
                        height: 20,
                        color: "#644a3a"
                    }}>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </Button>

                <Button variant="text" sx={{
                        height: 20,
                        color: "#644a3a"
                    }}>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </Button>

                <Button variant="text" sx={{
                        height: 20,
                        color: "#644a3a"
                    }}>
                    <Link href="/faq">
                    <a>FAQ</a>
                    </Link>
                </Button>
                
                <Button
                    id="basic-button"
                    aria-controls={open ? 'gallery-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        height: 20,
                        color: "#644a3a"
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    Gallery
                </Button>
                <Menu
                    id="gallery-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}><Link href="/gallery/topsellers">Top Sellers</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/gallery/cakes">Cakes</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/gallery/macarons">Macarons</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/gallery/jewelry">Jewelry</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/gallery/homedecor">Home Decor</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/gallery/candleswax">Candles & Wax Melts</Link></MenuItem>
                </Menu>
            </div>

            <div className={styles.navbarcontact}>
                <p>taysia@alanibakery.com</p>
                <p>(208) 500-8193</p>
                <div className={styles.sociallink}>
                    <a href="https://www.facebook.com/alanibakery">
                        <FaFacebook />
                    </a>
                </div>
                <div className={styles.sociallink}>
                    <a href="https://www.instagram.com/alanibakery">
                        <FaInstagram />
                    </a>
                </div>
            </div>
            
        </div>
    )

}