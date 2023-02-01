import { useState, useEffect, useCallback } from 'react';
import './home.css';
import axios from 'axios';
import AuthorizationModal from './AuthorizationModal';
import InfoModal from './InfoModal';

function Home() {
  const baseUrl = "https://10.45.80.51:8082"
  const [duplicates, setDuplicates] = useState([])
  const [record, setRecord] = useState({})
  const [authorized, setAuthorized] = useState(false)
  const [show, setShow] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false)
  const [info, setInfo] = useState({})
  const [user, setUser] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  let filterJsonData = (data) => {
    const filteredArr = data.reduce((acc, current) => {
      const x = acc.find(item => item.personId === current.personId || item.registrationId === current.registrationId);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return filteredArr
  }

  let filterData = (data) => {
    let autoFilter = {}
    autoFilter = data.find(item => item.similarityScore > 95);
    if(JSON.stringify(autoFilter) !== '{}'){
      console.log("more", autoFilter.similarityScore)
      return true
    }
    else{
      console.log("less", autoFilter.similarityScore)
      return false
    }
  }

  let getRecords = useCallback(() => {
    setIsLoading(true)
    // let autoValidate = {}
    let storedRecord = localStorage.getItem("record")
    if(storedRecord){
      let recordData = JSON.parse(storedRecord)
      recordData.childDetails.dateOfBirth = recordData.childDetails.dateOfBirth.replace("T00:00:00", "")
      let storedDuplicates = filterJsonData(recordData.possibleDuplicates)

      // run filterData(storedDuplicates)

      setRecord(recordData.childDetails)
      setDuplicates(storedDuplicates)
      setIsLoading(false)
      return
    }
    let path = `${baseUrl}/api/possibleduplicates/${user}` 
    axios.get(path, {})
    .then(res => {
      let duplicatesData = filterJsonData(res.data.possibleDuplicates)

      res.data.childDetails.dateOfBirth = res.data.childDetails.dateOfBirth.replace("T00:00:00", "")

      // run filterData(duplicatesData)

      localStorage.setItem("record", JSON.stringify(res.data))
      setRecord(res.data.childDetails)
      setDuplicates(duplicatesData)
      setIsLoading(false)
    })
    .catch(err => {
    })
  }, [user])

  let updateIsDuplicate = (registrationId, id) => {
    axios.patch(`${baseUrl}/api/adjudication/${registrationId}/${id}/${user}`, {})
    .then(res => {
      localStorage.removeItem("record")
      getRecords()
    })
    .catch(err => {
    })
  }

  let updateIsNotDuplicate = (id) => {
    axios.post(`${baseUrl}/api/adjudication`, {editUser: user, registrationId: id})
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

  let showMore = (record, duplicate) => {
    let infoClicks = localStorage.getItem("clicks") 
    if((infoClicks !== null || infoClicks !== undefined) && !isNaN(infoClicks)){
      infoClicks = parseInt(infoClicks) + 1
      localStorage.setItem('clicks', infoClicks)
    }else{
      infoClicks = 1
    }
    localStorage.setItem("clicks", infoClicks)

    let moreData = {record, duplicate}
    setInfo(moreData)
    setMoreInfo(true)
  }

  let lessInfo = () => {
    setMoreInfo(false)
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
      { moreInfo ? <InfoModal displayInfo={moreInfo} less={lessInfo} modalInfo={info} />: <></>}
        <div className="pt-4 pb-2">
          <h4>Main Record</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table">
              <table className="table">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Sex</th>
                    <th>DOB</th>
                    <th>District</th>
                    <th>TA</th>
                    <th>Mother Name</th>
                    <th>Father Name</th>
                    <th>Informant Name</th>
                    <th>Birth Type</th>
                  </tr>
                  
                </thead>
                <tbody>
                  <tr>
                    <td>{record.firstname} {record.othernames} {record.surname}</td>
                    <td>{record.childSex}</td>
                    <td>{record.dateOfBirth}</td>
                    <td>{record.birthDistrict}</td>
                    <td>{record.birthTa}</td>
                    <td>{record.motherFirstname} {record.motherOthernames} {record.motherSurname}</td>
                    <td>{record.fatherFirstname} {record.fatherOthernames} {record.fatherSurname}</td>
                    <td>{record.informantFirstname} {record.informantOthernames} {record.informantSurname}</td>
                    <td>{record.typeOfBirth}</td>
                  </tr>
                  <tr>
                    <td>
                      { isLoading ?(
                        <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>): 
                        <button type='button' className="btn btn-sm btn-primary me-md-2 btn-tb" onClick={() => skip()}>Skip</button>
                      }
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      { isLoading ?(
                        <div class="spinner-border text-success" role="status"><span class="visually-hidden">Loading...</span></div>): 
                        <button type='button' className="btn btn-sm btn-success me-md-2 btn-tb" onClick={() => updateIsNotDuplicate(record.registrationId) }>Not a duplicate</button>
                      }

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
                        <th>Full Name</th>
                        <th>Sex</th>
                        <th>DOB</th>
                        <th>District</th>
                        <th>TA</th>
                        <th>Mother Name</th>
                        <th>Father Name</th>
                        <th>Informant Name</th>
                        <th>Similarity %</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                      {
                        duplicates.map((duplicate, i) => {
                          if (duplicate.birthEntryNumber === "" || duplicate.birthRegistrationNumber === "" || duplicate.personId === "" ){
                            return (
                              <tr key={duplicate.id}>
                              <td>{duplicate.firstname} {duplicate.othernames} {duplicate.surname}</td>
                              <td>{duplicate.sex}</td>
                              <td>{duplicate.dateOfBirth.replace("T00:00:00", "")}</td>
                              <td>{duplicate.birthDistrict} </td>
                              <td>{duplicate.birthTa} </td>
                              <td>{duplicate.motherFirstname} {duplicate.motherOthernames} {duplicate.motherSurname}</td>
                              <td>{duplicate.fatherFirstname} {duplicate.fatherOthernames} {duplicate.fatherSurname}</td>
                              <td>{duplicate.informantFirstname} {duplicate.informantOthernames} {duplicate.informantSurname}</td>
                              <td>{Math.round(duplicate.similarityScore * 10) / 10}</td>
                              {/* <td>{duplicate.similarityScore}</td> */}
                              <td>
                                missing BEN & BRN
                              </td>
                            </tr>
                            )
                          }
                          return (
                            <tr key={duplicate.id}>
                              <td>{duplicate.firstname} {duplicate.othernames} {duplicate.surname}</td>
                              <td>{duplicate.sex}</td>
                              <td>{duplicate.dateOfBirth.replace("T00:00:00", "")}</td>
                              <td>{duplicate.birthDistrict} </td>
                              <td>{duplicate.birthTa} </td>
                              <td>{duplicate.motherFirstname} {duplicate.motherOthernames} {duplicate.motherSurname}</td>
                              <td>{duplicate.fatherFirstname} {duplicate.fatherOthernames} {duplicate.fatherSurname}</td>
                              <td>{duplicate.informantFirstname} {duplicate.informantOthernames} {duplicate.informantSurname}</td>
                              <td>{Math.round(duplicate.similarityScore * 10) / 10}</td>
                              <td>
                                <button type='button' className="btn btn-sm btn-warning me-md-2" onClick={() => updateIsDuplicate(record.registrationId, duplicate.id)}>Duplicate with</button> 
                                <button type='button' className="btn btn-sm btn-info me-md-2" onClick={() => showMore(record, duplicate)}>Info</button> 
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
