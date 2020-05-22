import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Tag extends Component{
  render() {
    const { name, buttonColor, setTag, tag, activeTag } = this.props
    let tagClassName  = "col-xs-4 bt"
    let buttonBG = {}
    if (activeTag === tag){
      tagClassName += " active"
      buttonBG = {background: buttonColor}
    }
    console.log(tagClassName)
    return (
      <li className={tagClassName}>
        <a className="button" href="/"
          onClick={e => {
              e.preventDefault()
              setTag(tag)
          }}
          style={buttonBG}
        >
          {name}
        </a>
      </li>
    )
  }
}
Tag.propTypes = {
  name: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  setTag: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired
}


export class TagFilter extends Component{
  render() {
    const { tags, buttonColor, activeTag } = this.props

    return(
      <>
      <div className="tab_toggle products_cat">
        <div className="container p0">
          <div className="row">
            <ul className="buttons">
              {tags.map((tag) => {
                return (
                  <Tag
                    key={tag.slug}
                    name={tag.name}
                    buttonColor={buttonColor}
                    setTag={this.props.setTag}
                    tag={tag.slug}
                    activeTag={activeTag}
                  />
                )
               })}
            </ul>
          </div>
        </div>
      </div>
      </>
    )
  }
}
TagFilter.propTypes = {
  setTagFilter: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  buttonColor: PropTypes.string.isRequired
}

