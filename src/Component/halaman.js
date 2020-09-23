import React, {Component} from 'react';
import './style.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class halaman extends Component {
  render(){
    return(
      <div>
        <Card>
          <CardImg top width="100%" href="./%PUBLIC_URL%/telkom.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>RicoRamada</CardTitle>
            <CardSubtitle>RPL</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" href="./%PUBLIC_URL%/telkom.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>RicoRamada</CardTitle>
            <CardSubtitle>RPL</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default halaman;
