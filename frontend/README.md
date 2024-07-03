# Shop Dashboard [JAI JAGADAMBA STORE]

This is a simple shop dashboard made using React + Typescript that allows you to add, edit, delete and view products in your shop. It also allows you to view the total number of products available and the total price of all products.

## Features to be added 

- [ ] Add a search bar to search for products by name in multiple languages such as English, hindi , bengali etc.
- [ ] Add a filter to filter products by price, category, etc.
- [ ] Add dark/light mode toggle.
- [ ] Show cost of all products kept in the shop in the dashboard.
- [ ] Show total value of all products kept in the shop in the dashboard and on decrementing any product , the total value should also decrement as well as show the profit earned by selling the product.
- [ ] Add a feature to show the most sold product.
- [ ] Add a feature to show the least sold product.
- [ ] Customer book feature to keep track of customers who visit the shop along with their contact details and the products they bought which they are yet to pay for.

## Pages

- Home -> Shows the total number of products available and the total price of all products along with profit earned.
- Products -> Shows all the available products in the shop with pagination along with filter which can filter on the basis of color, price etc and multi language search capabilities.
- Customers -> Shows all customers with pending amount.
- Settings -> can change shop name , change shop address , change shop phone number , change shop email id , change shop logo.
- Profile -> can change password , change email id , change phone number , change profile picture , change shop owner name.
- Login -> Login page for the shop owner.
- Register -> Register page for the shop owner with email verification and validation of email and password using regex.
- SalesAnalytics -> Shows the most sold product and the least sold product in graphical format.

## Reason behind making this Application  

I have created this project for my parents who have a small shop and they want to keep track of the products they have in their shop. They want to know the total number of products available and the total price of all products along with all the above features mentioned which will greatly help them in managing their shop as they are single handedly working at the shop without any helpers and they tend to forget things.

## Technologies Used

- React Js
- Shad cn
- React Router
- React Icons 
- React Toastify
- React Query
- Axios

## File Structure

```
shop-dashboard
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── assets
│   │   ├── images
│   │   └── ...
│   ├── components
│   │   ├── AddProduct.tsx
│   │   ├── EditProduct.tsx
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Product.tsx
│   │   ├── Products.tsx
│   │   ├── Register.tsx
│   │   ├── SalesAnalytics.tsx
│   │   ├── Settings.tsx
│   │   └── Sidebar.tsx
│   ├── pages
│   │   ├── Customers.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Products.tsx
│   │   ├── Register.tsx
│   │   ├── SalesAnalytics.tsx
│   │   ├── Settings.tsx
│   │   └── Profile.tsx
│   ├── services
│   │   ├── api.ts
│   │   └── auth.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## How to run the project

1. Clone the repository
2. Run `npm install` to install all the dependencies
3. Run `npm start` to start the development server
4. Open `http://localhost:3000` to view the project in the browser
5. Enjoy!

## Screenshots

![Shop Dashboard](https://github.com/Monik2002)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Output

![Shop Dashboard](https://github.com/Monik2002)


# Conclusion

I have created a simple shop dashboard that allows you to add, edit, delete and view products in your shop. It also allows you to view the total number of products available and the total price of all products. I have also mentioned the features that I will be adding in the future. I hope you like this project. If you have any suggestions or feedback, feel free to reach out to me. Thank you for reading!
