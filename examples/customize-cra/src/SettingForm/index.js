import React, { useState } from "react";
import { Switch, Form, Row, Col, Input } from "antd";
import darkVars from "../dark.json";
import lightVars from "../light.json";

const SettingForm = () => {
  const [modifyVars, setModifyVars] = useState(lightVars);
  const onThemeChange = (value) => {
    const modifyVars = value ? darkVars : lightVars;
    window.less.modifyVars(modifyVars);
    setModifyVars(modifyVars);
  };
  return (
    <>
      <Form layout="vertical">
        <Row>
          <Col>
            <Form.Item label="Theme" name="Theme" valuePropName="checked">
              <Switch
                checkedChildren="Dark"
                unCheckedChildren="Light"
                onChange={onThemeChange}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* <Row gutter={8}>
          {Object.keys(modifyVars).map((key) => {
            return (
              <Col span={12} key={key}>
                <Form.Item label={key} name={key} initialValue={modifyVars[key]}>
                  <Input />
                </Form.Item>
              </Col>
            );
          })}
        </Row> */}
      </Form>
    </>
  );
};

export default SettingForm;
