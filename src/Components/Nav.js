import './nav.css'
import { useState } from 'react'
import React from 'react';
import { Link,useHistory } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Container, Input
} from 'reactstrap';

const NavBar = ({isLogin}) =>{

    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();

    const logOut = () => {
        localStorage.removeItem('isLogin')
        history.push('/')
    }
    

    return(
        <div>
        <Navbar color="light" light expand="md" className='rubik shadow'>
            <Container>
                <NavbarBrand className='cursor fw-bold p-2 '>
                    <img src='https://s3-alpha-sig.figma.com/img/e8f1/50f4/dd316b36489ed2498bae94124e7ee124?Expires=1629676800&Signature=eQVJY6n5V8C1S6e-4xpmxw8u3F6zllQcNvDgL0mxFdrB3nOpd5lqHSdgIU7cRDLwjKofbuJtcyQGydoiCd8VOjHKgc84DOAIxrtngKIFX23lfhOCAt6ThP7FrSf6mxF-Jxuc-uYOHOY-dy2HeMenyBJnX8lZWT7KS31G6JXAYt2IRFQ64-bn~ypDLRr1k2LTRomOkBELMKPUURaZasK~dzA0V0SmgOl0W6-V3WMCAkgTxd-e1HbJeORjy1pjE3SV-nSZhD4Ipsfl3roJcYaRbjmHDV1UjDZqgIXUQnLw-X2QAgKsmoNrbPbTYQWpGxgCczgZCCfCFf-92Q3dkPsu8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt="" width="20" height="23" className="d-inline-block align-text-top me-2" />
                    Coffee Shop
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="cursor fw-bold fs15 d-flex justify-content-lg-center w-75" navbar>
                        <NavItem>
                            <Link className='text-decoration-none text-dark me-3' to='/'>
                                    Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link  className='text-decoration-none text-dark me-3'to ='/products'>Product</Link>
                        </NavItem>
                        <NavItem>
                            <Link  className='text-decoration-none text-dark me-3'to ='#'>Your Cart</Link>
                        </NavItem>
                        <NavItem>
                                <Link className='text-decoration-none text-dark me-3' to ='#'>History</Link>
                        </NavItem>
                    </Nav>
                    <Nav>
                        {
                            isLogin !== 'true'?(
                                <div className="d-flex align-items-center  ">
                                    <NavItem className="me-1 fw-bold">
                                            <Link className='text-decoration-none text-dark me-3' to ='/login'>Login</Link>
                                    </NavItem>
                                    <NavItem>
                                            <Link className='btn text-dark cursor fw-bold rounded-pill bgyellow me-3' to ='/register'>SignUp</Link>
                                    </NavItem> 
                                </div>
                            ):(
                                <div className='d-flex align-items-center '>
                                    <Input className = 'p-1 fs15' placeholder='Search' type="text" name=""/>
                                    <div className="chat">
                                        <div className="notif">
                                            <p>1</p>
                                        </div>
                                        <img src="https://image.flaticon.com/icons/png/512/1380/1380370.png" alt="" />
                                    </div>
                                    
                                        <UncontrolledDropdown nav inNavbar >
                                            <DropdownToggle nav >
                                                <div className="image">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Anonim.png" alt='' />
                                                </div>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem onClick={logOut}>
                                                    LogOut
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    
                                </div>
                            )
                        }
                    </Nav>
                </Collapse>
                
            </Container>
            
        </Navbar>
    </div>
    )
}
export default NavBar