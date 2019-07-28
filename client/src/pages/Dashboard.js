import React from "react";
//import ImageUploads from "../components/ImageUploads";
import { storage } from "../firebase";

var Remarkable = require("remarkable");

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.state = {
      // formsControls: {
        image: null,
        url: "",
      firstname: { value: " " },
      lastname: { value: " " },
      career: { value: " " },
      age: { value: " " },
      BucketListOne: { value: " " },
      BucketListTwo: { value: " " },
      BucketListThree: { value: " " }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    // }
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = () => {
    const { image } = this.state;
    console.log(image);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };
//   handleChange(e) {
//     this.setState({ value: e.target.value });
//     console.log(e.target.value);
//     //   formsControls: {
//     //     ...this.state.formControls,[firstname]: {value: " "},
//     //     lastname: {value: " "},
//     //     career: {value: " "},
//     //     age: {value: " "},
//     //     BucketListOne: {value: " "},
//     //     BucketListTwo: {value: " "},
//     //     BucketListThree: {value: " "}
//     //     }
//     // });
//   }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div>
        {/*row with settings */}
        <div className="clr-row ">
          <div className="clr-col-sm-12 clr-col-md-12 clr-col-lg-12">
            {/*This is the navigation bar setup */}
            {/*navbar color */}
            <header className="header-4">
              <div className="branding">
                <a>
                  {/*logo image/slogan*/}
                  <img
                    src="image/gt.jpeg"
                    className="nav-link"
                    alt="Get a life logo"
                  />
                  <clr-icon shape="vm-bug" />
                  <span className="title" />
                </a>
              </div>
              {/*Dashboard and Browse links */}
              <div class="header-nav">
                <a href="/home" class="nav-link">
                  <span class="nav-text">Home</span>
                </a>
                <a href="/browse" class="nav-link">
                  <span class="nav-text">Browse</span>
                </a>
              </div>
              {/*nav bar logout */}
              <div className="header-actions">
                <a href="/welcome" className="nav-link nav-text">
                  Log Out
                </a>
              </div>
            </header>
          </div>
        </div>
        {/*body of page */}
        {/*clients information card */}
        <div className="clr-row ">
          <div className="clr-col-lg-2 clr-col-md-4">
            <a href="/andrewyoung" className="card clickable">
              <div className="card-img">
              <img src={this.state.url || "image/andrew_young.jpeg"}  alt="Uploaded Images" height="100" width="200"/>
              </div>
              <div className="card-block">
                <p className="card-text">
                  Name: Andrew Young
                  <br />
                  Career: Engineer
                  <br />
                  Age: 34
                  <br />
                  BucketList:
                  <br />
                  Run a marathon
                  <br />
                  Climb Everest
                  <br />
                  Marry Rhianna
                </p>
              </div>
            </a>
          </div>

          {/* second half of page */}
          {/* colum 1 */}

          <div className="clr-col-4 clr-col-md-4">
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Bucket List Information</h4>
                <p className="card-text">
                  <div className="Dashboard">
                    <form>
                      <br />
                      <label>First Name: </label>
                      <input
                        type="firstname"
                        name="firstname"
                        value={this.state.firstname.value}
                        onChange={this.handleChange}
                      />
                      <br />
                      <br />
                      <label>Last Name: </label>
                      <input
                        type="lastname"
                        name="lastname"
                        value={this.state.lastname.value}
                        onChange={this.handleChange}
                      />{" "}
                      <br />
                      <br />
                      <label>Career: </label>
                      <input
                        type="career"
                        name="career"
                        value={this.state.career.value}
                        onChange={this.handleChange}
                      />{" "}
                      <br />
                      <br />
                      <label> Age: </label>
                      <input
                        type="age"
                        name="age"
                        value={this.state.age.value}
                        onChange={this.handleChange}
                      />{" "}
                      <br />
                      <br />
                      <label>Bucket List One : </label>
                      <input
                        type="BucketListOne"
                        name="BucketListOne"
                        value={this.state.BucketListOne.value}
                        onChange={this.handleChange}
                      />{" "}
                      <br />
                      <br />
                      <label>Bucket List Two : </label>
                      <input
                        type="BucketListTwo"
                        name="BucketListTwo"
                        value={this.state.BucketListTwo.value}
                        onChange={this.handleChange}
                      />{" "}
                      <br />
                      <br />
                      <label>Bucket List Three : </label>
                      <input
                        type="BucketListThree"
                        name="BucketListThree"
                        value={this.state.BucketListThree.value}
                        onChange={this.handleChange}
                      />{" "}
                      <br />
                      <br />
                    </form>
                    {/* <h3>Input</h3>
                            <label htmlFor="markdown-content">

                            </label> */}
                    {/* <textarea
                            id="markdown-content"
                            onChange={this.handleChange}
                            defaultValue={this.state.value}
                            /> */}
                    {/* This is where the text output happens*/}
                    {/* <h3>Output</h3> */}
                    <div
                      className="content"
                      dangerouslySetInnerHTML={this.getRawMarkup()}
                    />
                  </div>
                </p>
              </div>
              <div className="card-footer">
                <div className="progress">
                  <progress value="..." max="100" />
                </div>
                <a href="..." className="card-link">
                  Update
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Upload Photo</h4>
                <input type="file" onChange={this.handleChange} />
        <button onClick={this.handleUpload}>Upload</button>
        <br />
        <div className="card-img">
        <img src={this.state.url || 'http://via.placeholder.com/200x100'}  alt="Uploaded Images" height="100" width="200"/>
        </div>
        {/* <img src={this.state.url || 'http://via.placeholder.com/200x100'}  alt="Uploaded Images" height="100" width="200">Image should be here</img> */}
              </div>
              <div className="card-footer">
                <div className="progress">
                  <progress value="..." max="100" />
                </div>
                <a href="..." className="card-link">
                  Add
                </a>
              </div>
            </div>
          </div>

          {/* colum 2 */}
          {/* <ImageUploads /> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
