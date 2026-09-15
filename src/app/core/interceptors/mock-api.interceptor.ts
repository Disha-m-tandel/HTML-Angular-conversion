import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { User } from '../../models/userInterface';
import { of } from 'rxjs/internal/observable/of';

//NOTE : So interceptors are designed specifically for this kind of situation—logging, 
//adding authentication headers, handling errors, mocking APIs, etc.

//First if — get all users

//(req, next) : These are the two parameters Angular gives your interceptor.
//req  → information about the HTTP request
//next → the next step in the HTTP request chain
//(req, next) : These are the two parameters Angular gives your interceptor. req  → information about the HTTP request, next → the next step in the HTTP request chain
export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {//HttpInterceptorFn :This is the type for a functional HTTP interceptor.
//Your interceptor is: mockApiInterceptor is an Angular HTTP interceptor function.
//HttpResponse : This represents an HTTP response.
  const users: User[] = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      email: 'sarah@example.com',
      role: 'Admin',
      team: 'Operations',
      status: 'active',
      joined: 'Jan 12, 2026',
      profile: 'assets/images/avatar/avatar-2.jpg'
    },
    {
      id: 2,
      name: 'Rafi Khan',
      email: 'rafi@example.com',
      role: 'Manager',
      team: 'Sales',
      status: 'active',
      joined: 'Feb 03, 2026',
      profile: 'assets/images/avatar/avatar-3.jpg'
    },
    {
      id: 3,
      name: 'Nadia Islam',
      email: 'nadia@example.com',
      role: 'Editor',
      team: 'Content',
      status: 'pending',
      joined: 'Mar 18, 2026',
      profile: 'assets/images/avatar/avatar-4.jpg'
    },
    {
      id: 4,
      name: 'Mina Torres',
      email: 'mina@example.com',
      role: 'Viewer',
      team: 'Finance',
      status: 'suspended',
      joined: 'Apr 07, 2026',
      profile: 'assets/images/avatar/avatar-6.jpg'
    },
    {
      id: 5,
      name: 'Jon Oliver',
      email: 'jon@example.com',
      role: 'Analyst',
      team: 'Data',
      status: 'active',
      joined: 'Apr 22, 2026',
      profile: 'assets/images/avatar/avatar-5.jpg'
    }
  ];

  // Get all users
  if (req.url === 'api/users') {
    return of(//of() creates an Observable from a value.
      new HttpResponse({
        status: 200,
        body: users
      })
    );
  }//Normally a backend sends something like: HTTP 200 -> User data
  //We are going to create that response ourselves:
  // new HttpResponse({
  //          status: 200,
  //          body: users
  //          })






  // Get one user by ID
  if (req.url.startsWith('api/users/')) {//req : means the request coming from the frontend.
    //"api/users/3".startsWith("api/users/") = false
    //So this if block handles requests for a specific user.
    const id = Number(req.url.split('/').pop());//req.url = "api/users/3" so req.url.split('/') It breaks the string wherever / appears. So: "api/users/3"
    //becomes: ["api", "users", "3"] so .pop() : .pop() gets the last item. we get:"3" Important: "3" is still a string. So Number() will convert the string to number
    //therefore id = 3

    const user = users.find(user => user.id === id);//Find the user whose id is 3.
    //.find() searches an array and returns the first item that matches a condition.
    // find() checks each user in the users array and finds the user with the matching id(basically it will check from user )
    //Nadia → id 3 → 3 === 3 ✅

    return of(
      new HttpResponse({//Create an HTTP response and send it back(We're creating an Angular HTTP response)
        status: user ? 200 : 404, //If user exists → 200 //Otherwise → 404
        //how this works means the user variable storing the data so it is basically true 

        body: user
      })
    );
  }

  return next(req);
};



//Notes for req :
//req is the request Angular is making. For example, your service says: this.http.get<User[]>('api/users');
//Angular creates a request: GET api/users. The interceptor receives that request as: req
//So: req.url -> gives you the URL. For example: req.url -> "api/users"



//Notes for next:
//Your Angular code -> HTTP request -> Interceptor -> Backend
//The interceptor gets two things: (req, next) req = the request that came in, next = the way to send that request forward
//What does "send forward" mean? Suppose your application makes this request: this.http.get('api/users');
//It reaches your interceptor:  Request -> Interceptor. Now the interceptor has two choices.
//Choice 1: Handle it itself : if it is true if (req.url === 'api/users') { "I recognize this request. I will handle it myself."
//Choice 2: Don't handle it : if it false  if (req.url === 'api/users') { "This request isn't mine. I'll pass it forward." That's what this means return next(req); 
//basically it will send to backend


//If you have many interceptors, they form a chain:
//     HTTP Request
//         ↓
//     Interceptor 1
//         ↓
//     Interceptor 2
//         ↓
//     Interceptor 3
//         ↓
//     Backend
//next(req) basically means: "I'm done with this request; let the next interceptor/backend handle it."