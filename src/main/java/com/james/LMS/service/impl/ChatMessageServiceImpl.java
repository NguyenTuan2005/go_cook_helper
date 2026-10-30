package com.james.LMS.service.impl;

import com.james.LMS.entity.ChatMessage;
import com.james.LMS.entity.ChatMessageType;
import com.james.LMS.entity.User;
import com.james.LMS.enums.ErrorCode;
import com.james.LMS.exception.EntityNotFoundException;
import com.james.LMS.repository.ChatConversationRepository;
import com.james.LMS.repository.ChatMessageRepository;
import com.james.LMS.service.ChatMessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ChatMessageServiceImpl implements ChatMessageService {
  private final ChatMessageRepository chatMessageRepository;
  private final ChatConversationRepository chatConversationRepository;

  @Override
  @Transactional
  public ChatMessage sendMessage(
      Long conversationId, Long senderId, String content, ChatMessageType messageType) {
    var conversation =
        chatConversationRepository
            .findById(conversationId)
            .orElseThrow(() -> new EntityNotFoundException(ErrorCode.CHAT_CONVERSATION_NOT_FOUND));
    var sender = User.builder().id(senderId).build();
    var message =
        ChatMessage.builder()
            .conversation(conversation)
            .sender(sender)
            .content(content)
            .messageType(messageType)
            .build();
    conversation.setLastMessageAt(System.currentTimeMillis());
    return chatMessageRepository.save(message);
  }

  @Override
  public List<ChatMessage> getConversationMessages(Long conversationId) {
    return chatMessageRepository.findByConversationIdAndIsActiveOrderByCreatedAtAsc(
        conversationId, true);
  }

  @Override
  @Transactional
  public ChatMessage markAsRead(Long messageId) {
    var message =
        chatMessageRepository
            .findById(messageId)
            .orElseThrow(() -> new EntityNotFoundException(ErrorCode.CHAT_MESSAGE_NOT_FOUND));
    message.setRead(true);
    message.setReadAt(System.currentTimeMillis());
    return chatMessageRepository.save(message);
  }
}
