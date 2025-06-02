import React from 'react';

export default function ShowSudoku({arr, userBlock}){

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
                {[...Array(9)].map((_, row) => (
                <tr key={row}>
                    {[...Array(9)].map((_, col) => (
                    <td key={col} style={{backgroundColor:userBlock.includes(`${row}${col}`)? "rgba(0,255,0,0.5)": ""}}>{arr[row][col]}</td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}