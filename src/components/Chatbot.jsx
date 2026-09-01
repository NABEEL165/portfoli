import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm here to help you learn about Mohammed Nabeel. How can I assist you today?", 
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isStreaming: false
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [streamingMessageId, setStreamingMessageId] = useState(null);
  const [showActions, setShowActions] = useState(null);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    { text: "About Mohammed Nabeel", icon: "👤" },
    { text: "Technical skills", icon: "💻" },
    { text: "Experience & projects", icon: "🎯" },
    { text: "Contact information", icon: "📞" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const streamText = (text, messageId, callback) => {
    let index = 0;
    const chars = text.split('');
    
    const interval = setInterval(() => {
      if (index < chars.length) {
        setMessages(prev => prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, text: chars.slice(0, index + 1).join('') }
            : msg
        ));
        index++;
      } else {
        clearInterval(interval);
        setStreamingMessageId(null);
        if (callback) callback();
      }
    }, 15);
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('about') || lowerMessage.includes('who') || lowerMessage.includes('mohammed') || lowerMessage.includes('nabeel')) {
      return "**Mohammed Nabeel M**\n\nPython Full Stack Developer | AI Enthusiast | BBA Graduate\n\n📍 Palakkad, Kerala | GitHub: nabeel165\n\n**Professional Summary:**\nMotivated Python Full Stack Developer with a BBA (University of Calicut) and hands-on experience building scalable web applications, REST APIs, and AI-integrated solutions. Completed an internship at Empire AE IT Service, Infopark Kochi, delivering real-world full-stack projects. Skilled in Django, MySQL, and modern front-end technologies with a passion for user-focused, innovative digital products.";
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      return "**Technical Skills:**\n\n**Languages:** Python, JavaScript, HTML5, CSS3, jQuery\n\n**Frameworks:** Django, Bootstrap, REST Framework\n\n**Database:** MySQL\n\n**Tools:** VS Code, GitHub, Postman, Pythonanywhere\n\n**Concepts:** REST APIs, AI Integration, UI/UX Design\n\n**Soft Skills:** Leadership, Critical Thinking, Communication";
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('internship') || lowerMessage.includes('job')) {
      return "**Experience:**\n\n**Python Full Stack Developer**\nEmpire AE IT Service | Infopark, Kochi, Kerala | 8 Months\n\n• Worked on real-time client projects from requirements to deployment\n• Built and deployed full-stack Django web applications with MySQL backends\n• Developed and integrated REST APIs consumed by web and mobile clients\n• Collaborated in an Agile team environment at a professional IT park setting";
    } else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('deployment')) {
      return "**Projects & Live Deployments:**\n\n**Real-Time Projects (Production):**\n\n• **Suchigo** — Kerala Waste Collection Platform\nFull-stack waste management portal for scheduling pickups & tracking. Django & MySQL.\n\n• **LumosKart** — Influencer E-Commerce Store\nInfluencer-driven shopping platform with cart & checkout. Dual deployment.\nhttps://lumoskart.pythonanywhere.com/ | https://www.lumoskart.com/\n\n• **Nakshathra Gold & Diamonds** — Jewellery ERP\nCustom Odoo 17 ERP: modules, PDF reports & dashboards. (Ongoing)\n\n**API Development:**\n• Suchigo App API — Backend REST API for mobile app\n• Dating App API — RESTful API with matching, profiles & messaging\n\n**Web Development Projects:**\n• E-Commerce Platform — Product browsing & checkout\n• Hospital Management System — Patient booking & scheduling\n• Restaurant Management System — Order management with admin dashboard";
    } else if (lowerMessage.includes('education') || lowerMessage.includes('certification') || lowerMessage.includes('degree') || lowerMessage.includes('study')) {
      return "**Education:**\n\n**Bachelor of Business Administration**\nUniversity of Calicut | 2022 – 2025\n• Foundational programming, system design & DB management\n• Multiple academic full-stack web projects completed\n\n**Certifications:**\n\n**Full Stack Web Development (Python)**\nG-TEC Computer Education\n• Front-End: HTML, CSS, JS, jQuery, Bootstrap\n• Back-End: Python, Django, MySQL";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
      return "**Contact Mohammed Nabeel:**\n\n📧 **Email**: muhammednabeel1832@gmail.com\n📞 **Phone**: +91 6282116340\n📍 **Location**: Palakkad, Kerala, India\n🔗 **GitHub**: nabeel165\n\nFeel free to reach out anytime!";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 I'm Mohammed Nabeel's AI assistant. I can help you learn about his skills, experience, projects, and more. What would you like to know?";
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('chatbot') || lowerMessage.includes('artificial')) {
      return "**AI & Frontend Projects:**\n\n• **AI Chatbot** — ChatGPT-inspired conversational interface\nhttps://ai-chatter-buddy-42.lovable.app/\n\n• **Cab Booking Website** — Responsive UI with dynamic elements\nhttps://nabeel165.github.io/ride/\n\n• **Cafe Landing Page** — Animated, responsive cafe website\nhttps://cerulean-gaufre-0a5d81.netlify.app/";
    } else if (lowerMessage.includes('highlight') || lowerMessage.includes('achievement') || lowerMessage.includes('accomplishment')) {
      return "**Key Highlights:**\n\n✓ Interned at Infopark Kochi (Empire AE IT Service)\n✓ Deployed 2 live production websites\n✓ Built 2 REST APIs for web & mobile\n✓ 6+ full-stack projects end-to-end\n✓ AI chatbot & dynamic UI experiences";
    } else if (lowerMessage.includes('available') || lowerMessage.includes('free')) {
      return "Mohammed is always open to discussing new projects and collaborations. Feel free to reach out with your requirements at muhammednabeel1832@gmail.com or +91 6282116340.";
    } else if (lowerMessage.includes('hire') || lowerMessage.includes('opportunity') || lowerMessage.includes('price') || lowerMessage.includes('rate') || lowerMessage.includes('cost')) {
      return "For project inquiries and opportunities, please contact Mohammed directly at muhammednabeel1832@gmail.com or +91 6282116340. He'll be happy to discuss details with you.";
    } else {
      return "Thanks for your message! I'm an AI assistant designed to help with inquiries about Mohammed Nabeel's skills, experience, and projects. You can ask about his technical skills, experience, projects, education, or contact information. For detailed discussions, please contact him directly at muhammednabeel1832@gmail.com or +91 6282116340.";
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isStreaming: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: '',
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true
      };
      
      setMessages(prev => [...prev, botResponse]);
      setStreamingMessageId(botResponse.id);
      setIsTyping(false);
      
      const fullResponse = getBotResponse(inputValue);
      streamText(fullResponse, botResponse.id);
    }, 800 + Math.random() * 600);
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply);
    setTimeout(() => {
      const event = new Event('submit', { cancelable: true });
      handleSendMessage(event);
    }, 100);
  };

  const formatMessage = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  };

  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
    setShowActions(null);
  };

  const regenerateResponse = (messageId) => {
    const message = messages.find(m => m.id === messageId);
    if (message && message.sender === 'bot') {
      const userMessage = messages.find(m => m.id === messageId - 1);
      if (userMessage) {
        setMessages(prev => prev.filter(m => m.id !== messageId));
        setIsTyping(true);
        
        setTimeout(() => {
          const botResponse = {
            id: messageId,
            text: '',
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isStreaming: true
          };
          
          setMessages(prev => [...prev, botResponse]);
          setStreamingMessageId(botResponse.id);
          setIsTyping(false);
          
          const fullResponse = getBotResponse(userMessage.text);
          streamText(fullResponse, botResponse.id);
        }, 800 + Math.random() * 600);
      }
    }
    setShowActions(null);
  };

  return (
    <>
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <svg className="chat-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
        <span className="chat-badge">3</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="chatbot-header">
              <div className="chatbot-avatar">
                <img src="/src/assets/profile.jpg" alt="Bot" className="avatar-image" />
                <span className="online-indicator"></span>
              </div>
              <div className="chatbot-info">
                <h3 className="chatbot-name">Muhammed's Assistant</h3>
                <p className="chatbot-status">Online • Ready to help</p>
              </div>
              <button 
                className="close-button"
                onClick={() => setIsOpen(false)}
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.sender}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-content">
                    <p 
                      className="message-text"
                      dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                    ></p>
                    <div className="message-footer">
                      <span className="message-time">{message.time}</span>
                      {message.sender === 'bot' && !message.isStreaming && (
                        <div className="message-actions">
                          <button 
                            className="action-btn"
                            onClick={() => copyMessage(message.text)}
                            title="Copy message"
                          >
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                          </button>
                          <button 
                            className="action-btn"
                            onClick={() => regenerateResponse(message.id)}
                            title="Regenerate response"
                          >
                            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                            </svg>
                          </button>
                        </div>
                      )}
                      {message.isStreaming && streamingMessageId === message.id && (
                        <span className="streaming-cursor">|</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  className="message bot"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              )}
              
              {messages.length === 1 && !isTyping && (
                <div className="quick-replies">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      className="quick-reply-btn"
                      onClick={() => handleQuickReply(reply.text)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="quick-reply-icon">{reply.icon}</span>
                      <span className="quick-reply-text">{reply.text}</span>
                    </motion.button>
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="message-input"
                disabled={isTyping || streamingMessageId !== null}
              />
              <button 
                type="submit" 
                className="send-button"
                disabled={!inputValue.trim() || isTyping || streamingMessageId !== null}
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
