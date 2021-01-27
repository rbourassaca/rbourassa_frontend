import React from "react"
import { Table } from "react-bootstrap"
import "./info.scss"

const Info = ({info}) => {
    return(
        <Table responsive className="info">
            <tbody>
                {Object.keys(info).map((key, index) => ( info[key] &&
                    <tr key={index}>
                        <td>{key}:</td>
                        <td>
                            {typeof(info[key]) === "object" 
                                ? 
                                <div dangerouslySetInnerHTML={{__html: info[key].join("<br>")}}/>
                                : 
                                <div dangerouslySetInnerHTML={{__html: info[key]}}/>
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Info