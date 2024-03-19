import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Closed Prudent Jaguar</title>
        <meta property="og:title" content="Closed Prudent Jaguar" />
      </Helmet>
      <h1>
        <span>Turbo Reporting</span>
        <br></br>
      </h1>
      <div className="home-buttons">
        <button type="button" className="home-lastmonth button">
          last month
        </button>
        <button type="button" className="home-lastyear button">
          Compare: Previous year
        </button>
      </div>
      <div className="home-dashboards">
        <div className="home-dashboard">
          <div className="home-header">
            <h1 className="home-text003">Total Sales</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image"
            />
          </div>
          <div className="home-salesbar">
            <h1 className="home-text004">$421,444</h1>
            <div className="home-percentage">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text005">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer">
            <img alt="image" src="/chart-500h.jpeg" className="home-image01" />
          </div>
          <div className="home-buttomcontainer">
            <div className="home-prev">
              <span className="home-text006">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next">
              <span className="home-text007">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard01">
          <div className="home-header01">
            <h1 className="home-text008">Sessions</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image02"
            />
          </div>
          <div className="home-salesbar01">
            <h1 className="home-text009">$421,444</h1>
            <div className="home-percentage01">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text010">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer01">
            <img alt="image" src="/chart-500h.jpeg" className="home-image03" />
          </div>
          <div className="home-buttomcontainer01">
            <div className="home-prev01">
              <span className="home-text011">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next01">
              <span className="home-text012">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard02">
          <div className="home-header02">
            <h1 className="home-text013">AOV</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image04"
            />
          </div>
          <div className="home-salesbar02">
            <h1 className="home-text014">$421,444</h1>
            <div className="home-percentage02">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text015">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer02">
            <img alt="image" src="/chart-500h.jpeg" className="home-image05" />
          </div>
          <div className="home-buttomcontainer02">
            <div className="home-prev02">
              <span className="home-text016">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next02">
              <span className="home-text017">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard03">
          <div className="home-header03">
            <h1 className="home-text018">Conversion rate</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image06"
            />
          </div>
          <div className="home-salesbar03">
            <h1 className="home-text019">$421,444</h1>
            <div className="home-percentage03">
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text020">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer03">
            <img alt="image" src="/chart-500h.jpeg" className="home-image07" />
          </div>
          <div className="home-buttomcontainer03">
            <div className="home-prev03">
              <span className="home-text021">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next03">
              <span className="home-text022">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard04">
          <div className="home-header04">
            <h1 className="home-text023">MER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image08"
            />
          </div>
          <div className="home-salesbar04">
            <h1 className="home-text024">$421,444</h1>
            <div className="home-percentage04">
              <svg viewBox="0 0 1024 1024" className="home-icon08">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text025">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer04">
            <img alt="image" src="/chart-500h.jpeg" className="home-image09" />
          </div>
          <div className="home-buttomcontainer04">
            <div className="home-prev04">
              <span className="home-text026">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next04">
              <span className="home-text027">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard05">
          <div className="home-header05">
            <h1 className="home-text028">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image10"
            />
          </div>
          <div className="home-salesbar05">
            <h1 className="home-text029">$421,444</h1>
            <div className="home-percentage05">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text030">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer05">
            <img alt="image" src="/chart-500h.jpeg" className="home-image11" />
          </div>
          <div className="home-buttomcontainer05">
            <div className="home-prev05">
              <span className="home-text031">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next05">
              <span className="home-text032">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard06">
          <div className="home-header06">
            <h1 className="home-text033">CAC</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image12"
            />
          </div>
          <div className="home-salesbar06">
            <h1 className="home-text034">$421,444</h1>
            <div className="home-percentage06">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text035">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer06">
            <img alt="image" src="/chart-500h.jpeg" className="home-image13" />
          </div>
          <div className="home-buttomcontainer06">
            <div className="home-prev06">
              <span className="home-text036">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next06">
              <span className="home-text037">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard07">
          <div className="home-header07">
            <h1 className="home-text038">nCAC</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image14"
            />
          </div>
          <div className="home-salesbar07">
            <h1 className="home-text039">$421,444</h1>
            <div className="home-percentage07">
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text040">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer07">
            <img alt="image" src="/chart-500h.jpeg" className="home-image15" />
          </div>
          <div className="home-buttomcontainer07">
            <div className="home-prev07">
              <span className="home-text041">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next07">
              <span className="home-text042">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard08">
          <div className="home-header08">
            <h1 className="home-text043">Returning customer rate</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image16"
            />
          </div>
          <div className="home-salesbar08">
            <h1 className="home-text044">$421,444</h1>
            <div className="home-percentage08">
              <svg viewBox="0 0 1024 1024" className="home-icon16">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text045">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer08">
            <img alt="image" src="/chart-500h.jpeg" className="home-image17" />
          </div>
          <div className="home-buttomcontainer08">
            <div className="home-prev08">
              <span className="home-text046">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next08">
              <span className="home-text047">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard09">
          <div className="home-header09">
            <h1 className="home-text048">Items/order</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image18"
            />
          </div>
          <div className="home-salesbar09">
            <h1 className="home-text049">$421,444</h1>
            <div className="home-percentage09">
              <svg viewBox="0 0 1024 1024" className="home-icon18">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text050">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer09">
            <img alt="image" src="/chart-500h.jpeg" className="home-image19" />
          </div>
          <div className="home-buttomcontainer09">
            <div className="home-prev09">
              <span className="home-text051">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next09">
              <span className="home-text052">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard10">
          <div className="home-header10">
            <h1 className="home-text053">MOV</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image20"
            />
          </div>
          <div className="home-salesbar10">
            <h1 className="home-text054">$421,444</h1>
            <div className="home-percentage10">
              <svg viewBox="0 0 1024 1024" className="home-icon20">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text055">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer10">
            <img alt="image" src="/chart-500h.jpeg" className="home-image21" />
          </div>
          <div className="home-buttomcontainer10">
            <div className="home-prev10">
              <span className="home-text056">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next10">
              <span className="home-text057">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard11">
          <div className="home-header11">
            <h1 className="home-text058">60-day LTV to CAC</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image22"
            />
          </div>
          <div className="home-salesbar11">
            <h1 className="home-text059">$421,444</h1>
            <div className="home-percentage11">
              <svg viewBox="0 0 1024 1024" className="home-icon22">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text060">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer11">
            <img alt="image" src="/chart-500h.jpeg" className="home-image23" />
          </div>
          <div className="home-buttomcontainer11">
            <div className="home-prev11">
              <span className="home-text061">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next11">
              <span className="home-text062">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard12">
          <div className="home-header12">
            <h1 className="home-text063">LTV</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image24"
            />
          </div>
          <div className="home-salesbar12">
            <h1 className="home-text064">$421,444</h1>
            <div className="home-percentage12">
              <svg viewBox="0 0 1024 1024" className="home-icon24">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text065">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer12">
            <img alt="image" src="/chart-500h.jpeg" className="home-image25" />
          </div>
          <div className="home-buttomcontainer12">
            <div className="home-prev12">
              <span className="home-text066">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next12">
              <span className="home-text067">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard13">
          <div className="home-header13">
            <h1 className="home-text068">Contribution margin</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image26"
            />
          </div>
          <div className="home-salesbar13">
            <h1 className="home-text069">$421,444</h1>
            <div className="home-percentage13">
              <svg viewBox="0 0 1024 1024" className="home-icon26">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text070">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer13">
            <img alt="image" src="/chart-500h.jpeg" className="home-image27" />
          </div>
          <div className="home-buttomcontainer13">
            <div className="home-prev13">
              <span className="home-text071">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next13">
              <span className="home-text072">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard14">
          <div className="home-header14">
            <h1 className="home-text073">Contribution margin/order</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image28"
            />
          </div>
          <div className="home-salesbar14">
            <h1 className="home-text074">$421,444</h1>
            <div className="home-percentage14">
              <svg viewBox="0 0 1024 1024" className="home-icon28">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text075">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer14">
            <img alt="image" src="/chart-500h.jpeg" className="home-image29" />
          </div>
          <div className="home-buttomcontainer14">
            <div className="home-prev14">
              <span className="home-text076">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next14">
              <span className="home-text077">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard15">
          <div className="home-header15">
            <h1 className="home-text078">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image30"
            />
          </div>
          <div className="home-salesbar15">
            <h1 className="home-text079">$421,444</h1>
            <div className="home-percentage15">
              <svg viewBox="0 0 1024 1024" className="home-icon30">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text080">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer15">
            <img alt="image" src="/chart-500h.jpeg" className="home-image31" />
          </div>
          <div className="home-buttomcontainer15">
            <div className="home-prev15">
              <span className="home-text081">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next15">
              <span className="home-text082">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard16">
          <div className="home-header16">
            <h1 className="home-text083">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image32"
            />
          </div>
          <div className="home-salesbar16">
            <h1 className="home-text084">$421,444</h1>
            <div className="home-percentage16">
              <svg viewBox="0 0 1024 1024" className="home-icon32">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text085">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer16">
            <img alt="image" src="/chart-500h.jpeg" className="home-image33" />
          </div>
          <div className="home-buttomcontainer16">
            <div className="home-prev16">
              <span className="home-text086">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next16">
              <span className="home-text087">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard17">
          <div className="home-header17">
            <h1 className="home-text088">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image34"
            />
          </div>
          <div className="home-salesbar17">
            <h1 className="home-text089">$421,444</h1>
            <div className="home-percentage17">
              <svg viewBox="0 0 1024 1024" className="home-icon34">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text090">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer17">
            <img alt="image" src="/chart-500h.jpeg" className="home-image35" />
          </div>
          <div className="home-buttomcontainer17">
            <div className="home-prev17">
              <span className="home-text091">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next17">
              <span className="home-text092">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard18">
          <div className="home-header18">
            <h1 className="home-text093">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image36"
            />
          </div>
          <div className="home-salesbar18">
            <h1 className="home-text094">$421,444</h1>
            <div className="home-percentage18">
              <svg viewBox="0 0 1024 1024" className="home-icon36">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text095">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer18">
            <img alt="image" src="/chart-500h.jpeg" className="home-image37" />
          </div>
          <div className="home-buttomcontainer18">
            <div className="home-prev18">
              <span className="home-text096">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next18">
              <span className="home-text097">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard19">
          <div className="home-header19">
            <h1 className="home-text098">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image38"
            />
          </div>
          <div className="home-salesbar19">
            <h1 className="home-text099">$421,444</h1>
            <div className="home-percentage19">
              <svg viewBox="0 0 1024 1024" className="home-icon38">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text100">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer19">
            <img alt="image" src="/chart-500h.jpeg" className="home-image39" />
          </div>
          <div className="home-buttomcontainer19">
            <div className="home-prev19">
              <span className="home-text101">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next19">
              <span className="home-text102">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard20">
          <div className="home-header20">
            <h1 className="home-text103">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image40"
            />
          </div>
          <div className="home-salesbar20">
            <h1 className="home-text104">$421,444</h1>
            <div className="home-percentage20">
              <svg viewBox="0 0 1024 1024" className="home-icon40">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text105">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer20">
            <img alt="image" src="/chart-500h.jpeg" className="home-image41" />
          </div>
          <div className="home-buttomcontainer20">
            <div className="home-prev20">
              <span className="home-text106">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next20">
              <span className="home-text107">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard21">
          <div className="home-header21">
            <h1 className="home-text108">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image42"
            />
          </div>
          <div className="home-salesbar21">
            <h1 className="home-text109">$421,444</h1>
            <div className="home-percentage21">
              <svg viewBox="0 0 1024 1024" className="home-icon42">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text110">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer21">
            <img alt="image" src="/chart-500h.jpeg" className="home-image43" />
          </div>
          <div className="home-buttomcontainer21">
            <div className="home-prev21">
              <span className="home-text111">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next21">
              <span className="home-text112">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard22">
          <div className="home-header22">
            <h1 className="home-text113">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image44"
            />
          </div>
          <div className="home-salesbar22">
            <h1 className="home-text114">$421,444</h1>
            <div className="home-percentage22">
              <svg viewBox="0 0 1024 1024" className="home-icon44">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text115">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer22">
            <img alt="image" src="/chart-500h.jpeg" className="home-image45" />
          </div>
          <div className="home-buttomcontainer22">
            <div className="home-prev22">
              <span className="home-text116">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next22">
              <span className="home-text117">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard23">
          <div className="home-header23">
            <h1 className="home-text118">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image46"
            />
          </div>
          <div className="home-salesbar23">
            <h1 className="home-text119">$421,444</h1>
            <div className="home-percentage23">
              <svg viewBox="0 0 1024 1024" className="home-icon46">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text120">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer23">
            <img alt="image" src="/chart-500h.jpeg" className="home-image47" />
          </div>
          <div className="home-buttomcontainer23">
            <div className="home-prev23">
              <span className="home-text121">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next23">
              <span className="home-text122">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
        <div className="home-dashboard24">
          <div className="home-header24">
            <h1 className="home-text123">aMER</h1>
            <img
              alt="image"
              src="/search_icon-200h.jpeg"
              className="home-image48"
            />
          </div>
          <div className="home-salesbar24">
            <h1 className="home-text124">$421,444</h1>
            <div className="home-percentage24">
              <svg viewBox="0 0 1024 1024" className="home-icon48">
                <path d="M682.667 298.667v323.669l-353.835-353.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l353.835 353.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h426.667c5.803 0 11.307-1.152 16.341-3.243s9.728-5.163 13.824-9.259c3.925-3.925 7.083-8.619 9.259-13.824 2.091-5.035 3.243-10.539 3.243-16.341v-426.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
              </svg>
              <span className="home-text125">58%</span>
            </div>
          </div>
          <div className="home-chartcontainer24">
            <img alt="image" src="/chart-500h.jpeg" className="home-image49" />
          </div>
          <div className="home-buttomcontainer24">
            <div className="home-prev24">
              <span className="home-text126">1 Jan-3 Mar 2024</span>
            </div>
            <div className="home-next24">
              <span className="home-text127">30 Oct-31 Dec 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
