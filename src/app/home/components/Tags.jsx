import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Tag extends Component{
  render() {
    const { name, buttonColor, setTag, tag } = this.props
    return (
      <li className="col-xs-4 active bt">
        <a className="button" href="/"
          onClick={e => {
              e.preventDefault()
              setTag(tag)
          }}
          style={{background: buttonColor}}
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
    const { tags, buttonColor } = this.props

    return(
      <>
			<div class="mt30"></div>
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

