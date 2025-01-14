import React from 'react';
import Card from 'react-bootstrap/Card';


const Blog = () => {
    return (
        <div>
            <Card border="dark" className='bg-transparent'>
                <Card.Header>Question:1: what is the difference between SQL and NoSQL?</Card.Header>
                <Card.Body>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        The five critical differences between SQL vs NoSQL are:
                        <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                        <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="dark" className='bg-transparent'>
                <Card.Header>Question:2: What is JWT, and how does it work?</Card.Header>
                <Card.Body>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br />
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. <br />

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. <br />

                        Once decoded, you will get two JSON strings: <br />

                        <li>The header and the payload.</li>
                        <li>The signature.</li>
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. <br />

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. <br />

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="dark" className='bg-transparent'>
                <Card.Header>Question:3: What is the difference between javascript and NodeJS?</Card.Header>
                <Card.Body>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        <p className='fw-bold'>Differences Between Node.js and JavaScript: </p>
                        1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />
                        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br />

                        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br />

                        4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                        Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive. <br />

                        5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

                        Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="dark" className='bg-transparent'>
                <Card.Header>Question:4: How does NodeJS handle multiple requests at the same time?</Card.Header>
                <Card.Body>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;