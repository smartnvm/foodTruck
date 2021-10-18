

# [PROJECT PLAN]

## Day 1: Project Planning
  [x] User story (HL)
  [x] Wireframe (Mays)
  [x] SPA vs `MPA`
    - decided on a multi page approach with SPA *behaviour*
      - one for customer order (one desktop/one mobile)
      - one page for restaurant owner (dashboard like with order# and time placed)

## Day 2: Project Planning 
  [x] Web app flow (AJ)
  [x] views mock-up (AJ)
  [x] ERD (Mays)
      - menu_dishes
      - orders    

## Day 3: Sunday
  [] AJ skeleton HTML for all pages
    [] landing page
    [] cusomer view
    [] owner view
  [] backend route endpoints
    [] use dummy data in-memory objects

  [] client.js 
  [] hasan will take care of `createOrder`   
      [] hasan will take care of `renderOrders` 
    
  [] mays will take care of `createItem` 
    [] mays will take care of `renderItems`
  [] mays will take care of `creatLineItem` 
    [] mays will take care of `renderItems`
  

## Day 4 Monday
  []

## Day 5 Tuesday
  []

## Day 6 Wednsday 
  []

## Day 7 Thursday




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

- admin.ejs
- orders_show.ejs
- menu_index.ejs      //shows category
- menu_show.ejs
- 

- order_form.ejs
- cart_show.ejs
 


## End Points



 `route.use ("/api/orders","/")`

