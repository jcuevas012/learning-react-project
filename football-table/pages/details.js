import React, {Component} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'

export default class extends Component {

    static async getInitialProps({query}) {
        const id = query.id;
        if(!process.browser) {
            const res = await axios.get('http://api.football-data.org/v1/competitions/426/leagueTable')
            return {
                data: res.data,
                standing: res.data.standing.filter(s => s.position == id)
            }
        } else {
            const bplData = JSON.parse(sessionStorage.getItem('bpl'));
            return {standing: bplData.standing.filter(s => s.position == id)}
        }
    }

    componentDidMount () {
        if(!sessionStorage.getItem('bpl')) {
            sessionStorage.setItem('bpl', JSON.stringify(this.props.data))
        }
    }
    render() {

        const detailStyle = {
            ul: {
                marginTop: '100px'
            }
        }

        return  (
             <div>
                <Head>
                    <title>League Table</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
                </Head>

                <div className="pure-g">
                    <div className="pure-u-8-24"></div>
                    <div className="pure-u-4-24">
                        <h2>{this.props.standing[0].teamName}</h2>
                        <img src={this.props.standing[0].crestURI} className="pure-img"/>
                        <h3>Points: {this.props.standing[0].points}</h3>
                    </div>
                    <div className="pure-u-12-24">
                        <ul style={detailStyle.ul}>
                            <li><strong>Goals</strong>: {this.props.standing[0].goals}</li>
                            <li><strong>Wins</strong>: {this.props.standing[0].wins}</li>
                            <li><strong>Losses</strong>: {this.props.standing[0].losses}</li>
                            <li><strong>Draws</strong>: {this.props.standing[0].draws}</li>
                            <li><strong>Goals Against</strong>: {this.props.standing[0].goalsAgainst}</li>
                            <li><strong>Goal Difference</strong>: {this.props.standing[0].goalDifference}</li>
                            <li><strong>Played</strong>: {this.props.standing[0].playedGames}</li>
                        </ul>
                        <Link href="/">Home</Link>
                    </div>
                </div>
             </div>
            )
    }

}