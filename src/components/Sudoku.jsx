import React, { useState } from 'react';
import './CSS/sudoku.css'
import ShowSudoku from './ShowSudoku.jsx'

export default function Sudoku(){

    var arr = [ ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""]  ]
    const [table, nextTable] = React.useState(arr)
    const [show, nextShow] = React.useState(false)
    const [userBlock, setUserBlock] = useState([])
    function fillCell(event){
        const value = event.target.value
       arr = table
        const row = Math.floor(parseInt(event.target.id)/9)
        const col = parseInt(event.target.id)%9 
        setUserBlock((prev)=>([...prev, `${row}${col}` ])) 
        arr[row][col] = value
        nextTable({
            ...arr
        })  
       
        // console.log(arr)
    }
    function check(arr){
        for(let i=0; i<9; ++i){
            for(let j=0; j<9; ++j){
                if(arr[i][j] !== ""){
                    const val = parseInt(arr[i][j])
                    if(val>=1 && val<=9){
                        for(let r=0; r<9; ++r){
                            if(r===i)continue;
                            if(arr[r][j]===arr[i][j])return false;
                        }for(let c=0; c<9; ++c){
                            if(c===j)continue;
                            if(arr[i][c]===arr[i][j])return false;
                        }
                    }
                    else return false;
                }
            }
        }
        for(let i=0; i<3; ++i){
            for(let j=0; j<3; ++j){
                const sr = i*3, sc = 3*j;
                const vis = new Array(10).fill(false);
                for(let k=sr; k<sr+3; ++k){
                    for(let l=sc; l<sc+3; ++l){
                        if(arr[k][l]!==""){
                            const val = parseInt(arr[k][l])
                            if(vis[val]===true)return false;
                            vis[val] = true;
                        }
                    }
                }
            }
        }
        return true;
    }
    function solve(arr, row, col){
        if(row===9)return true;
        else if(col===9)
            return solve(arr, row+1, 0);
        else if(arr[row][col] !== "")
            return solve(arr, row, col+1);
        else {
            for(let val = 1; val<=9; ++val){
                arr[row][col] = val.toString()
                if(check(arr)===false)
                {
                    arr[row][col] = "";
                }else
                {
                    if(solve(arr, row, col+1)){
                        return true;
                    }else arr[row][col] = "";
                }
            }return false;
        }
    }
    function clear_reload(){
        window.location.reload(true);
    }

    function solve_sudoku(){
        arr = table
        if(check(arr)===false){
            clear_reload();
            alert("INVALID ARRANGEMENT!!")
        }else{
            solve(arr, 0, 0)
            nextShow(true)
            nextTable({...arr})
        }
    }
    return (
        <div>
            <h1>Sudoku Solver</h1>
                {/* {table[0][0]} */}
            <table>
                <tbody className = "table">
                <tr>
                <td><input onChange = {fillCell} id = "0" type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "1"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "2"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "3"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "4"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "5"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "6"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "7"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "8"  type="text" maxLength="1" size="1"/></td>
                </tr>  
                <tr>  
                <td><input onChange = {fillCell} id = "9"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "10"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "11"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "12"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "13"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "14"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "15"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "16"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "17"  type="text" maxLength="1" size="1"/></td>
                </tr>  
                <tr style={{borderColor:"red"}}>  
                <td><input onChange = {fillCell} id = "18"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "19"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "20"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "21"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "22"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "23"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "24"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "25"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "26"  type="text" maxLength="1" size="1"/></td>
                </tr>  
                <tr>  
                <td><input onChange = {fillCell} id = "27"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "28"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "29"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "30"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "31"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "32"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "33"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "34"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "35"  type="text" maxLength="1" size="1"/></td>
                </tr>  
                <tr>  
                <td><input onChange = {fillCell} id = "36"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "37"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "38"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "39"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "40"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "41"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "42"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "43"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "44"  type="text" maxLength="1" size="1"/></td>
                </tr>  
                <tr>  
                <td><input onChange = {fillCell} id = "45"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "46"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "47"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "48"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "49"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "50"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "51"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "52"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "53"  type="text" maxLength="1" size="1"/></td>
                </tr>  
                <tr>  
                <td><input onChange = {fillCell} id = "54"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "55"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "56"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "57"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "58"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "59"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "60"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "61"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "62"  type="text" maxLength="1" size="1"/></td>
                </tr>  
                <tr>  
                <td><input onChange = {fillCell} id = "63"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "64"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "65"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "66"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "67"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "68"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "69"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "70"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "71"  type="text" maxLength="1" size="1"/></td>
                </tr>  
                <tr>  
                <td><input onChange = {fillCell} id = "72"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "73"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "74"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "75"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "76"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "77"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "78"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "79"  type="text" maxLength="1" size="1"/></td>
                <td><input onChange = {fillCell} id = "80"  type="text" maxLength="1" size="1"/></td>
                </tr>  
                </tbody>  
            </table>
            <div className="note">
            <p>(note: press clear button before filling the table again)</p>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"10px"}} className = "submitButton">
                <button onClick = {solve_sudoku} className = "vertical--center">Solve Sudoku</button>
                <br /> <br />
                <button onClick = {clear_reload} className ="vertical--center">Clear</button>
            </div>
            {show && <ShowSudoku arr = {table} userBlock={userBlock} />}
        </div>
    )
}