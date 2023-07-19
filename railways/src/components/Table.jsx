import React from 'react'

export default function Table() {
  return (
    <div className='container my-6'>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Sno</th>
                <th scope="col">Train name</th>
                <th scope="col">Train number</th>
                <th scope="col">Seats Available</th>
                <th scope="col">Price</th>
                <th scope="col">Departure Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>Otto</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Otto</td>
                <td>Otto</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>Otto</td>
                <td>Otto</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
