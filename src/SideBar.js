import React from 'react';
// import pattern from './pattern-l.png';
import './SideBar.css';

// function SideBar(props) {
//       return (
//             <div className="sideBar">
//                   <div className="inneR">

//                         <img src={logoCM} alt="CMarmy" />
//                         <h1>Hello from sidebar</h1>
//                         <div>
//                               <h1>Hello, world!</h1>
//                               <h2>Time = {props.date.toLocaleTimeString()}.</h2>
//                         </div>
//                   </div>
//             </div>
//       );
// }


class SideBar extends React.Component {
      constructor(props) {
            super(props);
            this.state = { date: new Date(), isToggleOn: false };
      }
      componentDidMount() {
            this.timerID = setInterval(
                  () => this.tick(), 1000
            );
      }

      componentWillUnmount() {
            clearInterval(this.timerID);
      }
      tick() {
            this.setState({
                  date: new Date()
            });
      }
      handleClick() {
            this.setState(state => ({
                  isToggleOn: !state.isToggleOn
            }));


      }
      render() {
            var changeSeason = this.props.onSeasonChange;
            return (
                  <div className="sideBar">
                        <div className="inneR">
                              <h1 className="main-title"><b>RObotziDB</b></h1>
                              <ul className="season-list">
                                    <li onClick={()=>{
                                          changeSeason(1)
                                    }}>Season I</li>
                                    <li onClick={()=>{
                                          changeSeason(2)
                                    }}>Season II</li>
                                    <li onClick={()=>{
                                          changeSeason(3)
                                    }}>Season III</li>
                                    <li onClick={()=>{
                                          changeSeason(4)
                                    }}>Season IV</li>
                                    <li onClick={()=>{
                                          changeSeason(5)
                                    }}>Season V</li>
                              </ul>
                        </div>
                  </div>
            );
      }
}
export default SideBar;