// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/**
 * @typedef {(prompt: string, modelId: string) => Promise<string>} Invoker
 *
 * @typedef {{ invokeModel: Invoker }} Module
 */

export const FoundationModels = Object.freeze({
  CLAUDE_3_HAIKU: {
    modelId: "anthropic.claude-3-haiku-20240307-v1:0",
    modelName: "Anthropic Claude 3 Haiku",
    module: () => import("../models/anthropic_claude/claude_3.js"),
    invoker: (/** @type {Module} */ module) => module.invokeModel,
  },
  CLAUDE_3_SONNET: {
    modelId: "anthropic.claude-3-sonnet-20240229-v1:0",
    modelName: "Anthropic Claude 3 Sonnet",
    module: () => import("../models/anthropic_claude/claude_3.js"),
    invoker: (/** @type {Module} */ module) => module.invokeModel,
  },
  CLAUDE_2_1: {
    modelId: "anthropic.claude-v2:1",
    modelName: "Anthropic Claude 2.1",
    module: () => import("../models/anthropic_claude/claude_2.js"),
    invoker: (/** @type {Module} */ module) => module.invokeModel,
  },
  CLAUDE_2: {
    modelId: "anthropic.claude-v2",
    modelName: "Anthropic Claude 2.0",
    module: () => import("../models/anthropic_claude/claude_2.js"),
    invoker: (/** @type {Module} */ module) => module.invokeModel,
  },
  CLAUDE_INSTANT: {
    modelId: "anthropic.claude-instant-v1",
    modelName: "Anthropic Claude Instant",
    module: () => import("../models/anthropic_claude/claude_instant_1.js"),
    invoker: (/** @type {Module} */ module) => module.invokeModel,
  },
});
