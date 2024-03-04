import React from "react";
import "./timetable.css"
const Rough=()=>{
    const mystyle = {
        color: "black",
        backgroundColor: "#ffe4c4",
        padding: "10px",
        fontFamily: "Arial",
        
      };
return(
    <React.Fragment>
        
<body background="https://images.wallpapersden.com/image/download/line-light-background_aGVsZpSZmpqtpaSklGdqa2WtZmtlZQ.jpg">
    
    <h1><center><font color="red">JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY</font></center></h1>
    <h2><center>3rd YEAR TIMETABLE</center></h2>
    <center>
    <table border="4" style={mystyle} >
    <tr>
        <td><b>Period/Time</b></td>
        <td><b>10:00</b></td>
        <td><b>11:00</b></td>
        <td><b>12:00</b></td>
        <td><b>13:00</b></td>
        <td><b>14:00</b></td>
        <td><b>15:00</b></td>
        <td><b>16:00</b></td>
    </tr>
    <tr>
        <td><b>Day </b></td>
        <td><b>11:00</b></td>
        <td><b>12:00</b></td>
        <td><b>13:00</b></td>
        <td><b>14:00</b></td>
        <td><b>15:00</b></td>
        <td><b>16:00</b></td>
        <td><b>17:00</b></td>
    </tr>
    <tr>
        <td><b>Monday</b></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td rowspan="5"><font color="blue"><b>Lunch Break</b></font></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
    </tr>
    <tr>
        <td><b>Tuesday</b></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
    </tr>
    <tr>
        <td><b>Wednesday</b></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
    </tr>
    <tr>
        <td><b>Thursday</b></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
    </tr>
    <tr>
        <td><b>Friday</b></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
        <td><input class='myclass' type='button' value='COA-TUTORIAL'/></td>
    </tr>
    </table>
    </center>
</body>
    </React.Fragment>

)
}
export default Rough;
