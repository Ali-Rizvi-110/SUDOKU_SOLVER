import React, { useState } from 'react';
import './CSS/sudoku.css'
import ShowSudoku from './ShowSudoku.jsx'

export default function Sudoku() {

    var arr = [["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""]]
    const [table, nextTable] = React.useState(arr)
    const [show, nextShow] = React.useState(false)
    const [userBlock, setUserBlock] = useState([])
    function fillCell(event) {
        const value = event.target.value
        arr = table
        const id = event.target.id.split("-")[1]
        const row = Math.floor(parseInt(id) / 9)
        const col = parseInt(id) % 9
        if (event.target.value) {
            setUserBlock((prev) => ([...prev, `${row}${col}`]))
        } else {
            const index = userBlock.findIndex((val)=>val==`${row}${col}`)
            if(index!==-1){
              setUserBlock((prev) => ([...prev.slice(0, index), ...prev.slice(index + 1)]))
            }
        }
        let nextEleId = (Number(id) + 1).toFixed()
        if (nextEleId.length == 1) {
            nextEleId = `0${nextEleId}`
        }
        if (nextEleId.includes("9")) {
            nextEleId = `${Number(nextEleId.charAt(0)) + 1}0`
        }
        const ele = document.getElementById(`input-${nextEleId}`)
        ele.focus()
        arr[row][col] = value
        nextTable({
            ...arr
        })

        // console.log(arr)
    }
    function check(arr) {
        for (let i = 0; i < 9; ++i) {
            for (let j = 0; j < 9; ++j) {
                if (arr[i][j] !== "") {
                    const val = parseInt(arr[i][j])
                    if (val >= 1 && val <= 9) {
                        for (let r = 0; r < 9; ++r) {
                            if (r === i) continue;
                            if (arr[r][j] === arr[i][j]) return false;
                        } for (let c = 0; c < 9; ++c) {
                            if (c === j) continue;
                            if (arr[i][c] === arr[i][j]) return false;
                        }
                    }
                    else return false;
                }
            }
        }
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                const sr = i * 3, sc = 3 * j;
                const vis = new Array(10).fill(false);
                for (let k = sr; k < sr + 3; ++k) {
                    for (let l = sc; l < sc + 3; ++l) {
                        if (arr[k][l] !== "") {
                            const val = parseInt(arr[k][l])
                            if (vis[val] === true) return false;
                            vis[val] = true;
                        }
                    }
                }
            }
        }
        return true;
    }
    function solve(arr, row, col) {
        if (row === 9) return true;
        else if (col === 9)
            return solve(arr, row + 1, 0);
        else if (arr[row][col] !== "")
            return solve(arr, row, col + 1);
        else {
            for (let val = 1; val <= 9; ++val) {
                arr[row][col] = val.toString()
                if (check(arr) === false) {
                    arr[row][col] = "";
                } else {
                    if (solve(arr, row, col + 1)) {
                        return true;
                    } else arr[row][col] = "";
                }
            } return false;
        }
    }
    function clear_reload() {
        window.location.reload(true);
    }

    function solve_sudoku() {
        arr = table
        if (check(arr) === false) {
            clear_reload();
            alert("INVALID ARRANGEMENT!!")
        } else {
            solve(arr, 0, 0)
            nextShow(true)
            nextTable({ ...arr })
        }
    }
    return (
        <div>
            <h1>Sudoku Solver</h1>
            {/* {table[0][0]} */}
            <table>
                <tbody className="table">
                    {[...Array(9)].map((_, row) => (
                        <tr key={row}>
                            {[...Array(9)].map((_, col) => (
                                <td key={col}><input onChange={fillCell} id={`input-${row}${col}`} type="text" maxLength="1" size="1" /></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="note">
                <p>(note: press clear button before filling the table again)</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "30px" }} className="submitButton">
                <button onClick={solve_sudoku} className="vertical--center">Solve Sudoku</button>
                <button onClick={clear_reload} className="vertical--center">Clear</button>
            </div>
            {show && <ShowSudoku arr={table} userBlock={userBlock} />}
        </div>
    )
}