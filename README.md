# hastebin-clone-vue

I built the full stack clone of the hastebin web app which allows us to create and share the code snippets.
I used following tech :-
Front-End:- Vue, Vuex Store
Back-End:- Node, Express
Database:- MongoDB

Major Features:-
1)Creation of Snippet
2)Sharing it's URL
3)Displaying Snippet
3)Text Highlighting.

How Major Features Implemented:-
1) Creation of snippet is done using textarea and Vue directive v-model and stored in Vuex store.
2) Here we use MongoDB to store the data and after saving snippet we just return URL of snippet to display.
3) Text highlighting is done using highligh.js library.
Project URL :- https://hastebin-clone.herokuapp.com/
Source Code :- https://github.com/akashghadge/hastebin-clone-vue
