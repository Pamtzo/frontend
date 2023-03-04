//Create a react component that return a antd collapse
//The componenet receives as params an object called data
//Data will have a key "section" that will be the header of the colapse
//Datta will have a key "information" that will be a list of object with keys "title" and "description"
//Using the "information" key create child collapsibles  inside the one of "section" where "title" and "description" are header and body

import React from 'react';
import { nanoid } from 'nanoid';
import { Card, Collapse, Col, Progress } from 'antd';

const contentTypes = {
  Text: item => (
    <Card key={nanoid()} title={item.body && item.header} size="small">
      <span>{item.body || item.header}</span>
    </Card>
  ),
  Percentage: item => (
    <Card key={nanoid()} title={item.header} size="small">
      <Progress percent={item.body} />
    </Card>
  ),
  Url: item => (
    <Card key={nanoid()} size="small">
      <a href={item.body} target="_blank">
        {item.header}
      </a>
    </Card>
  ),
};

function Section({ title, content, priority }) {
  const priorityAssigned = priority || 2;

  console.log(content);

  return (
    <Col xs={24} sm={24} md={24 / priorityAssigned} lg={24 / priorityAssigned}>
      <Collapse accordion>
        <Collapse.Panel header={title}>
          {content.map(item => contentTypes[item.type](item))}
        </Collapse.Panel>
      </Collapse>
    </Col>
  );
}

export default Section;
