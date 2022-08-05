# SeedRoute
<img src="./README/title1.png"/>

>Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available. 
<br>

> **[PROJECT PHILOSOPHY](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#project-philosophy) • [WIREFRAMES](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#wireframes) • [TECH STACK](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#tech) • [IMPLEMENTATION](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#implementation) • [HOW TO RUN?](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#run)**

<img src="./README/title2.png" id="project-philosophy"/>

> **[PROJECT PHILOSOPHY](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#project-philosophy) • [WIREFRAMES](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#wireframes) • [TECH STACK](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#tech) • [IMPLEMENTATION](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#implementation) • [HOW TO RUN?](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#run)**

>The SeedRoute app is a smart seeding system that assists amateur farmers through their planting experience.
>SeedRoute guides the user from seeding to harvesting, passing through all the phases.
>There are 3 daily tasks that the app completes: 

>1.Notifies the user about the land blocks watering schedule and waters it by a command from the user.<br>
>2.Informs the user about different types of plants giving with tips and recognitions.<br>
>3.Provides a space for the user to contact an advisor to ask questions.

### User Stories
- As a user, I want to access a wide variety of plants with specific recommendations and information that help me decide on planting. 
- As a user, I want to be reminded of watering the lands on certain schedule/timing.
- As a user, I want to be guided from an experienced farmer and have my questions answered.
- As a user, I want to map my land in an organized way to have a better planting experience.

### Advisor Stories
- As an advisor I prepare a profile that shows my experience in farming.
- As an advisor I accept questions from other users.
- As an advisor I chat with the users, where I can view their land as well, and give advices and answers their questions.

<img src="./README/title3.png" id="wireframes"/>

> **[PROJECT PHILOSOPHY](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#project-philosophy) • [WIREFRAMES](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#wireframes) • [TECH STACK](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#tech) • [IMPLEMENTATION](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#implementation) • [HOW TO RUN?](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#run)**

| Loading  | Login  |
| -----------------| -----|
| ![Loading](https://user-images.githubusercontent.com/97544165/182411029-e2110146-35d3-410b-99e0-c9ce95019dfd.png) | ![Login](https://user-images.githubusercontent.com/97544165/182411108-cd727cb2-df0d-4f8b-9ad5-1b9f726b074e.png)

| Sketch Land  | My Land  |
| -----------------| -----|
| ![sketch your land](https://user-images.githubusercontent.com/97544165/182411367-b463569a-c044-4cc4-b034-272d95749ab7.png) | ![My land](https://user-images.githubusercontent.com/97544165/182411471-4a066e25-c2fe-4f88-a2c7-a212218337b8.png)



| Plants  | Plant  |
| -----------------| -----|
| ![plants](https://user-images.githubusercontent.com/97544165/182411596-3eafef41-a79a-4943-8b9f-6657bac22128.png) | ![plant](https://user-images.githubusercontent.com/97544165/182411636-1fa62094-db25-4fbf-8992-9772849d749a.png)




| Ask Advisor animated| Ask Advisor  | Chat  |
| --------| -----------------| -----|
| <img src="https://drive.google.com/file/d/1GwuvUa98LVBFUeAHDJtvyCoJEMVep2rb/view?usp=sharing"> | ![Ask Advisor](https://user-images.githubusercontent.com/97544165/182411759-5134eeeb-dd23-4892-9b62-2efd00bd70bf.png) | ![Chat](https://user-images.githubusercontent.com/97544165/182411785-e975921f-0252-4f86-861d-7c6fd8b1826e.png)


| Block  | Watering  |
| -----------------| -----|
| ![Block page](https://user-images.githubusercontent.com/97544165/182411876-373f0957-0ecc-4b5f-920c-825691c00c5d.png) | ![watring page](https://user-images.githubusercontent.com/97544165/182411929-0d54e340-d923-4e30-a9bf-33200faba254.png)


<br><br>

<img src="./README/title4.png" id="tech"/>

> **[PROJECT PHILOSOPHY](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#project-philosophy) • [WIREFRAMES](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#wireframes) • [TECH STACK](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#tech) • [IMPLEMENTATION](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#implementation) • [HOW TO RUN?](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#run)**

Here's a brief high-level overview of the tech stack the SeedRoute app uses:

- This project uses the [React Native](https://reactnative.dev/). Which is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications.

- This project uses [TypeScript](https://www.typescriptlang.org/). Which is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- For persistent storage (database), the app uses the [SQL](https://www.w3schools.com/sql/). Which is a standard language for storing, manipulating and retrieving data in databases.

- To send local push notifications, the app uses the [Expo Notification](https://docs.expo.dev/versions/latest/sdk/notifications/). Which is provides an API to fetch push notification tokens and to present, schedule, receive and respond to notifications.
  
- For Chatting the app uses [Firebase, Firestore](https://firebase.google.com/?gclid=CjwKCAjw3K2XBhAzEiwAmmgrAjkmh7XHKTv9wc7_6jIDtMuggQHsrSePnTIpqrxRkGXWxTwemlRpFxoCZ8YQAvD_BwE&gclsrc=aw.ds) and [Gifted Chat](https://www.npmjs.com/package/react-native-gifted-chat). Which is an app development platform that helps you build and grow apps and games users love . Backed by Google and trusted by millions of businesses around the world .

- And for Hardwares the app uses arduino with water pump. [Arduino](https://www.arduino.cc/en/about) designs, manufactures, and supports electronic devices and software, allowing people around the world to easily access advanced technologies that interact with the physical world

<br><br>

<img src="./README/title5.png" id="implementation"/>

> **[PROJECT PHILOSOPHY](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#project-philosophy) • [WIREFRAMES](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#wireframes) • [TECH STACK](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#tech) • [IMPLEMENTATION](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#implementation) • [HOW TO RUN?](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#run)**

> Using the above mentioned tech stacks and the wireframes build with figma, the implementation of the app is shown as below, these are screenshots from the real app.

| Login  | Register  |
| -----------------| -----|
| ![login](https://user-images.githubusercontent.com/97544165/182413555-165d6f50-3da9-4c26-ab94-e7dcb5a92d10.PNG) | ![register](https://user-images.githubusercontent.com/97544165/182413607-2229498c-e3c8-4c0f-a250-a4ef9e5e6a1b.PNG)


| Sketch Land | My land  | Edit Profile |
| -----------------| -----| -----|
| ![Sketch](https://user-images.githubusercontent.com/97544165/182413748-552b2018-4fd2-4e9d-a5b2-b87e9acc3369.PNG) | ![My land](https://user-images.githubusercontent.com/97544165/182413786-501a8a85-c766-4831-892b-92f42346068f.PNG) | ![editProfile](https://user-images.githubusercontent.com/97544165/182414182-21b33ff5-e945-4886-b4ea-f8140ca0c90f.PNG)



| Plants  | Plant  |
| -----------------| -----|
| ![plants](https://user-images.githubusercontent.com/97544165/182413898-bb4d1c6c-e7b3-4988-9996-001a6ee05001.PNG) | ![plant](https://user-images.githubusercontent.com/97544165/182413927-cfead480-9fc4-4623-9697-b539ca73dba6.PNG)


| Advisors  | Chats  | Notifications |
| -----------------| -----| -----|
| ![Advisors](https://user-images.githubusercontent.com/97544165/182414033-58731306-412f-4ce2-be0e-58fa61df71ca.PNG) | ![Chats](https://user-images.githubusercontent.com/97544165/182414072-ef5aba27-cf80-45d8-890d-e8d68a61ca43.PNG) | ![Notifications](https://user-images.githubusercontent.com/97544165/182414293-c402242c-19a5-4170-8bd8-d60e27a4530c.PNG)


| Planted Block  | Empty Block  |
| -----------------| -----|
|![Block](https://user-images.githubusercontent.com/97544165/182414412-4584322c-3778-4d93-bd2e-e2828f866622.PNG)  | ![Empty block](https://user-images.githubusercontent.com/97544165/182416350-4d3c6a2d-0dda-49b2-90bb-c81c71c2e2a4.PNG)



<img src="./README/title6.png" id="run"/>

> **[PROJECT PHILOSOPHY](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#project-philosophy) • [WIREFRAMES](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#wireframes) • [TECH STACK](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#tech) • [IMPLEMENTATION](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#implementation) • [HOW TO RUN?](https://github.com/Ali-ElMowed/SeedRoute/blob/master/README.md#run)**

> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

First, you need to have the latest npm version installed:
* npm
  ```sh
  npm install npm@latest -g
  ```
Second, download expo go application on your mobile.

### Installation


1. Clone the repo
   ```sh
   git clone [https://github.com/your_username_/Project-Name.git](https://github.com/Ali-ElMowed/SeedRoute.git)
   ```
2. Navigate to the "client" folder and Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
4. Scan the generated QR code with your camera (ios) or through the Expo Go application (android)



