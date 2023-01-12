import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import { Link } from 'react-router-dom';
import './Navbar.css';

const criarTurma = ['Criar Turma'];
const criarGrupo = ['Criar Grupo'];
const criarProjeto = ['Criar Projeto'];


function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    var navbarComponent;

    navbarComponent =
        <AppBar sx={{ bgcolor: "black" }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters className='modelo'>
                    <Link to='/home' className="text-decorator-none cursor">
                        <Typography variant="h5" noWrap component="a" className="blogSergio colorNav"
                            sx={{ display: { xs: 'none', md: 'flex' } }} >
                            <FolderSharedIcon style={{width: '30px',height: '30px'}}/>
                            Projetos
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            edge='start'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {criarTurma.map((criarturma) => (
                                <MenuItem key={criarturma} onClick={handleCloseNavMenu}>
                                    <Link to='/formularioPostagem' className="cursor text-decorator-none fontblack">
                                        <Typography textAlign="center">{criarturma}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            {criarGrupo.map((criargrupo) => (
                                <MenuItem key={criargrupo} onClick={handleCloseNavMenu}>
                                    <Link to='/formularioPostagem' className="cursor text-decorator-none fontblack">
                                        <Typography textAlign="center">{criargrupo}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            {criarProjeto.map((criarprojeto) => (
                                <MenuItem key={criarprojeto} onClick={handleCloseNavMenu}>
                                    <Link to='/criarProjeto' className="cursor text-decorator-none fontblack">
                                        <Typography textAlign="center">{criarprojeto}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Link to='/home' className="text-decorator-none cursor">
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                className="blogSergio colorNav"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'flex', md: 'none' },
                                    color: 'inherit'
                                }}
                            >
                                <FolderSharedIcon style={{width: '30px',height: '30px'}}/>
                                Projetos
                            </Typography>
                        </Link>

                    </Box>
                    <Box sx={{ flexGrow: 0, }}>
                        <Tooltip title="Opões do Usuário">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px', color: 'black' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {criarTurma.map((criarturma) => (
                                <MenuItem key={criarturma} onClick={handleCloseUserMenu}>
                                    <Link to='/formularioTurma' className="cursor text-decorator-none fontblack">
                                        <Typography textAlign="center">{criarturma}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            {criarGrupo.map((criargrupo) => (
                                <MenuItem key={criargrupo} onClick={handleCloseUserMenu}>
                                    <Link to='/formularioGrupo' className="cursor text-decorator-none fontblack">
                                        <Typography textAlign="center">{criargrupo}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            {criarProjeto.map((criarprojeto) => (
                                <MenuItem key={criarprojeto} onClick={handleCloseUserMenu}>
                                    <Link to='/formularioProjeto' className="cursor text-decorator-none fontblack">
                                        <Typography textAlign="center">{criarprojeto}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    return (
        <>
            {navbarComponent}
        </>
    )
}
export default Navbar;