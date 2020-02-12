import React from 'react'
import Plot from "react-plotly.js";


class RatingPlot extends React.Component {

  render() {
    let likeabilityArr = []
    let integrityArr = []

    if (this.props.ratings) {
      console.log("inside IF")
      likeabilityArr = this.props.ratings.map(rating => rating.likeability);
      integrityArr = this.props.ratings.map(rating => rating.integrity)
    }

    console.log("likeabilityArr", likeabilityArr);

    return (
      <div>
        {/* Renders graph from Plotly module */}
        <Plot
          data={[
            {
              x: likeabilityArr,
              y: integrityArr,
              type: "scatter",
              mode: "markers",
              marker: { color: "white" }
            }
          ]}
          layout={{
            width: 300,
            height: 220,
            xaxis: {
              title: "Likeability",
              range: [-5, 5],
              color: "grey"
            },
            yaxis: {
              title: "Integrity",
              range: [-5, 5],
              color: "grey"
            },
            plot_bgcolor: "#00b5ad",
            paper_bgcolor: "#00b5ad",
            margin: {
              l: 50,
              t: 10,
              b: 50,
              r: 50
            }
          }}
          config={{
            displayModeBar: false,
            responsive: true
          }}
        />
      </div>
    );
  }
}

export default RatingPlot