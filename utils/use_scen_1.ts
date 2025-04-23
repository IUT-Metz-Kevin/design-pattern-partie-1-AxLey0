import { GameSettings } from "../src/scenario_A.ts";

const settings = GameSettings.getInstance();

console.log("Initial Settings:", settings.getSettings());

settings.updateSettings({
    difficulty: "hard",
    graphicsQuality: "high",
    screenSize: "2560x1440",
    musicVolume: 80,
});

console.log("Updated Settings:", settings.getSettings());

settings.save();

