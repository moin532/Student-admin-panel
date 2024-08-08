
# Project Title

1. Web Page Implementation:

I have created a responsive student admin panel using the Strapi API.
The page displays a list of students retrieved from the API endpoint: http://3.223.98.72:1337/api/students.
I used the fetch method in useEffect to retrieve and display the data.

2. Features Implemented:
* Search Functionality: Users can search for students by name.

* Dropdown Filter: I’ve included a dropdown filter to sort or filter students based on additional criteria.

3. Approach:
* I fetched all student data using the fetch method in useEffect.
Implemented a search functionality that allows users to filter the student list by name.
* Added a dropdown filter to refine the student list based on selected criteria.

*Applied Tailwind CSS to ensure the page is responsive and aligns with the design requirements.

4. Deliverables:
The student admin panel has been developed according to the attached design file.
The vido source code and any necessary documentation are included https://drive.google.com/file/d/1KKeCUWrh8gft7eCN0wz7fwUHt0xzUJ2b/view?usp=sharing
## API Reference

#### Get all items

```http
  GET http://3.223.98.72:1337/api/students
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
