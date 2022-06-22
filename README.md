
This is a solution to a aircall application

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

After completing the site, 
users should be able to:

- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call
- **Archive** - the final user should be able to archive (and unarchive) a call. Archived calls will no longer be displayed on the Activity Feed and should have a separate Archived Tab.

### Screenshot
I added a screenshot of my solution here.

![](./assets/mobileView.jpeg)
![](./assets/moonPageView.jpeg)


### Deployment Link

- Solution Live-Site URL: [Add solution URL here](https://getacall.netlify.app/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
-JavaScript
- React.js
- React-icons
- React-routers


### What I learned

I Used this section to recap over some of my major learnings while working through this project. Writing these out and providing code samples of areas i wanted to highlight.

Doing this project:

* I learned to design a web application using React.js

* I used intensively CSS FlexBox.
* I Learned to use routers and react icons in my application




```css
/* for someone who is visually impaired */
Made sure to implement this content for only screen readers to help users without vision.
.sr-only{
    position: absolute;
    width:1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
}

.contacts
.settings
.incoming_calls
.footer_circle{
    display: inline-block;
    width: 20%;
    background-color: red;
 
}
.incoming_calls>.icon{
 
   width: 50px;
   height:100px; 
   color: #595858;
}
```
```js
function Navbar() {

  let activeStyle= {
    
      color: '#2b2929',
      fontweight: 600
    
  }
  return (
    <div className='nav_container'>
      <NavLink 
      to="incomingcalls"
      style={({isActive})=>
      isActive ? activeStyle:undefined
      }>
         <div className='hover dashed_line text_align'>Inbox</div>
      </NavLink>

      <NavLink to="allcalls" 
      style={({isActive})=>
      isActive ? activeStyle:undefined
      }>
         <div className='hover dashed_line text_align'>All calls</div>
      </NavLink>
     
      <NavLink to="archived" 
      style={({isActive})=>
      isActive ? activeStyle:undefined
      }>
        <div className='hover'><VscSettings/> </div>
      </NavLink>
      
    </div>
  )
}
```

### Continued development
However, I need to focus on how to use lesser and clearer codes.
I need to learn how to build the same application using Material Ui


### Useful resources

- [Example resource 1](https://www.youtube.com/kepowob) - This helped me learn how to better use CSS GRID. I really liked this pattern and will use it going forward.

## Author

- Website - [Chrys-Bimokono](https://chrysbim.com/index.html)

- Twitter - [@EnockBim](https://twitter.com/home)


## Acknowledgments
I really give thanks to the frontend community for their support and encouragement.



