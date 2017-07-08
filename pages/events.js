import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import CustomHead from '../components/CustomHead'
import TopMenu from '../components/TopMenu'

class EventPage extends Component {

  render() {
    return (
      <div>
        <CustomHead />
        <TopMenu activeItem="events" />

        <Container>
          <h1 className="pageTitle">All events</h1>

          <p>Todo :)</p>

        </Container>

      </div>
    )
  }

}

export default EventPage;
