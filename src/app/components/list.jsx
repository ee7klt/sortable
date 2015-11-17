const React = require('react');


const placeholder = document.createElement("li");
placeholder.className = "placeholder";

const List = React.createClass({


  dragStart (e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);
    //console.log(this.dragged)
  },
  dragEnd: function(e) {
    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(placeholder);

    // Update state
    console.log(this.dragged.dataset)
    //console.log(this.over)

    const data = this.state.data;
    const from = Number(this.dragged.dataset.id);
    let to = Number(this.over.dataset.id);
    if (from < to) to-- ;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
  },
  dragOver (e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if (e.target.className === "placeholder") return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);
  },

  getInitialState: function() {
    return {data: this.props.data};
  },
  render: function() {
    const listItems = this.state.data.map(function(item, i) {
      return (
        <li data-id={i}
          key={i}
          draggable="true"
          onDragEnd = {this.dragEnd}
          onDragStart = {this.dragStart}>
          {item}
        </li>


      )
    }, this);
    return <ul onDragOver={this.dragOver}>{listItems}</ul>
  },


});

module.exports = List
