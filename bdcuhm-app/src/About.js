import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import aloha_ball_formation from './images/aloha_ball_formation.JPG';
import team_match_alum from './images/team_match_alum.JPG';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function About() {
    return (
        /* main header */
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
                <Row className="mb-3 what-we-do" style={{ 'marginLeft': 'none' }}>
                    <Col xs={12} md={6} style={{ color: '#F3F0EC' }}>
                        <div style={{ padding: '2vw' }}>
                            <h1>
                                What We Do
                            </h1>
                            <br></br>
                            <p style={{ fontSize: 'calc(1rem+0.1vw)' }}>
                                Members learn the basics of several dance styles and have the opportunity participate in <b>performances for the local ballroom community</b> as well as <b>compete in statewide competitions</b> (held twice a year). Motivated members have the opportunity to <b>represent the University of Hawaii at Nationals.</b> We are always looking for new dancers and will train you!
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

                <Row className="mb-5 what-we-do" style={{ 'marginLeft': 'none' }}>

                    <Col xs={12} md={6} className='photo-area' >
                        <Image src={team_match_alum} fluid />
                    </Col>

                    <Col xs={12} md={6}>
                        <div style={{ padding: '2vw', backgroundColor: '#F3F0EC', color: '#201D1D' }}>
                            <h2>
                                &#x1F4C5; Class Schedule & Sessions
                            </h2>
                            <p>
                                <b>Everyone is Welcome! </b>
                                <br></br>
                                No prior dance experience or partner is required to join. Classes are for for current UH students only.
                                <br></br>
                                <ul>
                                    <li>
                                        When: Every Tuesday from 6:00 PM to 7:30 PM
                                    </li>
                                    <li>
                                        Where: Studio 2 of the Athletic Complex, University of Hawaii at Manoa
                                    </li>
                                    <li>
                                        What to Bring: Water and comfortable shoes!
                                    </li>
                                </ul>
                                <b>Upcoming Sessions & Styles</b>
                                <br></br>
                                <ul>
                                    <li>
                                    &#x2600; Summer Session (Just Started!): Waltz and Mambo
                                    </li>
                                    <li>
                                        &#x1F342; Fall Session (Starts August 26): Waltz, Tango, Rumba, and Swing
                                    </li>
                                </ul>
                                <b>How to Sign Up</b>
                                <br></br>
                                Just show up to Studio 2 at 6pm on Tuesdays!
                            </p>
                        </div>
                    </Col>
                </Row>

            </Container>

        </Container>

    );
}

export default About;