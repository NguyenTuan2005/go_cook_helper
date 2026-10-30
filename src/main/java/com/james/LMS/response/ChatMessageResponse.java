package com.james.LMS.response;

import com.james.LMS.entity.ChatMessage;

public record ChatMessageResponse(
    Long id,
    Long conversationId,
    SenderInfo sender,
    String content,
    String messageType,
    boolean isRead,
    Long readAt,
    Long createdAt) {

  public static ChatMessageResponse from(ChatMessage message) {
    return new ChatMessageResponse(
        message.getId(),
        message.getConversation().getId(),
        new SenderInfo(
            message.getSender().getId(),
            message.getSender().getUsername(),
            message.getSender().getEmail()),
        message.getContent(),
        message.getMessageType().name(),
        message.isRead(),
        message.getReadAt(),
        message.getCreatedAt());
  }

  public record SenderInfo(Long id, String username, String email) {}
}
