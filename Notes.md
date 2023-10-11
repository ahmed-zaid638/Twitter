===============  INFO ==============
- app folder is the hero of the project
- desktop => make text , mobile make icon
- opacity chnage the background and text , you can sepcify only to change one of theme
- seperate logic from ui  like =>  loginModal(ui) , useLoginModal (logic)
- if you add sync before any function it will be a promise
- hooks = logic 
- Either use 'npm i package --save-dev'  or 'npm i  -D  package'
- bcrypt.compare(first , second)
- debug : process.env.NODE_ENV = "develoment"
- NextApiRequest , NextApiReponse  from next
- Register doesnt need auth
- Modal its a kind of UI
- after regiseter you have to signIn
- usecallback dependency array dependent on the body of the function
- session is used for sign in , not for  register
- if you want to fetch data from the backend just start url with api and you dont have to sepicify the full path (/api/anything)
- any file exist in api folder consider backend  other than this is Front end
- when using tailwind with form , the input field will not have border 
- we submit we can select its elements by it name filed  , and use the value of the name
- the value of file input is the path of selected file
- API key , API environment variable
- we can setup function that returns true or false value
- is(text) => means you want to return boolean value

========= Mindset ===========
- Catching rendering errors with an error boundary 
- You are designing the UI and you have the logic side you 
- In Auth UI you shoul depend on toggling modals not redirect urls
- console showing the error ,  termnail showing the source of this error
- you sould always ensure that data is safely deliverd to the front end
- 


============= Errors ===============
[1] API handler should not return a value, received object
- means that the backend route (response) should not  return value , should be json formate
[2] 400 => Bad Request : problem with fetching data or data undefined
    404 => Not Found   : the requste url not existed in the project api folder
[3] The error "Property 'Example' does not exist on type 'never'" 
   - occurs when TypeScript cannot infer the type and it defaults to the 'never' type
   - To fix this issue, you need to ensure that TypeScript correctly understands the shape of that type
[4]

============== Prisma  ==========
- npx prisma db push


============ Qustions ===========
- difference between getSession , getServerSession

============== Conepts ============
- API Handler: function responsible for handling incoming API requests and providing responses

======== Upcoming Features =======
- search user
- share post
- who liked the post
- like button animation 
- show commnents feed
- 