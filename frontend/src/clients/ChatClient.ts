export interface SendMessageRequest {
  conversationId: string;
  content: string;
  messageType: 'TEXT' | 'IMAGE' | 'FILE' | 'SYSTEM';
  replyToMessageId?: string;
}

export interface ChatMessageResponse {
  id: string;
  conversationId: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  content: string;
  messageType: string;
  isRead: boolean;
  readAt?: number;
  createdAt: number;
  attachments?: any[];
}

export interface ChatConversationResponse {
  id: string;
  booking: {
    id: string;
    bookingCode: string;
    totalAmount: number;
  };
  customer: {
    id: string;
    name: string;
  };
  chef: {
    id: string;
    name: string;
  };
  status: 'ACTIVE' | 'CLOSED';
  lastMessageAt: number;
  unreadCount: number;
}

const now = Date.now();
const yesterday = now - 24 * 60 * 60 * 1000;
const twoHoursAgo = now - 2 * 60 * 60 * 1000;

const mockConversations: ChatConversationResponse[] = [
  {
    id: 'conv-1',
    booking: {
      id: 'booking-1',
      bookingCode: 'GC-88294',
      totalAmount: 430000,
    },
    customer: {
      id: 'user-customer-1',
      name: 'Nguyễn Văn A',
    },
    chef: {
      id: 'user-chef-1',
      name: 'Chef Minh',
    },
    status: 'ACTIVE',
    lastMessageAt: twoHoursAgo,
    unreadCount: 2,
  },
  {
    id: 'conv-2',
    booking: {
      id: 'booking-2',
      bookingCode: 'GC-88295',
      totalAmount: 350000,
    },
    customer: {
      id: 'user-customer-2',
      name: 'Trần Thị B',
    },
    chef: {
      id: 'user-chef-2',
      name: 'Chef Lan',
    },
    status: 'ACTIVE',
    lastMessageAt: yesterday,
    unreadCount: 0,
  },
];

const mockMessages: { [key: string]: ChatMessageResponse[] } = {
  'conv-1': [
    {
      id: 'msg-1',
      conversationId: 'conv-1',
      sender: { id: 'user-chef-1', name: 'Chef Minh' },
      content: 'Chào bạn, tôi đã nhận được đơn hàng của bạn',
      messageType: 'TEXT',
      isRead: true,
      createdAt: yesterday,
    },
    {
      id: 'msg-2',
      conversationId: 'conv-1',
      sender: { id: 'user-customer-1', name: 'Nguyễn Văn A' },
      content: 'Cảm ơn chef! Giá 430k có thương lượng được không ạ?',
      messageType: 'TEXT',
      isRead: true,
      createdAt: yesterday + 10000,
    },
    {
      id: 'msg-3',
      conversationId: 'conv-1',
      sender: { id: 'system', name: 'System' },
      content: 'Customer proposed new price: 380.000đ',
      messageType: 'SYSTEM',
      isRead: true,
      createdAt: yesterday + 20000,
    },
    {
      id: 'msg-4',
      conversationId: 'conv-1',
      sender: { id: 'system', name: 'System' },
      content: 'Chef rejected price offer',
      messageType: 'SYSTEM',
      isRead: true,
      createdAt: yesterday + 30000,
    },
    {
      id: 'msg-5',
      conversationId: 'conv-1',
      sender: { id: 'user-chef-1', name: 'Chef Minh' },
      content: 'Xin lỗi bạn, giá này chưa bao gồm chi phí nguyên liệu cao cấp',
      messageType: 'TEXT',
      isRead: true,
      createdAt: yesterday + 40000,
    },
    {
      id: 'msg-6',
      conversationId: 'conv-1',
      sender: { id: 'user-customer-1', name: 'Nguyễn Văn A' },
      content: 'Vậy 400k được không ạ?',
      messageType: 'TEXT',
      isRead: false,
      createdAt: twoHoursAgo,
    },
    {
      id: 'msg-7',
      conversationId: 'conv-1',
      sender: { id: 'system', name: 'System' },
      content: 'Customer proposed new price: 400.000đ',
      messageType: 'SYSTEM',
      isRead: false,
      createdAt: twoHoursAgo + 1000,
    },
  ],
  'conv-2': [
    {
      id: 'msg-8',
      conversationId: 'conv-2',
      sender: { id: 'user-chef-2', name: 'Chef Lan' },
      content: 'Xin chào! Tôi sẽ chuẩn bị món ăn tốt nhất cho bạn',
      messageType: 'TEXT',
      isRead: true,
      createdAt: yesterday,
    },
  ],
};

let messageCounter = 8;

export const sendMessage = async (
  request: SendMessageRequest
): Promise<ChatMessageResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMessage: ChatMessageResponse = {
        id: `msg-${++messageCounter}`,
        conversationId: request.conversationId,
        sender: { id: 'user-customer-1', name: 'Nguyễn Văn A' },
        content: request.content,
        messageType: request.messageType,
        isRead: false,
        createdAt: Date.now(),
      };

      if (!mockMessages[request.conversationId]) {
        mockMessages[request.conversationId] = [];
      }
      mockMessages[request.conversationId].push(newMessage);

      const conv = mockConversations.find((c) => c.id === request.conversationId);
      if (conv) {
        conv.lastMessageAt = newMessage.createdAt;
      }

      resolve(newMessage);
    }, 300);
  });
};

export const getConversations = async (): Promise<ChatConversationResponse[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockConversations]);
    }, 200);
  });
};

export const getConversationMessages = async (
  conversationId: string
): Promise<ChatMessageResponse[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...(mockMessages[conversationId] || [])]);
    }, 300);
  });
};

export const markMessageRead = async (messageId: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      Object.values(mockMessages).forEach((messages) => {
        const msg = messages.find((m) => m.id === messageId);
        if (msg) {
          msg.isRead = true;
          msg.readAt = Date.now();
        }
      });
      resolve();
    }, 100);
  });
};
