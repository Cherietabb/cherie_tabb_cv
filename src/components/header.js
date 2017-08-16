import React, {Component} from 'react';
import {Row, Col, PageHeader} from 'react-bootstrap';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      scroll: false
    }
  }

  resizeHeaderOnScroll(scrollTop) {
    const headerEl = document.getElementById('js-header');

    if (this.props.scrollTop > 200) {
      headerEl.classList.add("smaller");
      this.setState({scroll: true})
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  componentDidUpdate() {
    this.setState = {
      scroll: true
    }
  }

  render() {
    return (
      <PageHeader id="js-header">
        <Col>
          <Row>
            <h1>Cherie Tabb <small>
                Web Application Developer</small>
            </h1>
          </Row>
        </Col>
      </PageHeader>
    )
  }
}

export default Header;
