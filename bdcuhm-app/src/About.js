import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import aloha_ball_formation from './images/aloha_ball_formation.JPG';
import ravi_profile from './images/ravi_profile.PNG';
import chris_profile from './images/chris_profile.JPG';
import lyndsey_profile from './images/lyndsey_profile.JPG';
import shaelyn_profile from './images/shaelyn_profile.JPG';
import alex_profile from './images/alex_profile.JPG';
import delle_profile from './images/delle_profile.JPG';
import michaella_profile from './images/michaella_profile.JPG';
import luis_profile from './images/luis_profile.jpeg';

function About() {
    return (
        <Container fluid style={{ padding: '2vw' }}>
            <Row style={{ marginBottom: '1vw' }}>
                <Col>
                    <div className="title-bar d-flex flex-column flex-md-row gap-0 gap-md-4" style={{ justifyContent: 'center' }}>
                        <Link to='/' className='h1 corinthia-bold text-center' style={{ color: '#F3F0EC', marginBottom: 0, alignSelf: 'center', textDecoration: 'none' }}>
                            Ballroom Dance Club
                        </Link>
                        <Link to='/' className='p' style={{ color: '#F3F0EC', margin: 0, alignSelf: 'center', textDecoration: 'none' }}>
                            AT UNIVERSITY OF HAWAII
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row fluid style={{ paddingLeft: '8vw', paddingRight: '8vw', marginBottom: '2vw' }}>
                <hr style={{ color: '#F3F0EC', height: '2px', opacity: 0.8, margin: 0, marginBottom: '1vw' }}
                />
                <Nav style={{ justifyContent: 'space-between' }}>
                    <Nav.Link as={Link} to='/about'>
                        ABOUT
                    </Nav.Link>
                    <Nav.Link as={Link} to='/howtojoin'>
                        HOW TO JOIN
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
                <Row className="mb-3 what-we-do" style={{ 'marginLeft': 'none' }}>
                    <Col xs={12} md={6} style={{ color: '#F3F0EC' }}>
                        <div style={{ padding: '2vw' }}>
                            <h1>
                                What We Do
                            </h1>
                            <br></br>
                            <p style={{ fontSize: 'calc(1rem+0.1vw)' }}>
                                Members learn the basics of several dance styles and have the opportunity to participate in <b>performances for the local ballroom community</b> as well as <b>compete in statewide competitions</b> held twice a year. Motivated members have the opportunity to <b>represent the University of Hawaii at the yearly USA Dance Nationals.</b> We are always looking for new dancers and will train you!
                            </p>

                            <p style={{ fontWeight: 'bold' }}>
                                &#x1F483; No dance experience required
                            </p>
                            <p style={{ fontWeight: 'bold' }}>
                                &#x1F57A; No need to bring your own partner
                            </p>
                            <p style={{ fontWeight: 'bold' }}>
                                &#x2728; Beginners always welcome
                            </p>
                            <p style={{ fontWeight: 'bold' }}>
                                &#x1F490; Optional performances and competitions
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className='photo-area' >
                        <Image src={aloha_ball_formation} fluid />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Col xs={24} md={12}>
                    <div style={{ padding: '2vw' }}>
                        <h1 style={{ color: '#F3F0EC' }}>
                            Meet Our Officers
                        </h1>
                    </div>

                    <Row style={{
                        padding: '2vw', justifyContent: 'space-between', display: 'flex',
                        flexwrap: 'wrap', gap: '2vw'
                    }}>
                        <Card className='d-flex align-items-stretch' style={{ width: '18rem', backgroundColor: '#F0BB2B' }}>
                            <Card.Body>
                                <Image
                                    fluid
                                    src={ravi_profile}
                                    roundedCircle
                                    className="mb-3"
                                    style={{ height: '100px', aspectRatio: '100x100' }}
                                />
                                <Card.Title className='officer-title'>PRESIDENT</Card.Title>
                                <Card.Text className='officer-name'>Ravi Narayan</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex align-items-stretch' style={{ width: '18rem', backgroundColor: '#F0BB2B' }}>
                            <Card.Body>
                                <Image
                                    fluid
                                    src={chris_profile}
                                    roundedCircle
                                    className="mb-3"
                                    style={{ height: '100px', aspectRatio: '100x100' }}
                                />
                                <Card.Title className='officer-title'>VICE PRESIDENT</Card.Title>
                                <Card.Text className='officer-name'>Chris Ramirez</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex align-items-stretch' style={{ width: '18rem', backgroundColor: '#F0BB2B' }}>
                            <Card.Body>
                                <Image
                                    fluid
                                    src={lyndsey_profile}
                                    roundedCircle
                                    className="mb-3"
                                    style={{ height: '100px', aspectRatio: '100x100' }}
                                />
                                <Card.Title className='officer-title'>TREASURER</Card.Title>
                                <Card.Text className='officer-name'>Lyndsey Moku</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex align-items-stretch' style={{ width: '18rem', backgroundColor: '#F0BB2B' }}>
                            <Card.Body>
                                <Image
                                    fluid
                                    src={shaelyn_profile}
                                    roundedCircle
                                    className="mb-3"
                                    style={{ height: '100px', aspectRatio: '100x100' }}
                                />
                                <Card.Title className='officer-title'>SECRETARY</Card.Title>
                                <Card.Text className='officer-name'>Shaelyn Loo</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex align-items-stretch' style={{ width: '18rem', backgroundColor: '#F0BB2B' }}>
                            <Card.Body>
                                <Image
                                    fluid
                                    src={alex_profile}
                                    roundedCircle
                                    className="mb-3"
                                    style={{ height: '100px', aspectRatio: '100x100' }}
                                />
                                <Card.Title className='officer-title'>COMMUNICATIONS</Card.Title>
                                <Card.Text className='officer-name'>Alex Picken</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex align-items-stretch' style={{ width: '18rem', backgroundColor: '#F0BB2B' }}>
                            <Card.Body>
                                <Image
                                    fluid
                                    src={delle_profile}
                                    roundedCircle
                                    className="mb-3"
                                    style={{ height: '100px', aspectRatio: '100x100' }}
                                />
                                <Card.Title className='officer-title'>SOCIAL MEDIA</Card.Title>
                                <Card.Text className='officer-name'>D'Elle Martin</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex align-items-stretch' style={{ width: '18rem', backgroundColor: '#F0BB2B' }}>
                            <Card.Body>
                                <Image
                                    fluid
                                    src={michaella_profile}
                                    roundedCircle
                                    className="mb-3"
                                    style={{ height: '100px', aspectRatio: '100x100' }}
                                />
                                <Card.Title className='officer-title'>TEACHING ASST.</Card.Title>
                                <Card.Text className='officer-name'>Michaella Villanueva</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex align-items-stretch' style={{ width: '18rem', backgroundColor: '#F0BB2B' }}>
                            <Card.Body>
                                <Image
                                    fluid
                                    src={luis_profile}
                                    roundedCircle
                                    className="mb-3"
                                    style={{ height: '100px', aspectRatio: '100x100' }}
                                />
                                <Card.Title className='officer-title'>TEACHING ASST.</Card.Title>
                                <Card.Text className='officer-name'>Luis Hernandez</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Container>

        </Container>
    );
}

export default About;