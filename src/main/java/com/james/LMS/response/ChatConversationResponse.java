package com.james.LMS.response;

import com.james.LMS.entity.ChatConversation;

public record ChatConversationResponse(
    Long id,
    UserInfo customer,
    UserInfo chef,
    Long bookingId,
    String status,
    Long lastMessageAt) {

  public static ChatConversationResponse from(ChatConversation conversation) {
    Long bookingId = conversation.getBooking() != null ? conversation.getBooking().getId() : null;
    return new ChatConversationResponse(
        conversation.getId(),
        new UserInfo(conversation.getCustomer().getId(), conversation.getCustomer().getUsername()),
        new UserInfo(conversation.getChef().getId(), conversation.getChef().getUsername()),
        bookingId,
        conversation.getStatus().name(),
        conversation.getLastMessageAt());
  }

  public record UserInfo(Long id, String username) {}
}
