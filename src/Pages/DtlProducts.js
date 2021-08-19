import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import './details.css'
import { Container, Row, Col,Input,Button } from 'reactstrap'

const Details = () =>{
    const  { id } = useParams()
    const idProduct = parseInt(id)
    const getData = localStorage.getItem('data')
    const dataProducts =  JSON.parse(getData)
    
    return(
        <div>
            <Nav isLogin='true' />
            <div className='rubik'>
                <Container>
                        {
                        // eslint-disable-next-line array-callback-return
                        dataProducts.map((e,i)=>{
                            if(e.id === idProduct ){
                                return(
                                    <Row key={i} >
                                        <Col lg = '4' md='6' sm='12' className=' pt-5 mb-5'>
                                            <div className='detailImage rubik '>
                                                <img src={e.img} alt="" width='100%' height='auto' />
                                                <p className='mt-4'>Delivery only on 
                                                    <span className='fw-bold '> Monday to friday at  1 - 7 pm</span> </p>
                                            </div>
                                        </Col>
                                        <Col lg='8' md='6' sm='12'>
                                            <div className='detailBody  pt-5'>
                                                <h1>{e.name}</h1>
                                                <h2>IDR {e.price}</h2>
                                                <p>{e.decription}</p>
                                                <Input type="select" name="" defaultValue="" className='mb-2 mt-5 p-2 cursor  rubik' >
                                                    <option value="Small">Small</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="Large">Large</option>
                                                </Input>
                                                <Input type="select"  name="" defaultValue="" className='mb-2 p-2 cursor rubik' >
                                                    
                                                    <option value="Dine In">Dine In</option>
                                                    <option value="PickUp">Pick Up</option>
                                                    <option value="Delivery">Delivery</option>
                                                </Input>
                                                <Button type="" className='bgyellow btnDetail  mb-2 w-100 fw-bold'>Add to Cart</Button>
                                                <br />
                                                <Button type="" className='bgbrown btnDetail  mb-2 w-100 fw-bold'>CheckOut</Button>

                                            </div>
                                        </Col>
                                    </Row>
                                )
                            }
                        })
                    }
                    
                </Container>
            </div>
            <Footer />
        </div>

    )
}
export default Details