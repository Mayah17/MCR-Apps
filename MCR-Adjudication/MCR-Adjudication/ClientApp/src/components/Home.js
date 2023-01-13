import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import axios from 'axios';
import AuthorizationModal from './AuthorizationModal';

function Home() {
  const navigation = useNavigate()
  const [duplicates, setDuplicates] = useState([])
  const [record, setRecord] = useState({})
  const [authorized, setAuthorized] = useState(false)
  const [show, setShow] = useState(false)
  const [user, setUser] = useState("")

  let getRecords = useCallback(() => {
    let storedRecord = localStorage.getItem("record")
    if(storedRecord){
      let recordData = JSON.parse(storedRecord)
      setRecord(recordData.childDetails)
      setDuplicates(recordData.possibleDuplicates)
      return
    }
    let path = `https://10.45.80.51:8082/api/possibleduplicates/${user}` 
    axios.get(path, {})
    .then(res => {
      localStorage.setItem("record", JSON.stringify(res.data))
      setRecord(res.data.childDetails)
      setDuplicates(res.data.possibleDuplicates)
    })
    .catch(err => {
    })
  }, [user])

  let updateIsDuplicate = (registrationId, id) => {
    axios.patch(`https://10.45.80.51:8082/api/adjudication/${registrationId}/${id}/${user}`, {})
    .then(res => {
      localStorage.removeItem("record")
      getRecords()
    })
    .catch(err => {
    })
  }

  let updateIsNotDuplicate = (id) => {
    axios.post(`https://10.45.80.51:8082/api/adjudication`, {editUser: user, registrationId: id})
    .then(res => {
      localStorage.removeItem("record")
      getRecords()
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  let skip = () => {
    localStorage.removeItem("record")
    getRecords()
  }

  let checkAuth = useCallback(() => {
    let loggedIn = localStorage.getItem('user')
    if(loggedIn !== null){
      setAuthorized(true)
      setUser(loggedIn)
      getRecords()
      return
    }else{
      setShow(true)
    }
  }, [getRecords])

  let authorize = (user) => {
    if(user !== null && user !== ""){
      localStorage.setItem("user", user)
      setAuthorized(true) 
      setUser(user)
      setShow(false)
      return
    }else{
      setShow(true)
    }
  }

  useEffect(() => {
    setRecord({})
    setDuplicates([])
    checkAuth()
  }, [user, authorized, checkAuth])

  useEffect(() => {
    let storedUser = localStorage.getItem("user")
    if (storedUser === null || storedUser === undefined) checkAuth()
  })

  return (
    <div className="App">
      <div className="row">
      <AuthorizationModal display={show} auth={authorize}></AuthorizationModal>
        <div className="pt-4 pb-2">
          <h4>Main Record</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table">
              <table className="table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Sex</th>
                    <th>DOB</th>
                    <th>District</th>
                    <th>Mother Name</th>
                    <th>Phone Number</th>
                  </tr>
                  
                </thead>
                <tbody>
                  <tr>
                    <td>{record.firstname} {record.othernames} {record.surname}</td>
                    <td>{record.childSex}</td>
                    <td>{record.dateOfBirth}</td>
                    <td>{record.birthDistrict}</td>
                    <td>{record.motherFirstname} {record.motherOthernames} {record.motherSurname}</td>
                    <td>{record.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>
                      <button type='button' className="btn btn-sm btn-primary me-md-2 btn-tb" onClick={() => skip()}>Skip</button>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                    <button type='button' className="btn btn-sm btn-success me-md-2 btn-tb" onClick={() => updateIsNotDuplicate(record.registrationId) }>Not a duplicate</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="pb-2">
        <h4>Possible Duplicates</h4>
        </div>
          <div className="duplicates">
            <div className="row">
              <div className="col-md-12">

                <div className="table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Sex</th>
                        <th>DOB</th>
                        <th>District</th>
                        <th>Mother Name</th>
                        <th>Similarity %</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                      {
                        duplicates.map((duplicate, i) => {
                          if (duplicate.birthEntryNumber === "" || duplicate.birthRegistrationNumber === "" || duplicate.personId === "" ){
                            return <></>
                          }
                          return (
                            <tr key={duplicate.id}>
                              <td>{duplicate.firstname} {duplicate.othernames} {duplicate.surname}</td>
                              <td>{duplicate.sex}</td>
                              <td>{duplicate.dateOfBirth}</td>
                              <td>{duplicate.birthDistrict}</td>
                              <td>{duplicate.motherFirstname} {duplicate.motherOthernames} {duplicate.motherSurname}</td>
                              <td>{duplicate.similarityScore}</td>
                              <td>
                                <button type='button' className="btn btn-sm btn-warning me-md-2" onClick={() => updateIsDuplicate(record.registrationId, duplicate.id)}>Duplicate with</button> 
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
