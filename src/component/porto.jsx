import React, { useState, useEffect } from "react";
import axios from "axios";
import photoProf from "../assets/foto-2.png";
import ecoprint from "../assets/ecoprint.png";
import farms from "../assets/farms.png";
import oleh_banyumas from "../assets/Oleh-oleh_Banyumas.png";
import image from "../assets/image.png";

function Porto() {
  return (
    <div className="container my-5" >
      <h1 className="fs-1 fw-bolder text-center">
        KOLEKSI <span className="font-primary">PORTOFOLIO</span>
      </h1>
      <div className="mt-4" data-aos='zoom-in'>
        <div className="row">
          <div className="col-md-6 col-xl-4 mb-4">
            <div className="card border-3 rounded-4 card-porto h-100 ">
              <img src={ecoprint} className="card-img-top" />
              <div className="card-body d-flex align-content-between flex-wrap w-100">
                <div className="w-100">
                  <button
                    type="button"
                    class="btn btn-custom rounded-4 fw-semibold w-100 p-1"
                    data-bs-toggle="modal"
                    data-bs-target="#ecoprint"
                  >
                    Ecoprint
                  </button>
                </div>
              </div>
              <div
                class="modal fade"
                id="ecoprint"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Ecoprint
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p>
                        Pada proyek website Ecoprint, saya bertanggung jawab
                        mengembangkan backend untuk mengelola yang efisien serta
                        database yang dioptimalkan.
                      </p>
                      <div className="d-flex gap-2 my-4 flex-wrap">
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          laravel
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Css
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Javascript
                        </p>
                      </div>
                      <a
                        href="https://gitlab.com/luthfiah/ecoprint-mm3-pw2324"
                        className="btn btn-custom rounded-4 fw-semibold w-100 p-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gitlab
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-4">
            <div className="card border-3 rounded-4 card-porto h-100 ">
              <img src={farms} className="card-img-top" />
              <div className="card-body d-flex align-content-between flex-wrap w-100">
                <div className="w-100">
                  <button
                    type="button"
                    class="btn btn-custom rounded-4 fw-semibold w-100 p-1"
                    data-bs-toggle="modal"
                    data-bs-target="#farmapps"
                  >
                    Farms App
                  </button>
                </div>
              </div>
              <div
                class="modal fade"
                id="farmapps"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Farms App
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p>
                        Pada proyek website Farms App, saya bertanggung jawab
                        mengembangkan suatu fitur untuk mengelola kategori
                      </p>
                      <div className="d-flex gap-2 my-4 flex-wrap">
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Laravel
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Livewire
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Css
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Javascript
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Bootstrap
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-4">
            <div className="card border-3 rounded-4 card-porto h-100 ">
              <img src={oleh_banyumas} className="card-img-top" />
              <div className="card-body d-flex align-content-between flex-wrap w-100">
                <div className="w-100">
                  <button
                    type="button"
                    class="btn btn-custom rounded-4 fw-semibold w-100 p-1"
                    data-bs-toggle="modal"
                    data-bs-target="#olehbanyumas"
                  >
                    Oleh-oleh Banyumas Apps
                  </button>
                </div>
              </div>
              <div
                class="modal fade"
                id="olehbanyumas"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Oleh-oleh Banyumas Apps
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p>
                        Pada proyek website Oleh-oleh Banyumas App, saya
                        bertanggung jawab sebagai frontend dalam project ini
                      </p>
                      <div className="d-flex gap-2 my-4 flex-wrap">
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Laravel
                        </p>

                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          CSS
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Javascript
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Bootstrap
                        </p>
                      </div>
                      <a
                        href="https://gitlab.com/Addharuqutni/olehbms"
                        className="btn btn-custom rounded-4 fw-semibold w-100 p-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-4">
            <div className="card border-3 rounded-4 card-porto h-100 ">
              <img src={image} className="card-img-top" />
              <div className="card-body d-flex align-content-between flex-wrap w-100">
                <div className="w-100">
                  <button
                    type="button"
                    class="btn btn-custom rounded-4 fw-semibold w-100 p-1"
                    data-bs-toggle="modal"
                    data-bs-target="#edutur"
                  >
                    Edutur
                  </button>
                </div>
              </div>
              <div
                class="modal fade"
                id="edutur"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p>
                        Pada proyek website Edutur, saya bertanggung jawab
                        sebagai fullstack dalam project ini
                      </p>
                      <div className="d-flex gap-2 my-4 flex-wrap">
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          PHP
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          CSS
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Javascript
                        </p>
                      </div>
                      <a
                        href="https://github.com/bagasly/Flawless_Cultural-Narative/tree/main"
                        className="btn btn-custom rounded-4 fw-semibold w-100 p-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-4">
            <div className="card border-3 rounded-4 card-porto h-100 ">
              <img src={image} className="card-img-top" />
              <div className="card-body d-flex align-content-between flex-wrap w-100">
                <div className="w-100">
                  <button
                    type="button"
                    class="btn btn-custom rounded-4 fw-semibold w-100 p-1"
                    data-bs-toggle="modal"
                    data-bs-target="#koperasi"
                  >
                    Koperasi SMA N 3 Purwokerto Apps
                  </button>
                </div>
              </div>
              <div
                class="modal fade"
                id="koperasi"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Koperasi SMA N 3 Purwokerto Apps
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p>
                        Pada proyek website pengelolaan stok SMA N 3 Purwokerto, saya bertanggung jawab
                        sebagai fullstack dalam project ini
                      </p>
                      <div className="d-flex gap-2 my-4 flex-wrap">
                      <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Laravel
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Livewire
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Css
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Javascript
                        </p>
                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">
                          Bootstrap
                        </p>
                      </div>
                      <a
                        href="https://github.com/hendrisetiadidarmoko/Koperasi_SMA3"
                        className="btn btn-custom rounded-4 fw-semibold w-100 p-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porto;
