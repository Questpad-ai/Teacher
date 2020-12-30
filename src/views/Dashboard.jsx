/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, ListGroupItem} from "react-bootstrap";
import ListGroup from "react-bootstrap/lib/ListGroup"
import Badge from "react-bootstrap/lib/Badge"

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {Checkbox_cascade} from "components/Tasks/Checkbox_cascade.jsx";
//import {Tasks} from "components/Tasks/Tasks.jsx"
import ToDo from "components/ToDo/ToDo.jsx"


import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";


class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    var d=new Date()
    var dd=String(d.getDate())
    var mm=String(d.getMonth())
    var yy=String(d.getFullYear())

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-date text-warning" />}
                statsText="Date"
                statsValue={dd+'/'+mm}
  
                statsIconText={yy}
              />
            </Col>
            <Col lg={4} sm={4}>
              <Card id="upcoming"
              title="Upcoming"
              content={
                <div className="bullet">
                  <ListGroup>
                  
                  <ListGroupItem>
                    Internal Assesment-1
                    <Badge variant="primary">Primary</Badge>
                  </ListGroupItem>
                    
                  <ListGroupItem>
                    Internal Assesment-2
                    <Badge variant="primary">{dd+'/'+String(parseInt(mm)+1)}</Badge>
                  </ListGroupItem>
                  
                  <ListGroupItem>
                    Final Assesment-1
                    <Badge variant="primary">{dd+'/'+String(parseInt(mm)+3)}</Badge>
                  </ListGroupItem>                  
                  
                  </ListGroup>
                  
                </div>
              }
              
              />

          
            </Col>
            
            <Col md={5}>
            <Card id="ToDo"
              title="Assess"
              content={
                <div className="tasks">
                  <ToDo>

                  </ToDo>
                </div>
              }
              >
          
              </Card>

            </Col>

          </Row>

          <Row>
            <Col md={9}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Portions"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Bar"
                      
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
          </Row>


        </Grid>
      </div>
    );
  }
}

export default Dashboard;
