import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
//import 'bootstrap-material-design/dist/js/bootstrap-material-design.js';

//import 'popper.js/dist/popper.js';
//import 'popper.js/dist/popper';

import { Link } from "react-router-dom";

import Slide1 from './img/slide1.png';
import Slide2 from './img/slide2.png';
import Slide3 from './img/slide3.png';


import IsolatedTable from './IsolatedTable';


import { connect } from 'react-redux';
import { toggleStateIsLoading } from './storeReduxi';


//--------------------------------------------------------------
const mapStateToProps = (storeData) => ({
  medals: storeData.badges,
  isNowLoading: storeData.isLoading
})


const mapDispatchToProps = {
  toggleLoading: toggleStateIsLoading
}

const ElevatedTable = connect(mapStateToProps, mapDispatchToProps)(IsolatedTable);
//--------------------------------------------------------------


const lookup = {
  "react": [
    { id: '1', text: '1' },
    { id: '2', text: '2' },
    { id: '3', text: '3' },
    { id: '4', text: '4' },
    { id: '5', text: '5' }
  ],
  "python": [
    { id: 'p1', text: 'p1' },
    { id: 'p2', text: 'p2' }
  ],
  "java": [
    { id: 'a', text: 'a' },
    { id: 'b', text: 'b' },
    { id: 'c', text: 'c' },
    { id: 'd', text: 'd' },
    { id: 'e', text: 'e' }
  ]
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueLg: ''
    }
  }

  changeLanguage = e => {
    this.setState({ valueLg: e.target.value });
  }


  render() {

    //*********************************************************** */
    const { valueLg } = this.state;
    const options = lookup[valueLg] || [];




    return (
      // <div className="bmd-layout-container bmd-drawer-f-l bmd-drawer-overlay">
      //   <header className="bmd-layout-header" style={{ backgroundColor: '#a8c9ef' }}>
      //     <div className="navbar navbar-light bg-faded">
      //       <button className="navbar-toggler" type="button" data-toggle="drawer" data-target="#dw-s2">
      //         <span className="sr-only">Toggle drawer</span>
      //         <i className="material-icons">menu</i>
      //       </button>
      //       <ul className="nav navbar-nav">
      //         <li className="nav-item">Title</li>
      //       </ul>
      //     </div>
      //   </header>
      //   <div id="dw-s2" className="bmd-layout-drawer bg-faded">
      //     <header>
      //       <a className="navbar-brand">Title</a>
      //     </header>
      //     <ul className="list-group">
      //       <a className="list-group-item">Link 1</a>
      //       <a className="list-group-item">Link 2</a>
      //       <a className="list-group-item">Link 3</a>
      //     </ul>
      //   </div>
      //   <main className="bmd-layout-content">
      //     <div className="container">
      //       <div className="App" style={{ padding: '12%' }}>
      //         <ul className="nav nav-tabs" style={{ position: "absolute", top: 0 }}>
      //           <li className="nav-item">
      //             <Link  to="/" className="nav-link">Home</Link>
      //           </li>
      //           <li className="nav-item">
      //             <a href="/about" className="nav-link">About  KKKKKKi</a>
      //           </li>
      //           <li className="nav-item">
      //             <Link to="/about" className="nav-link">Contact</Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link to="/about" className="nav-link disabled">Others</Link>                  
      //           </li>
      //         </ul>

      //         <h4>Reference:</h4>
      //         <Link  to="/about" >Abouttttttttttttttttt</Link>
      //         <h5>https://fezvrasta.github.io/bootstrap-material-design/docs/4.0/getting-started/introduction/</h5>
      //         <div className="alert alert-warning alert-dismissible fade show" role="alert">
      //           <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      //             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      //             <span aria-hidden="true">&times;</span>
      //           </button>
      //         </div>
      //         <div className="row">


      //           <div className="col-3">
      //             <div className="card" style={{ width: '100%' }}>
      //               <img className="card-img-top" src="..." alt="Card image cap" />
      //               <div className="card-body">
      //                 <h5 className="card-title">Card title</h5>
      //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      //                 <a className="btn btn-primary">Go somewhere</a>
      //               </div>
      //             </div>
      //           </div>

      //           <div className="col">
      //             <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      //               <ol className="carousel-indicators">
      //                 <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      //                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      //                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      //               </ol>
      //               <div className="carousel-inner">
      //                 <div className="carousel-item active">
      //                   <img className="d-block w-100" src={Slide1} alt="First slide" style={{ width: '100%', height: '250px' }} />
      //                 </div>
      //                 <div className="carousel-item">
      //                   <img className="d-block w-100" src={Slide2} alt="Second slide" style={{ width: '100%', height: '250px' }} />
      //                 </div>
      //                 <div className="carousel-item">
      //                   <img className="d-block w-100" src={Slide3} alt="Third slide" style={{ width: '100%', height: '250px' }} />
      //                 </div>
      //               </div>
      //               <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      //                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      //                 <span className="sr-only">Previous</span>
      //               </a>
      //               <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      //                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
      //                 <span className="sr-only">Next</span>
      //               </a>
      //             </div>
      //           </div>

      //         </div>



      //         <h1>BootStrap Material</h1>
      //         <div className="bmd-form-group bmd-collapse-inline pull-xs-right" style={{ backgroundColor: '#F5A', marginBottom: '20px' }}>
      //           <button className="btn bmd-btn-icon" htmlFor="search" data-toggle="collapse" data-target="#collapse-search" aria-expanded="false" aria-controls="collapse-search">
      //             <i className="material-icons">search</i>
      //           </button>
      //           <span id="collapse-search" className="collapse">
      //             <input className="form-control" type="text" id="search" placeholder="Enter your query..." />
      //           </span>
      //         </div>
      //         <div className="row">
      //           <div className="dropdown">
      //             <button className="btn bmd-btn-icon dropdown-toggle" type="button" id="ex1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //               <i className="material-icons">more_vert</i>
      //             </button>
      //             <div className="dropdown-menu dropdown-menu-left" aria-labelledby="ex1">
      //               <button className="dropdown-item" type="button">Action</button>
      //               <button className="dropdown-item disabled" type="button">Another action</button>
      //               <button className="dropdown-item" type="button">Another action</button>
      //             </div>
      //           </div>





      //           <div className="col-3">
      //             <ul className="list-group bmd-list-group-sm">
      //               <li className="list-group-item">Text</li>
      //               <a className="list-group-item">Link item</a>
      //               <button type="button" className="list-group-item">Button item</button>
      //               <a className="list-group-item active">Active link item</a>
      //               <a className="list-group-item disabled">Disabled item</a>
      //             </ul>

      //             <div>
      //               <div className="btn-group">
      //                 <button className="btn dropdown-toggle" type="button" id="buttonMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //                   Dropdown
      //                 </button>
      //                 <div className="dropdown-menu" aria-labelledby="buttonMenu1">
      //                   <a className="dropdown-item"  >Action</a>
      //                   <a className="dropdown-item"  >Another action</a>
      //                   <a className="dropdown-item"  >Something else here</a>
      //                 </div>
      //               </div>
      //             </div>
      //             <div>
      //               <button type="button" className="btn btn-secondary" data-toggle="snackbar" data-content="Free fried chicken here! <a href='https://example.org' class='btn btn-info'>Check it out</a>" data-html-allowed="true" data-timeout="0">
      //                 Snackbar
      //               </button>
      //               <button type="button" className="btn btn-secondary" data-toggle="snackbar" data-style="toast" data-content="Fried chicken out of stock.">
      //                 Toast
      //               </button>
      //             </div>
      //             <div>
      //               <p>Let's create inner-dependent selects:</p>
      //               <select id="lang" onChange={this.changeLanguage} value={this.state.valueLg} className="form-control">
      //                 <option value="select">Select</option>
      //                 <option selected={this.state.valueLg === "java"} value="java">Java</option>
      //                 <option value="c++">C++</option>
      //                 <option value="python">Python</option>
      //                 <option value="react">React</option>
      //                 <option value="nodeJs">NodeJs</option>
      //               </select>
      //               <p></p>
      //               <p>{this.state.valueLg}</p>
      //               <select id="versioning" onChange={(e) => alert(e.target.value)} className="form-control">
      //                 {options.map( (op, index) => <option key={index} value={op.id}>{op.text}</option>  )}                      
      //               </select>
      //             </div>

      //           </div>
      //           <div className="col">

      //             <form style={{ backgroundColor: '#FFF', padding: '30px', border: '2px solid red' }}>
      //               <div className="form-group">
      //                 <label for="exampleInputEmail1" className="bmd-label-floating">Email address</label>
      //                 <input type="email" className="form-control" id="exampleInputEmail1" />
      //                 <span className="bmd-help">We'll never share your email with anyone else.</span>
      //               </div>
      //               <div className="form-group">
      //                 <label for="exampleInputPassword1" className="bmd-label-floating">Password</label>
      //                 <input type="password" className="form-control" id="exampleInputPassword1" />
      //               </div>
      //               <div className="form-group">
      //                 <label for="exampleSelect1" className="bmd-label-floating">Example select</label>
      //                 <select className="form-control" id="exampleSelect1">
      //                   <option>1</option>
      //                   <option>2</option>
      //                   <option>3</option>
      //                   <option>4</option>
      //                   <option>5</option>
      //                 </select>
      //               </div>
      //               <div className="form-group">
      //                 <label for="exampleSelect2" className="bmd-label-floating">Example multiple select</label>
      //                 <select multiple className="form-control" id="exampleSelect2">
      //                   <option>1</option>
      //                   <option>2</option>
      //                   <option>3</option>
      //                   <option>4</option>
      //                   <option>5</option>
      //                 </select>
      //               </div>
      //               <div className="form-group">
      //                 <label for="exampleTextarea" className="bmd-label-floating">Example textarea</label>
      //                 <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
      //               </div>
      //               <div className="form-group">
      //                 <label for="exampleInputFile" className="bmd-label-floating">File input</label>
      //                 <input type="file" className="form-control-file" id="exampleInputFile" />
      //                 <small className="text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
      //               </div>
      //               <div className="radio">
      //                 <label>
      //                   <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />
      //                   Option one is this and that&mdash;be sure to include why it's great
      //           </label>
      //               </div>
      //               <div className="radio">
      //                 <label>
      //                   <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
      //                   Option two can be something else and selecting it will deselect option one
      //           </label>
      //               </div>
      //               <div className="radio disabled">
      //                 <label>
      //                   <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled />
      //                   Option three is disabled
      //           </label>
      //               </div>
      //               <div className="checkbox">
      //                 <label>
      //                   <input type="checkbox" /> Check me out
      //           </label>
      //               </div>
      //               <button className="btn btn-default">Cancel</button>
      //               <button type="submit" className="btn btn-primary btn-raised">Submit</button>

      //               <div className="form-group">
      //                 <label for="exampleInputEmail1" className="bmd-label-floating">Email address (two help blocks)</label>
      //                 <input type="email" className="form-control" id="exampleInputEmail1" />
      //                 <span className="bmd-help">We'll never share your email with anyone else.</span>
      //                 <span className="bmd-help">And this is probably from a second plugin showing in a non-optimal way</span>
      //               </div>
      //             </form>

      // <Link to="/about">go to About</Link>

      //             {/* <ElevatedTable /> */}
      //             {/* <IsolatedTable /> */}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </main>
      // </div>    

      // <div>
      //   <h1>App page ....</h1>
      //   <Link to="/about">go to About</Link>


      //</div>

      <div className="container">
        <div className="App" style={{ padding: '12%' }}>
          <ul className="nav nav-tabs" style={{ position: "absolute", top: 0 }}>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link disabled">Others</Link>
            </li>
          </ul>

          <h4>Reference:</h4>
          <h5>https://fezvrasta.github.io/bootstrap-material-design/docs/4.0/getting-started/introduction/</h5>
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="row">


            <div className="col-3">
              <div className="card" style={{ width: '100%' }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={Slide1} alt="First slide" style={{ width: '100%', height: '250px' }} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Slide2} alt="Second slide" style={{ width: '100%', height: '250px' }} />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Slide3} alt="Third slide" style={{ width: '100%', height: '250px' }} />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

          </div>



          <h1>BootStrap Material</h1>
          <div className="bmd-form-group bmd-collapse-inline pull-xs-right" style={{ backgroundColor: '#F5A', marginBottom: '20px' }}>
            <button className="btn bmd-btn-icon" htmlFor="search" data-toggle="collapse" data-target="#collapse-search" aria-expanded="false" aria-controls="collapse-search">
              <i className="material-icons">search</i>
            </button>
            <span id="collapse-search" className="collapse">
              <input className="form-control" type="text" id="search" placeholder="Enter your query..." />
            </span>
          </div>
          <div className="row">
            <div className="dropdown">
              <button className="btn bmd-btn-icon dropdown-toggle" type="button" id="ex1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="material-icons">more_vert</i>
              </button>
              <div className="dropdown-menu dropdown-menu-left" aria-labelledby="ex1">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item disabled" type="button">Another action</button>
                <button className="dropdown-item" type="button">Another action</button>
              </div>
            </div>





            <div className="col-3">
              <ul className="list-group bmd-list-group-sm">
                <li className="list-group-item">Text</li>
                <a className="list-group-item">Link item</a>
                <button type="button" className="list-group-item">Button item</button>
                <a className="list-group-item active">Active link item</a>
                <a className="list-group-item disabled">Disabled item</a>
              </ul>

              <div>
                <div className="btn-group">
                  <button className="btn dropdown-toggle" type="button" id="buttonMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                      </button>
                  <div className="dropdown-menu" aria-labelledby="buttonMenu1">
                    <a className="dropdown-item"  >Action</a>
                    <a className="dropdown-item"  >Another action</a>
                    <a className="dropdown-item"  >Something else here</a>
                  </div>
                </div>
              </div>
              <div>
                <button type="button" className="btn btn-secondary" data-toggle="snackbar" data-content="Free fried chicken here! <a href='https://example.org' class='btn btn-info'>Check it out</a>" data-html-allowed="true" data-timeout="0">
                  Snackbar
                    </button>
                <button type="button" className="btn btn-secondary" data-toggle="snackbar" data-style="toast" data-content="Fried chicken out of stock.">
                  Toast
                    </button>
              </div>
              <div>
                <p>Let's create inner-dependent selects:</p>
                <select id="lang" onChange={this.changeLanguage} value={this.state.valueLg} className="form-control">
                  <option value="select">Select</option>
                  <option selected={this.state.valueLg === "java"} value="java">Java</option>
                  <option value="c++">C++</option>
                  <option value="python">Python</option>
                  <option value="react">React</option>
                  <option value="nodeJs">NodeJs</option>
                </select>
                <p></p>
                <p>{this.state.valueLg}</p>
                <select id="versioning" onChange={(e) => alert(e.target.value)} className="form-control">
                  {options.map((op, index) => <option key={index} value={op.id}>{op.text}</option>)}
                </select>
              </div>

            </div>
            <div className="col">

              <form style={{ backgroundColor: '#FFF', padding: '30px', border: '2px solid red' }}>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="bmd-label-floating">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" />
                  <span className="bmd-help">We'll never share your email with anyone else.</span>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="bmd-label-floating">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                  <label for="exampleSelect1" className="bmd-label-floating">Example select</label>
                  <select className="form-control" id="exampleSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleSelect2" className="bmd-label-floating">Example multiple select</label>
                  <select multiple className="form-control" id="exampleSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleTextarea" className="bmd-label-floating">Example textarea</label>
                  <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label for="exampleInputFile" className="bmd-label-floating">File input</label>
                  <input type="file" className="form-control-file" id="exampleInputFile" />
                  <small className="text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />
                    Option one is this and that&mdash;be sure to include why it's great
                </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                    Option two can be something else and selecting it will deselect option one
                </label>
                </div>
                <div className="radio disabled">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled />
                    Option three is disabled
                </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Check me out
                </label>
                </div>
                <button className="btn btn-default">Cancel</button>
                <button type="submit" className="btn btn-primary btn-raised">Submit</button>

                <div className="form-group">
                  <label for="exampleInputEmail1" className="bmd-label-floating">Email address (two help blocks)</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" />
                  <span className="bmd-help">We'll never share your email with anyone else.</span>
                  <span className="bmd-help">And this is probably from a second plugin showing in a non-optimal way</span>
                </div>
              </form>


              <ElevatedTable />
              {/* <IsolatedTable /> */}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
