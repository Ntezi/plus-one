import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {checkText, clearText, getStatus, selectNonEnglishWords} from "./checkTextSlice";
import {Button, Card, Container, Form} from "react-bootstrap";

const CheckTextForm = () => {
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const [requestStatus, setRequestStatus] = useState('idle');

    const onTextChanged = event => setText(event.target.value);

    const canCheck = [text].every(Boolean) && requestStatus === 'idle';

    const onCheckClicked = () => {
        if (canCheck) {
            try {
                setRequestStatus('pending');
                dispatch(checkText({text})).unwrap();
            } catch (err) {
                setRequestStatus('failed');
                console.error('Failed to check the text', err);
            } finally {
                setRequestStatus('idle');
            }
        }

    }

    const onClearClicked =  () => {
        setText('');
        dispatch(clearText(requestStatus))

    }

    const nonEnglishWords = useSelector(selectNonEnglishWords);
    const status = useSelector(getStatus);

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Container style={{width: '768px'}}>
                <Card>
                    <Card.Header>English word check</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    type="textarea"
                                    placeholder="Type here to find non-English words"
                                    id="text"
                                    name="text"
                                    value={text}
                                    rows={5}
                                    onChange={onTextChanged}
                                />
                            </Form.Group>

                            <Button
                                variant="secondary"
                                onClick={onCheckClicked}
                                disabled={!canCheck}
                            >
                                Check
                            </Button>
                            <Button
                                style={{marginLeft: "30px"}}
                                variant="light"
                                onClick={onClearClicked}
                            >
                                Clear
                            </Button>
                        </Form>
                    </Card.Body>
                    { status === 'succeeded' &&
                        <Card.Footer className="text-muted">
                            {nonEnglishWords.length > 0 ? `Non-English words: ${nonEnglishWords.join(', ')}` : 'Every word is in English.'}
                        </Card.Footer>
                    }
                </Card>
            </Container>
        </div>
    )
}
export default CheckTextForm
