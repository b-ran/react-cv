import React from 'react';
import Item from './Item';
import Side from './Side';

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <div className='content'>
                    <h3>Work Experiences</h3>
                    <Item title='Software Engineer' context='DOT Loves Data | Sept 2020 - Present'>
                        <p>
                            <ul>
                                <li>
                                    Engineered a secure data sharing software allowing customers to directly send data
                                    to DotLovesData over AES-256 encryption without third parties over a Django web
                                    interface. All encrypted data is stored in Minio, location independent from Django,
                                    meeting customers' data storage location requirements.
                                </li>

                                <li>
                                    Built a REST API and an OAuth 2 authentication flexible enough to meet all
                                    customer's different applications and needs. Done with the use of Python
                                    FastAPI and Tortoise ORM.
                                </li>

                                <li>
                                    Deployed and maintained a Kubernetes cluster on bare metal.
                                </li>

                                <li>
                                    Deployed and maintained Jenkins in the Kubernetes cluster, allowing fpr better
                                    management of scheduled jobs within DotLovesData.
                                </li>

                                <li>
                                    Implemented a Prometheus monitoring stack and alerting to monitor all services and
                                    on-premise servers. Allowing for management of time-sensitive events like downtime
                                    or raid disk failure.
                                </li>


                                <li>
                                    Implemented and maintained secret management tool Hashicrop Vault to manage the
                                    range of different secrets used by projects.
                                </li>
                            </ul>

                        </p>
                    </Item>

                    <Item title='Junior Software Engineer' context='Publons | Nov 2019 - Sept 2020'>
                        <p>
                            <ul>
                                <li>
                                    Worked in a Django backend with a Vue frontend developing new features for Publons
                                    users in an agile setting.
                                </li>
                                <li>
                                    Developed end to end testing system integrated with the deployment pipeline. Tests
                                    ran with ec2 instances in a Selenium grid with Docker where behaviour driven tests
                                    were written in Python Selenium and Behave Gherkin.
                                </li>
                                <li>
                                    Maintained and Improved existing Jenkins CI/CD pipeline integrating with GitHub.
                                </li>
                                <li>
                                    Customized an auto-documentation tool to help auto-generate documentation for
                                    Publons.
                                </li>
                            </ul>
                        </p>
                    </Item>

                    <h3>Projects</h3>

                    <Item title='aTouch - Agile on Large Touch Screens' context='Research Project'>
                        <p>

                            aTouch was a project about creating a touch dashboard experience when practising different
                            agile ideas. The project used typescript, D3, Angular and a Rest API.
                        </p>
                    </Item>

                    <Item title='Bus Factor' context='Open Source'>
                        <p>
                            Real-time object detection project finding buses skipping right lights using a simple webcam
                            and software. The project used OpenCV, Python, and a YOLO neural network.
                        </p>
                    </Item>

                    <Item title='Social Timetable' context='Open Source'>
                        <p>

                            The social timetable app project allows the sharing of student timetables with other
                            students supporting the viewing of real-time updates to timetables. Made use of typescript,
                            react native and firebase.
                        </p>
                    </Item>

                </div>
                <Side/>
            </div>
        )
    }
}