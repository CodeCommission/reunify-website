import React from "react";
import "./Layout.css";
import "wow.js/css/libs/animate.css";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Scrollspy from "react-scrollspy";

const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const Nav = styled.div`
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  justify-content: space-between;
  margin: 0;
  background: ${props =>
    props.hasScrolled
      ? "rgba(238, 238, 238, 0.9)"
      : "#0d5310 url('data:image/png;base64,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') repeat"};
  transition: all 0.4s ease-in-out;
  box-shadow: ${props =>
    !props.hasScrolled ? "none" : "0 1px 0px rgba(0, 0, 0, 0.15)"};

  & a {
    color: ${props => (props.hasScrolled ? "black" : "white")};
  }

  & img {
    -moz-filter: ${props => (props.hasScrolled ? "invert()" : "none")};
    -o-filter: ${props => (props.hasScrolled ? "invert()" : "none")};
    -webkit-filter: ${props => (props.hasScrolled ? "invert()" : "none")};
    filter: ${props => (props.hasScrolled ? "invert()" : "none")};
  }
`;

const NavItems = styled(Scrollspy)`
  list-style-type: none;
  display: inline-flex;
  flex-wrap: wrap;
`;

const NavItem = styled.li`
  display: inline;
  text-transform: uppercase;

  &.isActive {
    a {
      color: #20b326;
    }
  }

  &.isTabActive {
    a {
      color: #0d5310;
    }
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  margin-right: 12px;
  margin-top: 0px;
  text-align: left;
  vertical-align: middle;
  display: inline-block;
  font-size: 14px;
  color: #009807;
  :hover {
    color: #20b326;
  }
`;

const ScrollToTop = styled.a`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-align: center;
  background: whiteSmoke;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 999999;
  display: none;
  background: #20b326;
  opacity: 0.5;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: block;
`;

const NavLogoImage = styled.img`
  height: 35px;
  width: 35px;
  margin: 6px;
`;

const NavLogoLink = styled.a`
  margin: 0px;
  text-decoration: none;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
`;

const NavLogoBrand = styled.div`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 20px;
  margin-top: 10px;
`;

const Content = styled.main`
  width: 100%;
  background-color: white;
  padding-bottom: 100px;
`;

const Footer = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  padding: 10px 0 10px 0;
  height: 100px;
  color: #eee;
  font-size: 10px;
  background: #0d5310
    url("data:image/png;base64,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")
    repeat;
`;

export default class Layout extends React.Component {
  state = {
    hasScrolled: false
  };

  componentDidMount() {
    const WOW = require("wow.js");
    new WOW().init({ offset: 100, mobile: true });
    window.onscroll = () => this.setState({ hasScrolled: window.scrollY > 20 });
  }

  render() {
    return (
      <LayoutContainer>
        <Helmet htmlAttributes={{ lang: "en" }}>
          <title>Blazing fast web | REUNIFY.RUN</title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Blazing fast web | reunify.run" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Blazing fast web | reunify.run" />
          <meta
            property="og:description"
            content="Blazing fast web | reunify.run"
          />
          <meta
            property="og:image"
            content="https://www.reunify.run/logo.svg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="reunify.run" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@reunify_run" />
          <meta name="twitter:title" content="Blazing fast web | reunify.run" />
          <meta
            name="twitter:description"
            content="Blazing fast web | reunify.run"
          />
          <meta
            name="twitter:image"
            content="https://www.reunify.run/logo.svg"
          />
          <meta name="theme-color" content="#eee" />
          <link
            rel="shortcut icon"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAQAAACC7ibdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfgCxYMGyREHV5fAAACWklEQVQ4y23UT4iVVRjH8c993zszDpGCN5iQcmVhQSAq1CKCFkEUCAlKBEEUBAZWRC0yUKIs2lSLokWSFZXuXNSiJGqTFmSLYpB00WjYH1pIDRZz5869vxbvuXfeaJ53957vOef3/J7nObUmKh2xGrU1olPQkSl77bHZ0DnvO6mS/2xvbbjON2IoYiQ+sm5yVCsqbLMghoYW/CIG4thacI2HRJx1u2mz7nfZUNy3lvYNeNK8a9BRY7eIE2vBO5zQtU5HraNSmXJOnNctMltxgziOeuINZ8RFs+WulvabLIt3Cl5hiyvia8zplSqUuN4VK+JNdFH7RMQL2G/Zs2bGztTYY6QvXsWMz0VcsgmPiThlYxt/UPTFYXwoFt0B7jWyLE6uqp7Co2JJPIcj7p4kvM0lI/HwKj6Nxwv+DOpiWRd3ifiqXfIeni74/nLbWORpcdnmMbrRWe/hUMEfmeBdHBF9O5sc53wv4iW8UlJ9oOBdHBf/uKXRe1rERdvBa6JvaHfJZb2fxQXrFaWxYAsqNd4SywbuAW9IqbBp82LgtnJl03dHxcCSOzG/KmK7JfFxQZvJqXBMDP3tVlf7yRONL7smfTCGlUb9QIz8aYeumca2FTD7v/kZ+QF9G3zmZv3mqBstim9bVat0cbDM4or41dbxGHwpYl/Bm949XNw+4FMRF2xtrtwlBgYOuApc692CPoWeMyKeHxf7dbEsfveFUxbLC7KvFKXnvLfH/VzhZZl8I/GXvcWfpnNm27mz01E/+sNvvvOiTa1noNJpT2GnLEyZ01O1/ozXO/AvRdDmEUu5veMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTYtMTEtMjJUMTI6Mjc6MzYtMDU6MDCiqtyGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTExLTIyVDEyOjI3OjM2LTA1OjAw0/dkOgAAAABJRU5ErkJggg=="
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,400italic,600,200,600italic,700,900"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Helmet>
        <div className="pace pace-inactive">
          <div
            className="pace-progress"
            data-progress-text="100%"
            data-progress="99"
            style={{ transform: "translate3d(100%, 0px, 0px)" }}
          >
            <div className="pace-progress-inner" />
          </div>
          <div className="pace-activity" />
        </div>
        <Nav hasScrolled={this.state.hasScrolled}>
          <NavLogoLink href="/">
            <NavLogoImage src="/icon-reunify.svg" alt="icon reunify logo" />
            <NavLogoBrand>reunify</NavLogoBrand>
          </NavLogoLink>
          <NavItems
            items={["features", "about", "examples"]}
            currentClassName="isActive"
          >
            <NavItem>
              <NavLink href={"/#features"}>Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"/#about"}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"/#examples"}>Examples</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={
                  "https://github.com/codecommission/reunify/tree/master/docs"
                }
              >
                <i className="fa fa-github" aria-hidden="true" />&nbsp;Docs
              </NavLink>
            </NavItem>
          </NavItems>
        </Nav>
        <Content>{this.props.children}</Content>
        <Footer>
          <ScrollToTop href="#">
            <i className="fa fa-angle-up" />
          </ScrollToTop>
          <NavItems>
            <NavItem>
              <NavLink
                href="https://codecommission.com"
                target="_blank"
                rel="noopener"
              >
                ©2017 reunify.run · CodeCommission ·
              </NavLink>
              <br />
              <span>{process.env.APP_NAME}</span>
              <span>{process.env.APP_VERSION}</span>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://www.codecommission.com/legal.html"
                target="_blank"
                rel="noopener"
              >
                Imprint
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://www.codecommission.com/legal.html"
                target="_blank"
                rel="noopener"
              >
                Legal
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"https://github.com/codecommission/reunify"}>
                <i className="fa fa-github" aria-hidden="true" />&nbsp;GitHub
              </NavLink>
            </NavItem>
          </NavItems>
        </Footer>
      </LayoutContainer>
    );
  }
}
