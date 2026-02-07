export const categories = ["All", "Agentic AI", "Computer Vision"];

export const projects = [
  {
    id: "restaurant-reservation-agent",
    title: "Restaurant Reservation Agent",
    category: "Agentic AI",
    thumbnail: "assets/thumbnails/restaurant_reservation_agent.png",
    summary:
      "A framework-free LLM-powered conversational agent that handles end-to-end restaurant reservation workflows including booking, modification, cancellation, and personalized outlet recommendations for a fictional multi-outlet restaurant chain. Built from first principles using Google's Gemini 1.5 Flash 8B model with custom tool orchestration and state management.",
    stack: ["Python", "Streamlit", "JSON-based state management", "Custom function calling implementation", "Prompt engineering", "Multi-turn conversation handling"],
    highlights: [
      "Framework-free agentic architecture: Built a complete LLM agent system from scratch with manual tool orchestration, implementing 11 custom function tools for reservation management, context persistence, and natural language understanding.",
      "Stateful multi-turn conversation engine: Engineered a context-aware dialogue system with session-based state management using get_current_reservation_details, update_reservation_details, and reset_reservation_details tools, enabling the agent to maintain coherent multi-step conversations, handle ambiguous requests, and seamlessly resume interrupted booking flows.",
      "Strategic prompt engineering for reliability: Designed a hierarchical prompt structure with explicit tool prioritization, mandatory validation sequences, and human-in-the-loop confirmation patterns, achieving deterministic behavior from a lightweight 8B parameter model through careful instruction design rather than model scale or framework complexity."
    ],
    links: {
      repo: "https://github.com/jainilkotak32/Restaurant-Reservation-Agent",
      demo: ""
    }
  },
  {
    id: "face-mask-detection",
    title: "Face Mask Detection & Recognition",
    category: "Computer Vision",
    thumbnail: "assets/thumbnails/face_mask_detection_recognition.png",
    summary:
      "A real-time face mask detection and recognition system that combines computer vision and deep learning to detect whether individuals are wearing face masks and recognize known individuals even when masked. The system leverages pre-trained deep learning models including MobileNetV2 for mask classification and ResNet-based SSD for face detection, delivered through an interactive Streamlit web interface with support for both live webcam feeds and static image processing.",
    stack: ["Python", "OpenCV", "Streamlit", "TensorFlow/Keras", "face_recognition library", "dlib", "NumPy", "MobileNetV2 (mask detection model)", "Caffe SSD ResNet-10 (face detection model)", "JSON (metadata storage)"],
    highlights: [
      "Hybrid deep learning architecture: Engineered a dual-model inference pipeline combining MobileNetV2 (mask classification) with Caffe SSD ResNet-10 (face detection) and dlib-based 128-dimensional face encodings, achieving real-time performance on CPU-only environments through optimized model selection and preprocessing strategies.",
      "Robust face recognition under occlusion: Implemented face encoding extraction from the upper facial region (eyes, forehead, nose bridge) to enable accurate identity verification even with 50%+ facial occlusion from masks, using cosine similarity-based matching with configurable tolerance thresholds.",
      "Full-stack web application: Built an end-to-end production-ready system with modular backend architecture (face extraction, encoding management, recognition modules) and interactive Streamlit frontend featuring live webcam streaming, image upload processing, and CRUD operations for face database management"

    ],
    links: {
      repo: "https://github.com/jainilkotak32/face-mask-detection-recognition",
      demo: ""
    }
  },
];
