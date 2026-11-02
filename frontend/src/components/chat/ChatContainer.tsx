import { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import {
  getConversationMessages,
  sendMessage,
  ChatMessageResponse,
} from '../../clients/ChatClient';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';

interface ChatContainerProps {
  conversationId: string;
  currentUserId: string;
}

export const ChatContainer = ({
  conversationId,
  currentUserId,
}: ChatContainerProps) => {
  const [messages, setMessages] = useState<ChatMessageResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const loadMessages = async () => {
      setLoading(true);
      const data = await getConversationMessages(conversationId);
      setMessages(data);
      setLoading(false);
    };

    loadMessages();
  }, [conversationId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (content: string) => {
    const newMessage = await sendMessage({
      conversationId,
      content,
      messageType: 'TEXT',
    });
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <Container fluid className="d-flex flex-column" style={{ height: '70vh' }}>
      <div className="flex-grow-1 overflow-auto mb-3 p-3 border rounded">
        {loading ? (
          <div className="text-center text-muted">Đang tải...</div>
        ) : (
          <>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                currentUserId={currentUserId}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      <MessageInput onSend={handleSend} disabled={loading} />
    </Container>
  );
};
