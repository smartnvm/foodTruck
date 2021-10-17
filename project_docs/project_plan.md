

# [PROJECT PLAN]

## Day 1: Project planning
  [x] User story (HL)
  [x] Wireframe (Mays)
  [x] Web app flow (AJ)
  [x] views mock-up (AJ)
  [x] ERD (Mays)
      - menu_dishes
      - orders
  [x] SPA vs `MPA`
    - decided on a multi page approach with SPA *behaviour*
      - one for customer order (one desktop/one mobile)
      - one page for restaurant owner (dashboard like with order# and time placed)

## Day 2: Tasks Definition 
  [] Front End
    [] skeleton template for web-app views
    [] order page
    []
    [] Restaurant views
  [] Routes
    [] Customers views
    [] Restaurant views
  [] Routes
    [] Customers views
    [] Restaurant views

## Day 3: 
  []

## Day 4
  []

## Day 5
  []

## Day 6
  []


# Web-app Front End Structure

- landing page
  - header [logo   | Cart]
  - nice backgrond photos slideshow :)
  - Order now button 
## html [layout.css]
- header [header.css]
- main  
    - restauarnt [orders.css] OR
    - customer   [items.css]
- lef side bar [navbar.css]
- right side bar [cart.css]
- footer [foot.css] 

## CSS 
  - layout.css          //main page styling
  - header.css          //header styling
    - flex box
  - navbar.css          //left side bar styling
  - cart.css            //right side bar styling
  - orders.css          //orders styling
    - order-container
  - items.css           //food items styling
    - food-container       
  - order_form.css      //styling for 
  - footer.css          //optional (c) MAH Team Awesome 2021 ;)



# Web-app Back End

## Views

- 
- login.ejs
- order_new.ejs
- order_form.ejs
- cart_show
- 


## End Points

 `route.use ("/api/orders","/")`





  - button to toggle menu
  - button to show cart `$Total (5 items)`

- button to show cart `$Total (5 items)`  
  - item
  - Renders items

- button to toggle menu



# cart.css

 lineItem () generate template 

```js

subtotal = (qty, price) {

  return (qty * price )

}
 lineItem = `

 <div> My order ${sum(items.qty)} items </div>
 <tr>
    <td> x${items.qty} 
    <td> ${items.description} 
    <td> ${subtotal(items.qty, items.price)}
 </tr>
 ` 


