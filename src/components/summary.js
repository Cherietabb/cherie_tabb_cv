import React, {Component} from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
// import {flatten, times} from 'lodash';

class Summary extends Component {

    // constructor(props) {
    //     super(props);
    // }
    render() {
        var divStyle = {
            color: 'hsl(50, 0%, 60%)'
        };

        // const NUMBER_OF_PARAGRAPHS = 2;
        // const paragraphs = flatten(times(NUMBER_OF_PARAGRAPHS, (index) => (
        //     <h3 key={index}>
        //         Duis amet cillum elit laboris amet officia duis ex labore quis dolore occaecat aute adipisicing. Est sit nisi elit cillum cillum labore ea. Laborum eiusmod qui eiusmod velit et anim irure aliquip sunt ut. Cillum irure cillum eu qui cupidatat adipisicing amet magna ullamco do exercitation excepteur fugiat commodo irure. Est nisi culpa do laborum est dolor eu anim enim voluptate dolore qui veniam.</h3>
        // )));
        //
        const pilytixJobList = ['Configured complex node.js micro services MEAN stack application to accept multiple customer CRM data schemas.', 'Worked in an emerging Agile/Scrum methodology.', 'Executed and maintained AWS CodeDeploy jobs tasked with running data transforms.', 'Engineered UI solutions for Salesforce API models.', 'Programmed python scripts to create mlab MongoDB instance reports.'];

        const oDAnalystJobList = ['Responsible for tracking of margin growth initiatives.', 'Created and modified queries with Microsoft SQL Server.', 'Used ETL tools, such as SSIS to insert data into database.', 'Used Access and VBA to break up large data for SharePoint workflows.', 'Worked with Regional Performance Managers to find more cost-effective solutions for sales territories.', 'Fulfill ad-hoc requests for data and analysis.'];

        const oDSalesJobList = ['Created custom reports and lists and a custom dashboard in Salesforce.com to help build strategy for customer base.', 'Utilized Cognos Query Studio to run sales data.', 'Used formulas and V-Lookup to build workbooks in Microsoft Excel for pricing analysis.', 'Exceeded targeted sales goals by 101%.'];

        const rainmakerJobList = ['Gained 20% program participation rate through high volume prospecting.', 'Tracked and maintain contacts and sales process through CRM tools.'];

        const dellJobList = ['Identified and fulfilled customers’ technology needs through an inbound/outbound call center sales environment, ranked in top 5% out of 400 sales reps.']

        return (
            <Grid id="page-content-wrapper">
            <Col id="main-content">
                <Row className="show-grid">
                    {/* <Col md={2}>
                            Summary
                        </Col> */}
                    <Col id="summary" xs={12} md={12}>
                        <h3>
                            Passionate, driven, positive and persistent, I love pair programming, collaborating or figuring things out on my own. I began building a solid sales and service driven background and transitioned into business analytics. Recognizing an ardor for technical and creative problem solving, I started aggressively immersing myself into programming education.
                        </h3>
                    </Col>
                    <br/>

                </Row>
                <Row className="show-grid">
                    <Col id="technical" sm={6} md={12}>
                        <h2 className="headlines">Technical Skills</h2>
                        <p>
                            <span>
                                <strong>Technical Skills:  </strong>
                            </span>
                            JavaScript, Python, Angular.js, JQuery, Express.js, Node.js, Express.js, HTML5/CSS3
                        </p>
                        <p>
                            <span>
                                <strong>Version Control:
                                </strong>
                            </span>
                            Git, GitHub, BitBucket
                        </p>
                        <p>
                            <span>
                                <strong>Data:
                                </strong>
                            </span>
                            Microsoft SQL Server 2008/2012, Microsoft Excel, Microsoft Access, Microsoft SharePoint, MongoDB
                        </p>
                        <p>
                            <span>
                                <strong>Cloud:
                                </strong>
                            </span>
                              S3, AWS CodeDeploy, mLab, Heroku Additional Tools: SSIS, Jekyll, Jenkins, JetBrains Products, Salesforce.com, Cognos Query Studio, Jira, VIM, CLI
                        </p>
                    </Col>
                    <br/>
                </Row>
                <Row className="job-list">
                    <Col>
                        <h2 className="headlines">Work Experience</h2>
                    </Col>
                    <Col className="job-headline" sm={6} md={12}>
                        <h3>Pilytix</h3>
                        <h3 style={{
                            divStyle
                        }}>Web Application Developer</h3>
                    </Col>
                    <Col md={12}>
                        <ListGroup>
                            {pilytixJobList.map(pilytxJob => <ListGroupItem className="item">{pilytxJob}</ListGroupItem>)}
                    </ListGroup>
                </Col>
            </Row>
            <Row className="job-list">
                <Col className="job-headline" sm={6} md={12}>
                    <h3>Office Depot</h3>
                    <h3>Analyst, Pricing Strategy</h3>
                </Col>
                <Col md={12}>
                    <ListGroup>
                        {oDAnalystJobList.map(oDAnalystJob => <ListGroupItem className="item">{oDAnalystJob}</ListGroupItem>)}
                    </ListGroup>
                </Col>
            </Row>
            <Row className="job-list">
                <Col className="job-headline" md={12}>
                    <h3>Office Depot</h3>
                    <h3>Inside Sales Account Manager</h3>
                </Col>
                <Col md={12}>
                    <ListGroup>
                        {oDSalesJobList.map(oDSalesJob => <ListGroupItem className="item">{oDSalesJob}</ListGroupItem>)}
                    </ListGroup>
                </Col>
            </Row>
            <Row className="job-list">
                <Col className="job-headline" md={12}>
                    <h3>Rainmaker (on contract through Express Employment Professionals)</h3>
                    <h3>Business Development Associate</h3>
                </Col>
                <Col md={12}>
                    <ListGroup>
                        {rainmakerJobList.map(rainmakerJob => <ListGroupItem className="item">{rainmakerJob}</ListGroupItem>)}
                    </ListGroup>
                </Col>
            </Row>
            <Row className="job-list">
                <Col className="job-headline" md={12}>
                    <h3>Dell Inc. (on contract through Genesis Networks Inc.)</h3>
                    <h3>Inside Sales Representative</h3>
                </Col>
                <Col md={12}>
                    <ListGroup>
                        {dellJobList.map(dellJob => <ListGroupItem className="item">{dellJob}</ListGroupItem>)}
                    </ListGroup>
                </Col>
            </Row>
        </Col>
    </Grid>
        )
    }
}

export default Summary;
