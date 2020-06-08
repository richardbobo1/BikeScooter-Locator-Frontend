import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Link} from 'react-router-dom'
import { Icon } from 'semantic-ui-react'


export default class FavRoute extends React.Component{
    render(){
        return (
            
            
            <div className="ui card">
            <div className="image">
                <img src={this.props.route.google_map} className="route-image"/>
            </div>
            <div className="content">
                <a className="header">
                        {this.props.route.name}
                </a>
                <div className="meta">
                    {this.props.route.difficulty}, {this.props.route.surface}
                </div>
                <div className="description">
                    {this.props.route.description}
                    <br />
                    <br />
                    <p>
                        <b> {this.props.route.description}  </b>
                    </p>
                </div>

            </div>
            <div class="extra content">
                 <div class="ui three buttons">
                    <div class="ui basic green button">Favorite</div>
                    <div class="ui basic red button">Decline</div>
             
                </div>
            </div>

                <div class="ui bottom attached button">
                    <Link to={`/bikeroutes/${this.props.route.id}`} > 
                        <Icon name='bicycle' />VIEW ROUTE
                    </Link>
                </div>
           
        </div>






           
        )
    }

}