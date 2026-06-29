import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

import alex_shaelyn_latin from './images/alex_shaelyn_latin.JPG';
import caleb_amanda_smooth from './images/caleb_amanda_smooth.JPG';
import jason_ariel_rhythm from './images/jason_ariel_rhythm.JPG';
import nationals_group from './images/nationals_group.JPG';
import ravi_synthia_standard from './images/ravi_synthia_standard.JPG';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Home() {
    return (
        <Container fluid style={{ padding: '2vw' }}>
            <Row style={{ marginBottom: '1vw' }}>
                <Col>
                    <div className="title-bar d-flex flex-column flex-md-row gap-0 gap-md-4" style={{ justifyContent: 'center' }}>
                        <a href= '/' className='h1 corinthia-bold text-center' style={{ color: '#F3F0EC', marginBottom: 0, alignSelf: 'center', textDecoration: 'none' }}>
                            Ballroom Dance Club
                        </a>
                        <a href='/' className= 'p' style={{ color: '#F3F0EC', margin: 0, alignSelf: 'center', textDecoration: 'none' }}>
                            AT UNIVERSITY OF HAWAII
                        </a>
                    </div>
                </Col>
            </Row>
            <Row fluid style={{ paddingLeft: '8vw', paddingRight: '8vw', marginBottom: '2vw' }}>
                <hr style={{ color: '#F3F0EC', height: '2px', opacity: 0.8, margin: 0, marginBottom: '1vw' }}
                />
                <Nav style={{ justifyContent: 'space-between' }}>
                    <Nav.Link as={Link} to='/about'>
                        ABOUT & HOW TO JOIN
                    </Nav.Link>
                    <Nav.Link>
                        FOR NEW PERFORMERS
                    </Nav.Link>
                    <Nav.Link>
                        IN THE NEWS
                    </Nav.Link>
                    <Nav.Link>
                        PHOTO GALLERY
                    </Nav.Link>
                </Nav>
            </Row>
            <Container>
                <Row className="flex-column flex-md-row" style={{ 'margin-left': 'none' }}>
                    <Carousel className='carousel-main' xs={12} fade ride="carousel" style={{ paddingRight: '2vw', width: '55vw' }}>
                        <Carousel.Item>
                            <img
                                src={alex_shaelyn_latin}
                                alt="Alex Picken and Shaelyn Loo - Samba"
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={caleb_amanda_smooth}
                                alt="Caleb Zerbe and Amanda Kanthack - Waltz"
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={jason_ariel_rhythm}
                                alt="Jason Aguda and Ariel Ramos - Cha-cha"
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={ravi_synthia_standard}
                                alt="Ravi Narayan and Synthia Sumukti - Waltz"
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={nationals_group}
                                alt="2026 USA Dance Nationals"
                                className="d-block w-100"
                            />
                        </Carousel.Item>
                    </Carousel>

                    <Col className="intro-block" style={{ backgroundColor: '#F3F0EC', color: '#201D1D' }}>
                        <div style={{ padding: '2vw' }}>
                            <h1 className='corinthia-bold'>
                                Let's Dance!
                            </h1>
                            <p style={{ fontSize: 'calc(1rem+0.1vw)' }}>
                                <b>Ballroom dancing</b> is a fun and engaging physical activity that offers stress relief and opportunities to build friendships with other members.
                                <br></br>
                                <br></br>
                                It can help improve your posture, boost your confidence, and even enhance your resume.
                                <br></br>
                                <br></br>
                                Interestingly, many of the top Adult Amateur ballroom dancers in the US are <b>Computer Science or Engineering majors and graduates</b> — you might even have one of them interview you for your next job!
                            </p>
                            <br />
                            <Link className='h4' style={{ textAlign: '-khtml-right' }} to = '/about'>
                                Learn more
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home;