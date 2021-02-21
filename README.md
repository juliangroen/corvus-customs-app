# corvus-customs-app

This web app was created as a solution for a fictional auto customization company called Corvus Customs. The goal of the app is to provide customers with a web interface to explore the parts available and save customized vehicle profiles to facilitate work orders.

The front end of the application is built using the [Svelte JavaScript framework](https://svelte.dev/) and the [Tailwindcss CSS Utility framework](https://tailwindcss.com/). The back end is built using the [Firebase Firestore](https://firebase.google.com/products/firestore) noSQL database and the [Firebase User Authentication](https://firebase.google.com/products/auth) service.

The application was designed using the factory function paradigm to generate the vehicle objects and the various part objects. Data is streamed using observers and utilize Svelte's data stores to provide real time reactive CRUD operations.

App Screenshots:

App Login Screen:
![User Login](https://github.com/juliangroen/corvus-customs-app/blob/main/readme-images/01_corvus_customs_login.png)

Validation on login fields as well as submit:
![Login Validation](https://github.com/juliangroen/corvus-customs-app/blob/main/readme-images/02_corvus_customs_login_validation.png)

User landing page with vehicle list:
![Landing Page](https://github.com/juliangroen/corvus-customs-app/blob/main/readme-images/03_corvus_customs_landing_page.png)

Individual vehicle page with part icons:
![Vehicle Page](https://github.com/juliangroen/corvus-customs-app/blob/main/readme-images/04_corvus_customs_vehicle_page.png)

Search filtering for part lists:
![Search Filtering](https://github.com/juliangroen/corvus-customs-app/blob/main/readme-images/05_corvus_customs_search_filtering.png)

CRUD example for part creation:
![CRUD Create](https://github.com/juliangroen/corvus-customs-app/blob/main/readme-images/06_corvus_customs_CRUD_Create.png)

Admin panel reporting of vehicles in database:
![Database Report](https://github.com/juliangroen/corvus-customs-app/blob/main/readme-images/07_corvus_customs_CRUD_Read.png)

User Experience and Interface design was wireframed first using Figma.
![UX/UI Wireframes](https://github.com/juliangroen/corvus-customs-app/blob/main/readme-images/corvus_customs_UXUI.png)
