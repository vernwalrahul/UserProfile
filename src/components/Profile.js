import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from 'mdb-react-ui-kit';

const API_ENDPOINT = "https://sx4qrnrguh.execute-api.eu-central-1.amazonaws.com/default/rahul-test-2";
const USERNAME = "toby"


export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Full Name',
            age: 'Age',
            location: 'Location',
            symptoms: 'Symptoms',
            medications: 'Medications'
        }
    }
    componentDidMount() {
        fetch('/default/rahul-test-2', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            body: JSON.stringify({
                username: USERNAME
            })
        }).then(response => response.json())
          .then(json =>  {
                this.setState({
                    name: json.name,
                    age: json.age,
                    location: json.location,
                    medications: json.medications,
                    symptoms: json.symptoms
                })
            })
        .catch(function (error) {
            console.log("error: ", error);
        })
    }
    render() {
        return (
            <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                <MDBCol>
                    <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                    <MDBBreadcrumbItem>
                        <a href='#'>Home</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                        <a href="#">User</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBCol>
                </MDBRow>
    
                <MDBRow>
                <MDBCol lg="4">
                    <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                        <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '150px' }}
                        fluid />
                        <p className="text-muted mb-4">{this.state.name}</p>
                        <p className="text-muted mb-4">{this.state.location}</p>
                        <div className="d-flex justify-content-center mb-2">
                        </div>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="8">
                    <MDBCard className="mb-4">
                    <MDBCardBody>
                        <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Full Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">{this.state.name}</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Age</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">{this.state.age}</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Location</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">{this.state.location}</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Medications</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">{this.state.medications}</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Symptoms</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">{this.state.symptoms}</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            </section>
        );
    }
}
