import React from 'react'
class BasicInfo extends React.Component{
  render() {
    const { firstName, lastName, favNumber } = this.props.person;
      return (
           <ul>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{favNumber}</li>
        </ul> 
        )
    }
}

export default BasicInfo;