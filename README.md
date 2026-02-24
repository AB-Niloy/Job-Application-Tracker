1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : getElementById returns a single element with the specific ID and getElementsByClassName returns live HTMLCollection but the querySelector returns the first matching element and querySelectorAll
returns a static NodeList of all matches.

2. How do you create and insert a new element into the DOM?
Ans : newText = document.createElement('p');
      newText.innerText = 'This is a Paragraph';
     const container = document.getElementById('container');
     container.appendChild(newText);

3.  What is Event Bubbling? And how does it work?
Ans : Events triggered on a target element bubble up from the target to its parent elements. it starts from the parent to the target is called capturing and target to parent is called event bubbling

4. What is Event Delegation in JavaScript? Why is it useful?
Ans : A technique where a parent handles events of child elements using bubbling. Reduces number of event listeners and handles dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans : preventDefault() stops the browsers default action for an event from happening where stopPropagation() stops the event from bubbling up the DOM tree.
    
