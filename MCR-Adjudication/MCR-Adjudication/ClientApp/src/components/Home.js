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

  <div  className="row">
    <div class="col-3">
      <div className="table p-2">
        <table class = "table table-striped table-hover">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>National_id</th>
          </thead>
          <tbody>
            {
              profiles.map((profile, i)=> {
                return(<tr key={profile.id} className={selectedRecord === profile.id? 'tr-hover table-primary': 'tr-hover'} onClick={()=> rowSelect(profile.id)}>
                  <td>{profile.id}</td>
                  <td>{profile.first_name} {profile.surname}</td>
                  <td>{profile.national_id}</td>
                </tr>)
              })
            }
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end p-5">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link active" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
    </div>
    <div className="col-md-9 details">
      <div class="row">
        <div class="pt-4 pb-2">
          <h4>Main Record</h4>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-6 text-start">
            <p>
            <b>First Name</b>: John<br/>
            <b>Surname</b>: Doe<br/>
            <b>Other Name</b>: foel<br/>
            <b>Sex</b>: Male<br/>
            <b>DOB</b>: 11/11/91<br/>
            <b>National Id</b>: VDHSYE0N<br/>
            <b>Place of Birth District</b>: Mchinji<br/>     
            </p>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 text-start">
            <p>
            <b>Mother First Name</b>: --<br/>
            <b>Mother Other Name</b>: --<br/>
            <b>Mother Surname</b>: --<br/>
            
            </p>
          </div>

        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end pa-2">
          <button type='button' class="btn btn-success me-md-2">Not a duplicate</button>
          <button type='button' class="btn btn-primary">Is duplicate</button>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="pb-2">
        <h4>Possible Duplicate Records</h4>
        </div>
        <div class="duplicates">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6 text-start">
              <p>
              <b>First Name</b>: John<br/>
              <b>Surname</b>: Doe<br/>
              <b>Other Name</b>: foel<br/>
              <b>Sex</b>: Male<br/>
              <b>DOB</b>: 11/11/91<br/>
              <b>National Id</b>: VDHSYE0N<br/>
              <b>Place of Birth District</b>: Mchinji<br/>     
              </p>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 text-start">
              <p>
              <b>Mother First Name</b>: --<br/>
              <b>Mother Other Name</b>: --<br/>
              <b>Mother Surname</b>: --<br/>
              
              </p>
            </div>
          </div>
          <hr/>
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6 text-start">
              <p>
              <b>First Name</b>: John<br/>
              <b>Surname</b>: Doe<br/>
              <b>Other Name</b>: foel<br/>
              <b>Sex</b>: Male<br/>
              <b>DOB</b>: 11/11/91<br/>
              <b>National Id</b>: VDHSYE0N<br/>
              <b>Place of Birth District</b>: Mchinji<br/>     
              </p>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 text-start">
              <p>
              <b>Mother First Name</b>: --<br/>
              <b>Mother Other Name</b>: --<br/>
              <b>Mother Surname</b>: --<br/>
              
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Home;
