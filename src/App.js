import React from "react";
import "./App.css";
import Removebg from "./Removebg";

function App() {
  return (
    <div className="App">
      {/*Navbar*/}
      <nav class="navbar bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="logo.png" alt="Logo" width="200" height="75" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div class="px-4 py-5 my-5 text-center" style="background: #CDB4DB ;">
        <img
          class="d-block mx-auto mb-4"
          src="logo.png"
          alt=""
          width="200"
          height="75"
        />
        <h1 class="display-5 fw-bold">Centered hero</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}

      <div class="container text-center">
        {/* Card Grid */}
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img
                src="vectorize.png"
                class="card-img-top"
                alt="..."
                width="200"
                height="200"
              />
              <div class="card-body">
                <h5 class="card-title">Vectorize Drawings</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="vectorizediagrams.html"
                  class="btn btn-primary"
                  width="200"
                  height="200"
                >
                  Vectorize
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 18rem;">
              <div class="text-center">
                <img
                  src="texture.png"
                  class="card-img-top"
                  alt="..."
                  width="200"
                  height="200"
                />
                <div class="card-body">
                  <h5 class="card-title">Create a unique texture</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="uniquetexture.html" class="btn btn-primary">
                    Texturize
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style="width: 18rem;">
              <img
                src="styletransfer.png"
                class="card-img-top"
                alt="..."
                width="200"
                height="200"
              />
              <div class="card-body">
                <h5 class="card-title">Change the style of the artwork</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="styletransfer.html" class="btn btn-primary">
                  Stylize
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 18rem;">
              <img
                src="upscale.png"
                className="card-img-top"
                alt="..."
                width="200"
                height="200"
              />
              <div class="card-body">
                <h5 class="card-title">Upscale artwork</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="upsacle.html" class="btn btn-primary">
                  Upscale
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Removebg />
    </div>
  );
}

export default App;
