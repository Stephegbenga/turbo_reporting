import React from 'react'

import { Helmet } from 'react-helmet'

import './setting.css'

const Setting = (props) => {
  return (
    <div className="setting-container">
      <Helmet>
        <title>setting - Closed Prudent Jaguar</title>
        <meta property="og:title" content="setting - Closed Prudent Jaguar" />
      </Helmet>
      <h1>
        <span>Turbo Reporting</span>
        <br></br>
      </h1>
      <div className="setting-titleandsubtitle">
        <h1 className="setting-text03">Welcome to Turbo Reporting</h1>
        <span className="setting-text04">
          Before we dive into the world of streamline reporting, we&apos;ve got
          a few quick questions to tailor your experience. This short setup will
          ensure Turbo Reportings brings the most relevent and impactful sights
          directly to your dashboard. 
        </span>
      </div>
      <div className="setting-somesetup">
        <h1 className="setting-text05">Where should we pull your COGS from?</h1>
        <span className="setting-text06">
          We use this to calculate your true profitability
        </span>
        <div data-thq="thq-dropdown" className="setting-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="setting-dropdown-toggle"
          >
            <span className="setting-text07">Shopify</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="setting-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="setting-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="setting-dropdown-list">
            <li data-thq="thq-dropdown" className="setting-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="setting-dropdown-toggle1"
              >
                <span className="setting-text08">Shopify</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="setting-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="setting-dropdown-toggle2"
              >
                <span className="setting-text09">Manual Input</span>
              </div>
            </li>
          </ul>
        </div>
        <span>
          <span className="setting-text11">Tip:</span>
          <span>
            {' '}
            if you don&apos;t already have COGS data in Shopify,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="setting-text13">here&apos;s how to upload it</span>
        </span>
        <div className="setting-navbuttons">
          <button type="button" className="setting-button button">
            Back
          </button>
          <button type="button" className="setting-button1 button">
            Next
          </button>
        </div>
      </div>
      <div className="setting-somesetup1">
        <h1 className="setting-text14">
          What are your merchant facility costs per transaction?
        </h1>
        <span className="setting-text15">
          We use this to calculate your true profitability
        </span>
        <div className="setting-inputs">
          <div className="setting-container1">
            <input
              type="text"
              placeholder="1.5"
              className="setting-textinput input"
            />
            <span className="setting-text16">%</span>
          </div>
          <h1 className="setting-text17">+</h1>
          <div className="setting-container2">
            <span className="setting-text18">$</span>
            <input
              type="text"
              placeholder="0.05"
              className="setting-textinput1 input"
            />
          </div>
        </div>
        <div className="setting-navbuttons1">
          <button type="button" className="setting-button2 button">
            Back
          </button>
          <button type="button" className="setting-button3 button">
            Next
          </button>
        </div>
      </div>
      <div className="setting-averageshippingcost">
        <h1 className="setting-text19">
          What&apos;s your average shipping cost per order?
        </h1>
        <span className="setting-text20">
          We use this to calculate your true profitability
        </span>
        <span>
          <span className="setting-text22">Tip:</span>
          <span>
            {' '}
            if you don&apos;t already have COGS data in Shopify,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="setting-text24">here&apos;s how to upload it</span>
        </span>
        <div className="setting-averageshippingcostinput">
          <span className="setting-text25">$</span>
          <input
            type="text"
            placeholder="20"
            className="setting-textinput2 input"
          />
        </div>
        <div className="setting-navbuttons2">
          <button type="button" className="setting-button4 button">
            Back
          </button>
          <button type="button" className="setting-button5 button">
            Next
          </button>
        </div>
      </div>
      <span className="setting-text26">
        <span>
          Your data, your insights: Your responses will remain confidential and
          will only be used to enhance your Turbo Reporting experience. The more
          accurate the information, the more precise our analytics will be in
          guiding your business decisions
        </span>
        <br></br>
      </span>
    </div>
  )
}

export default Setting
