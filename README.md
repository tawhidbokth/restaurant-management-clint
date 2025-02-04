
# 🍽️ Restaurant Management Website

This project is a **full-stack Restaurant Management website** built using the **MERN stack (MongoDB, Express.js, React.js, and Node.js)**. The platform enhances the restaurant's online presence, improves customer interaction, and streamlines internal management processes.

## 🌐 Live Demo
🔗 [View Website](https://restaurant-management-we-d57a4.web.app/)

---

## 📌 Features

### 🔹 Layout & Page Structure
- **Navbar**
  - Displays website name/logo
  - Navigation links: `Home`, `All Foods`, `Gallery`
  - Conditional login/logout button
  - **Profile Image** (Only visible if the user is logged in; otherwise, a login button is shown)
- **Main Section**
  - Displays different pages based on routes.
- **Footer**
  - Contains relevant information with an eye-catching design.

---

### 🔹 Authentication System
- **Login Page**
  - Email & Password authentication
  - Google or GitHub login (one of them implemented)
  - Link to Register Page
  - Password validation:
    - At least **one uppercase letter**, one **lowercase letter**, and a **minimum of 6 characters**
  - Displays error messages via toast notifications.
- **Register Page**
  - Fields: `Name`, `Email`, `Photo URL`, `Password`
  - Password must meet validation criteria
  - Redirects to the Login Page after successful registration.
- **Toast/SweetAlert** notifications for success/error messages.

---

### 🔹 Pages & Functionality

#### 🏠 Home Page *(Public)*
- **Banner Section**: A slider/banner with:
  - Heading Title
  - Short Description
  - Button redirecting to the `All Foods` page
- **Top Foods Section**: Displays **6 top-selling food items**, based on purchase count.
  - `Details` button navigates to the **Single Food Page**.
  - `See All` button redirects to the `All Foods` page.
- **Extra Sections**: Two additional relevant & visually attractive sections.

#### 🍕 All Foods Page *(Public)*
- **Title** displayed in the background.
- **Food Cards** displaying food items from the database.
- **Search Functionality**: Users can search for food items by name.
- **Each Card Includes**:
  - Food details from the database
  - Quantity (Dynamic based on stock availability)
  - `Details` button navigating to the **Single Food Page**.

#### 🥘 Single Food Page *(Public)*
- Shows **detailed information** about a food item, including:
  - **Purchase Count** (Number of times the food has been purchased)
  - **Purchase Button** (Redirects to the **Food Purchase Page**)

#### 🛒 Food Purchase Page *(Private)*
- Form Fields:
  - Food Name
  - Price
  - Quantity
  - Buyer Name (Read-only, fetched from logged-in user)
  - Buyer Email (Read-only, fetched from logged-in user)
  - Buying Date (Auto-filled using `Date.now()`)
- **Purchase Button**:
  - Stores order details in the database.
  - Displays a success toast/alert.

📝 **Important:**  
- If **food quantity = 0**, users **cannot** buy it (button will be disabled).  
- Users **cannot** buy their own food items.  
- Users **cannot** buy more than the available quantity.

#### 🖼️ Gallery Page *(Public)*
- Displays **at least 10 static images**.
- Clicking on an image opens it in a **lightbox view** (using `yet-another-react-lightbox` or another library).

#### 🍔 My Foods Page *(Private)*
- Displays **all food items added by the logged-in user**.
- Each row/card contains:
  - Food image, name, price, etc.
  - **Update Button**:
    - Redirects to the update page or opens a modal.
    - Users can update their food details.
    - **Only the owner** of a food item can update it.

#### ➕ Add Food Page *(Private)*
- **Form Fields**:
  - Food Name
  - Food Image
  - Food Category
  - Quantity
  - Price
  - Added By (Auto-filled with logged-in user's name & email)
  - Food Origin (Country)
  - Short Description (Ingredients, making process, etc.)
- **Add Item Button**
  - Saves food details in the database.
  - Displays a success toast/alert.

#### 📦 My Orders *(Private)*
- Displays **all ordered food items** of the logged-in user.
- Uses **Moment.js** for date/time formatting.
- Each row/card contains:
  - Food image, name, price, owner, etc.
  - Buying date & time (formatted).
  - **Delete Button**: Removes order from the list.

---

## 🔥 Challenge Features Implemented
✅ **Food Quantity Restriction**:
- Users **cannot** purchase items if quantity = **0**.
- Users **cannot** purchase more than the available stock.
- Users **cannot** buy their **own** added food items.

✅ **Food Search Functionality**:
- Implemented in **All Foods Page** for searching by name.

✅ **JWT Authentication**:
- **JWT token is generated & stored** on the client side upon login.
- Token is **sent with requests** to verify authentication.
- JWT is **used for private routes**.

✅ **Theme Customization**:
- **Dark/Light mode toggle** for user preference.

✅ **Profile Image Functionalities**:
- Clicking profile image shows a **dropdown menu** with:
  - `My Foods`
  - `Add Food`
  - `My Orders`

---

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase & JWT
- **Hosting:** Firebase Hosting
- **Package Manager:** Vite


## 🔧 Installation & Setup
1. **Clone the repository**
   ```sh
   https://github.com/tawhidbokth/restaurant-management-clint/edit/main/README.md
   cd restaurant-management
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Create a `.env` file** and add:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

4. **Start the development server**
   ```sh
   npm run dev
   ```

---

## 🎯 Future Enhancements
- **Payment gateway integration**
- **Real-time order tracking**
- **Reservation system**
- **Admin analytics dashboard improvements**

---

## 📝 License
This project is for personal and educational use.

---

👨‍💻 **Developed by [yasin bokth tawhid]**  
📩 Contact: [yasinbokthtawhid@gmail.com]
```

---

### 🚀 Key Enhancements:
✅ **Detailed page structure & features**  
✅ **JWT authentication & private routes**  
✅ **Toast notifications instead of browser alerts**  
✅ **Dark/Light mode toggle**  

Let me know if you need any changes! 🚀🔥
