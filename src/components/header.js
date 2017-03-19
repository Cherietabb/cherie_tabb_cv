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
            <Row id="wrapper">
                <Col id="js-header">
                    <div className="container clearfix">
                        <PageHeader className="extended-nav-fixed navbar-fixed-top">Cherie Tabb<small>Junior Web Application Developer</small>
                        </PageHeader>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Header;
