import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Professor = props => (
    <tr>
        <td>{props.professor.name}</td>
        <td>{props.professor.lastName}</td>
        <td>{props.professor.mail}</td>
        <td>{props.professor.position}</td>
        <td>{props.professor.area}</td>
        <td>{props.professor.office}</td>
    </tr>
)

export default class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = { professors: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/teachers/")
            .then(response => {
                this.setState({ professors: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    professorList() {
        return this.state.professors.map(currentProfessor => {
            return <Professor professor={currentProfessor} key={currentProfessor._id} />;
        })
    }
    render() {
        return (
            <div>
                <h3>Directorio de Profesores</h3>
                <div class="container-fluid">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Cargo</th>
                                <th>Área</th>
                                <th>Oficina</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.professorList()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}