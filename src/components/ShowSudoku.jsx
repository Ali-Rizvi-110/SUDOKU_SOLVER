import React from 'react';

export default function ShowSudoku({arr}){

    const styles = {
        table: {
            border: "15px solid #000",
            borderCollapse: "collapse",
            margin: "2rem auto"
          },
          td: {
            width: "34px",
            border: "15px solid #000"
          },
          tr: {
            lineHeight: "2px",
            border: "1px solid"
          }
    }

    return (
        <div style = {styles}>
            <table>
            {/* <tbody>
                <tr>
                    <td>1</td>
                </tr>
            </tbody> */}
            <tbody>
                <tr>
                    <td>{arr[0][0]}</td>
                    <td>{arr[0][1]}</td>
                    <td>{arr[0][2]}</td>
                    <td>{arr[0][3]}</td>
                    <td>{arr[0][4]}</td>
                    <td>{arr[0][5]}</td>
                    <td>{arr[0][6]}</td>
                    <td>{arr[0][7]}</td>
                    <td>{arr[0][8]}</td>
                </tr>
                <tr>
                    <td>{arr[1][0]}</td>
                    <td>{arr[1][1]}</td>
                    <td>{arr[1][2]}</td>
                    <td>{arr[1][3]}</td>
                    <td>{arr[1][4]}</td>
                    <td>{arr[1][5]}</td>
                    <td>{arr[1][6]}</td>
                    <td>{arr[1][7]}</td>
                    <td>{arr[1][8]}</td>
                </tr>
                <tr>
                    <td>{arr[2][0]}</td>
                    <td>{arr[2][1]}</td>
                    <td>{arr[2][2]}</td>
                    <td>{arr[2][3]}</td>
                    <td>{arr[2][4]}</td>
                    <td>{arr[2][5]}</td>
                    <td>{arr[2][6]}</td>
                    <td>{arr[2][7]}</td>
                    <td>{arr[2][8]}</td>
                </tr>
                <tr>
                    <td>{arr[3][0]}</td>
                    <td>{arr[3][1]}</td>
                    <td>{arr[3][2]}</td>
                    <td>{arr[3][3]}</td>
                    <td>{arr[3][4]}</td>
                    <td>{arr[3][5]}</td>
                    <td>{arr[3][6]}</td>
                    <td>{arr[3][7]}</td>
                    <td>{arr[3][8]}</td>
                </tr>
                <tr>
                    <td>{arr[4][0]}</td>
                    <td>{arr[4][1]}</td>
                    <td>{arr[4][2]}</td>
                    <td>{arr[4][3]}</td>
                    <td>{arr[4][4]}</td>
                    <td>{arr[4][5]}</td>
                    <td>{arr[4][6]}</td>
                    <td>{arr[4][7]}</td>
                    <td>{arr[4][8]}</td>
                </tr>
                <tr>
                    <td>{arr[5][0]}</td>
                    <td>{arr[5][1]}</td>
                    <td>{arr[5][2]}</td>
                    <td>{arr[5][3]}</td>
                    <td>{arr[5][4]}</td>
                    <td>{arr[5][5]}</td>
                    <td>{arr[5][6]}</td>
                    <td>{arr[5][7]}</td>
                    <td>{arr[5][8]}</td>
                </tr>
                <tr>
                    <td>{arr[6][0]}</td>
                    <td>{arr[6][1]}</td>
                    <td>{arr[6][2]}</td>
                    <td>{arr[6][3]}</td>
                    <td>{arr[6][4]}</td>
                    <td>{arr[6][5]}</td>
                    <td>{arr[6][6]}</td>
                    <td>{arr[6][7]}</td>
                    <td>{arr[6][8]}</td>
                </tr>
                <tr>
                    <td>{arr[7][0]}</td>
                    <td>{arr[7][1]}</td>
                    <td>{arr[7][2]}</td>
                    <td>{arr[7][3]}</td>
                    <td>{arr[7][4]}</td>
                    <td>{arr[7][5]}</td>
                    <td>{arr[7][6]}</td>
                    <td>{arr[7][7]}</td>
                    <td>{arr[7][8]}</td>
                </tr>
                <tr>
                    <td>{arr[8][0]}</td>
                    <td>{arr[8][1]}</td>
                    <td>{arr[8][2]}</td>
                    <td>{arr[8][3]}</td>
                    <td>{arr[8][4]}</td>
                    <td>{arr[8][5]}</td>
                    <td>{arr[8][6]}</td>
                    <td>{arr[8][7]}</td>
                    <td>{arr[8][8]}</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}