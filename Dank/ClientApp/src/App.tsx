import './custom.css'

import * as React from 'react';

import { Add_Asset } from './components/Asset/Add_Asset';
import { Assets } from './components/Asset/Assets';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Home from './components/Home';
import Layout from './components/Layout';
import { Route } from 'react-router';
import { Update } from './components/Asset/Update';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/assets' component={Assets} />
        <Route path='/create' component={ Add_Asset } />
        <Route path='/update/:iD' component={ Update } />
    </Layout>
);
