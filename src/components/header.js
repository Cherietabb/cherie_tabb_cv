import React, {Component} from 'react';
import {Row, Col, PageHeader} from 'react-bootstrap';

class Header extends Component {
    // constructor() {
    //     super();
    //     this.state.scroll = {
    //     scrollTop: 0
    //     };
    //
    //     this.setState({scroll: true})
    // }
    //
    // // $(document).on("scroll", function(){
    // if
    // ($(document).scrollTop() > 100){
    //   $("#js-header").addClass("shrink");
    // }
    // else
    // {
    //     $("#js-header").removeClass("shrink");
    // }
    // });

// componentDidMount () {
//   this.setHeightOffset()
//   if (!this.props.disable) {
//     this.props.parent().addEventListener('scroll', this.resizeHeaderOnScroll)
//   }
// }
    render() {

        return (
            <Row id="wrapper" md={12}>
                <Col id="js-header">
                    <div className="container clearfix">
                        <PageHeader className="extended-nav-fixed navbar-fixed-top">Cherie Tabb<small>Web Application Developer</small>
                        </PageHeader>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Header;
