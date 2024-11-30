FlipDeal - Product Listing
Flip Deal Product Listing Page
Introduction
FlipDeal is an eCommerce company that has expanded its product range from fitness to now selling various kinds of phones.

Copy/Paste the given array of products from the below link ( Feel free to modify the values of the products )

https://gist.github.com/imrhlrvndrn/21b7e1996abf7226c8beceb86a76c7b8



Instructions
Make sure you return the JSON of products in the format res.json({ products: sortedProducts }) where sortedProducts is the variable name used to store the result

Before declaring the API Endpoints, make sure you import cors to the code.



Note: Don’t forget to add:

let cors = require('cors');

app.use(cors());


Now, for FlipDeal you need to create APIs which filters out the products based on various conditions:

Endpoint 1: Get the products sorted by popularity
Write an Express code snippet to sort products based on their individual ratings.

Instructions:

Define an endpoint /products/sort/popularity using the get method.

Define a variable sortedProducts to create a condition to sort the products on their ratings (high to low)

Send the filtered products as a JSON response.

API Call:

<http://localhost:3000/products/sort/popularity>
Expected Output:

JSON of sorted products on popularity


Endpoint 2: Get the products sorted by “high-to-low” price
Write an Express code snippet to sort products based on their individual pricing.

Instructions:

Define an endpoint /products/sort/price-high-to-low using the get method.

Define a variable sortedProducts to create a condition to sort the products on their pricing (high to low)

Send the filtered products as a JSON response.

API Call:

<http://localhost:3000/products/sort/price-high-to-low>
Expected Output:

JSON of sorted products on pricing (High to Low)


Endpoint 3: Get the products sorted by “low-to-high” price
Write an Express code snippet to sort products based on their individual pricing.

Instructions:

Define an endpoint /products/sort/price-low-to-high using the get method.

Define a variable sortedProducts to create a condition to sort the products on their pricing ( low to high)

Send the filtered products as a JSON response.

API Call:

<http://localhost:3000/products/sort/price-low-to-high>
Expected Output:

JSON of sorted products on pricing (Low to High)


Endpoint 4: Filter the products based on the “RAM” option.
Write an Express code snippet to filter products based on the selected RAM option.

Instructions:

Define an endpoint /products/filter/ram using the get method.

Implement a function filterByRam that returns the products if it meets the selected RAM configuration.

Send the filtered products as a JSON response.

API Call:

<http://localhost:3000/products/filter/ram?ram=8>
Expected Output:

JSON of products with RAM=8 GB


Endpoint 5: Filter the products based on the “ROM” option.
Write an Express code snippet to filter products based on the selected ROM option.

Instructions:

Define an endpoint /products/filter/rom using the get method.

Implement a function filterByRom that returns the products if it meets the selected ROM configuration.

Send the filtered products as a JSON response.

API Call:

<http://localhost:3000/products/filter/rom?rom=64>
Expected Output:

JSON of products with ROM=64 GB


Endpoint 6: Filter the products based on the “Brand” option.
Write an Express code snippet to filter products based on the selected Brand option.

Instructions:

Define an endpoint /products/filter/brand using the get method.

Implement a function filterByBrand that returns the products for the specified brand category

While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive

Use the .toLowerCase() string function

Send the filtered products as a JSON response.

API Call:

<http://localhost:3000/products/filter/brand?brand=apple>
Expected Output:

JSON of products with brand = apple


Endpoint 7: Filter the products based on the “OS” option.
Write an Express code snippet to filter products based on the selected OS option.

Instructions:

Define an endpoint /products/filter/os using the get method.

Implement a function filterByOs that returns the products for the specified OS configuration.

While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive

Use the .toLowerCase() string function

Send the filtered products as a JSON response.

API Call:

<http://localhost:3000/products/filter/os?os=Android>
Expected Output:

JSON of products with OS= Android


Endpoint 8: Filter the products based on the “Price” option.
Write an Express code snippet to filter products based on the selected price option.

Instructions:

Define an endpoint /products/filter/price using the get method.

Implement a function filterByPrice that returns the products for the products less than or equal to the specified price filter.

Send the filtered products as a JSON response.

API Call:

<http://localhost:3000/products/filter/price?price=30000>
Expected Output:

JSON of products with Price <= 30000


Endpoint 8: Send original array of products
Write an Express code snippet to send all available products.

Instructions:

Define an endpoint /products using the get method.

Send the products array as a JSON response.

API Call:

<http://localhost:3000/products>
Expected Output:

JSON of products


Once done, test your implemented code on the frontend here: https://bd2-listing-page.vercel.app/ after deploying it on Vercel.



What are the various user actions?
Select the following sorting options and see the products getting sorted:

Popularity

Price hight-to-low

Price low-to-high

Select any filter based on the:

RAM

ROM

OS

Brand

Price

The products are listed based on the filters applied.

How to integrate the Backend APIs with FlipDeal’s Frontend UI?
Deploy your StackBlitz project to Vercel by following the steps in this document.
You can also watch this video for reference: https://drive.google.com/file/d/18OCtAhMJtplpC1Hi5msUxyGSLy849K8d/view?usp=sharing

Copy the Dev URL (also known as the Express URL).

Once done, go to this link: https://bd2-listing-page.vercel.app/

Paste your Vercel URL to the Server URL text box.

Once you click “Save Changes”, it will show the Product Listing page with various filters and sorting parameters.



You are done!!