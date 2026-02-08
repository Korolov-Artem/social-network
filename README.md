👥 React Social Network

A Single Page Application (SPA) building the frontend of a social platform. This project focuses on **complex state management**, **component architecture**, and **TypeScript integration**.

> 💡 **Note:** This project demonstrates my early mastery of React fundamentals, Redux state management, and typed architectures.

## 🛠️ Tech Stack

* **Core:** React (Functional & Class Components), TypeScript
* **State Management:** Redux (Store, Reducers, Thunks for async logic)
* **Routing:** React Router DOM (v5/v6)
* **API Client:** Axios (REST API interaction)
* **Forms:** Redux-Form / Formik
* **Styling:** CSS Modules, SCSS

## ✨ Key Features

* **🔐 Authentication System:**
    * Login/Logout flow.
    * CAPTCHA security integration.
* **👤 User Profile:**
    * View and edit profile details.
    * Update status functionality.
    * Post creation and deletion (local state updates).
* **💬 Messaging (Dialogs):**
    * View conversation lists.
    * Send and receive messages (simulated).
* **👥 Users Interface:**
    * Pagination for browsing user lists.
    * **Follow/Unfollow** functionality with optimistic UI updates (disabling buttons during API calls).
* **🛡️ Architecture:**
    * **Container/Presentational Pattern:** Strict separation of logic and UI rendering.
    * **HOCs (Higher-Order Components):** Used for Auth Redirects and common logic reuse.

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Korolov-Artem/social-network.git](https://github.com/Korolov-Artem/social-network.git)
    cd social-network
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the Application**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
