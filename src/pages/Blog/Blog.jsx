import React from 'react';
import { Button, Container } from 'react-bootstrap';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


const Blog = () => {
    const ref = React.createRef();
    return (
        <Container>

            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <Button className='fw-semibold my-5' style={{marginLeft: "550px"}} variant="outline-warning" onClick={toPdf}>Download</Button>}
                
            </Pdf>


            <div ref={ref}>

                <div className='mt-5'>
                    <h1>1.. Tell us the differences between uncontrolled and controlled components.</h1>
                    <h4>Answer:</h4>
                    <p className='fs-5 fw-semibold'>In software engineering, components can be classified as either controlled or uncontrolled based on their level of autonomy and how they interact with the rest of the system.</p>
                    <p className='fs-5 fw-semibold'>Uncontrolled components are those that operate independently and have no direct communication with other components in the system. They typically perform a specific function and do not rely on the state of the system to function. Examples of uncontrolled components include simple functions, pure components, and presentational components in React.</p>
                    <p className='fs-5 fw-semibold'>On the other hand, controlled components are components that rely on the state of the system to operate. They interact with other components and can modify the state of the system. They typically require props and callbacks to operate and are more complex than uncontrolled components. Examples of controlled components include form inputs, sliders, and other interactive components that rely on user input to modify the state of the system.</p>
                </div>


                <div className='mt-5'>
                    <h1>2.. How to validate React props using PropTypes</h1>
                    <h4>Answer:</h4>
                    <p className='fs-5 fw-semibold'>In React, PropTypes is a useful tool for validating the types of props passed to a component. PropTypes helps to ensure that the right types of data are being passed to a component, which can help prevent runtime errors and make code more maintainable.</p>
                    <div className='fs-5 fw-semibold'>
                        <li>Any : The prop can be of any data type.</li>
                        <li>Bool : The prop should be a Boolean.</li>
                        <li>Number : The prop should be a number.</li>
                        <li>String : The prop should be a string.</li>
                        <li>Func : The prop should be a function.</li>
                        <li>Array : The prop should be an array.</li>
                        <li> object : The prop should be an object.</li>
                    </div>
                </div>

                <div className='mt-5'>
                    <h1>3.. Tell us the difference between nodejs and express js.</h1>
                    <h4>Answer:</h4>
                    <p className='fs-5 fw-semibold'>Node.js and Express.js are both popular technologies in the JavaScript ecosystem, but they serve different purposes.</p>
                    <p className='fs-5 fw-semibold'>Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser. It provides a platform for building server-side applications and supports a wide range of features such as event-driven programming, non-blocking I/O, and asynchronous processing.</p>
                    <p className='fs-5 fw-semibold'>Here are some of the key differences between Node.js and Express.js:</p>
                    <div className='fs-5 fw-semibold'>
                        <li>Node.js is a runtime environment while Express.js is a web framework built on top of Node.js.</li>
                        <li>Node.js provides the basic building blocks for building server-side applications while Express.js provides additional features to simplify web application development.</li>
                        <li>Node.js has a low-level API that requires more manual configuration and setup, while Express.js provides a higher-level API that abstracts away some of the complexity of building web applications.</li>
                        <li>Node.js is highly flexible and can be used to build a wide range of applications, while Express.js is optimized for building web applications.</li>
                        <li>Node.js is suitable for building both server-side and client-side applications, while Express.js is designed specifically for building server-side web applications.</li>
                    </div>
                </div>

                <div className='my-5'>
                    <h1>4.. What is a custom hook, and why will you create a custom hook?</h1>
                    <h4>Answer:</h4>
                    <p className='fs-5 fw-semibold'>In React, a custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components. Custom hooks can be used to encapsulate complex logic, provide separation of concerns, and simplify code.</p>
                    <p className='fs-5 fw-semibold'>A custom hook is just a regular function that uses built-in hooks like useState, useEffect, useContext, and so on. The function name should always start with the word "use" to indicate that it is a hook.</p>
                    <p className='fs-5 fw-semibold'>Custom hooks can be useful in a variety of scenarios, such as:</p>
                    <div className='fs-5 fw-semibold'>
                        <li>Abstracting complex logic into reusable functions</li>
                        <li>Sharing stateful logic between components</li>
                        <li>Separating concerns and keeping code organized</li>
                        <li>Improving code readability and maintainability</li>
                        <li>Reducing code duplication and improving performance</li>
                    </div>
                </div>
            </div>


        </Container>
    );
};

export default Blog;