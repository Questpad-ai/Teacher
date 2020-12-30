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
import { Grid, Row, Col,Table,ListGroupItem, Button} from "react-bootstrap";
import ListGroup from "react-bootstrap/lib/ListGroup"
import Badge from "react-bootstrap/lib/Badge"
import {render} from "react-dom"


import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {Checkbox_cascade} from "components/Tasks/Checkbox_cascade.jsx";
//import {Tasks} from "components/Tasks/Tasks.jsx"
import ToDo from "components/ToDo/ToDo.jsx"
import Popup from "components/Popup/Popup.jsx";
import Report from "components/Popup/Report.jsx";

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



class Subject1 extends Component {
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
          <Col md={6}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Potions"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    
                    <ChartistGraph
                      data={
                        {series:[{
                          value:50,
                          name:"Complete"},
                          {
                          value:50,
                          name:"Incomplete"}
                        ]
                      }
                      }
                        
                      type="Pie"
                      options={
                        {donut:true,
                          
                          donutWidth:60,
                        }
                      }
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
 
          <Col md={6}>
              <Card
                title="Math"
                category="Code:Math101"
                
                content={
                  <div >
                    <table className="table">
                      <Checkbox_cascade />
                    </table>
                  <Button className="btn-primary" onClick={()=>render(<Popup show={true} text={"Send assessment?"}/>,document.getElementById("notify"))}>Send assessment</Button>
                  </div>
                  
                  
                }
              />
            </Col>
           
            </Row>
            
            <Row>
            <Col md={6}>
              <Card
                title="Top performers"
                category="Click to view more details"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key} onClick={()=>render(<Report show={true} text={prop} />,document.getElementById("notify"))}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Low performers"
                category="Click to view more details"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover >
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
            </Row>
            
            <Row>


          </Row>

          <Row>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Homework completion"
                category="Students who have the required number of points vs students who are lagging"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph  
                    data={
                        {series:[{
                          value:90,
                          name:"Upto-date"},
                          {
                          value:10,
                          name:"Lagging"}
                        ]
                      }}

                       type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend({names:["Upto-date","Lagging"], types: ["info", "danger"]})}</div>
                }
                />
            </Col>
          </Row>


          
        </Grid>
      </div>
    );
  }
}

export default Subject1;
