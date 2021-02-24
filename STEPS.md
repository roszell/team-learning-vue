
## Background / requirements
* Client needs an interactive inventory UI built.
* Some crappy developer named Dustin has started building it, but was quickly fired.

## Previous tasks
1) Set the store name dynamically. We want to sell this to other stores later!
2) Initially, we need to display the list of products on the screen. Include name and stock.
3) If stock is zero (or less o_0), show a warning in bold next to that item.
4) We need the ability to add / remove stock (increment/decrement stock) for a product. Add two buttons: Add Stock, and Remove Stock and make them work.
5) Add the ability to directly edit the stock for a product via an input.
6) At the bottom on the product list, include the total items in stock.


## New tasks
1) Add an internal Admin screen, move the Inventory Mangement stuff to it
2) Allow users to login with their username only
3) Make the Admin screen protected- only allowed if you are "logged in"
4) Add a Store screen to display the items to end users. For each item, show the name, and whether it is "In Stock" or "Out of Stock"
5) Add a product detail page that displays all the details for an individual product