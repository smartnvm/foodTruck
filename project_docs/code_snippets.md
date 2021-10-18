# Client Side JS (client.js) 
```js
/*  
  making a get request to fetch data
  
  /api/menu
  /api/orders

  passing endpoint as a variable for code re - use
*/

  const fetchData = (endpoint) => {
    $.ajax({
      url: `${endpoint}`,
      method: "GET",
      dataType: "json",
      success: (data) => {
        if (endpoint === "/api/menu") {
          //Mays case
          generateItems(data);

        } else if (endpoint === '/api/orders')
          //Hasan case
          generateOrders(data);
      },
      error: (err) => {
        console.log(`there was an error: ${err}`);
      }
    });
  };

```



// psql get date from timestamp

```sql

lightbnb=# select start_date::timestamp::date from reservations limit 2;
start_date 
------------
 2018-09-11
 2019-01-04

lightbnb=# select extract(day from start_date) from reservations limit 2;
 date_part 
-----------
        11
         4

```
