import React from "react";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import sunburst from "highcharts/modules/sunburst.js";
//import HighchartsReact from "./HighchartsReact.js";
import HighchartsReact from "highcharts-react-official";
import data from './data';

sunburst(Highcharts);

Highcharts.seriesTypes.sunburst.prototype.onClickDrillToNode = function(event) {
  var series = this,
    point = event.point,
    drillId = point && point.drillId;
  // If a drill id is returned and noDrill is not set to true, add click event and cursor.
  if (Highcharts.isString(drillId) && !point.noDrill) {
    point.setState(""); // Remove hover
    series.drillToNode(drillId);
  }
};

Highcharts.getOptions().colors.splice(0, 0, "transparent");

const options = {
  chart: {
    Height: "100%"
  },

  
  subtitle: {
    text:
      'Source <href="https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)">Wikipedia</a>'
  },
  series: [
    {
      type: "sunburst",
      data: data,
      allowDrillToNode: true,
      cursor: "pointer",
      dataLabels: {
        format: "{point.name}",
        filter: {
          property: "innerArcLength",
          operator: ">",
          value: 16
        }
      },
      levels: [
        {
          level: 1,
          levelIsConstant: false,
          dataLabels: {
            filter: {
              property: "outerArcLength",
              operator: ">",
              value: 64
            }
          }
        },
        {
          level: 2,
          colorByPoint: true
        },
        {
          level: 3,
          colorVariation: {
            key: "brightness",
            to: -0.5
          }
        },
        {
          level: 4,
          colorVariation: {
            key: "brightness",
            to: 0.5
          }
        }
      ]
    }
  ],
  tooltip: {
    headerFormat: "",
    pointFormat: "The population of <b>{point.name}</b> is <b>{point.value}</b>"
  }
};

class Chart extends React.Component {
  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
export default Chart;