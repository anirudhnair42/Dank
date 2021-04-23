import * as React from 'react';

import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>Hello, [Username]!</h1>
    <p>Welcome to Dank</p>

    <p> The value of your total assets are: {}</p>

  </div>
);

export default connect()(Home);
