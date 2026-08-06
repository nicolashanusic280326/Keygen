# My Web App

This is a simple web application that generates unique keys when a button is clicked. The application is built using Flask and features a clean user interface.

## Project Structure

```
my-web-app
├── app.py               # Main entry point of the web application
├── keygen3.py           # Contains the key generation logic
├── templates
│   └── index.html       # HTML structure of the web application
├── static
│   ├── css
│   │   └── styles.css    # CSS styles for the web application
│   └── js
│       └── app.js        # JavaScript code for handling button click events
├── requirements.txt      # Lists the dependencies required for the project
└── README.md             # Documentation for the project
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd my-web-app
   ```

2. **Install dependencies**:
   Make sure you have Python and pip installed. Then run:
   ```
   pip install -r requirements.txt
   ```

3. **Run the application**:
   Start the Flask server by executing:
   ```
   python app.py
   ```

4. **Access the application**:
   Open your web browser and go to `http://127.0.0.1:5000` to view the application.

## Functionality

- The application features a single button labeled "Generate."
- When clicked, the button triggers the key generation logic, producing 20 unique keys.
- The generated keys can be displayed on the web page for user reference.

## License

This project is licensed under the MIT License - see the LICENSE file for details.