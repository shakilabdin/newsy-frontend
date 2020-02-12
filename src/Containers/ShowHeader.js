import React from "react";
import { Grid, Image } from "semantic-ui-react";
import AuthorEditForm from "../Components/AuthorEditForm";
import Plot from "react-plotly.js";

class ShowHeader extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row color="teal">
                    <Grid.Column width={3}>
                        <Image src={this.props.image} circular bordered />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <h1>{this.props.name}</h1>
                        <p style={{ margin: "0px" }}>
                            {this.props.article_count} Article
                            {this.props.article_count !== 1 && "s"} Written
                        </p>
                        <p style={{ margin: "0px" }}>
                            {this.props.total_ratings} Rating
                            {this.props.total_ratings !== 1 && "s"}
                        </p>
                        <a href={`https://twitter.com/${this.props.twitter}`}>
                            <i className="twitter icon"></i>
                            <span>@{this.props.twitter}</span>
                        </a>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        {/* Renders graph from Plotly module */}
                        <Plot
                            data={[
                                {
                                    x: [1, 2, -3],
                                    y: [2, -3, 3],
                                    type: "scatter",
                                    mode: "markers",
                                    marker: { color: "white" },
                                },
                            ]}

                            layout={{
                                width: 300,
                                height: 220,
                                xaxis: {
                                    title: "Likeability",
                                    range: [-5,5],
                                    color: "grey"
                                 },
                                yaxis: {
                                    title: "Integrity",
                                    range: [-5,5],
                                    color: "grey",
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
                        <AuthorEditForm {...this.props} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ShowHeader;
