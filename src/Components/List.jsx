import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const List = () => {
    const [eventData, setEventData] = useState([]);
  useEffect(() => {
    fetch("https://www.gov.uk/bank-holidays.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEventData(data);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <div className="row">
          <div className="col-lg-4">
          <h1>Holidays List</h1>
          <h4>Division - Endland and Wales</h4>
        <Table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {eventData?.["england-and-wales"]?.events?.length > 0 &&
              eventData["england-and-wales"].events.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.notes}</td>
                </tr>
              ))}
          </tbody>
        </Table>
          </div>
          <div className="col-lg-4">  <h4>Division - Northern Ireland</h4>
        <Table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {eventData?.["northern-ireland"]?.events?.length > 0 &&
              eventData["northern-ireland"].events.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.notes}</td>
                </tr>
              ))}
          </tbody>
        </Table></div>
          <div className="col-lg-4">
          <h4>Division - Scotland</h4>
        <Table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {eventData?.scotland?.events?.length > 0 &&
              eventData.scotland.events.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.notes}</td>
                </tr>
              ))}
          </tbody>
        </Table>
          </div>
        </div>
       
      
       
      </div>
    </div>
  )
}

export default List;