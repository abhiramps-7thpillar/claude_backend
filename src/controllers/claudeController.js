import { invokeModel } from "../config/claudeConfig.js";
import { FoundationModels } from "../utils/foundation_models.js";

export const generateClaudeResponse = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    // console.log(`prompt: ${prompt}`);
    const modelId = FoundationModels.CLAUDE_3_HAIKU.modelId;

    const response = await invokeModel(prompt, modelId);

    res.status(200).json({ message: response });
    return next();
  } catch (error) {
    console.log(error);
    return next();
  }
};
