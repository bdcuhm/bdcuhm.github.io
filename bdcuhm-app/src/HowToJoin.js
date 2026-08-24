import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import team_match_alum from './images/team_match_alum.JPG';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function HowToJoin() {
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
                <Row className="mb-5 what-we-do" style={{ 'marginLeft': 'none' }}>
                    <Col xs={12} md={6} className='photo-area' >
                        <Image src={team_match_alum} fluid />
                    </Col>
                    <Col xs={12} md={6}>
                        <div style={{ padding: '2vw', backgroundColor: '#F3F0EC', color: '#201D1D' }}>
                            <h2>
                                &#x1F4C5; Class Schedule & Sessions
                            </h2>
                            <br></br>
                                <b>Everyone is Welcome! </b>
                                <br></br>
                                No prior dance experience or partner is required to join. Classes are for <i>current UH students only</i>.
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
                        </div>
                    </Col>
                </Row>
            </Container>

        </Container>

    );
}

export default HowToJoin;