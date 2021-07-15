import React from "react";
import { Layout } from "antd";
import {
  TypographyPreview,
  ButtonPreview,
  RadioPreview,
  CheckboxPreview,
  InputPreview,
  SwitchPreview,
  SliderPreview,
  DatePickerPreview,
  RatePreview,
  TransferPreview,
  TablePreview,
  TagPreview,
  ProgressPreview,
  TreePreview,
  PaginationPreview,
  BadgePreview,
  AlertPreview,
  SpinPreview,
  MessagePreview,
  NotificationPreview,
  TabsPreview,
  MenuPreview,
  TooltipPreview,
  PopoverPreview,
  CardPreview,
  CarouselPreview,
  CollapsePreview,
  AvatarPreview,
  DropdownPreview,
  StepPreview,
  CascaderPreview,
  SelectPreview,
  TreeSelectPreview,
  TimePickerPreview,
  CalendarPreview,
  ListPreview,
  TimelinePreview,
  PopconfirmPreview,
  ModalPreview,
  FormPreview,
} from "../../previews";
const { Content } = Layout;

const ComponentPage = ({ disabled, size }) => {
  return (
    <Layout>
      {/* <Sider
        breakpoint="lg"
        collapsedWidth={40}
        collapsed={collapsed}
        width={300}
        onBreakpoint={broken => {
          console.log(broken);
          this.onCollapse(broken);
        }}
        onCollapse={this.onCollapse}
      >
        <Row className="theme-heading">
          {collapsed ? <MenuUnfoldOutlined onClick={() => this.onCollapse(!collapsed)} /> : <MenuFoldOutlined onClick={() => this.onCollapse(!collapsed)} />}
        </Row>
        <Row className="theme-selector-dropdown">
          {!collapsed && (
            <Col span={22} offset={1}><FormItem
              {...themeLayout}
              label="Choose Theme"
              className="ant-col ant-col-xs-22 ant-col-offset-1 choose-theme"
            >

              <Select
                placeholder="Please select theme"
                value={this.state.themeName}
                onSelect={value => {
                  let vars = value === 'light' ? lightVars : darkVars;
                  vars = { ...vars, '@white': '#fff', '@black': '#000' };
                  this.setState({ vars, themeName: value });
                  this.setState({ vars });
                  localStorage.setItem("app-theme", JSON.stringify(vars));
                  localStorage.setItem("theme-name", value);
                  window.less.modifyVars(vars).catch(error => {
                    
                  });
                }}
              >
                <Option value="light">Light</Option>
                <Option value="dark">Dark</Option>
              </Select>
            </FormItem>
            </Col>
          )}
        </Row>

        {colorPickers}
        <Row type="flex" justify="center">
          <Button type="primary" onClick={this.resetTheme} title="Reset Theme">
            {!collapsed ? "Reset Theme" : <CloseOutlined />}
          </Button>
        </Row>
      </Sider> */}
      <Content id="preview-content">
        <div className="preview">
          {/* <ColorPreview /> */}
          <TypographyPreview />
          <ButtonPreview disabled={disabled} size={size} />
          <RadioPreview disabled={disabled} size={size} />
          <CheckboxPreview disabled={disabled} size={size} />
          <InputPreview disabled={disabled} size={size} />
          <SelectPreview disabled={disabled} size={size} />
          <TreeSelectPreview disabled={disabled} size={size} />
          <SwitchPreview disabled={disabled} size={size} />
          <SliderPreview disabled={disabled} size={size} />
          <DatePickerPreview disabled={disabled} size={size} />
          <TimePickerPreview disabled={disabled} size={size} />
          <RatePreview disabled={disabled} size={size} />
          <StepPreview disabled={disabled} size={size} />
          <CascaderPreview disabled={disabled} size={size} />
          <DropdownPreview disabled={disabled} size={size} />
          <TransferPreview disabled={disabled} size={size} />
          <FormPreview disabled={disabled} size={size} />
          <TablePreview disabled={disabled} size={size} />
          <PaginationPreview disabled={disabled} size={size} />
          <ProgressPreview disabled={disabled} size={size} />
          <TreePreview disabled={disabled} size={size} />
          <SpinPreview disabled={disabled} size={size} />
          <TabsPreview disabled={disabled} size={size} />
          <MenuPreview disabled={disabled} size={size} />
          <CardPreview disabled={disabled} size={size} />
          <CarouselPreview disabled={disabled} size={size} />
          <CollapsePreview disabled={disabled} size={size} />
          <AvatarPreview disabled={disabled} size={size} />
          <CalendarPreview disabled={disabled} size={size} />
          <ListPreview disabled={disabled} size={size} />
          <TimelinePreview disabled={disabled} size={size} />
          <TagPreview disabled={disabled} size={size} />
          <BadgePreview disabled={disabled} size={size} />
          <AlertPreview disabled={disabled} size={size} />
          <MessagePreview disabled={disabled} size={size} />
          <NotificationPreview disabled={disabled} size={size} />
          <TooltipPreview disabled={disabled} size={size} />
          <PopoverPreview disabled={disabled} size={size} />
          <PopconfirmPreview disabled={disabled} size={size} />
          <ModalPreview disabled={disabled} size={size} />
        </div>
      </Content>
    </Layout>
  );
};

export default ComponentPage;
