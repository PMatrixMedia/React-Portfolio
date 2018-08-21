import React, {Component} from 'react'
import { Parallax } from 'react-spring'
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom'
import './Intro.css'

const Page = ({ offset, caption, first, second, gradient, onClick, button }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p></p>
        <p style={{ fontsize: 20}}>{first}</p>
        <p></p>
        <p style={{ fontsize: 10}}>{second}</p>
      </span>
    </Parallax.Layer>
    <Parallax.Layer className="site button" offset={offset} speed={0.5}>
      <span>
      <Button color="warning">Enter</Button>{'  '}
      </span>
  </React.Fragment>
)

export default class Intro extends Component {
    constructor(props){
        super();
    }
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
    
      <Parallax className="container" ref="parallax" pages={3} horizontal scrolling={false}>
        <Page offset={0} gradient="pink" caption="PhaseMatrix Media" first="Click to Scroll" second="Buttons Give You Access" onClick={() => this.scroll(1)} />
        <Page offset={1} gradient="teal" caption="All things VR" first="VR & AR" second="" onClick={() => this.scroll(2)} />
        <Page offset={2} gradient="tomato" caption="Who I am" first="Portfolio" second="" onClick={() => this.scroll(0)} />
      </Parallax>
    
    )
  }
}
ReactDOM.render(<Intro />, document.getElementById('root'))