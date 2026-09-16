import React ,{Component} from 'react';


class Greet extends Component{
    render(){
        return(
            <h1>hello {this.props.name} a.ka {this.props.heroName}</h1>
        )
    }

}
export default Greet