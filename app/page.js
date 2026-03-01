

export default function Home() {
  return (
    <div className="contiainer text-center ">
      <div className="row pt-5">
        <div className="col">
          <h1>All Contacts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary btn-sm">ADD CONTACT</button>
        </div>
      </div>
      <div className="row p-5">
        <div className="col">
          <input className="form-control" placeholder="Search Contacts"></input>
        </div>
      </div>
      <div className="row p-5">
        <div className="col">
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Photo</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {/* Contact Info */}
  </tbody>
</table>
        </div>
      </div>
    </div>
  )

}
