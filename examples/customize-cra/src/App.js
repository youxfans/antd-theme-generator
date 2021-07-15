import React, { Component } from "react";
import { Row, Col, Layout, message } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ComponentPage from "./page/component";
import DesignPage from "./page/design";
import Navbar from "./Navbar";
import ColorPicker from "./ColorPicker";
import lightVars from "./light.json";
import "./styles/main.less";

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // let initialValue = lightVars;
    // let vars = {};
    // let themeName =  localStorage.getItem("theme-name") || 'light';

    // try {
    //   vars = localStorage.getItem("app-theme");
    //   if (!vars) {
    //     vars = initialValue;
    //   } else {
    //     vars = Object.assign(
    //       {},
    //       JSON.parse(vars)
    //     );
    //   }

    // } catch (e) {
    //   vars = initialValue;
    // } finally {
    //   this.state = {
    //     vars, initialValue, size: 'default',
    //     disabled: false,
    //     themeName,
    //     themeApplied: false,
    //   };
    //   window.less
    //     .modifyVars(vars)
    //     .then(() => {
    //       this.setState({ themeApplied: true });
    //     })
    //     .catch(error => {
    //       message.error(`Failed to update theme`);
    //     });
    // }
  }
  componentDidMount() {
    window.less.modifyVars(lightVars);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  onChangeComplete = (varName, color) => {
    const { vars } = this.state;
    vars[varName] = color;
    this.setState({ vars: { ...vars } });
  };
  handleColorChange = (varname, color) => {
    const vars = { ...this.state.vars };
    if (varname) vars[varname] = color;
    console.log(vars);
    window.less
      .modifyVars(vars)
      .then(() => {
        // message.success(`Theme updated successfully`);
        this.setState({ vars });
        localStorage.setItem("app-theme", JSON.stringify(vars));
      })
      .catch((error) => {
        message.error(`Failed to update theme`);
      });
  };

  getColorPicker = (varName, position) => (
    <Row className="color-row" key={`${varName}-${this.state.vars[varName]}`}>
      <Col xs={4} className="color-palette">
        <ColorPicker
          type="sketch"
          small
          color={this.state.vars[varName]}
          position={position || "right"}
          presetColors={[
            "#F5222D",
            "#FA541C",
            "#FA8C16",
            "#FAAD14",
            "#FADB14",
            "#A0D911",
            "#52C41A",
            "#13C2C2",
            "#1890FF",
            "#2F54EB",
            "#722ED1",
            "#EB2F96",
          ]}
          onChangeComplete={(color) => this.handleColorChange(varName, color)}
        />
      </Col>
      <Col className="color-name" xs={20}>
        {varName}
      </Col>
    </Row>
  );
  resetTheme = () => {
    localStorage.setItem("app-theme", "{}");
    localStorage.setItem("theme-name", "light");
    this.setState({ themeName: "light" });
    this.setState({ vars: this.state.initialValue });
    window.less.modifyVars(this.state.initialValue).catch((error) => {
      message.error(`Failed to reset theme`);
    });
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
    console.log("onCollapse", collapsed);
  };

  render() {
    // const { collapsed, size, disabled, themeApplied } = this.state;
    // const colorPickerOptions = [
    //   "@primary-color",
    //   "@secondary-color",
    //   "@text-color",
    //   "@text-color-secondary",
    //   "@heading-color",
    //   "@layout-header-background",
    //   "@btn-primary-bg",
    // ];
    // const colorPickers = Object.keys(this.state.vars).filter(name => colorPickerOptions.indexOf(name) > -1).map((varName, index) =>
    // const colorPickers = colorPickerOptions.map((varName, index) =>
    //   this.getColorPicker(varName, index > 3 ? "top" : "right")
    // );

    // const themeLayout = {
    //   labelCol: { span: 24 },
    //   wrapperCol: { span: 24 },
    // };
    const disabled = false;
    const size = "default";
    return (
      <Router>
        <Layout className="app">
          <Navbar />
          <Content className="content">
            <Switch>
              <Route exact path="/">
                <Redirect to="/component" />
              </Route>
              <Route path="/component">
                <ComponentPage disabled={disabled} size={size} />
              </Route>
              <Route path="/design">
                <DesignPage />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
