# QuickDrop 🚀

A modern, beautiful file sharing application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to upload files and share them instantly via QR codes.

## ✨ Features

- **📁 File Upload**: Drag & drop or click to upload files
- **📱 QR Code Generation**: Instant QR codes for easy sharing
- **🔗 Download Links**: Direct download links for file sharing
- **📋 Copy to Clipboard**: One-click copy of download links
- **🎨 Modern UI**: Beautiful, responsive design with animations
- **📱 Mobile Friendly**: Works perfectly on all devices
- **⚡ Real-time**: Instant upload and sharing

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS3, HTML5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Storage**: Local storage with Multer
- **QR Code**: qrcode.react
- **Icons**: FontAwesome

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/QuickDrop.git
   cd QuickDrop
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   cd ..
   ```

3. **Set up Environment Variables**
   - Copy `server/.env.example` to `server/.env`
   - Update the MongoDB connection string and other variables

4. **Start the application**
   ```bash
   # Start the backend server (in one terminal)
   cd server
   npm start
   
   # Start the frontend (in another terminal)
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:4000

## 📁 Project Structure

```
QuickDrop/
├── public/                # React public assets
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/                   # React frontend source
│   ├── App.js            # Main application component
│   ├── App.css           # Styles
│   ├── index.js          # React entry point
│   ├── index.css         # Global styles
│   └── services/
│       └── apicall.js    # API service functions
├── server/               # Node.js backend
│   ├── contorller/
│   │   └── image-controlller.js
│   ├── database/
│   │   └── db.js        # MongoDB connection
│   ├── models/
│   │   └── file.js      # File model
│   ├── router/
│   │   └── router.js    # API routes
│   ├── uploads/         # File storage (with .gitkeep)
│   ├── utils/
│   │   └── upload.js    # Multer configuration
│   ├── .env.example     # Environment variables template
│   ├── package.json     # Server dependencies
│   └── index.js         # Server entry point
├── package.json         # Frontend dependencies
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the server directory:

```env
MONGO_URL=your_mongodb_connection_string
PORT=4000
```

### Supported File Types

- Images: JPG, JPEG, PNG, SVG
- Documents: PDF

## 📱 Usage

1. **Upload a File**
   - Click "Choose File or Drag & Drop"
   - Select your file or drag it to the upload area

2. **Share Your File**
   - After upload, a QR code will be generated
   - Scan the QR code with any device to access the file
   - Copy the download link to share directly

3. **Download Files**
   - Click the download button or use the generated link
   - Files are served directly from the server

## 🎨 UI Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects, transitions, and loading states
- **Modern Glass Morphism**: Beautiful semi-transparent containers
- **Interactive Elements**: Drag & drop, copy to clipboard, QR codes
- **Professional Color Scheme**: Purple-blue gradient theme

## 🔒 Security Features

- File type validation
- Secure file storage
- CORS enabled
- Error handling

## 🚀 Deployment

### Frontend (React)
```bash
npm run build
```

### Backend (Node.js)
- Deploy to platforms like Heroku, Vercel, or DigitalOcean
- Set up environment variables
- Configure MongoDB connection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React.js community
- MongoDB Atlas
- FontAwesome for icons
- qrcode.react for QR code generation

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Made with ❤️ by [Your Name]**
