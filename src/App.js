import React from 'react';
import ReactToExcel from 'react-html-table-to-excel';
import './App.css';

function App() {
  return (
    <div className="App">
      <table border="1" id="table-to-xls">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>Wilson</td>
            <td>890</td>
          </tr>
        </tbody>
      </table>

      <ReactToExcel
      className="btn"
      table="table-to-xls"
      filename="excelFile"
      sheet="sheet 1"
      buttonText="EXPORT"      
      />
    </div>
  );
}

export default App;
