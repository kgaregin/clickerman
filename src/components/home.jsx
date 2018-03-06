import React from 'react';
import {Container, Row, Col, Progress} from 'reactstrap';

class HomePage extends React.Component {


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="text-center">50%</div>
                        <Progress value={50}/>
                    </Col>
                    <Col>
                        <div className='main__logo'/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export {HomePage};