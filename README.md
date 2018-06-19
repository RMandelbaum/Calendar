Calendar App

Rails Backend API with a frontend of React/Redux

To Run Application from Terminal:

$ git clone https://github.com/RMandelbaum/Calendar.git

Backend:

$ cd Calendar/calendar-backend-api

$ bundle install

$ createdb calendar-backend-api_development

$ rails db:migrate

$ rails db:seed

$ rails s -p 3001

Frontend:

$ cd Calendar/calendar-frontend

$ npm start
