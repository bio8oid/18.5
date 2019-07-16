var contacts = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  },
  {
    id: 2,
    firstName: 'Mark',
    lastName: 'Twain',
    email: 'mark.twain@example.com'
  },
  {
    id: 3,
    firstName: 'Jack',
    lastName: 'Smith',
    email: 'jack.smith@example.com'
  }
];


var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    });

    return (
      React.createElement('ul', {className: 'contactsList'}, contacts)
    );
  }
});