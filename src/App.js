import React from 'react';
import logo from './logo.svg';
import './App.css';


import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
//import 'bootstrap-material-design/dist/js/bootstrap-material-design.js';

//import 'popper.js/dist/popper.js';
//import 'popper.js/dist/popper';




function App() {
  return (
    <div className="App" style={{ padding: '12%' }}>
      <ul class="nav nav-tabs" style={{position:"absolute", top:0}}>
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Another link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <h1>BootStrap Material</h1>
      <div className="bmd-form-group bmd-collapse-inline pull-xs-right" style={{ backgroundColor: '#F5A', marginBottom: '20px' }}>
        <button className="btn bmd-btn-icon" for="search" data-toggle="collapse" data-target="#collapse-search" aria-expanded="false" aria-controls="collapse-search">
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
            <a href="#" className="list-group-item">Link item</a>
            <button type="button" className="list-group-item">Button item</button>
            <a href="#" className="list-group-item active">Active link item</a>
            <a href="#" className="list-group-item disabled">Disabled item</a>
          </ul>

          <div>
          <div className="btn-group">
            <button className="btn dropdown-toggle" type="button" id="buttonMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </button>
            <div className="dropdown-menu" aria-labelledby="buttonMenu1">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
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
        </div>
      </div>
    </div>
  );
}

export default App;
