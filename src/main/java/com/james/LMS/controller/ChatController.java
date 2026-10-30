package com.james.LMS.controller;

import com.james.LMS.config.SecurityConfig;
import com.james.LMS.config.SecurityUserDetails;
import com.james.LMS.request.SendMessageRequest;
import com.james.LMS.response.BaseResponse;
import com.james.LMS.response.ChatMessageResponse;
import com.james.LMS.response.MessageListResponse;
import com.james.LMS.service.ChatMessageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/chat")
@RequiredArgsConstructor
public class ChatController {
  private final ChatMessageService chatMessageService;

  @PostMapping("/messages")
  @ResponseStatus(HttpStatus.CREATED)
  @Operation(
      summary = "Send a message in a conversation",
      tags = {"Chat APIs"})
  @SecurityRequirement(name = SecurityConfig.SECURITY_REQUIREMENT)
  public BaseResponse<ChatMessageResponse> sendMessage(
      @Valid @RequestBody SendMessageRequest request) {
    Long senderId = SecurityUserDetails.getPrincipal().getId();
    var message =
        chatMessageService.sendMessage(
            request.getConversationId(), senderId, request.getContent(), request.getMessageType());
    return BaseResponse.build(ChatMessageResponse.from(message), true);
  }

  @GetMapping("/conversations/{id}/messages")
  @Operation(
      summary = "Get messages for a conversation",
      tags = {"Chat APIs"})
  @SecurityRequirement(name = SecurityConfig.SECURITY_REQUIREMENT)
  public BaseResponse<MessageListResponse> getConversationMessages(@PathVariable Long id) {
    var messages = chatMessageService.getConversationMessages(id);
    return BaseResponse.build(MessageListResponse.from(messages), true);
  }

  @PutMapping("/messages/{id}/read")
  @Operation(
      summary = "Mark a message as read",
      tags = {"Chat APIs"})
  @SecurityRequirement(name = SecurityConfig.SECURITY_REQUIREMENT)
  public BaseResponse<ChatMessageResponse> markAsRead(@PathVariable Long id) {
    var message = chatMessageService.markAsRead(id);
    return BaseResponse.build(ChatMessageResponse.from(message), true);
  }
}
