import React, { useState } from 'react';
import './Accordion.css';

function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const data = [
        {
            title: 'What is your return policy?',
            content: 'The return policy allows you to return items within 30 days of purchase. Items must be in original condition and packaging.'
        },
        {
            title: 'How do I track my order?',
            content: 'To track your order, please visit our tracking page and enter your order number. You will receive updates via email as well and SMS. If you have any issues, contact our support team and they will assist you.'
        },
        {
            title: 'Can I purchase items again?',
            content: ''
        }
    ];

    const toggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="accordion-container">
            {data.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div className="accordion-title" onClick={() => toggle(index)}>
                        <span>{item.title}</span>
                        <span>{openIndex === index ? '▾' : '▸'}</span>
                    </div>
                    {openIndex === index && (
                        <div className="accordion-content">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;
