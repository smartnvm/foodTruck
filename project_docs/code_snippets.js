//front end AJAX stuff


// making a get request to fetch data

/*
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
      //Mays case
      if (endpoint === "/api/menu") {
        generateItems(data);
        generate;
        //Hasan case

      } else if (endpoint === '/api/orders')
        generateOrders(data);
    },
    error: (err) => {
      console.log(`there was an error: ${err}`);
    }
  });
};
