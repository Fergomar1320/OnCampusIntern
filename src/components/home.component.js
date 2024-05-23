import React, {Component} from "react";
import { Link } from "react-router-dom";
import '../styles/home.css';

export default class Home extends Component {
    render() {
        return (
            <section id="home">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="nested-card">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <div class="nested-card">
                                                    <div class="card services-card">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Servicios</h5>
                                                            <a href="https://teams.microsoft.com/" target="_blank" >
                                                                <img class="image" src="\teams.png" alt="Botón Microsoft Teams"/>
                                                            </a>
                                                            <br/>
                                                            <a href="https://zoom.us/es/" target="_blank" >
                                                                <img class="image" src="\zoom.png" alt="Botón Zoom"/>
                                                            </a>
                                                            <br/>
                                                            <a href="https://drive.google.com/" target="_blank" >
                                                                <img class="image" src="\drive.png" alt="Botón Google Drive"/>
                                                            </a>
                                                            <br/>
                                                            <a href="https://educacioncontinuatec.instructure.com/login/canvas" target="_blank" >
                                                                <img class="image" src="\canvas.png" alt="Botón Canvas"/>
                                                            </a>
                                                            <br/>
                                                            <a href="https://mitec.itesm.mx/" target="_blank" >
                                                                <img class="image" src="\mitec.png" alt="Botón MiTec"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="nested-card">
                                                    <a href="ruta/del/enlace" class="btn btn-block">
                                                        <div class="card exit-card">
                                                            <div class="card-body">
                                                            <h5 class="card-title">SALIR</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="nested-card">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <div class="nested-card">
                                                    <div class="card featured-card">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Destacado</h5>
                                                            <div id="miCarrusel" class="carousel slide" data-ride="carousel">
                                                                <div class="carousel-inner">
                                                                    <div class="carousel-item active">
                                                                        <img src="/teclogo.png" class="d-block w-100" alt="Slide 1"/>
                                                                        <div class="carousel-caption">
                                                                            <h5>Título del Slide 1</h5>
                                                                            <p>Texto descriptivo del Slide 1</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img src="/teclogo.png" class="d-block w-100" alt="Slide 2"/>
                                                                        <div class="carousel-caption">
                                                                            <h5>Título del Slide 2</h5>
                                                                            <p>Texto descriptivo del Slide 2</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <a class="carousel-control-prev" href="#miCarrusel" role="button" data-slide="prev">
                                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                    <span class="sr-only">Previous</span>
                                                                </a>
                                                                <a class="carousel-control-next" href="#miCarrusel" role="button" data-slide="next">
                                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                    <span class="sr-only">Next</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="nested-card">
                                                    <div class="card directory-card">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Directorio</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="nested-card">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <div class="nested-card">
                                                    <div class="card agenda-card">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Agenda</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="nested-card">
                                                    <div class="card repo-card">
                                                        <div class="card-body">
                                                            <h5 class="card-title">Repositorio</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}