import React from "react";

import Modal from "react-bootstrap/lib/Modal"
import Button from "react-bootstrap/lib/Button"
import { render } from "react-dom";

import ChartistGraph from "react-chartist";



export default function Report(props)
{
  //show is true or false and can be toggled with popup

const handleClose = () =>{render(<Report show={false} />,document.getElementById("notify"))};


    return(<>

      <Modal
        size="xl"
        show={props.show} 
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.text}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Points: 100/100 </p>

                  <div className="ct-chart">
                    <ChartistGraph
                      data={{
                         labels:[props.text,"Average"],
                         series:[[110],[90]]
                    }}
                      type="Bar"


                    />
                  </div>

            <p>Average time: 5 min </p>

            <div className="ct-chart">
                    <ChartistGraph
                      data={{
                         labels:[props.text,"Average"],
                         series:[[5],[10]]
                    }}
                      type="Bar"


                    />
                  </div>

            <p>Accuracy: 90% </p>

            <div className="ct-chart">
                    <ChartistGraph
                      data={{
                         labels:[props.text,"Average"],
                         series:[[90],[80]]
                    }}
                      type="Bar"


                    />
                  </div>


        </Modal.Body>

        </Modal>
    </>
    )
}