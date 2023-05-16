import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="container-">
      <div className="row">
        <h2 className="text-center mb-4">Company</h2>
        <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={require('../../assets/images/teacher-2.jpg')} width={40}></img></td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
