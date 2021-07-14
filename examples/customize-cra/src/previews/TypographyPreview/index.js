import React from "react";
import { Typography } from "antd";
import PreviewWrapper from "../PreviewWrapper";
import "./style.less";

const { Title, Paragraph } = Typography;

const TypographyPreview = () => (
  <PreviewWrapper id="Typography" title="Typography">
    <div className="components typography">
      <div className="component-row">
        <Title>h1. Title</Title>
      </div>
      <div className="component-row">
        <Title level={2}>h2. Title</Title>
      </div>
      <div className="component-row">
        <Title level={3}>h3. Title</Title>
      </div>
      <div className="component-row">
        <Title level={4}>h4. Title</Title>
      </div>
      <div className="component-row">
        <Paragraph ellipsis={{ rows: 3, expandable: true }}>
          Design, a design language for background applications, is refined by
          UED Team. Design, a design language for background applications, is
          refined by UED Team. Design, a design language for background
          applications, is refined by UED Team. Design, a design language for
          background applications, is refined by UED Team. Design, a design
          language for background applications, is refined by UED Team. Design,
          a design language for background applications, is refined by UED Team.
        </Paragraph>
      </div>
      <div className="component-row">
        <p className="text-secondary">
          Design, a design language for background applications, is refined by
          UED Team. Design, a design language for background applications, is
          refined by UED Team. Design, a design language for background
          applications, is refined by UED Team. Design, a design language for
          background applications, is refined by UED Team. Design, a design
          language for background applications, is refined by UED Team. Design,
          a design language for background applications, is refined by UED Team.
        </p>
      </div>
      <div className="component-row">
        <code>function hello () {}</code>
      </div>
    </div>
  </PreviewWrapper>
);

export default TypographyPreview;
