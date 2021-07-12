# Software Developer Technical Challenge #
## Problem Description ##
For this challenge, we are looking for you to create a simple rostering solution (SPA) for visualising and editing the shifts of employees.
For example this could be used for a small business that works 24/7 to manage the shifts of its employees to make sure everyone gets adequate days off and doesn't get shifts which are directly back-to-back (e.g. working on a night shift followed by a morning shift the next day).

## Data ##
We're providing you with four mock data JSON files:
- Configuration: General information about the location which the roster is for including the timezone and title;
- Employees: The people who are being rostered;
- Shifts: These are the bits of work assigned to employees. If a shift is assigned to an employee, it will have it's employee_id property set to an integer matching the id field on the employee; and
- Role: The type/label of the shift. Each shift will have a role_id which corresponds to a role.

Ideally the JSON should be used as part of a mock API, more closely representing a production ready solution.

## Expectations on Implementation ##
Please aim to spend no more than a few hours on this exercise. As a guide we're looking for it to meet the following guidelines:

- The app should use React as a base framework - any library choices beyond this are up to you;
- The app should display the whole week of rostering information for the employees in the mock data set;
- The roster must be represented in a visualisation of some form - we're looking for something that would aid end users in understanding the information they're being presented with; 
- Ideally the roster would also be represented in a tabular format, as a more simplistic view;
- The data provides DateTimes in UTC, but the configuration will specify a timezone property - make sure that you're using this to format your date times! We want to see the data in the context of their timezone, not your local time zone; 
- The ability to edit the start/end times of a shift, through one or both of the views (you do not need to be able to edit any additional data, create or delete shifts).

If any of the requirements are unclear feel free to send through questions for clarification or make assumptions - we are not trying to test you on your knowledge of rostering.

While not required, if part of completing this challenge involves wireframing, paper prototyping, mockups or similar please add them to a folder in your repo.

On completion, if there are additional things you think you could have done better/did not have enough time to complete, feel free to compile a quick list and bring it to the technical interview to help remind yourself during the discussion.

## Submission ##
To submit please either: 
Email us a zip file containing your solution.
Share a GitHub repository containing your solution. 
Please ensure your solution is accompanied by a README file containing clear instructions on how to run your solution and install any relevant dependencies. 

**Good luck! We look forward to seeing what you come up with.**
