import {useDispatch, useSelector} from "react-redux";
import {useNavigate,NavLink} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button, Container, } from "react-bootstrap";
import {authActions, userActions} from "../../redux";

const NavBar = () => {
    const {isAuth} = useSelector(state => state.auth)
    // const {user} = useSelector(state => state.users)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(userActions.setUser({}))
        dispatch(authActions.setIsAuth(false))
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={'/'}>DEVICE4U</NavLink>
                {isAuth ?
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate('/admin')}
                        >
                            Admin
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ms-2"
                        >
                            Exit
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate('/login')}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
};

export {NavBar};