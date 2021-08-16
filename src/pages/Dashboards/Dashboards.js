import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../containers/Container';
import Analytics from '../Analytics';
import Banking from '../Banking';
import Blog from '../Blog';
import Booking from '../Booking';
import Commerc from '../Commerc';
import Commerce from '../Commerce';
import Home from '../Home';
import Mail from '../Mail';
import Users from '../Users';
import DashboardsWrapper from './DashboardsWrapper';

const Dashboards = () => {
    const { page } = useParams();
    console.log(page);

    return (
        <Container>
            <DashboardsWrapper>
                {page === "app" && <Home />}
                {page === "users" && <Users />}
                {page === "commerce" && <Commerce />}
                {page === "analytics" && <Analytics />}
                {page === "banking" && <Banking />}
                {page === "booking" && <Booking />}
                {page === "commerc" && <Commerc />}
                {page === "blog" && <Blog />}
                {page === "mail" && <Mail />}
            </DashboardsWrapper>
        </Container>
    )
}

export default Dashboards
