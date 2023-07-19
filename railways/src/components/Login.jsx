import React from 'react'

export default function Login() {
  return (
    <div className='container'>
        <form>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Company name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter company name" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Owner name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter name" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Roll no.</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter roll no" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Owner email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Access Code</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="access code" />
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    </div>
  )
}
