```javascript
const myQuery = { name: 'John Doe' };

db.collection('users').findOne(myQuery, (err, doc) => {
  if (err) {
    console.error('Error searching for John Doe:', err); // Improved error message
  } else if (doc) {
    console.log('Found:', doc);
  } else {
    console.log('No document found matching query:', myQuery); // Added query context
  }
});
```