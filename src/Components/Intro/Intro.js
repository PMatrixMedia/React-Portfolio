import * as React from "react";
import { Parallax } from '@react-spring/parallax';
import PropTypes from 'prop-types'; // <<<< IMPORT PROPTYPES
import "./Intro.css";
// import "../../bootstrap.css";

// The Page component
const Page = ({
  offset,
  gradient,
  caption,
  first,
  second,
  pageNumber,
  navPath,
  speed, // speed was already in the destructuring
  history,
}) => (
  <Parallax.Layer
    offset={offset}
    speed={speed}
    onClick={() => {
      // The errors like 'navPath.startsWith' is missing in props validation
      // will be resolved by defining navPath and history in propTypes.
      if (navPath && history) {
        if (navPath.startsWith('http://') || navPath.startsWith('https://')) {
          window.open(navPath, '_blank', 'noopener,noreferrer');
        } else {
          history.push(navPath);
        }
      }
    }}
    style={{
      cursor: navPath ? 'pointer' : 'default',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: pageNumber,
    }}
  >
    <div className={`circle-container ${gradient}`}>
      <span className="page-number-on-circle">0{pageNumber}</span>
      <div className="circle-text-content">
        <p style={{ fontSize: '20px', margin: '5px 0' }}>{caption}</p>
        <div className={`stripe-within-circle ${gradient}`} style={{ padding: '10px', margin: '10px 0' }}>
          <p style={{ fontSize: '20px', margin: '5px 0' }}>{first}</p>
          {second && <p style={{ fontSize: '10px', margin: '5px 0' }}>{second}</p>}
        </div>
      </div>
    </div>
  </Parallax.Layer>
);

// vvvv DEFINE PROPTYPES FOR Page vvvv
Page.propTypes = {
  offset: PropTypes.number.isRequired,
  gradient: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  second: PropTypes.string, // Assuming 'second' can be optional
  pageNumber: PropTypes.number.isRequired,
  navPath: PropTypes.string, // Assuming 'navPath' can be optional or an empty string
  speed: PropTypes.number,   // Added speed here
  history: PropTypes.shape({ // For the history object from React Router
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// (Optional) Define defaultProps if any prop isn't always required and has a default
Page.defaultProps = {
  second: '',
  navPath: '',
  speed: 0.2, // Default speed as you had it in destructuring
};
// ^^^^ END PROPTYPES DEFINITION ^^^^

export default class Intro extends React.Component {
  // Props for Intro itself would be defined on Intro.propTypes if needed
  // For example, React Router passes history, location, match
  static propTypes = {
    history: PropTypes.object.isRequired, // Example if Intro needs to declare it too
    // location: PropTypes.object.isRequired,
    // match: PropTypes.object.isRequired,
  };

  render() {
    const { history } = this.props;

    const pageData = [
      { offset: 0, gradient: "pink", caption: "PhaseMatrix Media", first: "Click Circle to Explore", second: "Main Site", navPath: "/main", speed: 0.1 },
      { offset: 0.6, gradient: "teal", caption: "All things VR & AR", first: "Projects & Services", navPath: "https://phasevr-pmatrix.vercel.app/", speed: 0.3 }, // Removed 'second' to test optional prop
      { offset: 1.2, gradient: "tomato", caption: "Who I am", first: "Portfolio", navPath: "/about", speed: 0.2 } // Removed 'second'
    ];

    const lastPage = pageData[pageData.length - 1];
    const totalPages = lastPage.offset + 1;

    return (
      <Parallax
        className="parallax-container"
        ref={ref => (this.parallax = ref)}
        pages={totalPages}
        horizontal={false}
      >
        {pageData.map((page, index) => (
          <Page
            key={index}
            offset={page.offset}
            gradient={page.gradient}
            caption={page.caption}
            first={page.first}
            second={page.second} // Will use defaultProp if page.second is undefined
            pageNumber={index + 1}
            navPath={page.navPath}
            speed={page.speed}
            history={history}
          />
        ))}
      </Parallax>
    );
  }
}