import React, { useState } from 'react';

/* class Categories extends React.Component {
  state = {
    activeItem: 3,
  };

  onSelectItem = (index) => {
    this.setState({
      activeItem: index,
    });
  };

  render() {
    const { items } = this.props;

    return (
      <div className="categories">
        <ul>
          <li className="active">Все</li>
          {items.map((name, index) => {
            return (
              <li
                className={this.state.activeItem === index ? 'active' : null}
                onClick={() => this.onSelectItem(index)}
                key={`${name}_${index}`}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
} */

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : null}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => {
            return (
              <li
                className={activeCategory === index ? 'active' : null}
                onClick={() => onClickCategory(index)}
                key={`${name}_${index}`}>
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;
