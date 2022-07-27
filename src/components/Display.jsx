import React, { Component } from 'react'

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [...this.props.trips],
            type: "All"
        }
    }
    render() {
        return (
            <>
                <p className="headD">{this.state.type} Trips</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Place</th>
                            <th>Type</th>
                        </tr>
                        {
                            this.state.trips.map((trip) => {
                                return <tr>
                                    <td>{trip.date}</td>
                                    <td>{trip.place}</td>
                                    <td>{trip.type}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}