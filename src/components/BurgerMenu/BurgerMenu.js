import { Wrapper,Link } from "./BurgerMenu.styled"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Icon } from "components/Header/Header.styled";
import { AiFillPhone, AiFillMail} from "react-icons/ai";

export const BurgerMenu = () => { 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Wrapper>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                // sx={{ mr: 2 }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon color="white" />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >   
                <MenuItem>
                    <Link href="mailto:info@devstudio.com">
                    <Icon>
                        <AiFillMail />
                    </Icon>
                    info@devstudio.com

                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="tel:+380961111111">
                        <Icon>
                            <AiFillPhone />
                        </Icon>
                        +38 096 111 11 11
                    </Link>
                </MenuItem>
                
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            </Menu>
        </Wrapper>
    )
}