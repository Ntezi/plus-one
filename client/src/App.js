import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CheckTextForm from './features/check/CheckTextForm';

function App() {
    return (
        <Container className="p-3">
            <Row>
                <CheckTextForm/>
            </Row>
        </Container>
    );
}

export default App;
