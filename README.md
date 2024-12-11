# Love Zone 🌟🌟🌟

Love Zone is a simple 1v1 chat app built for private communication. Users connect using a unique **Love Code**, ensuring a secure and personal chatting experience. The app is developed using **NestJS** for the backend, **MQTT** for real-time messaging, **MongoDB** for data storage, and **FlutterFlow** for the frontend. ✨✨✨

---

## Features 🌟🌟🌟

### Phase 1: Basic Features
- 💖 **Love Code**: A unique code for connecting two users in a chat.
- ✉️ **Text-based chat**: Real-time, lightweight messaging via MQTT.
- 🔒 **Basic Authentication**: Users identify themselves using email. 🌟🌟🌟

### Future Phases
- 📜 **Chat History**: Messages stored in the database for retrieval.
- 🎨 **Media Messages**: Support for emojis, GIFs, stickers, images, videos, and voice messages.
- 🌟 **Advanced Features**: Location sharing, calls, direct image/video capture, personal settings, etc. ✨✨✨

---

## Tech Stack 🌟🌟🌟

### Backend
- 🛠️ **Framework**: NestJS
- 📡 **Messaging Protocol**: MQTT (via Mosquitto broker)
- 🗄️ **Database**: MongoDB (for storing chat and user data) and Redis (for Love Code storage and email verification) 🌟🌟🌟

### Frontend
- 🖥️ **Framework**: FlutterFlow
- 💻 **Custom Code**: MQTT integration for real-time chat ✨✨✨

### Other Tools
- ✉️ **Email Service**: For email verification codes 🌟🌟🌟

---

## MQTT Integration 🌟🌟🌟

### Topics
- 📨 **Message Topic**: `love_zone/{LoveCode}/messages` ✨✨✨

### Payload Format
```json
{
  "sender": "user@example.com",
  "message": "Hello!"
}
```

---

## Roadmap 🌟🌟🌟

### Phase 1
- ✅ Complete text-based chat with MQTT.
- ✅ Basic authentication and Love Code validation. ✨✨✨

### Phase 2
- 💾 Store chat history in the database.
- 🕒 Retrieve and display past messages. 🌟🌟🌟

### Phase 3
- 🎉 Add support for media messages (emojis, GIFs, stickers, images, videos, voice messages). ✨✨✨

### Phase 4
- 🚀 Implement advanced features (location sharing, calls, image/video capture, settings). 🌟🌟🌟

---

## Contributing 🌟🌟🌟
Contributions are welcome! Feel free to fork the repository and submit pull requests. ✨✨✨

---

## License 🌟🌟🌟
This project is licensed under the MIT License. ✨✨✨

---

## Contact 🌟🌟🌟
For inquiries or support, reach out at [longnt121004@gmail.com]. ✨✨✨

