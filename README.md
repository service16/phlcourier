# PHL Express - Enterprise Logistics & Courier Web Application

PHL Express is a modern, white-label logistics and shipment tracking web application built for courier companies, freight forwarders, and delivery startups. It features real-time database synchronization, automated email dispatch notifications,

---

## 🚀 Key Features

* **Customer Tracking Portal (`index.html`):** Allows end-users to instantly check package status, view shipment details, and track multi-step milestone history.
* **Admin Control Center (`admin.html`):** Enterprise-grade management panel enabling logistics managers to view all database records, update statuses, add milestone notes, and delete orders.
* **Real-Time Database:** Powered by Firebase Realtime Database for instant synchronization across client portals and admin dashboards.
* **Automated Email Notifications:** Integrated with EmailJS to instantly dispatch confirmation emails and status update alerts directly to clients.
* **Responsive Dark Theme:** Engineered with Tailwind CSS, featuring a sleek, high-contrast dark mode aesthetic optimized for desktop and mobile devices.

---

## 🛠️ Technology Stack

* **Frontend:** HTML5, Tailwind CSS (via CDN)
* **Backend & Database:** Firebase Realtime Database & Firebase Authentication
* **Notifications:** EmailJS SDK
* **Hosting:** GitHub Pages / Static Web Hosting

---

## 📦 Project File Structure

```text
phl-express/
├── index.html # Public shipment lookup and landing page
├── track.html # Dedicated tracking results view
├── login.html # admin authentication entry portal
├── dashboard.html # Client tracking and history portal
├── admin.html # Administrative management console
├── services.html # Company service offerings
├── contact.html # Customer support inquiry page
├── privacy.html # Privacy policy terms
├── terms.html # Terms of service agreement
└── logo.png # Corporate brand asset
