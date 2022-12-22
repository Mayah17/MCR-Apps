import { useState, useEffect } from 'react';
import './home.css';
// import { Axios } from 'axios';

function Home() {

  const [selectedRecord, setSelectedRecord] = useState(0)

  let profiles = [
                  {id:1, first_name:"John", surname:"Doe", national_id:"hfimsa9m"},
                  {id:2, first_name:"John", surname:"Doe", national_id:"hfimsa9m"},
                  {id:3, first_name:"John", surname:"Doe", national_id:"hfimsa9m"},
                  {id:4, first_name:"John", surname:"Doe", national_id:"hfimsa9m"},
                  {id:5, first_name:"John", surname:"Doe", national_id:"hfimsa9m"},
                  {id:6, first_name:"John", surname:"Doe", national_id:"hfimsa9m"},
                  {id:7, first_name:"John", surname:"Doe", national_id:"hfimsa9m"},
                  {id:8, first_name:"John", surname:"Doe", national_id:"hfimsa9m"},
                  {id:9, first_name:"John", surname:"Doe", national_id:"hfimsa9m"},
                  {id:10, first_name:"John", surname:"Doe", national_id:"hfimsa9m"}
                ]

  let rowSelect = (id) => {
    setSelectedRecord(id)
  }

  let getRecords = () => {
    console.log("start")
  }

  useEffect(() => {
      getRecords()
  }, [])

  return (
    <div className="App">

      <div class="row">
        <div class="pt-4 pb-2">
          <h4>Main Record</h4>
        </div>
        <div class="row">
          <div class="col-md-10">
            <div class="table">
              <table class="table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Other Names</th>
                    <th>Sex</th>
                    <th>DOB</th>
                    <th>National Id</th>
                    <th>Place of Birth District</th>
                  </tr>
                  
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td></td>
                    <td>Male</td>
                    <td>11/11/91</td>
                    <td>VHods0</td>
                    <td>Mchinji</td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Mother First Name</th>
                    <th>Mother Surname</th>
                    <th>Mother Other Names</th>
                    <th>Informant Phone Number</th>
                  </tr>

                  <tr class="row-border">
                    <td>Jane</td>
                    <td>Doe</td>
                    <td></td>
                    <td>0999123456</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-md-2 d-flex align-items-center justify-content-center">
            <button type='button' class="btn btn-primary me-md-2">Skip</button> 
          </div>

        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end pa-2">
          <button type='button' class="btn btn-success me-md-2">Not a duplicate</button>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="pb-2">
        <h4>Possible Duplicate Records</h4>
        </div>
          <div class="duplicates">
            <div class="row">
              <div class="col-md-10">

                <div class="table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Other Names</th>
                        <th>Sex</th>
                        <th>DOB</th>
                        <th>National Id</th>
                        <th>Place of Birth District</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td></td>
                        <td>Male</td>
                        <td>11/11/91</td>
                        <td>VHods0</td>
                        <td>Mchinji</td>
                      </tr>
                      <tr>
                        <td></td>
                      </tr>

                      <tr>
                        <th>Mother First Name</th>
                        <th>Mother Surname</th>
                        <th>Mother Other Names</th>
                        <th>Informant Phone Number</th>
                      </tr>

                      <tr class="row-border">
                        <td>Jane</td>
                        <td>Doe</td>
                        <td></td>
                        <td>0999123456</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-md-2 d-flex align-items-center justify-content-center">
                <button type='button' class="btn btn-warning me-md-2">Duplicate with</button> 
              </div>

            </div>
            <hr/>
            <div class="row">
              <div class="col-md-10">

                <div class="table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Other Names</th>
                        <th>Sex</th>
                        <th>DOB</th>
                        <th>National Id</th>
                        <th>Place of Birth District</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td></td>
                        <td>Male</td>
                        <td>11/11/91</td>
                        <td>VHods0</td>
                        <td>Mchinji</td>
                      </tr>
                      <tr>
                        <td></td>
                      </tr>

                      <tr>
                        <th>Mother First Name</th>
                        <th>Mother Surname</th>
                        <th>Mother Other Names</th>
                        <th>Informant Phone Number</th>
                      </tr>

                      <tr class="row-border">
                        <td>Jane</td>
                        <td>Doe</td>
                        <td></td>
                        <td>0999123456</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-md-2 d-flex align-items-center justify-content-center">
                <button type='button' class="btn btn-warning me-md-2">Duplicate with</button> 
              </div>

            </div>
            <hr/>


        </div>
      </div>

    </div>
  );
}

export default Home;
