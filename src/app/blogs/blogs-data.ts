import { BlogResponse } from '../typings/api-typings'

export const Blogs: BlogResponse[] = [
  {
    title: 'Simplifying Angular Project Management with a Custom Makefile',
    blogLink:
      'https://medium.com/@kumarsehdev600/simplifying-angular-project-management-with-a-custom-makefile-030d43b42ee5',
    thumbnail:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Jhzn3FTiKd2AzbjM9_0C-A.jpeg',
    description:
      'Managing an Angular project efficiently requires a set of consistent commands to handle various tasks, from generating components to running tests and deploying the application. A Makefile can streamline this process by encapsulating these commands into easy-to-use targets. In this blog post, we’ll explore a Makefile designed for Angular projects that simplifies common tasks and enhances project maintainability.',
  },

  {
    title:
      'Unveiling the Power of NgRx Out of the Box: Conquering Boilerplate with createFeature and ActionsGroup.',
    blogLink:
      'https://medium.com/@kumarsehdev600/unveiling-the-power-of-ngrx-out-of-the-box-conquering-boilerplate-with-createfeature-and-2ea574a63e58',
    thumbnail:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/0*zPkOvGWIUZZkzxr7',
    description:
      '“When exploring additional aspects of a framework or library, many people struggle with self-doubt and insecurity. This sentiment is entirely natural and need not be a cause for concern. So, what exactly is the hurdle in adopting NgRx? The prominent issue frequently mentioned is the surplus of boilerplate code.”',
  },

  {
    title: 'Generic Rxjs Raised/Subscription event Angular (Typescript)',
    blogLink: 'https://medium.com/@kumarsehdev600/generic-rxjs-raised-subscription-event-angular-typescript-7257f91e22f',
    thumbnail: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*gABeP-qkqxfkWQxAhp7Diw.jpeg',
    description: 'The use case of Generic RxJS subscription/raising is to provide a way to handle different types of events in a modular and flexible way. By defining a generic event system using RxJS, events can be emitted and subscribed to across different parts of the application, without having to tightly couple them to each other.',
  },
]
