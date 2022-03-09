# ChatBot-Frontend-

Chatbot HelpDesk

Make an application like a chat bot where a company can use it as a HelpDesk with the following features:-

Login Screen(this is the Default page)

1) Username (no special character allowed except underscore and length should have 10 characters).

2) Password (8 characters, Upper- and Lower-case combination, should have at least 1 number, 1 Special character).

3) If the user not exists, validation should come saying , “User is invalid, Please Register”.

4) “Sign Up” button should be available.

Registration Screen

1) User once click on “Sign Up”, then this screen should come up.

2) It only contains fields like - First Name, Last Name, User Name, Email, Phone Number.

3) After entering the fields where he can click on “Registration” button, it redirects to Login Screen.

Admin User

1) Admin user can create a new Queries by adding fields like Query Name, Description and Department in “Add Queries” Screen and should store in a respective Queries table in DB.

2) Admin user can even edit/delete the respective Queries and should reflect same in DB.

3) Try to have all Queries saved in DB related to departments like Payroll/Service desk, for ex: Payslip,PF,Gratuity,Leave balance ,Incident, Service Orders etc.

Normal User

1) Application should be designed in such a way that it looks like a chat box , for instance like a Microsoft teams or Skype or Whats up chat window.

2) when user input a query- it should initially send a welcome message and then ask about the which department/query the user is looking for.

3) Based on the user query/department as a input, it should give accurate answers by matching the input with respective DB table.

4) After giving the right output, bot should also ask any more queries and finally should prompt a thank you message.

5) If time permits, try to share a PDF/word document in a chat window also, for ex: if the query by user is related to “Payslip”, where the user can view or even save it for later.

Use Database

Create Web API to fetch records from database
