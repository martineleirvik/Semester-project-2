# Semester-project-2
![image](https://user-images.githubusercontent.com/71706563/194698068-c7f0a1c6-af66-418d-b0d9-a4c631d5fca2.png)

Get use of everything we have learned so far to create an e-commerce website built with HTML og vanilla JavaScript and Sass.


## Description

The e-commerce website has both customer-facing and admin sections, which the admin sections is only visable to logged in admin users.

The data is populated by a Strapi API supplied by Noroff that is deployed locally. 


### Customer side

- Homepage: Includes a hero banner, with image provided by Strapi, and a list of featured products. 
- Products page: A list of all products with title, price and image. Each products links to its detail page. This page also have a search box which filters so that the products that include the searched text is listed. 
- Product detail page: Information about the product and an add to cart button, which toggle the product in and out of the cart array by using local storage.
- Cart: A list of the products added to the cart and the total price of all products added. 

### Admin side

- Login page: Validation and stores the user logged in in local storage. 
- Add/Edit products pages: Forms that allows the admin to add, edit or delete a product.


## Built With

- HTML
- Vanilla Javascript
- [SASS](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

## Getting Started

### Installing

Clone the repo:

```bash
git clone git@github.com:martineleirvik/Semester-project-2.git
```
