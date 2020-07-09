import React from 'react';

const Portfolio = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="portfolio"
  >
    <div className="w-100">
      <h2 className="mb-5">Portfolio</h2>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Long Leaf Designs</h3>
          <div className="subheading mb-3">
            ReactJS, Shopify, and Material UI. <br />
            <div className="resume-date text-md-right">
              <a href="https://www.longleafdesigns.com">
                Long Leaf Designs Site
              </a>
              and
              <a href="https://store.longleafdesigns.com">Shopify Demo</a>
            </div>
          </div>
          <p>
            Long Leaf Designs is my freelance company website. The page is made
            using ReactJS and a number of other tools. It's is mobile first
            conversion focused website with optimized SEO and speed. The contact
            page is made using AWS Lambda and NodeJS. Additionally there is a{' '}
            <a href="https://store.longleafdesigns.com">Shopify Demo Store</a>{' '}
            subdomain. The Shopify store is built using JavaScript Buy SDK to
            retrieve the store data and provide a ReactJS frontend.
          </p>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Web Developer</h3>
          <div className="subheading mb-3">Intelitec Solutions</div>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing solely on the
            bottom line.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">December 2011 - March 2013</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Junior Web Designer</h3>
          <div className="subheading mb-3">Shout! Media Productions</div>
          <p>
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximise the long tail. Keeping your eye on the ball
            while performing a deep dive on the start-up mentality to derive
            convergence on cross-platform integration.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">July 2010 - December 2011</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
        <div className="resume-content">
          <h3 className="mb-0">Web Design Intern</h3>
          <div className="subheading mb-3">Shout! Media Productions</div>
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI.
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">September 2008 - June 2010</span>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
