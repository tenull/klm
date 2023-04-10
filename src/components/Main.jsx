import { useEffect } from 'react';
import { dummyData } from '../dummyData';
import { Container,Row } from 'react-bootstrap';

function Main() {

    useEffect(() => {
        console.log('jozsi', dummyData);
    }, []);

    return (

        <div className="main">

            {dummyData && dummyData.map((item, index) => {
                return (
                    <Container>
                        <div className="container" key={index}>
                            <div className="large">

                                <div className='col-lg-6'>
                        
<img className='' style={{}} src={item.image} alt="random" />

                                </div>
                                <div className='col-lg-6 d-flex flex-column justify-content-center'>
                                <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                                    <div><button>REGISTER</button></div>
                                    
                                </div>
                            </div>
                            <div className="small">
                                <div>
                                    <h1>{item.title}</h1>
                                    <img style={{ height: '600px' }} className='img-fluid' src={item.image} alt="random" />
                                    <p>{item.content}
                                    <div><button>REGISTER</button></div>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </Container>
                )
            })}
            <div style={{backgroundColor:'#019CBA'}}>
            <Container  >
                <Row className='pt-5 pb-5'>
                    <div className="col-lg-6">
                        <h3>H3 Creedo Campaing</h3>
                    </div>
                    <div className="col-lg-6">
                        <p>Proin vehicula sollicitudin gravida. Morbi ex nulla, vulputate nec suscipit in, auctor in sapien. Fusce porttitor, ante ac euismod porttitor, ipsum libero dapibus ante, a semper metus quam accumsan lorem.</p>
                    </div>
                </Row>
            </Container>
            </div>
        </div>
    );
}

export default Main;