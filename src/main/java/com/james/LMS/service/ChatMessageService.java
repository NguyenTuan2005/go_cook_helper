package com.james.LMS.service;

import com.james.LMS.entity.ChatMessage;
import com.james.LMS.entity.ChatMessageType;
import java.util.List;

public interface ChatMessageService {
  ChatMessage sendMessage(
      Long conversationId, Long senderId, String content, ChatMessageType messageType);

  List<ChatMessage> getConversationMessages(Long conversationId);

  ChatMessage markAsRead(Long messageId);
}
