package com.james.LMS.response;

import com.james.LMS.entity.ChatMessage;
import java.util.List;

public record MessageListResponse(List<ChatMessageResponse> messages) {

  public static MessageListResponse from(List<ChatMessage> messages) {
    return new MessageListResponse(
        messages.stream().map(ChatMessageResponse::from).toList());
  }
}
