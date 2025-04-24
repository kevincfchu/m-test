# Space Travel Service Prototype

A prototype for a "Space Travel Service" created using the GOV.UK Prototype Kit.

## About the project

This is a prototype for an imaginary service called "Space Travel Service", which allows users to:

1. Choose between two destinations: the Moon and Mars
2. Provide personal details (name and address)
3. Review their choices on a summary page

The prototype uses the [GOV.UK Design System](https://design-system.service.gov.uk/) and follows GDS design patterns.

## Running the prototype locally

### Install dependencies

```
npm install
```

### Start the development server

```
npm run dev
```

The prototype should now be running at http://localhost:3000

## Branching and data passing

This prototype demonstrates branching based on user choices and passing data between pages using session data. The main features include:

- Form validation on required fields
- Data persistence between pages
- Conditional user journeys
- Summary page with all collected information

## Deploying to Render.com

To deploy this prototype to Render:

1. Push your code to a GitHub repository
2. Create an account on [Render.com](https://render.com/)
3. Click "New" and select "Web Service"
4. Connect your GitHub repository
5. Use the following settings:
   - **Name**: space-travel-service (or your preferred name)
   - **Environment**: Node
   - **Build Command**: npm install
   - **Start Command**: npm start
   - **Auto Deploy**: Yes (if you want changes to automatically deploy when you push to your repository)

6. Click "Create Web Service"

Your prototype will be deployed and available at the URL provided by Render.

## License

This project is licensed under the MIT License - see the LICENSE.txt file for details. 