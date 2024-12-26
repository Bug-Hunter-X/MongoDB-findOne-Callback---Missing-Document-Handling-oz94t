```javascript
const myQuery = { name: 'John Doe' };

db.collection('users').findOne(myQuery, (err, doc) => {
  if (err) {
    console.error('Error:', err);
  } else if (doc) {
    console.log('Found:', doc);
  } else {
    console.log('Not found.');
  }
});
```