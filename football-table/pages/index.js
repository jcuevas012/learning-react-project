import React, {Component} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

export default class extends Component {

    static async getInitialProps() {
        if (!process.browser) {
            const res = await axios.get('http://api.football-data.org/v1/competitions/426/leagueTable')
            return {data: res.data}
        } else {
            return {
                data: JSON.parse(sessionStorage.getItem('bpl'))
            }
        }
    }

    componentDidMount() {
        if (!sessionStorage.getItem('bpl')) {
            sessionStorage.setItem('bpl', JSON.stringify(this.props.data))
        }
    }
    render() {
        return (
            <div>
                <Head>
                    <title>Leagua Table
                    </title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/purecss@0.6.1/build/pure-min.css"/>
                </Head>
                <div className="pure-g">
                    <div className="pure-u-1-3"></div>
                    <div className="pure-u-1-3">
                        <h1>Leagua Table</h1>
                        <table className="pure-table">
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Team</th>
                                    <th>P</th>
                                    <th>GL</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>Ver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this
                                    .props
                                    .data
                                    .standing
                                    .map((standing, i) => {
                                        const oddOrNot = i % 2 == 1
                                            ? "pure-table-odd"
                                            : "";
                                        return (
                                            <tr key={i} className={oddOrNot}>
                                                <td>{standing.position}</td>
                                                <td><img className="pure-img logo" src={standing.crestURI}/></td>
                                                <td>{standing.points}</td>
                                                <td>{standing.goals}</td>
                                                <td>{standing.wins}</td>
                                                <td>{standing.draws}</td>
                                                <td>{standing.losses}</td>
                                                <td> <Link href={`/details?id=${standing.position}`} > More... </Link></td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pure-u-1-3"></div>
            </div>
        )
    }
}
