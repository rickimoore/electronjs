import SideBar from "../components/SideBar/SideBar";
import {useEffect, useState} from "react";
import {DashboardView} from "../constants/enums";
import Base from "../views/Base";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Products from "../views/Products";
import TopBar from "../components/TopBar";
import Inbox from "../views/Inbox";
import useContainerSize from "../hooks/useContainerSize";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {dashboardView, isOpenSideBar} from "../recoil/atoms";

const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
    cache: new InMemoryCache(),
});

const Dashboard = () => {
  const [isLoaded, setLoaded] = useState(false);
  const view = useRecoilValue(dashboardView);
    const toggleSideBar = useSetRecoilState(isOpenSideBar);

    const { ref, width } = useContainerSize();

    useEffect(() => {
        if(!isLoaded && width) {
            if(width > 950) {
                toggleSideBar(true);
            }
            setLoaded(true);
        }
    }, [width, isLoaded])

  const renderView = () => {
      switch (view) {
          case DashboardView.INBOX:
              return <Inbox/>
          case DashboardView.PRODUCT:
              return <Products/>
          default:
              return <Base/>;
      }
  }
  return (
      <ApolloProvider client={client}>
          <div ref={ref} className="h-screen w-screen flex">
              <SideBar/>
              <div className="flex-1 bg-background overflow-scroll">
                  <TopBar/>
                  {renderView()}
              </div>
          </div>
      </ApolloProvider>
  )
}

export default Dashboard;