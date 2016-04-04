import React from 'react'

export default class NavigationItem extends React.Component {
  render() {
    var items = this.props.items
    let plusLinkTo = this.props.plusLinkTo

    return (
      <ul>
        {items.map(function(item, index) {
          {switch(item) {
            case "plus":
              return (
                <li key={index} className={item}>
                  <a href={plusLinkTo}></a>
                </li>
              )

            default:
              console.log(item, " zit er niet in")

          }}
        })}
      </ul>
    )
  }
}
