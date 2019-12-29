import React, { Component } from 'react'
import Tour from '../Tour/Tour';
import './TourList.scss';
import './tourData';
import { tourData } from './tourData';



export default class TourList extends Component {
    state={
        tours:tourData
    };
    removeTour=id=>{
        const{tours}=this.state;
        const sortedTour=tours.filter(tour=>tour.id !==id)
        this.setState({
            tours:sortedTour
        });
    }
    render() {
        const {tours}= this.state;
        return (
            
            <div> 
                 
                <section className="tourList">
                  {tours.map(tor=>{
                      return(
                          <Tour key={tor.id} tour={tor} removeTour={this.removeTour}/>
                      )
                  })}
                </section>
                
              
                
            </div>
        )
    }
}
