import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
let styleArr=[{
  color:'red'
},
{
  color:'green'
}
,{
  color:'yellow'
}]
export const TimelineComponent=({data,index})=>(
  <>
<Timeline lineColor={'#ddd'}>
  <TimelineItem
    key={data.key}
    dateText={data.date}
    style={styleArr[index]}
    dateInnerStyle={styleArr[index]}
  >
  
    <Card>
        <CardImg top width="100%" src={data.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{data.title}</CardTitle>
          <CardSubtitle>{data.subTitle}</CardSubtitle>
          <CardText>{data.content}</CardText>
        </CardBody>
      </Card>
   
   
  </TimelineItem>
  </Timeline>
</>
);