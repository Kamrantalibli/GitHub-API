import React, { Component } from 'react'

export class MainRight extends Component {
  render() {
    return (
      <div className="main-right">
        <h6>Latest changes</h6>
        <div class="vl"></div>
        <ul className='line'>
          <li>
            <span className="time">6 days ago</span><br />
            <span className="content">Dependabot alerts paused for malware advisories</span>
          </li>
          <li>
            <span className="time">6 days ago</span><br/>
            <span className="content">Autolinks with alphanumeric IDs</span>
          </li>
          <li>
            <span className="time">7 days ago</span><br />
            <span className="content">The new GitHub Issues – June 30th update</span>
          </li>
          <li>
            <span className="time">8 days ago</span><br />
            <span className="content">Dependabot alerts: Dependency scope filter via GraphQL API</span>
          </li>
        </ul>
        <h6 className='has6'>Explore repositories</h6>

        <span className="title">meilisearch/meilisearch</span><br />
        <span className="content-2">An open-source, lightning-fast, and hyper-relevant search engine that fits effortlessly into your apps, websites, and workflow.</span>
        <div className="sectwo">
          <div className="rust"><span className='prog'>     </span> <span> Rust</span></div>
          <div className="star"><i class="fa-regular fa-star"></i><i>  27.8 k</i></div>
        </div>
        <hr />
        <span className="title">meilisearch/meilisearch</span><br />
        <span className="content-2">An open-source, lightning-fast, and hyper-relevant search engine that fits effortlessly into your apps, websites, and workflow.</span>
        <div className="sectwo">
          <div className="rust"><span className='prog'>     </span> <span> Rust</span></div>
          <div className="star"><i class="fa-regular fa-star"></i><i>  83.8 k</i></div>
        </div>
        <hr />
        <span className="title">meilisearch/meilisearch</span><br />
        <span className="content-2">An open-source, lightning-fast, and hyper-relevant search engine that fits effortlessly into your apps, websites, and workflow.</span>
        <div className="sectwo">
          <div className="rust"><span className='prog-two'>     </span> <span> Rust</span></div>
          <div className="star"><i class="fa-regular fa-star"></i><i>  27.3 k</i></div>
        </div>
        <hr />
      </div>
    )
  }
}

export default MainRight