package com.james.LMS.request;

import com.james.LMS.entity.ChatMessageType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SendMessageRequest {
  @NotNull private Long conversationId;

  @NotBlank
  @Size(max = 10000)
  private String content;

  private ChatMessageType messageType = ChatMessageType.TEXT;

  private Long replyToMessageId;
}
