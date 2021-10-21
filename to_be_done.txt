# _Food_ Truck App


## To do list

The following remains to be done

1. implement SMS API call once order estimate time is provided
   - the hooks are in place, need to set up Twilio account for demo purpose
   - edit the .env file with TOKEN and SID information
   
```js
    TWILIO_AUTH_TOKEN=TOKEN_zzzzzzzzzzzzzz
    TWILIO_ACCOUNT_SID=SID_xxxxxxxxxxxxxxx
```
   
   - place Twilio API call inside `/routes/admin.js` 

```js
   router.post("/orders/update", (req, res) => {
```


3. implement order complete notification both via web and SMS API call.
  -  hooks in place when customer place an order, it renders `checkout`view - click on the demo button to show order information

  - right now it's done with a render from the back end, better approach to implement similar code in the front-end as you have direct access to  localstorage `cart`

  - 
