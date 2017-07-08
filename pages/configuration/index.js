import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import CustomHead from '../../components/CustomHead'
import TopMenu from '../../components/TopMenu'

class IndexPage extends Component {

  render() {
    return (
      <div>
        <CustomHead />
        <TopMenu activeItem="configuration" />

        <Container>
          <h1 className="pageTitle">Configuration</h1>

          <p>Todo :)</p>

        </Container>

      </div>
    )
  }

}

export default IndexPage;
