![Foodie](https://raw.git.generalassemb.ly/3rendan/hfb/master/cart.gif)



# Foodie

The Foodie app allows users to create shopping lists tied to a user account. Lists can be shared between users.

**Badges will go here**

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

---

## Frontend 

The front end of this app takes advantage of the React framework and React Router Dom to build a dynamic single page website with multiple hrefs. The parent component App.js controls page permissions based on JWT authentication; if a user is authenticated, the index and other pages become accessible and render views unique to the specific authenticated user. Otherwise, only the home page is viewable until a visitor either signs up or logs in. In all, this app is built with 10 components, 7 of which represent specific hrefs/pages controlled through the switch router. 

---

## Backend 

On the back end, the app utilizes Passport for its user authentication. When initialized, a get request is sent to the Express api server that retrieves the specific authenticated user's username. The site then uses this value in the index and other page components in order to retrieve all lists associated with the specified username. This is made possible by the fact that each list model has an array field that tracks all users with viewing access. A username can be added to this field via the share-list page. Summarily, an edit performed on a list by any of the users who have access to it will register the same for all shared accounts. A user can also remove themselves from the list's users array field via the update-list page's delete button. It is important to note that a list will not be deleted from the database unless its users array field is completely empty, as the method contains a conditional which initiates either a put or delete request.

### Clone

- Clone this repo to your local machine using `https://github.com/pavloskaralis/foodie`


## Technologies used
  - ReactJS
  - MongoDB
  - Express
  - HTML
  - CSS
  - Javascript
  - Heroku

## Usage (Optional)
## Documentation (Optional)
## Tests (Optional)

- Going into more detail on code and technologies used
- I utilized this nifty <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for this sample `README`.

---

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/joanaz/HireDot2.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/joanaz/HireDot2/compare/" target="_blank">`https://github.com/joanaz/HireDot2/compare/`</a>.

---

## People

| <a href="http://fvcproductions.com" target="_blank">Brendan Ryan</a> | <a href="http://fvcproductions.com" target="_blank">Anna Filatrova</a> | <a href="http://fvcproductions.com" target="_blank">Pavlos Karalis</a> |
| :---: |:---:| :---:|
| [![Brendan Ryan](https://git.generalassemb.ly/3rendan.png?s=200)](http://brendanryan.space)    | [![]()](http://fvcproductions.com) | [![Pavlos Karalis](https://github.com/pavloskaralis.png?s=200)](URL)  |
| <a href="http://github.com/3rendan" target="_blank">`github.com/3rendan`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/pavloskaralis`</a> |

- You can just grab their GitHub profile image URL
- You should probably resize their picture using `?s=200` at the end of the image URL.

---

## FAQ

- How do I do share lists?
- Do I need to delete the list after all items from said list have been deleted?
    - No problem! Just do this.

---

## Support

Reach out to us through GitHub!

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**



