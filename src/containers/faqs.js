import React from "react"

import questions from '../fixtures/faq.json';
import Faqs from "../components/FAQ's/faqs";
import OptForm from "../components/FAQ's/optForm";

const FaqsContainer = () => {
    return (
        <Faqs>
            <Faqs.Title>Frequently Asked Questions</Faqs.Title>
            <Faqs.Frame>
            {questions.map((items) => (
                <Faqs.Item key={items.id}>
                    <Faqs.Header>{items.header}</Faqs.Header>
                    <Faqs.Body>{items.body}</Faqs.Body>
                </Faqs.Item>
            ))}
            </Faqs.Frame>

            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Get Started</OptForm.Button>
            </OptForm>
        </Faqs>
    )
}

export default FaqsContainer;

