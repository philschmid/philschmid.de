import React from 'react';
import Layout from '../components/default/Layout/Layout';
import SEO from '../components/default/SEO/SEO';
export default () => {
  return (
    <Layout>
      <SEO pathname={'imprint'} title={'Imprint'} description={'Imprint of my blog'} />
      <div className="lg:container mx-auto">
        <br />

        <br />

        <h1>Imprint</h1>
        <br />
        <h2>Information pursuant to § 5 TMG</h2>
        <br></br>

        <p>
          Philipp Schmid
          <br />
          Schopenhauerstr. 36
          <br />
          90409 N&uuml;rnberg
        </p>

        <h2>Contact</h2>
        <br></br>

        <p>E-Mail: schmidphilipp1995@gmail.com</p>
        <h2>Liability for Contents</h2>
        <br></br>

        <p>
          As service providers, we are liable for own contents of these websites according to p 7, Sect. 1 German
          Telemedia Act (TMG). However, according to ps 8 to 10 German Telemedia Act (TMG), service providers are not
          obligated to permanently monitor submitted or stored information or to search for evidences that indicate
          illegal activities.
        </p>
        <p>
          Legal obligations to removing information or to blocking the use of information remain unchallenged. In this
          case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents
          will be removed immediately at the time we get knowledge of them.
        </p>
        <h2>Liability for Links</h2>
        <br></br>

        <p>
          Our offer includes links to external third party websites. We have no influence on the contents of those
          websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are
          always responsible for their own contents.
        </p>
        <p>
          The linked websites had been checked for possible violations of law at the time of the establishment of the
          link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of
          linked websites cannot be imposed without reasonable indications that there has been a violation of law.
          Illegal links will be removed immediately at the time we get knowledge of them.
        </p>

        <h2>Copyright</h2>
        <br></br>

        <p>
          Contents and compilations published on these websites by the providers are subject to German copyright laws.
          Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law
          require a written permission of the author or originator. Downloads and copies of these websites are permitted
          for private use only.
        </p>
        <p>The commercial use of our contents without permission of the originator is prohibited.</p>
        <p>
          Copyright laws of third parties are respected as long as the contents on these websites do not originate from
          the provider. Contributions of third parties on this site are indicated as such. However, if you notice any
          violations of copyright law, please inform us. Such contents will be removed immediately.
        </p>
      </div>
    </Layout>
  );
};
